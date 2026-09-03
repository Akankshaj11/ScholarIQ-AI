"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiKeyCheck } from "@/components/ApiKeyCheck";
import {
  Brain,
  BookOpen,
  HelpCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Loader2,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = (targetPath = "/chat") => {
    setIsLaunching(true);
    router.push(targetPath);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between relative overflow-hidden">
      {/* FULL SCREEN LAUNCHING SPINNER OVERLAY */}
      {isLaunching && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center space-y-6 animate-in fade-in duration-300">
          <div className="relative flex items-center justify-center">
            {/* Outer Spinning Ring */}
            <div className="w-20 h-20 rounded-full border-4 border-violet-500/20 border-t-violet-400 border-r-cyan-400 animate-spin" />
            {/* Center Logo Icon */}
            <div className="absolute w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-violet-500/40 border border-violet-400/40">
              <img src="/scholariq_logo.png" alt="ScholarIQ AI Logo" className="w-full h-full object-cover animate-pulse" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-violet-300 bg-clip-text text-transparent">
              Launching ScholarIQ Copilot...
            </h3>
            <p className="text-sm text-slate-400 max-w-sm">
              Initializing AI agent workspace, tools & conversational context.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-violet-400 bg-violet-950/60 px-4 py-2 rounded-full border border-violet-800/50">
            <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
            <span>Connecting to Agent Environment</span>
          </div>
        </div>
      )}

      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-violet-600/20 via-indigo-500/20 to-cyan-400/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Navigation Header */}
      <header className="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-10 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-violet-500/30 border border-violet-500/40 shrink-0">
            <img src="/scholariq_logo.png" alt="ScholarIQ AI Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              ScholarIQ <span className="text-violet-400">AI</span>
            </span>
            <span className="block text-[10px] text-violet-400 font-mono tracking-wider uppercase">Academic Copilot</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Agent Active</span>
          </div>
          <button
            onClick={() => handleLaunch("/chat")}
            disabled={isLaunching}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-md shadow-violet-600/30 flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>Start Chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="max-w-5xl w-full px-6 py-12 flex flex-col items-center text-center z-10 space-y-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950/60 border border-violet-700/50 text-violet-300 text-xs font-medium backdrop-blur-md shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next-Generation AI Learning & Exam Engine</span>
        </div>

        {/* Title */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Master Any Subject with{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              ScholarIQ AI
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Your personal academic copilot designed to break down complex computer science concepts, generate revision notes, practice interactive quizzes, and build tailored study plans.
          </p>
        </div>

        {/* Launch Box */}
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-2xl backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Zap className="w-4 h-4 text-amber-400" /> Intelligent Agent Ready
            </span>
            <span className="text-violet-400 font-mono">v2.0 Agentic</span>
          </div>

          <ApiKeyCheck>
            <button
              onClick={() => handleLaunch("/chat")}
              disabled={isLaunching}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-base bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 group transition-all cursor-pointer disabled:opacity-50"
            >
              <span>Launch ScholarIQ Copilot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ApiKeyCheck>
        </div>

        {/* Quick Prompts */}
        <div className="w-full max-w-3xl text-left bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Popular Prompts to Try:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => handleLaunch("/chat")}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm text-slate-200 transition flex items-center justify-between group cursor-pointer text-left"
            >
              <span>"Explain Operating System deadlock in simple words"</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>
            <button
              onClick={() => handleLaunch("/chat")}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm text-slate-200 transition flex items-center justify-between group cursor-pointer text-left"
            >
              <span>"Make revision notes for DBMS normalization"</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>
            <button
              onClick={() => handleLaunch("/chat")}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm text-slate-200 transition flex items-center justify-between group cursor-pointer text-left"
            >
              <span>"Create a quiz on Computer Networks"</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>
            <button
              onClick={() => handleLaunch("/chat")}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-sm text-slate-200 transition flex items-center justify-between group cursor-pointer text-left"
            >
              <span>"Plan my study schedule for 5 days (OS, DBMS, CN)"</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/50 transition-all text-left space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Doubt Solver</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Step-by-step simple explanations for complex CS, engineering, and academic concepts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all text-left space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Revision Notes</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Summarizes dense course chapters into key bullet points and high-yield exam notes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all text-left space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Quiz Generator</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Auto-generates multiple-choice practice tests to evaluate your understanding before exams.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 transition-all text-left space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-100">Study Planner</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Builds customized daily and weekly study timetables tailored to your deadlines.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/60 py-6 px-6 text-center text-slate-500 text-xs z-10 flex flex-col sm:flex-row justify-between items-center max-w-6xl">
        <p>© 2026 ScholarIQ AI. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <span className="flex items-center gap-1.5 text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AI Agent Ready
          </span>
        </div>
      </footer>
    </div>
  );
}
