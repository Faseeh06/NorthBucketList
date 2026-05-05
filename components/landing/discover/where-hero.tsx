"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Pause, Play, X, Minus, MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Discover top — large hero, four filter chips, AI-style rounded search.
 */
export function DiscoverWhereHero() {
  const [q, setQ] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyInput, setReplyInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [chatCollapsed, setChatCollapsed] = useState(false);

  async function requestPlan(userText: string) {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: userText,
          history: messages,
        }),
      });
      const data = (await res.json()) as { answer?: string; error?: string };
      if (!res.ok || !data.answer) {
        throw new Error(data.error || "Could not generate a route suggestion.");
      }
      setMessages((prev) => [...prev, { role: "assistant", content: data.answer as string }]);
      setChatOpen(true);
      setChatMinimized(false);
      setChatCollapsed(false);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not generate a route suggestion.";
      setMessages((prev) => [...prev, { role: "assistant", content: `Error: ${msg}` }]);
      setChatOpen(true);
      setChatMinimized(false);
      setChatCollapsed(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleAsk(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!q.trim()) return;

    const composedQuery = [
      `What to ask: ${q}`,
      dates ? `Dates: ${dates}` : "",
      budget ? `Budget: ${budget}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    setMessages((prev) => [...prev, { role: "user", content: composedQuery }]);
    await requestPlan(composedQuery);
  }

  async function handleReplySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!replyInput.trim() || loading) return;
    const followup = replyInput.trim();
    setReplyInput("");
    setMessages((prev) => [...prev, { role: "user", content: followup }]);
    await requestPlan(followup);
  }

  return (
    <section className="w-full bg-background font-sans">
      <div className="w-full pb-16 pt-0 sm:pb-20 md:pb-24">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-b-[2.75rem] md:rounded-b-none md:[clip-path:ellipse(120%_100%_at_50%_0%)]">
            <div className="relative h-[58vh] min-h-[320px] max-h-[860px] sm:h-[72vh] sm:min-h-[420px]">
              <Image
                src="/images/passu.jpg"
                alt="Passu landscape"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 80vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/35" aria-hidden />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="font-redob text-[clamp(1.85rem,8vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.03em] sm:text-[clamp(2rem,5.5vw,4.5rem)]">
                  Where in the north
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:max-w-2xl sm:text-base md:text-lg">
                  Ask by plan type, dates, and budget to get a practical route suggestion.
                </p>
              </div>
            </div>
          </div>

          <form
            className="relative z-20 mx-auto mt-4 w-[calc(100%-1.25rem)] rounded-3xl border border-foreground/10 bg-card p-3 shadow-[0_14px_38px_-18px_rgba(0,0,0,0.25)] sm:-mt-11 sm:w-[min(100%-2.5rem,1120px)] sm:rounded-full sm:p-2.5"
            onSubmit={handleAsk}
          >
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2 lg:grid-cols-[1.35fr_1fr_1fr_auto]">
              <label className="flex min-h-11 items-center gap-2 border-b border-foreground/20 px-1.5 sm:min-h-12 sm:rounded-full sm:border-0 sm:bg-transparent sm:px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="What to ask"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <label className="flex min-h-11 items-center border-b border-foreground/20 px-1.5 sm:min-h-12 sm:rounded-full sm:border-0 sm:bg-transparent sm:px-4">
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Dates calendar"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <label className="flex min-h-11 items-center border-b border-foreground/20 px-1.5 sm:min-h-12 sm:rounded-full sm:border-0 sm:bg-transparent sm:px-4">
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Budget"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-0 sm:min-h-12 sm:text-base"
              >
                {loading ? "Asking..." : "Ask AI"}
              </button>
            </div>
          </form>

        </div>
      </div>
      {chatOpen && !chatMinimized && (
        <div className="fixed inset-x-0 bottom-0 z-50 w-full overflow-hidden rounded-t-2xl border border-foreground/10 bg-card shadow-2xl sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-[min(92vw,420px)] sm:rounded-2xl">
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
            <p className="text-sm font-semibold text-foreground">NBL AI Planner</p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setChatCollapsed((v) => !v)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={chatCollapsed ? "Expand planner chat" : "Collapse planner chat"}
              >
                {chatCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => setChatMinimized(true)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Minimize planner chat"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close planner chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          {!chatCollapsed && (
            <>
              <div className="max-h-[52vh] space-y-3 overflow-y-auto bg-muted/20 p-4">
                {messages.length === 0 && (
                  <p className="text-sm text-muted-foreground">Ask your first trip question to start planning.</p>
                )}
                {messages.map((m, i) => (
                  <div
                    key={`${m.role}-${i}`}
                    className={cn(
                      "max-w-[92%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "ml-auto bg-foreground text-background"
                        : "mr-auto border border-foreground/10 bg-card text-foreground",
                    )}
                  >
                    {m.content}
                  </div>
                ))}
                {loading && <p className="text-sm text-muted-foreground">Thinking...</p>}
              </div>
              <form onSubmit={handleReplySubmit} className="border-t border-foreground/10 p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={replyInput}
                    onChange={(e) => setReplyInput(e.target.value)}
                    placeholder="Reply to AI..."
                    className="h-10 w-full rounded-full border border-foreground/15 bg-background px-3 text-sm text-foreground outline-none focus:border-foreground/30"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700 disabled:opacity-70"
                    aria-label="Send follow-up message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
      {chatOpen && chatMinimized && (
        <button
          type="button"
          onClick={() => setChatMinimized(false)}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-lg transition-colors hover:bg-muted"
        >
          <MessageCircle className="h-4 w-4" />
          Open AI chat
        </button>
      )}
    </section>
  );
}

const PROMO_SLIDES = [
  { src: "/images/passu.jpg", alt: "Passu and Karakoram peaks" },
  { src: "/images/hunza.webp", alt: "Hunza high valleys" },
  { src: "/images/skardu.webp", alt: "Skardu and Baltistan" },
  { src: "/images/kumrat.jpg", alt: "Kumrat forest and streams" },
] as const;

const SLIDESHOW_MS = 1500;

type PromoBannerProps = {
  /** Override slides; defaults to `PROMO_SLIDES` */
  slides?: readonly { src: string; alt: string }[];
  /** Autoplay interval in ms (default 1500) */
  intervalMs?: number;
};

/**
 * Two-column strip: theme colors + Redob title, inset rounded slideshow.
 * Slides use stacked absolute images (reliable with `next/image` + fill).
 */
export function DiscoverPromoBanner({ slides = PROMO_SLIDES, intervalMs = SLIDESHOW_MS }: PromoBannerProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs, paused]);

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-foreground/12 bg-card p-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] sm:p-4 md:p-5">
          {count > 1 && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-background"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          )}

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:min-h-[min(100%,420px)] lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10">
            <div className="order-1 flex min-h-0 min-w-0 w-full justify-center lg:justify-start">
              <div className="relative z-0 h-[260px] w-full max-w-md overflow-hidden rounded-2xl bg-muted/30 sm:h-[320px] md:h-[360px] lg:h-[400px] lg:max-w-none">
                {slides.map((s, i) => (
                  <div
                    key={s.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out",
                      i === index ? "z-10 opacity-100" : "z-0 opacity-0"
                    )}
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      priority={i === 0}
                    />
                  </div>
                ))}
                <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 rounded-full bg-black/55 px-2.5 py-0.5 font-mono text-[10px] text-white shadow-sm sm:text-xs">
                  @NorthBucket
                </div>
                {count > 1 && (
                  <div
                    className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 flex gap-1.5"
                    aria-hidden
                  >
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors",
                          i === index ? "bg-white" : "bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="order-2 flex w-full min-w-0 flex-col justify-center px-1 py-1 sm:px-2 md:px-0">
              <h2 className="max-w-lg font-redob text-2xl uppercase leading-[1.05] tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
                Trips and views for the way you travel
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Curated Hunza, Skardu, and high-road days—book with a team rooted in Gilgit-Baltistan and
                Khyber Pakhtunkhwa.
              </p>
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/trips"
                  className="inline-flex min-h-10 items-center justify-center border-2 border-foreground bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  Explore trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
