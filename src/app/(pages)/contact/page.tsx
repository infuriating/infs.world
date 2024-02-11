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
import { redirect } from "next/navigation";

type emailData = {
  name: string;
  email: string;
  message: string;
};

export default function page() {
  async function send({ name, email, message }: emailData) {
    "use server";

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = await resend.emails.send({
      from: `Luca Kuiper <${process.env.RESEND_MAIL_FROM}>`,
      to: ["luca@infs.world"],
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

    console.log(recipientEmail);
    console.log(senderEmail);

    redirect("/");
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
          <ContactForm send={send} />
        </CardContent>
      </Card>
    </div>
  );
}
