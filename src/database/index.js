import { Sequelize } from "sequelize";
import config from "../configurations/index.js";


const sequelize = new Sequelize(config.URI, {
	dialect: "mysql",
	logging: false
});

export default sequelize;