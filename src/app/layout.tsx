import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScholarIQ AI — Academic Copilot & Exam Preparation Engine",
  description: "Your intelligent AI academic copilot for concept breakdown, exam revision, quiz generation, and personalized study timetables.",
  icons: {
    icon: "/scholariq_logo.png",
    shortcut: "/favicon.ico",
    apple: "/scholariq_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

