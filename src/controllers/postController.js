import { newPost } from "../services/postService.js";
import { validatePost } from "../utilities/validations/postValidation.js";
import { errorMessage, errorHandler, successMessage } from "../utilities/responses.js";

export const createPost = async(req, res) => {
	try {
		const { id } = req.user;
		const valid = validatePost(req.body);
		if (valid.error) {
			return errorMessage(res, 400, valid.error.message);
		}
		const { title, description } = req.body;
		const photo = req.file.path;
		const postDetails = {
			id, title, description, photo
		};
		const result = await newPost(postDetails);
		return successMessage(res, 201, "Post Created Successfully", { result }); 
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};