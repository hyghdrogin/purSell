import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { rateLimit } from "express-rate-limit";
import requestLogger from "./utilities/requestLogger.js";
import config from "./configurations/index.js";
import router from "./routes/index.js";

const app = express();

const limiter = rateLimit({
	windowMs: 0.5 * 60 * 1000,
	max: 3,
	standardHeaders: true,
	legacyHeaders: false
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb"}));
app.use(limiter);
app.use(requestLogger);

app.use("/api", router);

app.get("/",(req, res) => {
	res.send(`Welcome to ${config.API_NAME} API`);
});

app.use((req, res) => res.status(404).send({
	error: "Invalid route",
	message: "Kindly check your route and resend your request"
}));

export default app;