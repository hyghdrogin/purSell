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

const findOtpByOwner = async (email) => {
	const owner = await Otp.findOne({ where: { owner: email } });
	return owner;
};

export {
	createOtp, findOtp, findOtpByOwner
};