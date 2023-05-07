import { findById } from "../DAO/userDAO.js";
import { createPost, findPostById, findPostsByOwner } from "../DAO/postDAO.js";

export const newPost = async (details) => {
	const { id, title, description, photo, units } = details;
	console.log(photo);
	const user = await findById(id);
	const owner = user.dataValues.email;
	const postDetails = {
		title, description, photo, owner, units
	};
	const created = await createPost(postDetails);
	return created;
};

export const getPostById = async (postId) => {
	const post = await findPostById(postId);
	return post;
};

export const getPostByOwner = async (owner) => {
	const post = await findPostsByOwner(owner);
	return post;
};