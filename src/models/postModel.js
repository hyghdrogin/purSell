import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";
import User from "./userModel.js";

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
	tableName: "posts",
	modelName: "Post"
});

Post.associations = () => {
	Post.hasOne(User, {
		foreignKey: "email",
		as: "owner" 
	});
};

export default Post;