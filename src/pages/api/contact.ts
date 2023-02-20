import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { TLSSocket } from "tls";
require('dotenv').config()

interface Response{
  result: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response> ) {
    const service = process.env.SMTP_SERVICE;
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT);
    const user = process.env.email;
    const pass = process.env.password;
    const to = process.env.to;
    const transporter = nodemailer.createTransport({
        service,
        host,
        port,
        auth: {
          user,
          pass,
        },
        secure: true,
      });
      
    const mailData:Mail.Options = {
      from: user,
      to,
      subject: `${req.body.subjet} - MY WEBSITE`,
      text: req.body.message,
      replyTo: req.body.email,
      html: `
      <section style="background-color: #E7EAEF; padding: 10px;">
        <div style="background-color: #FFFFFF; color: #000000; border-radius: 10px; padding: 10px;">
          <p>${req.body.message}</p>
          <hr/>
          <p style="font-weight: bold; margin: 0; margin-bottom: 10px;">Atte: ${req.body.name}</p>
          <p>reply to ${req.body.email}</p>
        </div>
      </section>`
    };

    transporter.sendMail(mailData, function (err, info) {
      if(err){
          console.log({error: err});
          const { message } = err;
          res.status(535).send({ result: message });
      }
      else{
          console.log(info);
          res.status(200).json({ result: info.response });
      }
    })
}