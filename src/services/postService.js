import { findById } from "../DAO/userDAO.js";
import { createPost, findPostById } from "../DAO/postDAO.js";

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

export const getPostById = async (postId) => {
	const post = await findPostById(postId);
	return post;
};