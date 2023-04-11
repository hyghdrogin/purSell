import { createUser } from "../DAO/userDAO.js";
import { hashObject } from "../utilities/encryption/bcrypt.js";

const registerUser = async (name, email, password) => {
	const nameSplit = name.split(" ");
	const firstName = nameSplit[0];
	const lastName = nameSplit[1];
	const hashedPassword = await hashObject(password);
	const userDetails = {
		firstName, lastName, email, password: JSON.stringify(hashedPassword)
	};
	const created = await createUser(userDetails);
	return created;
};

export {
	registerUser
};