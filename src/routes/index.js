import { Router } from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import adminRoutes from "./adminRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/admin", adminRoutes);

export default router;