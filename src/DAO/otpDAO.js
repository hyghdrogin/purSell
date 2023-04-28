import Otp from "../models/otpModel.js";

const createOtp = async (email, otp) => {
	await Otp.create({
		owner: email, token: otp
	});
	return otp;
};

const findOtp = async (otp) => {
	const token = await Otp.findOne({ where: { token: otp} });
	return token;
};

export {
	createOtp, findOtp
};