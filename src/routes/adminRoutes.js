import { Router } from "express";
import { verifyUser ,verifyAdmin } from "../middlewares/authentication.js";
import { getAllUser } from "../controllers/adminController.js";

const router = Router();

router.get("/users", verifyUser, verifyAdmin, getAllUser);

export default router;