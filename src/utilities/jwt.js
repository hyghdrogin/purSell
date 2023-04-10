import { JsonWebTokenError, sign, verify } from "jsonwebtoken";
import config from "../configurations/index.js";

const key = config.JWT;

const generateToken = async (payload, key) => {
	const token = sign(payload, key, { expiresIn: "24h"});
	return token;
};

const validateToken = async (token) => {
	try {
		const data = verify(token, key);
		if (!data) {
			return; 
		}
	} catch (error) {
		console.error(JsonWebTokenError, error);
	}
};

export {
	generateToken, validateToken
};