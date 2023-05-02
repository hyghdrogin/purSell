import pkg from "jsonwebtoken";
import config from "../../configurations/index.js";

const { JsonWebTokenError, sign, verify } = pkg;
const key = config.JWT;

const generateToken = async (payload) => {
	const token = sign(payload, key, { expiresIn: "24h"});
	return token;
};

const validateToken = async (token) => {
	try {
		const data = verify(token, key);
		if (!data) {
			return; 
		}
		return data;
	} catch (error) {
		console.log(JsonWebTokenError, error);
	} 
	
};

export {
	generateToken, validateToken
};