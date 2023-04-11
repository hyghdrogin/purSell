import models from "../models/index.js";
import generateOTP from "../middlewares/otpGenerator.js";

const createUser = async (userDetails) => {

	const user = await models.User.create(userDetails);
	const otp = generateOTP();
	console.log(user.email);
	await models.Otp.create({
		owner: user.email, token: otp
	});
	return user;
};

const findByEmail = async (email) => {

	const user = await models.User.findOne({ where: { email }});
	return user;

};

export {
	createUser, findByEmail
};