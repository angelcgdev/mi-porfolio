import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { TLSSocket } from "tls";
require('dotenv').config()

interface Response{
  result: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response> ) {
    const user = process.env.email;
    const pass = process.env.password;
    const to = process.env.to;
    const transporter = nodemailer.createTransport({
        service: "Outlook365",
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user,
          pass,
        },
        secure: true,
      });
      
    const mailData:Mail.Options = {
      from: user,
      to: to,
      subject: `${req.body.subjet} - MY WEBSITE`,
      text: req.body.message,
      html: `<section>
      <p>${req.body.message}</p>
      <br/>
      <p>Atte: ${req.body.name}</p>
      <p>you can reply to ${req.body.email}</p>
      </section>`
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