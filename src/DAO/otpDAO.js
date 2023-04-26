import Otp from "../models/otpModel.js";

const createOtp = async (email, otp) => {
	await Otp.create({
		owner: email, token: otp
	});
	return otp;
};

export {
	createOtp
};