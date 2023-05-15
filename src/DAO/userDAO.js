import User from "../models/userModel.js";

export const createUser = async (userDetails) => {
	const user = await User.create(userDetails);
	return user;
};

export const findByEmail = async (email) => {
	const user = await User.findOne({ where: { email }});
	return user;
};

export const findById = async (id) => {
	const user = await User.findOne({ where: { id }});
	return user;
};

export const findAllUsers = async() => {
	const users = await User.findAll({ where: { role: "User" }});
	return users;
};