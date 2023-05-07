import { newPost, getPostById, getPostByOwner } from "../services/postService.js";
import { validatePost } from "../utilities/validations/postValidation.js";
import { errorMessage, errorHandler, successMessage } from "../utilities/responses.js";

export const createPost = async(req, res) => {
	try {
		const { id } = req.user;
		const valid = validatePost(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { title, description, units } = req.body;
		const photo = req.file.path;
		const postDetails = {
			id, title, description, photo, units
		};
		const result = await newPost(postDetails);
		return successMessage(res, 201, "Post Created Successfully", { result }); 
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export const retrievePostById = async (req, res) => {
	try {
		const { postId } = req.params;
		const result = await getPostById(postId);
		if (result == undefined ) {
			return errorMessage(res, 403, "Invalid Post Id");
		}
		return successMessage(res, 200, "Post Fetched Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export const retrievePostByOwner = async (req, res) => {
	try {
		const { ownerEmail } = req.params;
		const result = await getPostByOwner(ownerEmail);
		if (result == undefined ) {
			return errorMessage(res, 403, "Invalid Owner Email");
		}
		return successMessage(res, 200, "Post Fetched Successfully", { result });
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};