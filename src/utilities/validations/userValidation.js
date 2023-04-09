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

const validateSignUp = (signup) => {
	const userSignUp = Joi.object({
		name: Joi.string().min(5).max(100).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(36).disallow("+").required()
	});
	return userSignUp.validate(signup, options);
};

export {
	validateSignUp
};