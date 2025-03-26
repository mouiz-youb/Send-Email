import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import  nodemailer from "nodemailer"

export async function Post(request:NextApiRequest): Promise<NextResponse> {
   try { const {subject,message} = request.body
   // the transporter
   const transporter = nodemailer.createTransport({
       service: "gmail",
       host:"smtp.gmail.com",
       port:465,
       secure:true,
       auth:{
           user:process.env.EMAIL_USER,
           pass:process.env.EMAIL_PASS
       }
   })
   // the email options
   const mailOptions = {
       from :`"T3 App" <${process.env.EMAIL_FROM}>`,
       to:process.env.EMAIL_USER,
       subject:`<h1>${subject}</h1>`,
       html:`<p>${message}</p>`
   }
   // send the email
   await transporter.sendMail(mailOptions)
   return NextResponse.json({message:"Email sent successfully" ,success:true ,status:200})
    
   } catch (error) {
       return NextResponse.json({ error: "Failed to send email", success:false, status:500});
   }

}
