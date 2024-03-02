"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner";

export default function ContactForm({
  send,
}: {
  send: (
    data: { name: string; email: string; message: string },
    gReCaptchaToken: string,
  ) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();

  const submit = (data: { name: string; email: string; message: string }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email))
      return toast.error("Please enter a valid email!");

    if (data.name.length < 3) return toast.error("Please enter a valid name!");
    if (data.email.length < 3)
      return toast.error("Please enter a valid email!");
    if (data.message.length < 3)
      return toast.error("Please enter a valid message!");

    if (data.name.length > 50) return toast.error("Name is too long!");
    if (data.email.length > 40) return toast.error("Email is too long!");
    if (data.message.length > 400)
      return toast.error("Message is too long! Please shorten it!");

    if (!executeRecaptcha) {
      return toast.error("Recaptcha is not ready yet!");
    }

    executeRecaptcha("formSubmission").then((gReCaptchaToken) => {
      send(data, gReCaptchaToken);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success(
        `Hi ${data.name}! Your message has been sent! You'll receive a confirmation email shortly.`,
      );
    });

    router.push("/");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(formData);
      }}
      className="flex flex-col gap-y-2"
    >
      <div className="flex flex-col gap-y-1">
        <Label className="font-medium" htmlFor="name">
          Name
        </Label>
        <Input
          required
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label className="font-medium" htmlFor="email">
          Email
        </Label>
        <Input
          required
          id="email"
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label className="font-medium" htmlFor="message">
          Message
        </Label>
        <Textarea
          required
          id="message"
          value={formData.message}
          className="h-32 resize-none"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <Button type="submit" className="mt-2" variant={"shimmer"}>
        Submit
      </Button>
    </form>
  );
}
