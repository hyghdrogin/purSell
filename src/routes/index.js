import { Router } from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/post", postRoutes);

export default router;