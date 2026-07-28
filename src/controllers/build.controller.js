import { v4 as uuidv4 } from "uuid";
import { createJob } from "../services/queue.service.js";
import { triggerGitHubBuild } from "../services/github.service.js";

export const createBuild = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Project ZIP file is required."
      });
    }

    const job = {
      id: uuidv4(),
      status: "queued",
      fileName: req.file.filename,
      originalName: req.file.originalname,
      createdAt: new Date().toISOString()
    };

    createJob(job);

    await triggerGitHubBuild(job);

    return res.status(201).json({
      success: true,
      message: "Build job created successfully.",
      data: job
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create build job.",
      error: error.message
    });
  }
};
