"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import Link from "next/link";
import { Brain, ArrowLeft, Sparkles } from "lucide-react";

// Polyfill for crypto.randomUUID in non-secure HTTP contexts (e.g. local IP addresses)
if (typeof window !== "undefined") {
  if (!window.crypto) {
    // @ts-expect-error fallback window.crypto for unsecure contexts
    window.crypto = {};
  }
  if (!window.crypto.randomUUID) {
    window.crypto.randomUUID = function randomUUID() {
      if (window.crypto && window.crypto.getRandomValues) {
        return ("" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
          (c ^ (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
        ) as `${string}-${string}-${string}-${string}-${string}`;
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }) as `${string}-${string}-${string}-${string}-${string}`;
    };
  }
}

export default function ChatPage() {
  // Load MCP server configurations
  const mcpServers = useMcpServers();

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY || ""}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <div className="h-screen flex flex-col bg-slate-950 text-slate-100">
        {/* Header Bar */}
        <header className="px-6 py-3 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1.5 text-xs font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <div className="h-4 w-px bg-slate-800 mx-1" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-violet-500/20 border border-violet-500/30 shrink-0">
                <img src="/scholariq_logo.png" alt="ScholarIQ AI Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="font-bold text-base tracking-tight leading-none text-white">
                  ScholarIQ <span className="text-violet-400">AI</span>
                </h1>
                <span className="text-[10px] text-slate-400 font-mono">Academic Agent</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/60 text-xs text-violet-300">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span className="font-medium">ScholarIQ Agent Active</span>
            </div>
          </div>
        </header>

        {/* Chat Thread Container */}
        <div className="flex-1 overflow-hidden">
          <MessageThreadFull className="max-w-4xl mx-auto h-full" />
        </div>
      </div>
    </TamboProvider>
  );
}
