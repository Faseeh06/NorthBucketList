"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { SectionContainer } from "@/components/landing/shared/section-container";
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
    <section className="border-t border-foreground/10 bg-muted/25 py-16 font-sans lg:py-20">
      <SectionContainer>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-2">
            <BrandSquare />
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
              FAQ
            </p>
          </div>

          <h2 className="mb-2 font-sans text-4xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
            Common questions
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
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
                    <span className="flex min-w-0 gap-3 sm:gap-5">
                      <span className="w-7 shrink-0 pt-0.5 font-mono text-sm tabular-nums text-muted-foreground">
                        {n}
                      </span>
                      <span className="pr-2 font-sans text-base leading-snug text-foreground sm:text-lg">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-foreground/15 bg-card group-data-[state=open]:bg-foreground/5"
                      aria-hidden
                    >
                      <Plus className="h-4 w-4 text-foreground transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 pl-0 pr-10 sm:pl-12">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
              );
            })}
          </AccordionPrimitive.Root>
        </div>
      </SectionContainer>
    </section>
  );
}
