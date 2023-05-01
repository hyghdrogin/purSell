import { Router } from "express";
import { newUser, tokenVerification, tokenResend, userLogin, passwordForget } from "../controllers/userController.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);
router.post("/resend-token", tokenResend);
router.post("/login", userLogin);
router.post("/password/forget", passwordForget);

export default router;