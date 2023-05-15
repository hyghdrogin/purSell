import { findAllUsers, findById } from "../DAO/userDAO.js";
import { deactivateUser } from "../services/adminService.js";
import { successMessage, errorHandler, errorMessage } from "../utilities/responses.js";

export const getAllUser = async(req, res) => {
	try {
		const result = await findAllUsers();
		return successMessage(res, 200, "Users Fetched Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export const adminDeactivateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = findById(id);
		if (user.role == "Admin") {
			return errorMessage(res, 401, "You can not deactivate a fellow admin");
		}
		await deactivateUser(id);
		return successMessage(res, 200, "User Deactivated Successfully");
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};