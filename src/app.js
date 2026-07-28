import express from "express";
import cors from "cors";
import buildRoutes from "./routes/build.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "APK Builder Manager",
    status: "running"
  });
});

app.use("/api/build", buildRoutes);

export default app;
