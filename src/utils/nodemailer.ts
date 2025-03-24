import  nodemailer from "nodemailer"
// create the Transporter with email config 
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
// the function to send an email
export const sendEmail= async (to:string ,subject:string ,html:string)=>{
try {
    const info = await transporter.sendMail({
        from:`"T3 App" <${process.env.EMAIL_FROM}>`, //sender's email
        to,
        subject ,
        html
    })
    console.log(`email sent : ${info.messageId}`)
    return { success: true, message: "Email sent successfully!" };
} catch (error) {
    console.log(`Error sending email ${error}`)
    return { success: false, message: "Failed to send email" };
}
}