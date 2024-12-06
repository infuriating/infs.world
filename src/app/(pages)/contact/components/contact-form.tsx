"use client";

import { Form } from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { contactFormAction } from "../actions";
import { contactFormSchema } from "../schemas";

export default function ContactForm() {
  const { execute, isPending } = useServerAction(contactFormAction, {
    onError({ err }) {
      toast.error(err.message);
    },
    onSuccess() {
      form.reset({
        name: "",
        email: "",
        message: "",
      });
      toast.success(
        "Your message has been sent! You'll receive a confirmation email shortly.",
      );
    },
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    if (!executeRecaptcha) {
      return toast.error("Recaptcha is not ready yet!");
    }

    executeRecaptcha("formSubmission").then((gReCaptchaToken: string) => {
      execute({ ...data, gReCaptchaToken });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex flex-col gap-y-1">
          <Label className="font-medium" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            {...form.register("name")}
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <Label className="font-medium" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="text"
            {...form.register("email")}
            placeholder="john.doe@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <Label className="font-medium" htmlFor="message">
            Message
          </Label>
          <Textarea
            id="message"
            className="h-32 resize-none"
            {...form.register("message")}
            placeholder="Hello, I would like to..."
          />
          {form.formState.errors.message && (
            <p className="text-sm text-red-500">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <Button
          disabled={isPending}
          type="submit"
          className="mt-2 w-full transition-all disabled:opacity-50"
          variant={"shimmer"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
