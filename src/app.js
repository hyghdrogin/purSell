import app from "./server.js";
import config from "./configurations/index.js";

const port = config.PORT || 4000;

app.listen(port, () => {
	console.log(`Api currently running on Port: ${port}`);
});