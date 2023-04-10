import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";

const Otp = sequelize.define("Otp", {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
		unique: true
	},
	token: {
		type: DataTypes.STRING
	},
	expired: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
}, {
	sequelize,
	timestamps: true,
	tableName: "Otps",
	modelName: "Otp"
});

(async () => {
	await sequelize.sync({ force: true });
});

export default Otp;