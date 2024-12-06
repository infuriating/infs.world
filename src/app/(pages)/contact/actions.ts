"use server";

import RecipientEmail from "@/emails/email-recipient";
import SenderEmail from "@/emails/email-sender";
import { safeAction } from "@/lib/safe-action";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "./schemas";

export const contactFormAction = safeAction
  .createServerAction()
  .input(
    contactFormSchema.extend({
      gReCaptchaToken: z.string(),
    }),
  )
  .handler(async ({ input }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${input.gReCaptchaToken}`,
      {
        method: "POST",
      },
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success)
      throw new Error(
        "There was an error regarding your captcha! Please try again.",
      );
    if (recaptchaData.score < 0.5)
      throw new Error("Could not verify you as a human! Please try again.");

    await resend.emails.send({
      from: `Luca Kuiper <${process.env.RESEND_MAIL_FROM}>`,
      to: ["luca@infs.world"],
      reply_to: [input.email],
      subject: `infs.world || ${input.name} left you a message!`,
      react: RecipientEmail({
        name: input.name,
        email: input.email,
        contents: input.message,
      }),
    });

    await resend.emails.send({
      from: `Luca Kuiper <${process.env.RESEND_MAIL_FROM}>`,
      subject: "infs.world || Thanks for reaching out!",
      to: [input.email],
      react: SenderEmail({
        name: input.name,
        contents: input.message,
      }),
    });

    redirect("/");
  });
