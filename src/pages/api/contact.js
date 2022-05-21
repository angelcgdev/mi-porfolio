require('dotenv').config()

export default function handler(req, res) {
    const user = process.env.email;
    const pass = process.env.password;
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user,
          pass,
        },
        secure: true,
      });
      
      const mailData = {
        from: req.body.email,
        to: 'luisangelcarogaloc@gmail.com',
        subject: `${req.body.subjet} ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
       }

      transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err)
            res.status(505).json({ result: info })
        }
        else{
            console.log(info)
            res.status(200).json({ result: info })
        }
      })
}