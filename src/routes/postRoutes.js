import { Router } from "express";
import { verifyUser } from "../middlewares/authentication.js";
import { createPost, retrievePostById } from "../controllers/postController.js";
import parser from "../middlewares/upload.js";

const router = Router();

router.post("/create", verifyUser, parser.single("photo"), createPost);
router.get("/:postId", verifyUser, retrievePostById);

export default router;