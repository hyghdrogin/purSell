import { Router } from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export default router;