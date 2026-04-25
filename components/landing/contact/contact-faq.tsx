"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faq = [
  {
    q: "What’s the best season for the Karakoram Highway and Hunza?",
    a: "Generally late spring through early autumn: clearer passes, more predictable road days, and open stays. We’ll flag windows for landslide-prone sections and help you pick dates that match your comfort with altitude and long drives.",
  },
  {
    q: "Do I need permits or special paperwork for the northern areas?",
    a: "Some routes and restricted zones need NOCs or route permits. We line up paperwork with your dates and vehicle plan so you’re not turned around at a checkpoint—details are covered before you pay the balance.",
  },
  {
    q: "How do stays and transport work on the road?",
    a: "We pair you with vetted guesthouses, lodges, and 4x4 or coaster blocks depending on the leg. Inclusions and add-ons are written clearly before you confirm, so you know what’s covered on road days vs. free time.",
  },
  {
    q: "I’m a first-timer in the mountains. Is that okay?",
    a: "Yes. We build in acclimation, shorter first days as needed, and clear briefings on altitude, weather, and local etiquette—so you can focus on the views, not the what-ifs.",
  },
  {
    q: "How fast do you reply, and when do I get a route draft?",
    a: "We aim to answer every inquiry within one business day. A first route draft (dates, broad legs, and ballpark range) usually follows once we have your group size, season, and top valleys in mind.",
  },
];

export function ContactFaq() {
  return (
    <section className="bg-muted/25 border-t border-foreground/10 py-12 md:py-16">
      <div className="w-full max-w-[min(100%,960px)] mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="text-foreground" aria-hidden>
            ■
          </span>
          <span>FAQ</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl text-foreground tracking-[-0.04em] mb-2">
          Common questions
        </h2>
        <p className="font-sans text-sm text-muted-foreground mb-10 max-w-lg">
          Straight answers for planning trips in the north.
        </p>

        <AccordionPrimitive.Root type="single" collapsible className="w-full">
          {faq.map((item, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${i}`}
                className="border-b border-foreground/10 last:border-b-0"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group flex w-full items-start justify-between gap-4 py-5 text-left outline-none",
                      "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                  >
                    <span className="flex gap-3 sm:gap-5 min-w-0">
                      <span className="font-mono text-sm text-muted-foreground tabular-nums pt-0.5 shrink-0 w-7">
                        {n}
                      </span>
                      <span className="font-sans text-base sm:text-lg text-foreground leading-snug pr-2">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="shrink-0 h-8 w-8 flex items-center justify-center border border-foreground/15 bg-card rounded-sm group-data-[state=open]:bg-foreground/5"
                      aria-hidden
                    >
                      <Plus className="h-4 w-4 text-foreground transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pl-0 sm:pl-12 pr-10 pb-5">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            );
          })}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
