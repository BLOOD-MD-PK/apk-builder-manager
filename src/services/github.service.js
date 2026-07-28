import axios from "axios";
import env from "../config/env.js";

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${env.github.token}`,
    Accept: "application/vnd.github+json"
  }
});

export const triggerGitHubBuild = async (job) => {
  try {
    await github.post(
      `/repos/${env.github.owner}/${env.github.repo}/actions/workflows/${env.github.workflow}/dispatches`,
      {
        ref: env.github.branch,
        inputs: {
          jobId: job.id,
          fileName: job.fileName
        }
      }
    );

    return {
      success: true,
      message: "Workflow triggered successfully."
    };

  } catch (error) {
    return {
      success: false,
      message: error.response?.data || error.message
    };
  }
};
