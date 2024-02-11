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
import { toast } from "sonner";

type emailData = {
  name: string;
  email: string;
  message: string;
};

export default function page() {
  async function send({ name, email, message }: emailData) {
    "use server";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return toast.error("Please enter a valid email!");

    if (name.length < 3) return toast.error("Please enter a valid name!");
    if (email.length < 3) return toast.error("Please enter a valid email!");
    if (message.length < 3) return toast.error("Please enter a valid message!");

    if (name.length > 50) return toast.error("Name is too long!");
    if (email.length > 40) return toast.error("Email is too long!");
    if (message.length > 400)
      return toast.error("Message is too long! Please shorten it!");

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

    toast.success(
      `Hi ${name}! Your message has been sent! You'll receive a confirmation email shortly.`,
    );

    console.log(recipientEmail);
    console.log(senderEmail);
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
