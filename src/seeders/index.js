import { createUser } from "../DAO/userDAO.js";
import data from "./admin.js";

(() => {
	for ( let i = 0; i <= (data.length - 1); i++) {
		createUser(data[i]);
	}
})();