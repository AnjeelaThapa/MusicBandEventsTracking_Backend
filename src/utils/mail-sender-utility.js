const nodeMailer = require("nodemailer");

module.exports = {
    sendEmail: (toUser, subject, textBody) => {
        let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'anjeelathapa321@gmail.com',
                pass: 'seokjin+anjeela143'
            }
        });
        let mailOptions = {
            to: toUser,
            subject: subject,
            text: textBody
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error(error);
            }
            console.log(`Message ${info.messageId} sent: ${info.response}`);
        });
    }
};
