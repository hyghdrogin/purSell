import Joi from "joi";

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}
};

export const validatePost = (post) => {
	const createPost = Joi.object({
		title: Joi.string().min(5).max(50).required(),
		description: Joi.string().required(),
	});
	return createPost.validate(post, options);
};
