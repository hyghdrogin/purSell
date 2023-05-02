import User from "../models/userModel.js";

const createUser = async (userDetails) => {
	const user = await User.create(userDetails);
	return user;
};

const findByEmail = async (email) => {
	const user = await User.findOne({ where: { email }});
	return user;
};

const findById = async (id) => {
	const user = await User.findOne({ where: { id }});
	return user;
};

export {
	createUser, findByEmail, findById
};