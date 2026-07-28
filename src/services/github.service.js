import axios from "axios";

export const triggerGitHubBuild = async (payload = {}) => {
  try {
    return {
      success: true,
      message: "GitHub build trigger is ready.",
      payload
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getBuildStatus = async (jobId) => {
  return {
    success: true,
    jobId,
    status: "queued"
  };
};

export const downloadAPK = async (jobId) => {
  return {
    success: true,
    jobId,
    downloadUrl: null
  };
};
