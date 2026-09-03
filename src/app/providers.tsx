"use client";

import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";

// Polyfill for crypto.randomUUID in non-secure HTTP contexts (e.g. accessing via local IP address)
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

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKey = process.env.NEXT_PUBLIC_TAMBO_API_KEY;

  if (!apiKey) {
    return <>{children}</>;
  }

  return (
    <TamboProvider
      apiKey={apiKey}
      components={components}
      tools={tools}
    >
      {children}
    </TamboProvider>
  );
}
