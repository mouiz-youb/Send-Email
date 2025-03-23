import {z} from "zod"
import { createTRPCRouter ,publicProcedure } from "../trpc"
import { sendEmail } from "@/utils/nodemailer"
export const emailRouter = createTRPCRouter({
    sendEmailX:publicProcedure
    .input(z.object({
        to: z.string().email(`Invalid email address @ hhhh`),
        subject: z.string().min(1,`Subject is required`),
        message :z.string().min(1,`Message is required`),
    }))
    .mutation(async ({input})=>{
        try {
            const response = await sendEmail(input.to , input.subject ,input.message)
            return {success :true ,msg :response.message}
        } catch (error) {
            throw new Error(`Failed to send email `)
        }
    })
})