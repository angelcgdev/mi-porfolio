import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
require('dotenv').config()

interface Response{
  result: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response> ) {
    const user = process.env.email;
    const pass = process.env.password;
    const to = process.env.to;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user,
          pass,
        },
        secure: true,
      });
      
    const mailData:Mail.Options = {
      from: req.body.email,
      to: to,
      subject: `${req.body.subjet} ${req.body.name}`,
      text: req.body.message,
      html: `<div>${req.body.message}</div>`
    };

    transporter.sendMail(mailData, function (err, info) {
      if(err){
          console.log({error: err});
          const { message, name, cause, stack } = err;
          res.status(535).send({ result: message });
      }
      else{
          console.log(info);
          res.status(200).json({ result: info.response });
      }
    })
}