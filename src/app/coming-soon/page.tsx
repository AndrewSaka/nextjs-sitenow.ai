"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(240,15%,6%)] text-white flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[hsl(258,80%,50%)] opacity-[0.08] blur-[150px] top-[-10%] left-[-10%] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[hsl(225,80%,50%)] opacity-[0.06] blur-[150px] bottom-[-10%] right-[-10%] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-wide-color.svg"
          alt="sitenow.ai"
          className="h-10 md:h-12 w-auto mb-16 brightness-110"
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(258,70%,60%)] animate-pulse" />
          Coming Soon
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          Something{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(258,70%,60%)] to-[hsl(225,75%,60%)]">
            beautiful
          </span>
          <br />
          is brewing.
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-md mb-12 leading-relaxed">
          We&apos;re building the fastest way to go from idea to live website. Be the first to know when we launch.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[hsl(258,70%,60%)]/20 bg-[hsl(258,70%,60%)]/10 text-white/90">
            <span className="text-xl">✨</span>
            <span>You&apos;re on the list. We&apos;ll be in touch!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1.5 pl-5 focus-within:border-[hsl(258,70%,60%)]/40 transition-colors">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/30 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[hsl(240,15%,6%)] text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Notify me
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}

        <p className="text-xs text-white/25 mt-16">
          © {new Date().getFullYear()} sitenow.ai · All rights reserved.
        </p>
      </div>
    </div>
  );
}
