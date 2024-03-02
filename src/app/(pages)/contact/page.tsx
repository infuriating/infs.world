import React from "react";
import ContactForm from "./components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Resend } from "resend";
import RecipientEmail from "@/emails/email-recipient";
import SenderEmail from "@/emails/email-sender";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import { toast } from "sonner";

type emailData = {
  name: string;
  email: string;
  message: string;
};

export default function page() {
  async function send(
    { name, email, message }: emailData,
    gReCaptchaToken: string,
  ) {
    "use server";

    const resend = new Resend(process.env.RESEND_API_KEY);

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gReCaptchaToken}`,
      {
        method: "POST",
      },
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success)
      return "There was an error regarding your captcha! Please try again.";
    if (recaptchaData.score < 0.5)
      return "Could not verify you as a human! Please try again.";

    const recipientEmail = await resend.emails.send({
      from: `Luca Kuiper <${process.env.RESEND_MAIL_FROM}>`,
      to: ["luca@infs.world"],
      reply_to: [email],
      subject: `infs.world || ${name} left you a message!`,
      react: RecipientEmail({
        name: name,
        email: email,
        contents: message,
      }),
    });

    const senderEmail = await resend.emails.send({
      from: `Luca Kuiper <${process.env.RESEND_MAIL_FROM}>`,
      subject: "infs.world || Thanks for reaching out!",
      to: [email],
      react: SenderEmail({
        name: name,
        contents: message,
      }),
    });

    return { recipientEmail, senderEmail };
  }

  return (
    <div className="flex w-full justify-center">
      <Card className="flex flex-col sm:max-w-lg lg:max-w-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Contact me!</CardTitle>
          <CardDescription className="text-xl text-muted-foreground">
            If you have any questions or just want to say hi, feel free to reach
            out to me using this form!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GoogleCaptchaWrapper>
            <ContactForm send={send} />
          </GoogleCaptchaWrapper>
        </CardContent>
      </Card>
    </div>
  );
}
