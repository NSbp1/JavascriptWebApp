// services/emailService.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Sebopangoato44@gmail.com',
        pass: 'obnx hxij hhnc fftg'
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'Sebopangoato44@gmail.com',
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
