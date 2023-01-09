import cors from "cors";
import express from "express";
import helmet from "helmet"; // Helmet helps you secure your Express apps by setting various HTTP headers.
import morgan from "morgan"; // HTTP request logger middleware for node.js
import config from "./config";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import root from "./routes/root";

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // @ts-ignore
    origin: config.clientOrigins[config.nodeEnv],
  })
);
app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
app.use("/", root);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
