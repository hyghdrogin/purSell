import { Router } from "express";
import { newUser, tokenVerification, tokenResend } from "../controllers/userController.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);
router.post("/resend-token", tokenResend);

export default router;