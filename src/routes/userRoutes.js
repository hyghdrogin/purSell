import { Router } from "express";
import { newUser, tokenVerification, tokenResend, userLogin } from "../controllers/userController.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);
router.post("/resend-token", tokenResend);
router.post("/login", userLogin);

export default router;