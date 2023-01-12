import cors from "cors";
import express from "express";
import helmet from "helmet"; // Helmet helps you secure your Express apps by setting various HTTP headers.
import morgan from "morgan"; // HTTP request logger middleware for node.js
import cookieParser from "cookie-parser";
import multer from "multer"; // uploading files

import config from "./config";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";

import postRoutes from "./routes/posts";
import authRoutes from "./routes/auth";
// import userRoutes from "./routes/users";

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.clientOrigins[config.nodeEnv],
  })
);
app.use(helmet());
app.use(morgan("tiny"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  if (file != undefined) {
    res.status(200).json(file.filename);
  } else {
    res.status(200).json({ message: "Upload failed" });
  }
});
// Apply routes before error handling
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
