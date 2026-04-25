import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { routes } from "@/lib/content/site";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";

const points = [
  {
    title: "After the road",
    body: "We check in on pace, hosts, and how weather affected the day—so notes reflect the real trip, not a brochure guess.",
    icon: MessageCircle,
  },
  {
    title: "No cherry-picking",
    body: "If something was rough, you will still see that we flexed the plan. Transparency is the point of this page.",
    icon: ShieldCheck,
  },
  {
    title: "Valley teams",
    body: "Guides and drivers are named in context where it matters, because credit belongs in the highlands first.",
    icon: Users,
  },
] as const;

/**
 * Light editorial bridge between the hero and the dark testimonials band on /feedbacks.
 */
export function FeedbacksBridgeSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            <span className="h-1.5 w-1.5 shrink-0" style={{ backgroundColor: BRAND_ACCENT_HEX }} aria-hidden />
            Why this page exists
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Words from the road, not a script
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every route has different weather, roads, and group chemistry. The quotes below are from
            emails and follow-ups we received after runs in Hunza, Skardu, Naran, and the KKH—short,
            unfiltered, and kept with permission.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-card/80 p-5 text-left shadow-sm sm:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-muted/50">
                  <Icon className="h-4 w-4 text-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="font-sans text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center">
          <Link
            href={routes.trips}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground"
          >
            See how we plan a week in the north
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </p>
      </SectionContainer>
    </section>
  );
}
