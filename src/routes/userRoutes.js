import { Router } from "express";
import { newUser, tokenVerification } from "../controllers/userController.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);

export default router;