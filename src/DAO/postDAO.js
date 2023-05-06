import Post from "../models/postModel.js";

export const createPost = async (postDetails) => {
	const post = await Post.create(postDetails);
	return post;
};

export const findPostById = async (id) => {
	const post = await Post.findOne({ where: { id }});
	return post;
};

export const findPostsByOwner = async (email) => {
	const post = await Post.findAll({ where: { owner: email }});
	return post;
};