import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,

  github: {
    token: process.env.GITHUB_TOKEN,
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    workflow: process.env.GITHUB_WORKFLOW,
    branch: process.env.GITHUB_BRANCH || "main"
  }
};
