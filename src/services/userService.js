import { createUser, createOtp } from "../DAO/userDAO.js";
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
		firstName, lastName, email, password: JSON.stringify(hashedPassword)
	};
	const createdOtp = generateOTP();
	const otp = await createOtp(email, createdOtp);
	const subject = "User created";
	const html = otpTemplate(otp, firstName);
	await sendEmail(email, subject, html);
	const created = await createUser(userDetails);
	return created;
};

export {
	registerUser
};