"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    text: "I described my SaaS landing page and had a production-ready site in 30 seconds. Absolutely mind-blowing.",
  },
  {
    name: "Marcus Johnson",
    role: "Freelance Designer",
    text: "As a designer, I was skeptical. But the AI nailed the aesthetics. I just tweaked a few colors and shipped it.",
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Owner",
    text: "Saved me weeks of back-and-forth with developers. My online store was live the same day I signed up.",
  },
  {
    name: "David Park",
    role: "Restaurant Owner",
    text: "I had zero tech skills and needed a website fast. sitenow.ai gave me a beautiful site in minutes — my customers love it.",
  },
];

const SocialProof = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 max-w-6xl mx-auto items-stretch min-h-[420px]">
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                Trusted by
                <br />
                builders
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Loved by businesses owners &amp; creators
              </p>
            </div>
            <div className="flex -space-x-2 mt-8">
              {testimonials.map((person, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 border-card ${
                    i === current
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  } transition-colors`}
                >
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-10 md:p-12 flex flex-col justify-center">
            <span className="text-5xl font-black text-primary/20 leading-none mb-4">&ldquo;</span>
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-8">
              {t.text}
            </p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={next}
              className="flex-1 rounded-3xl bg-primary/10 hover:bg-primary/15 border border-border flex items-center justify-center gap-2 text-foreground font-semibold transition-colors cursor-pointer"
            >
              Next
              <ChevronRight size={18} className="text-primary" />
            </button>
            <button
              onClick={prev}
              className="flex-1 rounded-3xl bg-muted hover:bg-muted/80 border border-border flex items-center justify-center gap-2 text-foreground font-semibold transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} className="text-muted-foreground" />
              Previous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
