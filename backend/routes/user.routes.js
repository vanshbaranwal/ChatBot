import express from "express";
import { register, verify } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register", register);
router.get("/verify/:token", verify);

export default router;