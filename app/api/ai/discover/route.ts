import { NextResponse } from "next/server";

export const runtime = "nodejs";

type DiscoverAiBody = {
  query?: string;
  history?: Array<{ role?: "user" | "assistant"; content?: string }>;
};

const DEFAULT_MODEL = "llama-3.3-70b-versatile";

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    return NextResponse.json(
      { error: "AI is not configured yet. Add GROQ_API_KEY in your env." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as DiscoverAiBody;
  const query = body.query?.trim();
  const history = Array.isArray(body.history) ? body.history : [];

  if (!query) {
    return NextResponse.json({ error: "Please enter a route query." }, { status: 400 });
  }

  const prompt = `You are a senior Northern Pakistan trip planner for NorthBucket List.
Latest user request: "${query}"

Rules:
- Be realistic. If timeline/budget/transport is not feasible, say that clearly first.
- Do not give generic advice. Give concrete route guidance.
- If the user asks a city-to-city trip, include rough travel-time reality.
- Keep answer plain text and under 260 words.
- Include rough price ranges in PKR when relevant.
- Mention food options and typical per-day meal cost range.
- Mention transport ways: public transport, private car/jeep, and bike (if relevant).
- If user asks a very short timeline, provide a feasible alternative plan.

Output format (exact headings):
Feasibility:
Best place match:
Suggested plan:
Budget per person:
Food & stay notes:
Transport options:
Safety note:

In Suggested plan, provide a short day-by-day draft (e.g., Day 1, Day 2...).`;

  const conversation = [
    {
      role: "system",
      content:
        "You are accurate, practical, and concise. Avoid fantasy itineraries. Use plain language and explicit constraints.",
    },
    ...history
      .filter((msg) => (msg.role === "user" || msg.role === "assistant") && msg.content?.trim())
      .slice(-8)
      .map((msg) => ({ role: msg.role as "user" | "assistant", content: msg.content as string })),
    { role: "user", content: prompt },
  ];

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: conversation,
      temperature: 0.35,
      max_tokens: 520,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI request failed. Please try again." }, { status: 502 });
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const answer = data.choices?.[0]?.message?.content?.trim();

  if (!answer) {
    return NextResponse.json({ error: "AI returned an empty response." }, { status: 502 });
  }

  return NextResponse.json({ answer });
}
