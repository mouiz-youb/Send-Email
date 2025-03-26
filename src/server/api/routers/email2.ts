import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { sendEmail } from "@/utils/nodemailer2";

export const emailRouter2 = createTRPCRouter({
  sendEmail: publicProcedure  // Renamed for clarity
    .input(z.object({
      subject: z.string().min(1),
      message: z.string().min(1),
    }))
    .mutation(async ({ input }) => {
      const response = await sendEmail(input.subject, input.message);
      if (!response.success) {
        throw new Error(response.error || "Failed to send email"); // Propagate error
      }
      return response;
    })
});