import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";
import User from "./userModel.js";

const Otp = sequelize.define("Otp", {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
		unique: true
	},
	owner: {
		type: DataTypes.STRING,
		unique: true
	},
	token: {
		type: DataTypes.STRING,
		unique: true
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

Otp.associations = () => {
	Otp.belongsTo(User, {
		targetKey: "email",
		foreignKey: "owner"
	});
};

export default Otp;