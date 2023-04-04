import app from "./server.js";

const port = 4000;

app.listen(port, () => {
	console.log(`Api currently running on Port: ${port}`);
});