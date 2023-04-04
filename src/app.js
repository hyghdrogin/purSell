import app from "./server.js";
import config from "./configurations/index.js";
import { connect } from "./database/index.js";

const port = config.PORT || 4000;

(async () => {
	console.log("Awaiting Database Configuration");
	await connect();
	app.listen(port, () => {
		console.log(`${config.API_NAME} is currently running on Port: ${port}`);
	});
})();