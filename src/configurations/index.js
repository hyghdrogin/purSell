import dotenv from "dotenv";

dotenv.config();

const config = {
	PORT: process.env.PORT,
	API_NAME: process.env.API_NAME,
	URI: process.env.SQL_URL,
	JWT: process.env.JWT_KEY
};

const incompleteConfig = Object.entries(config)
	.map(([key, value]) => [key, !!value])
	.filter(([, value]) => !value)
	.map(([key]) => [key]);

if (incompleteConfig.length >= 1) {
	throw new Error(`Missing Configuration Key or Value for: ${incompleteConfig.join(",")}`);
}

export default config;