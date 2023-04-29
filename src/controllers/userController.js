import { registerUser, verifyOtp, resendToken, loginUser } from "../services/userService.js";
import { findByEmail } from "../DAO/userDAO.js";
import { compareObject } from "../utilities/encryption/bcrypt.js";
import { validateSignIn, validateSignUp } from "../utilities/validations/userValidation.js";
import { validateUserToken, validateUserEmail } from "../utilities/validations/tokenValidation.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";
import { findOtp } from "../DAO/otpDAO.js";

const newUser = async (req, res) => {
	try {
		const valid = validateSignUp(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { name, email, password } = req.body;
		const user = await findByEmail(email);
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
		if (!otp) {
			return errorMessage(res, 403, "Invalid Token");
		}
		if (otp.dataValues.expired) {
			return errorMessage(res, 403, "Token already verified");
		}
		await verifyOtp(token);
		return successMessage(res, 200, "User Account Successfully verified");
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const tokenResend = async (req, res) => {
	try {
		const valid = validateUserEmail(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { email } = req.body;
		await resendToken(email);
		return successMessage(res, 200, "Token Sent");
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

const userLogin = async (req, res) => {
	try {
		const valid = validateSignIn(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { email, password } = req.body;
		const user = await findByEmail(email);
		if (!user) {
			return errorMessage(res, 400, "Invalid Email");
		}
		if (!user.dataValues.verified) {
			return errorMessage(res, 409, "Kindly verify your account");
		}
		if (!user.dataValues.active) {
			return errorMessage(res, 409, "Contact the admin");
		}
		const passCompare = await compareObject(password, user.dataValues.password);
		if (!passCompare) {
			return errorMessage(res, 400, "Invalid Password");
		}
		const result = await loginUser(email);
		return successMessage(res, 200, "User Logged In", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	newUser, tokenVerification, tokenResend, userLogin
};