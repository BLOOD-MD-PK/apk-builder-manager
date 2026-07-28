import { v4 as uuidv4 } from "uuid";
import { createJob } from "../services/queue.service.js";

export const createBuild = async (req, res) => {
  try {
    const job = {
      id: uuidv4(),
      status: "queued",
      createdAt: new Date().toISOString()
    };

    createJob(job);

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
