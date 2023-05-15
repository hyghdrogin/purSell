import config from "../configurations/index.js";
import { hashObject } from "../utilities/encryption/bcrypt.js";


const hashedPassword = await hashObject(config.ADMIN);

const data = [
	{
		firstName: "Purchase",
		lastName: "Sell",
		userName: "Admin",
		phoneNumber: "+2349072668695",
		email: "admin@pursell.com",
		role: "Admin",
		verified: true,
		password: hashedPassword
	},
	{
		firstName: "Purchase",
		lastName: "Admin",
		userName: "Purchase",
		phoneNumber: "+2348033713165",
		email: "purchase@pursell.com",
		role: "Admin",
		verified: true,
		password: hashedPassword
	},
	{
		firstName: "Sales",
		lastName: "Admin",
		userName: "Sales",
		phoneNumber: "+234901pursell",
		email: "seller@pursell.com",
		role: "Admin",
		verified: true,
		password: hashedPassword
	}
];

export default data;