import models from "../models/index.js";

const createUser = async (userDetails) => {

	const user = await models.Users.create(userDetails);
	return user;
};

const findByEmail = async (email) => {

	const user = await models.Users.findOne({ where: { email }});
	return user;

};

export {
	createUser, findByEmail
};