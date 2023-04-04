import { Sequelize } from "sequelize";
import config from "../configurations/index.js";

const connect = async () => {
	try {
		const sequelize = new Sequelize(config.URI, {
			dialect: "mysql",
			logging: false
		});
		await sequelize.authenticate();
		console.log("Connected to database successfully");
	} catch (error) {
		console.log("Unable to connect to database", error);
		process.emit("SIGTERM");
		process.exit(1);
	}
};

export { connect };