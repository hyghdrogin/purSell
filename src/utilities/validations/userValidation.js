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
		email: Joi.string().email().custom((value, helpers) => {
			if (value.includes("+")) {
				return helpers.error("any.invalid");
			}
			return value;
		}).required(),
		password: Joi.string().min(6).max(36).required()
	});
	return userSignUp.validate(signup, options);
};

const validateSignIn = (signIn) => {
	const userSignIn = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(36).required()
	});
	return userSignIn.validate(signIn, options);
};

const validatePasswordReset = (password) => {
	const userPassword = Joi.object({
		token: Joi.number().integer().max(9999).required(),
		password: Joi.string().min(6).max(36).required()
	}).strict();
	return userPassword.validate(password, options);
};

export {
	validateSignUp, validateSignIn, validatePasswordReset
};