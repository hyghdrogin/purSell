import { Router } from "express";
import {
	newUser, tokenVerification, tokenResend,
	userLogin, passwordForget, passwordRenew,
	passwordUpdate
} from "../controllers/userController.js";
import { verifyUser } from "../middlewares/authentication.js";

const router = Router();

router.post("/register", newUser);
router.post("/verify", tokenVerification);
router.post("/resend-token", tokenResend);
router.post("/login", userLogin);
router.post("/password/forget", passwordForget);
router.post("/password/set", passwordRenew);


router.patch("/password/update", verifyUser, passwordUpdate);

export default router;