import cors from "cors";
import express from "express";
import helmet from "helmet"; // Helmet helps you secure your Express apps by setting various HTTP headers.
import morgan from "morgan"; // HTTP request logger middleware for node.js
import cookieParser from "cookie-parser";

import config from "./config";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";

import postRoutes from "./routes/posts";
import authRoutes from "./routes/auth";
// import userRoutes from "./routes/users";

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: `${config.clientOrigins[config.nodeEnv]}`,
    credentials: true,
  })
);
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
