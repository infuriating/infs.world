"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function ContactForm({
  send,
}: {
  send: (data: { name: string; email: string; message: string }) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form
      onSubmit={() =>
        send({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      }
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
