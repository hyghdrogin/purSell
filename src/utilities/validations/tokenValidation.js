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

const validateUserToken = (token) => {
	const userToken = Joi.object({
		token: Joi.number().integer().max(9999).required()
	});
	return userToken.validate(token, options);
};

const validateUserEmail = (email) => {
	const userToken = Joi.object({
		email: Joi.string().email().required()
	}).strict();
	return userToken.validate(email, options);
};

export {
	validateUserToken, validateUserEmail
};