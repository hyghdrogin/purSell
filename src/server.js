import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import requestLogger from "./utilities/requestLogger.js";
import config from "./configurations/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb"}));
app.use(requestLogger);

app.get("/",(req, res) => {
	res.send(`Welcome to ${config.API_NAME} API`);
});

app.use((req, res) => res.status(404).send({
	error: "Invalid route",
	message: "Kindly check your route and resend your request"
}));

export default app;