"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      setSubmitted(true);
      setPrompt("");
    }
  };

  return (
    <section id="hero" className="section-hero min-h-screen flex flex-col items-center justify-center pt-16 pb-12 relative overflow-hidden">
      <div className="glow-blob w-[500px] h-[500px] bg-glow-primary top-[10%] left-[15%] animate-pulse-glow" />
      <div className="glow-blob w-[400px] h-[400px] bg-glow-accent bottom-[15%] right-[10%] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-6 animate-slide-up">
          Bring your{" "}
          <span className="gradient-text">ideas</span>
          <br />
          to life.
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Create beautiful websites with words, not code.
        </p>

        {submitted ? (
          <div className="animate-slide-up bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 inline-block text-foreground">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        ) : (
          <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-4"
            >
              <textarea
                placeholder="Describe the website you want to build..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none resize-none text-base leading-relaxed"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  Trusted by 2,000+ early adopters
                </span>
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
