import { createUser, findByEmail } from "../DAO/userDAO.js";
import { createOtp, findOtp, findOtpByOwner } from "../DAO/otpDAO.js";
import { generateToken } from "../utilities/encryption/jwt.js";
import generateOTP from "../utilities/otp/generator.js";
import sendEmail from "../utilities/mail.js";
import otpTemplate from "../utilities/otp/template.js";
import { hashObject } from "../utilities/encryption/bcrypt.js";

const registerUser = async (name, email, password) => {
	const nameSplit = name.split(" ");
	const firstName = nameSplit[0];
	const lastName = nameSplit[1];
	const hashedPassword = await hashObject(password);
	const userDetails = {
		firstName, lastName, email, password: hashedPassword
	};
	const createdOtp = generateOTP();
	const otp = await createOtp(email, createdOtp);
	const subject = "User created";
	const html = otpTemplate(otp, firstName);
	await sendEmail(email, subject, html);
	const created = await createUser(userDetails);
	return created;
};

const verifyOtp = async (otp) => {
	const verifyToken = await findOtp(otp);
	verifyToken.expired = true;
	await verifyToken.save();
	const userEmail = verifyToken.dataValues.owner;
	const user = await findByEmail(userEmail);
	user.verified = true;
	await user.save();
	return user;
};

const resendToken = async (email) => {
	const checkEmail = await findOtpByOwner(email);
	const newOtp = generateOTP();
	checkEmail.token = newOtp;
	checkEmail.expired = false;
	const user = await findByEmail(email);
	user.verified = false;
	await user.save();
	const firstName = user.dataValues.firstName;
	const subject = "PurSell OTP Resend";
	const html = otpTemplate(newOtp, firstName);
	await sendEmail(email, subject, html);
	await checkEmail.save();
	return user;
};

const loginUser = async (email) => {
	const user = await findByEmail(email);
	const { id } = user;
	const token = await generateToken({ id, email});
	return { user, token };
};

export {
	registerUser, verifyOtp, resendToken, loginUser
};