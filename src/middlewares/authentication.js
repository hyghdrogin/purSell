import User from "../models/userModel.js";
import { validateToken } from "../utilities/encryption/jwt.js"; 
import {errorMessage, errorHandler} from "../utilities/responses.js";

export const verifyUser = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (req.headers && authHeader) {
			const headerSplit = authHeader.split(" ");
			if (headerSplit.length === 2) {
				const token = headerSplit[1];
				if (/^Bearer$/i.test(headerSplit[0])) {
					const decodedToken = await validateToken(token);
					const user = await User.findOne({ where: { id: decodedToken.id } });
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

export const verifyAdmin = async (req, res, next) => {
	try {
		const { id } = req.user;
		const admin = await User.findOne({ where: {
			id, role: "Admin"
		}});
		if (!admin) {
			return errorMessage(res, 401, "Unauthorized Access");
		}
		return next();
	} catch (error) {
		errorHandler(error, req);
		return errorMessage(res, 500, error.message);
	}
};