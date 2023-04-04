import { DateTime } from "luxon";

export const requestLogger = async (req, res, next) => {  
	console.info(
		`request (${DateTime.now().toISO()}): ${req.protocol}://${req.hostname}${
			req.originalUrl
		} (${req.method})`
	);
	return next();
};
