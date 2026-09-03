"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ApiKeyCheckProps {
  children: React.ReactNode;
}

export function ApiKeyCheck({ children }: ApiKeyCheckProps) {
  const apiKey = process.env.NEXT_PUBLIC_TAMBO_API_KEY;
  const isApiKeyMissing = !apiKey || apiKey.trim() === "" || apiKey === "api-key-here";

  return (
    <div className="w-full space-y-3">
      {/* Always render the Launch Button */}
      <div className="w-full">{children}</div>

      {/* API Key Status Indicator */}
      <div className="flex items-center justify-center gap-2 text-xs">
        {isApiKeyMissing ? (
          <div className="flex items-center gap-1.5 text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-lg">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>API Key missing in <code className="text-amber-300 font-mono">.env.local</code> (Get a key at tambo.co)</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tambo Agent Initialized & Active</span>
          </div>
        )}
      </div>
    </div>
  );
}
