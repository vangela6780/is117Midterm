"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function id(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function StudentRealityLabChat() {
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: id("assistant"),
      role: "assistant",
      content:
        "Welcome to Student Reality Lab chat. Ask about water footprint, repair methods, or how social proof can shift clothing behavior."
    }
  ]);

  const streamRef = useRef<EventSource | null>(null);

  const disableSend = useMemo(() => isStreaming || !input.trim(), [isStreaming, input]);

  const closeStream = () => {
    if (streamRef.current) {
      streamRef.current.close();
      streamRef.current = null;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();
    if (!question || isStreaming) {
      return;
    }

    closeStream();
    setIsStreaming(true);

    const userId = id("user");
    const assistantId = id("assistant");

    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", content: question },
      { id: assistantId, role: "assistant", content: "" }
    ]);

    setInput("");

    const source = new EventSource(`/api/chat/stream?message=${encodeURIComponent(question)}`);
    streamRef.current = source;

    source.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data) as { type: "open" | "token" | "done"; value?: string };

        if (payload.type === "token" && payload.value) {
          setMessages((prev) =>
            prev.map((message) =>
              message.id === assistantId
                ? { ...message, content: `${message.content}${payload.value}` }
                : message
            )
          );
        }

        if (payload.type === "done") {
          setIsStreaming(false);
          closeStream();
        }
      } catch {
        setIsStreaming(false);
        closeStream();
      }
    };

    source.onerror = () => {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId && !message.content
            ? {
                ...message,
                content:
                  "Streaming connection closed before a response completed. Retry your question to re-open the SSE channel."
              }
            : message
        )
      );

      setIsStreaming(false);
      closeStream();
    };
  };

  return (
    <section className="artifact-card p-5 sm:p-6" aria-label="Student Reality Lab streaming chat">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Student Reality Lab</p>
          <h3 className="museum-title mt-3 text-[clamp(1.7rem,4.5vw,2.1rem)] leading-[0.95] text-ash">
            Live SSE Chat Console
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ash/80 sm:text-base">
            This console uses Server-Sent Events to stream assistant tokens in real time so each answer arrives progressively,
            not as a single static block.
          </p>
        </div>
        <div className="border-2 border-ash bg-panel px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ash">
          {isStreaming ? "Status: streaming" : "Status: idle"}
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-2 border-ash bg-background/70 p-4">
        <div className="max-h-[280px] space-y-3 overflow-y-auto pr-1">
          {messages.map((message) => (
            <article
              key={message.id}
              className={
                message.role === "user"
                  ? "ml-auto w-fit max-w-[90%] border-2 border-ash bg-ash px-3 py-2 text-sm leading-7 text-mist"
                  : "w-fit max-w-[92%] border-2 border-ash bg-panel px-3 py-2 text-sm leading-7 text-ash"
              }
            >
              <p className="display-type mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-clay">
                {message.role === "user" ? "You" : "Lab assistant"}
              </p>
              <p>{message.content || "Streaming..."}</p>
            </article>
          ))}
        </div>

        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="lab-chat-input">
            Ask the Student Reality Lab assistant
          </label>
          <input
            id="lab-chat-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask: how do repair choices reduce waste over time?"
            className="border-2 border-ash bg-mist px-3 py-3 text-sm text-ash outline-none placeholder:text-ash/55"
            maxLength={360}
          />
          <button
            type="submit"
            disabled={disableSend}
            className="inline-flex items-center justify-center border-2 border-ash bg-ash px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition enabled:hover:-translate-y-0.5 enabled:hover:bg-clay disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isStreaming ? "Streaming..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
