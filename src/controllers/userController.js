import { registerUser } from "../services/userService.js";
import { findByEmail } from "../DAO/userDAO.js";
import { successMessage, errorMessage, errorHandler } from "../utilities/responses.js";

const newUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const user = await findByEmail(email);
		if (user) {
			return errorMessage(res, 400, "User already exist");
		}
		const result = await registerUser(name, email, password);
        
		return successMessage(res, 201, "User Created Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, "Internal Server Error");
	}
};

export {
	newUser
};