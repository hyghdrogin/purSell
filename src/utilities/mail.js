import sgMail from "@sendgrid/mail";
import config from "../configurations/index.js";

sgMail.setApiKey(config.SENDGRID);

const msg = {
	from: `PurSell <${config.EMAIL}>`,
	mail_settings: { sandbox_mode: { enable: false } }
};

() => {
	msg.mail_settings.sandbox_mode.enable = true;
};

const sendEmail = async (email, subject, html) => {
	try {
		msg.to = email;
		msg.subject = subject;
		msg.html = html;
		await sgMail.send(msg);
		console.log("message sent...");
	} catch (err) {
		return err;
	}
};

export default sendEmail;