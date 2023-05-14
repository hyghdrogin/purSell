import config from "../configurations/index.js";
import { hashObject } from "../utilities/encryption/bcrypt.js";


const hashedPassword = await hashObject(config.ADMIN);

const data = [
	{
		firstName: "Purchase",
		lastName: "Sell",
		email: "admin@pursell.com",
		role: "Admin",
		password: hashedPassword
	},
	{
		firstName: "Purchase",
		lastName: "Admin",
		email: "purchase@pursell.com",
		role: "Admin",
		password: hashedPassword
	},
	{
		firstName: "Sales",
		lastName: "Admin",
		email: "seller@pursell.com",
		role: "Admin",
		password: hashedPassword
	}
];

export default data;