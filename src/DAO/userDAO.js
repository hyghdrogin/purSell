import models from "../models/index.js";


const createOtp = async (email, otp) => {
	await models.Otp.create({
		owner: email, token: otp
	});
	return otp;
};

const createUser = async (userDetails) => {

	const user = await models.User.create(userDetails);
	return user;
};

const findByEmail = async (email) => {

	const user = await models.User.findOne({ where: { email }});
	return user;

};

export {
	createUser, findByEmail, createOtp
};