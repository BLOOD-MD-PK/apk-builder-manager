import express from "express";
import { createBuild } from "../controllers/build.controller.js";

const router = express.Router();

router.post("/create", createBuild);

export default router;
