"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { aboutContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const { faq } = aboutContent;

export function AboutFaq() {
  return (
    <section className="border-t border-foreground/10 bg-background py-16 font-sans lg:py-24">
      <SectionContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 lg:sticky lg:top-28">
              <BrandSquare />
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                {faq.kicker}
              </p>
            </div>
            <h2 className="mt-4 font-sans text-3xl leading-[0.95] tracking-[-0.04em] text-foreground sm:text-4xl">
              {faq.title}
            </h2>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
              {faq.description}
            </p>
          </div>

          <div className="border-t border-foreground/10 pt-0 lg:col-span-8">
            <AccordionPrimitive.Root type="single" collapsible className="w-full">
              {faq.items.map((item, i) => {
                const n = String(i + 1).padStart(2, "0");
                return (
                  <AccordionPrimitive.Item
                    key={item.q}
                    value={`about-faq-${i}`}
                    className="border-b border-foreground/10"
                  >
                    <AccordionPrimitive.Header>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          "group flex w-full items-start justify-between gap-4 py-5 text-left outline-none md:py-6",
                          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        )}
                      >
                        <span className="flex min-w-0 gap-3 sm:gap-5">
                          <span className="w-8 shrink-0 pt-0.5 font-mono text-sm tabular-nums text-muted-foreground sm:w-9">
                            {n}
                          </span>
                          <span className="pr-2 font-sans text-base font-medium leading-snug text-foreground sm:text-lg">
                            {item.q}
                          </span>
                        </span>
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-foreground/15 bg-card text-muted-foreground group-data-[state=open]:bg-foreground/5"
                          aria-hidden
                        >
                          <Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                        </span>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-5 pl-0 pr-2 sm:pl-14 sm:pr-8 md:pb-6">
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
        </div>
      </SectionContainer>
    </section>
  );
}
