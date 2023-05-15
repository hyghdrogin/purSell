import { findById } from "../DAO/userDAO.js";

export const deactivateUser = async (id) => {
	const user = await findById(id);
	user.active = false;
	user.save();
};