import { createUser } from "../DAO/userDAO.js";
import { hash } from "bcrypt";

const registerUser = async (name, email, password) => {
	const nameSplit = name.split(" ");
	const firstName = nameSplit[0];
	const lastName = nameSplit[1];
	const hashedPassword = await hash(password, 10);
	const userDetails = {
		firstName, lastName, email, password: hashedPassword
	};
	const created = await createUser(userDetails);
	return created;
};

export {
	registerUser
};