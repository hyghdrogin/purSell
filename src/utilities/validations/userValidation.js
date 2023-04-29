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
		email: Joi.string().email().disallow("+").required(),
		password: Joi.string().min(6).max(36).required()
	});
	return userSignUp.validate(signup, options);
};

const validateSignIn = (signIn) => {
	const userSignIn = Joi.object({
		email: Joi.string().email().disallow("+").required(),
		password: Joi.string().min(6).max(36).required()
	});
	return userSignIn.validate(signIn, options);
};

export {
	validateSignUp, validateSignIn
};