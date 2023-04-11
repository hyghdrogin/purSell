const generateOTP = () => {
	const otp = Math.floor(Math.random() * 9000) + 1000;
	return otp;
};

export default generateOTP;