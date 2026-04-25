"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/content/site";
import { MapPin, Send } from "lucide-react";

const email = site.email;

const regionOptions = [
  "Hunza / Gojal & KKH",
  "Skardu & Baltistan",
  "Swat & Kalam",
  "Kumrat & Dir",
  "Naran / Babusar",
  "Not sure — suggest",
] as const;

const styleOptions = ["Easy pace & views", "More hiking / long days", "Family-friendly", "Mixed group", "Not sure"] as const;

const budgetOptions = [
  "Under PKR 100k / person (approx.)",
  "PKR 100k – 200k / person",
  "PKR 200k+ / person",
  "Let’s talk after the route",
] as const;

/**
 * “Custom trip” builder — mailto handoff; no server required.
 */
export function CustomTripForm({ id = "build" }: { id?: string }) {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const f = e.currentTarget;
    const get = (name: string) => (f.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value ?? "";

    const name = get("ct-name");
    const mail = get("ct-email");
    const phone = get("ct-phone");
    const dates = get("ct-dates");
    const pax = get("ct-pax");
    const region = get("ct-region");
    const style = get("ct-style");
    const budget = get("ct-budget");
    const notes = get("ct-notes");

    const body = [
      `Name: ${name}`,
      `Email: ${mail}`,
      `Phone / WhatsApp: ${phone}`,
      `When: ${dates}`,
      `People: ${pax}`,
      `Region: ${region}`,
      `Pace: ${style}`,
      `Budget: ${budget}`,
      ``,
      notes,
    ].join("\n");

    const subject = encodeURIComponent("NorthBucket — custom trip build");
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSending(false);
  }

  return (
    <section id={id} className="border-y border-foreground/10 bg-transparent py-16 md:py-24">
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
              <MapPin className="h-4 w-4 text-foreground" strokeWidth={1.5} aria-hidden />
              Custom route
            </p>
            <h2 className="mt-3 font-redob text-3xl uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl">
              Build your run
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us who&apos;s going, when you can travel, and how hard you want the days. We&apos;ll shape a
              day-by-day draft—then you can lock dates in PKR.
            </p>
            <ul className="mt-8 space-y-2.5 text-sm text-foreground/90 sm:text-base">
              <li className="border-l-2 border-foreground/20 pl-3">No two groups get the same paste-and-copy PDF.</li>
              <li className="border-l-2 border-foreground/20 pl-3">We reply on email within a business day.</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border-2 border-foreground/10 bg-card p-5 sm:p-7 shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="ct-name" className="text-xs font-medium text-foreground sm:text-sm">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="ct-name"
                  name="ct-name"
                  required
                  autoComplete="name"
                  className="h-11 rounded-sm border-foreground/15 bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-email" className="text-xs font-medium text-foreground sm:text-sm">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="ct-email"
                  name="ct-email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-11 rounded-sm border-foreground/15 bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-phone" className="text-xs font-medium text-foreground sm:text-sm">
                  Phone / WhatsApp
                </label>
                <Input
                  id="ct-phone"
                  name="ct-phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 rounded-sm border-foreground/15 bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-dates" className="text-xs font-medium text-foreground sm:text-sm">
                  Dates or month <span className="text-destructive">*</span>
                </label>
                <Input
                  id="ct-dates"
                  name="ct-dates"
                  required
                  placeholder="e.g. 10–20 June or whole July"
                  className="h-11 rounded-sm border-foreground/15 bg-background"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-pax" className="text-xs font-medium text-foreground sm:text-sm">
                  People
                </label>
                <Input
                  id="ct-pax"
                  name="ct-pax"
                  type="text"
                  placeholder="e.g. 6 adults, 1 child"
                  className="h-11 rounded-sm border-foreground/15 bg-background"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="ct-region" className="text-xs font-medium text-foreground sm:text-sm">
                  Where do you want to go?
                </label>
                <select
                  id="ct-region"
                  name="ct-region"
                  className="flex h-11 w-full rounded-sm border border-foreground/15 bg-background px-3 text-sm text-foreground"
                  defaultValue={regionOptions[0]}
                >
                  {regionOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-style" className="text-xs font-medium text-foreground sm:text-sm">
                  Trip style
                </label>
                <select
                  id="ct-style"
                  name="ct-style"
                  className="flex h-11 w-full rounded-sm border border-foreground/15 bg-background px-3 text-sm text-foreground"
                  defaultValue={styleOptions[0]}
                >
                  {styleOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="ct-budget" className="text-xs font-medium text-foreground sm:text-sm">
                  Budget (ballpark)
                </label>
                <select
                  id="ct-budget"
                  name="ct-budget"
                  className="flex h-11 w-full rounded-sm border border-foreground/15 bg-background px-3 text-sm text-foreground"
                  defaultValue={budgetOptions[0]}
                >
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="ct-notes" className="text-xs font-medium text-foreground sm:text-sm">
                  Must-haves, limits, or questions
                </label>
                <Textarea
                  id="ct-notes"
                  name="ct-notes"
                  rows={4}
                  placeholder="Food, kids, photo goals, no long drives after 4pm, etc."
                  className="resize-y rounded-sm border-foreground/15 bg-background"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="h-12 w-full rounded-sm bg-foreground text-background hover:bg-foreground/90 sm:w-auto sm:px-8"
            >
              <Send className="mr-2 h-4 w-4" aria-hidden />
              Send brief
            </Button>
            <p className="text-xs text-muted-foreground">Opens your mail app to {email} — you can add attachments there.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
