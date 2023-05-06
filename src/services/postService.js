import { createPost } from "../DAO/postDAO.js";
import { findById } from "../DAO/userDAO.js";

export const newPost = async (details) => {
	const { id, title, description, photo } = details;
	const user = await findById(id);
	const owner = user.dataValues.email;
	const postDetails = {
		title, description, photo, owner
	};
	const created = await createPost(postDetails);
	return created;
};