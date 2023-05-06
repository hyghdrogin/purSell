import { Router } from "express";
import { verifyUser } from "../middlewares/authentication.js";
import { createPost } from "../controllers/postController.js";
import parser from "../middlewares/upload.js";

const router = Router();

router.post("/create", verifyUser, parser.single("photo"), createPost);

export default router;