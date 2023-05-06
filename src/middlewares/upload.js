import multer from "multer";
import { v2 } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import config from "../configurations/index.js";

v2.config(config.CLOUDINARY);

const storage = new CloudinaryStorage({
	cloudinary: v2
});

const parser = multer({
	storage,
	limits: {
		fileSize: 5120 * 1024 * 1024
	}
});

export default parser;