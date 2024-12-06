import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(25, "Your message must be at least 25 characters"),
});
