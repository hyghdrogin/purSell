import { registerUser } from "../services/userService.js";
import { findByEmail } from "../DAO/userDAO.js";
import { validateSignUp } from "../utilities/validations/userValidation.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";

const newUser = async (req, res) => {
	try {
		const valid = validateSignUp(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const user = await findByEmail(req.body.email);
		if (user) {
			return errorMessage(res, 400, "User already exist");
		}
		const result = await registerUser(req.body.name, req.body.email, req.body.password);
		return successMessage(res, 201, "User Created Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	newUser
};