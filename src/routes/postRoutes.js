import { Router } from "express";
import { verifyUser } from "../middlewares/authentication.js";
import { createPost, retrievePostById, retrievePostByOwner } from "../controllers/postController.js";
import parser from "../middlewares/upload.js";

const router = Router();

router.post("/create", verifyUser, parser.single("photo"), createPost);

router.get("/:postId", verifyUser, retrievePostById);
router.get("/owner/:ownerEmail", verifyUser, retrievePostByOwner);

export default router;