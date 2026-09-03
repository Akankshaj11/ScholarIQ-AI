"use client";

import { TamboProvider } from "@tambo-ai/react";

export default function TamboChat({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TamboProvider apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}>
      {children}

    </TamboProvider>
  );
}


