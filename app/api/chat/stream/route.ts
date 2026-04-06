import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const encoder = new TextEncoder();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeInput(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 360);
}

function buildReply(message: string) {
  const lower = message.toLowerCase();

  const opening =
    "Student Reality Lab analysis: your question sits at the center of this museum route. " +
    "We can treat each garment as a data point with environmental cost, labor history, and repair potential.";

  const waterLine = lower.includes("water")
    ? " Since you asked about water, track lifecycle impact with one number: liters saved when a repair extends garment life by one season."
    : " A practical metric to start with is liters of water embedded in one garment before it even reaches a closet.";

  const repairLine = lower.includes("repair") || lower.includes("mend")
    ? " For repair strategy, document material fatigue, choose a stitch type, and photograph before/after evidence for your lab notes."
    : " Add a repair protocol: inspect seams, patch stress points, and log whether the intervention prevents replacement purchasing.";

  const communityLine = lower.includes("community") || lower.includes("social")
    ? " For community impact, compare your choices with peer pledges and report what actions scale across the class."
    : " To connect personal and collective change, summarize one action you can replicate in your student community this week.";

  const close = "If you want, I can generate a 3-step lab worksheet from this prompt next.";

  return `${opening}${waterLine}${repairLine}${communityLine} ${close}`;
}

function toChunks(text: string) {
  const words = text.split(" ");
  const chunks: string[] = [];

  for (let i = 0; i < words.length; i += 3) {
    chunks.push(`${words.slice(i, i + 3).join(" ")} `);
  }

  return chunks;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const rawMessage = searchParams.get("message") ?? "";
  const message = sanitizeInput(rawMessage);

  if (!message) {
    return NextResponse.json({ error: "Missing message query parameter." }, { status: 400 });
  }

  const reply = buildReply(message);
  const chunks = toChunks(reply);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "open" })}\n\n`));

      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "token", value: chunk })}\n\n`));
        await sleep(55);
      }

      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`));
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    }
  });
}
