import { NextResponse } from "next/server";

export const runtime = "nodejs";

type DiscoverAiBody = {
  query?: string;
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

  if (!query) {
    return NextResponse.json({ error: "Please enter a route query." }, { status: 400 });
  }

  const prompt = `You are a practical Northern Pakistan trip planner for NorthBucket List.
User request: "${query}"

Rules:
- Be realistic. If timeline/budget/transport is not feasible, say that clearly first.
- Do not give generic advice. Give concrete route guidance.
- If the user asks a city-to-city trip, include rough travel-time reality.
- Keep answer plain text and under 180 words.

Output format (exact headings):
Feasibility:
Best match:
Suggested plan:
Budget note:
Safety note:

In Suggested plan, provide a short day-by-day draft (e.g., Day 1, Day 2...).`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.35,
      max_tokens: 360,
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
