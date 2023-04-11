const otpTemplate = (otp, firstName) => {
	return `<!DOCTYPE html>
      <html>
        <head>
          <title>PurSell OTP service</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <h1 style="font-size: 24px; margin-bottom: 20px;">PurSell Otp for ${firstName}</h1>
                <p style="font-size: 16px; line-height: 1.5;">Hello ${firstName}, here is your requested Otp and will expire in 20minutes.</p>
                <p align="center"><strong>${otp}</strong></p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 30px 30px 30px 30px;">
                <p style="font-size: 12px; text-align: center;"> Purchase & Sell | Lagos, Nigeria | +234907pursell</p>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `;
};

export default otpTemplate;