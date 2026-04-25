"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "hello@northbucketlist.com";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const subject = encodeURIComponent("NorthBucket List — trip inquiry");
    const mail = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
    setSending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border-2 border-foreground/10 bg-muted/20 p-5 sm:p-6 md:p-8 space-y-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.04)]"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="font-sans text-xs sm:text-sm text-foreground/90">
          Name <span className="text-foreground">*</span>
        </label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className="h-11 rounded-sm border-foreground/15 bg-card"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="font-sans text-xs sm:text-sm text-foreground/90">
          Email <span className="text-foreground">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 rounded-sm border-foreground/15 bg-card"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="font-sans text-xs sm:text-sm text-foreground/90">
          Message <span className="text-foreground">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Dates, group size, regions you’re interested in, and any questions…"
          className="min-h-32 rounded-sm border-foreground/15 bg-card resize-y"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="h-12 w-full rounded-sm bg-foreground font-sans text-base text-background hover:bg-foreground/90"
      >
        {sending ? "Opening email…" : "Submit now"}
      </Button>
    </form>
  );
}
