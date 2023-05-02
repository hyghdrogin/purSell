import { findById } from "../DAO/userDAO.js";
import { validateToken } from "../utilities/encryption/jwt.js"; 
import {errorMessage, errorHandler} from "../utilities/responses.js";

const verifyUser = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (req.headers && authHeader) {
			const headerSplit = authHeader.split(" ");
			if (headerSplit.length === 2) {
				const token = headerSplit[1];
				if (/^Bearer$/i.test(headerSplit[0])) {
					const decodedToken = await validateToken(token);
					const user = await findById(decodedToken.id);
					if (!user) {
						return errorMessage(res, 404, "User not found");
					}
					req.user = user;
					next();
				}
			} else {
				return errorMessage(res, 401, "Invalid Authorization formats");
			}
		} else {
			return errorMessage(res, 404, "Authorization not found");
		}
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};

export {
	verifyUser
};