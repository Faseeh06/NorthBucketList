"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [inquiryType, setInquiryType] = useState<"general" | "trip">("general");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const people = (form.elements.namedItem("people") as HTMLInputElement | null)?.value ?? "";
    const budget = (form.elements.namedItem("budget") as HTMLInputElement | null)?.value ?? "";
    const dates = (form.elements.namedItem("dates") as HTMLInputElement | null)?.value ?? "";
    const preferredPlace =
      (form.elements.namedItem("preferredPlace") as HTMLInputElement | null)?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          name,
          email,
          message,
          people,
          budget,
          dates,
          preferredPlace,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not send message");
      }

      form.reset();
      setInquiryType("general");
      setStatus({
        type: "success",
        message: "Message sent. We will get back to you soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again shortly.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-5"
    >
      <div className="space-y-2">
        <p className="font-sans text-xs sm:text-sm text-foreground/90">Form type</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setInquiryType("general")}
            className={`h-10 rounded-sm border text-sm transition-colors ${
              inquiryType === "general"
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/20 bg-transparent text-foreground hover:border-foreground/40"
            }`}
          >
            General query
          </button>
          <button
            type="button"
            onClick={() => setInquiryType("trip")}
            className={`h-10 rounded-sm border text-sm transition-colors ${
              inquiryType === "trip"
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/20 bg-transparent text-foreground hover:border-foreground/40"
            }`}
          >
            Trip details
          </button>
        </div>
      </div>

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
          className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
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
          className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />
      </div>
      {inquiryType === "trip" && (
        <>
          <div className="space-y-2">
            <label htmlFor="people" className="font-sans text-xs sm:text-sm text-foreground/90">
              Number of people <span className="text-foreground">*</span>
            </label>
            <Input
              id="people"
              name="people"
              required={inquiryType === "trip"}
              placeholder="e.g. 4"
              className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="font-sans text-xs sm:text-sm text-foreground/90">
              Budget <span className="text-foreground">*</span>
            </label>
            <Input
              id="budget"
              name="budget"
              required={inquiryType === "trip"}
              placeholder="e.g. PKR 250,000 total"
              className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="dates" className="font-sans text-xs sm:text-sm text-foreground/90">
              Travel dates <span className="text-foreground">*</span>
            </label>
            <Input
              id="dates"
              name="dates"
              required={inquiryType === "trip"}
              placeholder="e.g. 12 Jun - 18 Jun 2026"
              className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="preferredPlace"
              className="font-sans text-xs sm:text-sm text-foreground/90"
            >
              Preferred place <span className="text-foreground">*</span>
            </label>
            <Input
              id="preferredPlace"
              name="preferredPlace"
              required={inquiryType === "trip"}
              placeholder="e.g. Hunza, Skardu, Fairy Meadows"
              className="h-11 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
            />
          </div>
        </>
      )}
      <div className="space-y-2">
        <label htmlFor="message" className="font-sans text-xs sm:text-sm text-foreground/90">
          {inquiryType === "trip" ? "Extra notes" : "Message"}{" "}
          <span className="text-foreground">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={
            inquiryType === "trip"
              ? "Tell us any preferences, pace, comfort level, or special requests..."
              : "Share your question and we will get back to you..."
          }
          className="min-h-32 resize-y rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="h-12 w-full rounded-sm bg-foreground font-sans text-base text-background hover:bg-foreground/90"
      >
        {sending ? "Sending..." : "Submit now"}
      </Button>
      {status && (
        <p
          className={
            status.type === "success"
              ? "text-sm text-emerald-700"
              : "text-sm text-destructive"
          }
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
