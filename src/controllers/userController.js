import { registerUser, verifyOtp } from "../services/userService.js";
import { findByEmail } from "../DAO/userDAO.js";
import { validateSignUp, validateUserToken } from "../utilities/validations/userValidation.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";
import { findOtp } from "../DAO/otpDAO.js";

const newUser = async (req, res) => {
	try {
		const valid = validateSignUp(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { name, email, password } = req.body;
		const user = await findByEmail(req.body.email);
		if (user) {
			return errorMessage(res, 400, "User already exist");
		}
		const result = await registerUser(name, email, password);
		return successMessage(res, 201, "User Created Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const tokenVerification = async (req, res) => {
	try {
		const valid = validateUserToken(req.body);
		if(valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { token } = req.body;
		const otp = await findOtp(token);
		if (otp.dataValues.expired) {
			return errorMessage(res, 403, "Token already verified");
		}
		const user = await verifyOtp(token);
		return successMessage(res, 200, "User Account Successfully verified", { user });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	newUser, tokenVerification
};