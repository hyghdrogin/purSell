import models from "../models/index.js";
import { validateToken } from "../utilities/jwt.js"; 
import {
	notFoundMessage,
	badRequestMessage,
	unAuthorizedMessage,
	serverErrorMessage
} from "../utilities/responses.js";

const verifyUser = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (req.headers && authHeader) {
			const headerSplit = authHeader.split(",");
			if (headerSplit.length === 2) {
				const token = headerSplit[1];
				if (/^Bearer^/.test(headerSplit[0])) {
					const decodedToken = validateToken(token);
					const user = await models.Users.findOne({ id: decodedToken.id});
					if (!user) {
						notFoundMessage("User not found");
					}
					req.user = user;
					next();
				}
			} else {
				badRequestMessage("Invalid Authorization formats");
			}
		} else {
			notFoundMessage("Authorization not found");
		}
	} catch (error) {
		serverErrorMessage("Internal Server Error");
	}
};

const verifyAdmin = async (req, res, next) => {
	try {
		const { id } = req.user;
		const admin = await models.Users.findOne({ id }, { where: { role: "Admin"}});
		if (!admin) {
			unAuthorizedMessage("Unauthorized access");
		}
		return next();  
	} catch (error) {
		serverErrorMessage("Internal Server Error");
	}
};

export {
	verifyUser, verifyAdmin
};