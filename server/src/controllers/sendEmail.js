import { createTransport } from 'nodemailer';

export  function envioEmail(email, subject, body) {
    let transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user:'brayann.fave@gmail.com',
            pass:'mpsmlzzujzyapbdo'
        }
    });
    const mailOpstions = {
        from: 'brayann.fave@gmail.com',
        to: email,
        subject,
        text:body,
    }
    transporter.sendMail(mailOpstions)
}