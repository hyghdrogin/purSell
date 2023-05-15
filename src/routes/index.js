import { Router } from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import idan from "./adminRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/admin", idan);

export default router;