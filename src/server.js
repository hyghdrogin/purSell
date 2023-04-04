import express from "express";
import cors from "cors";
import { requestLogger } from "./utilities/requestLogger.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb"}));
app.use(requestLogger);

app.get("/api/health", (req, res) => {
	res.send({
		success: true,
		message: "Server is healthy"
	});
});

app.get("/",(req, res) => {
	res.send("Welcome to Pursell API");
});

app.use((req, res) => res.status(404).send({
	error: "Invalid route",
	message: "Kindly check your route and resend your request"
}));

export default app;