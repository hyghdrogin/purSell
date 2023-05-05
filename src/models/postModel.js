import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";

const Post = sequelize.define("Post", {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
		unique: true
	},
	owner: {
		type: DataTypes.STRING
	},
	title: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.STRING
	},
	photo: {
		type: DataTypes.STRING
	},
	active: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	}
}, {
	sequelize,
	timestamps: true,
	tableName: "users",
	modelName: "User"
});

export default Post;