import { Router } from "express";
import { verifyUser ,verifyAdmin } from "../middlewares/authentication.js";
import { getAllUser, adminDeactivateUser, adminReactivateUser } from "../controllers/adminController.js";

const router = Router();

router.get("/users", verifyUser, verifyAdmin, getAllUser);
router.get("/users/deactivate/:userId", verifyUser, verifyAdmin, adminDeactivateUser);
router.get("/users/reactivate/:userId", verifyUser, verifyAdmin, adminReactivateUser);

export default router;