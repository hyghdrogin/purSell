import { Router } from "express";
import { newUser, tokenVerification, tokenResend, userLogin, passwordForget, passwordRenew } from "../controllers/userController.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);
router.post("/resend-token", tokenResend);
router.post("/login", userLogin);
router.post("/password/forget", passwordForget);
router.post("/password/set", passwordRenew);

export default router;