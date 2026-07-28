import express from "express";
import { createBuild } from "../controllers/build.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
  "/create",
  upload.single("project"),
  createBuild
);

export default router;
