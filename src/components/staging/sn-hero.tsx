"use client";

import { useState, useEffect, useRef } from "react";

const TYPING_PREFIX = "Ask sitenow.ai to create a ";
const TYPING_SUFFIXES = [
  "portfolio website...",
  "business website...",
  "landing page...",
  "e-commerce website...",
];

const HERO_MODES = [
  { key: "idea", chip: null, prompt: "" },
  { key: "portfolio", chip: "Portfolio", prompt: "A portfolio site for a film photographer, moody and editorial" },
  { key: "business", chip: "Business", prompt: "A website for a Brooklyn bakery with hours, menu, and online ordering" },
  { key: "landing", chip: "Landing page", prompt: "A launch page for a new product with waitlist signup and feature highlights" },
  { key: "store", chip: "E-commerce", prompt: "An online store for handmade ceramics with a curated catalog" },
];

function useTypingSuffix(suffixes: string[]) {
  const [display, setDisplay] = useState("");
  const idx = useRef(0);
  const phase = useRef<"typing" | "pausing" | "deleting">("typing");
  const pos = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = suffixes[idx.current];

      if (phase.current === "typing") {
        pos.current++;
        setDisplay(word.slice(0, pos.current));
        if (pos.current >= word.length) {
          phase.current = "pausing";
          timer = setTimeout(tick, 2000);
        } else {
          timer = setTimeout(tick, 50 + Math.random() * 30);
        }
      } else if (phase.current === "pausing") {
        phase.current = "deleting";
        timer = setTimeout(tick, 30);
      } else if (phase.current === "deleting") {
        pos.current--;
        setDisplay(word.slice(0, pos.current));
        if (pos.current <= 0) {
          idx.current = (idx.current + 1) % suffixes.length;
          phase.current = "typing";
          timer = setTimeout(tick, 300);
        } else {
          timer = setTimeout(tick, 25);
        }
      }
    }

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [suffixes]);

  return display;
}

const SnHero = () => {
  const [mode, setMode] = useState(HERO_MODES[0]);
  const [heroValue, setHeroValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const typingSuffix = useTypingSuffix(TYPING_SUFFIXES);

  const handleSubmit = () => {
    const input = heroValue.trim();
    if (input.length < 10) return;
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    window.location.href = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
  };

  // Show typing animation only when textarea is empty and not focused
  const showTyping = !heroValue && !isFocused;

  return (
    <section className="sn-hero">
      <div className="sn-hero-bg" />

      <div className="sn-container sn-hero-inner">
        <h1 className="sn-hero-title">
          What will you build?
        </h1>
        <p className="sn-hero-sub">
          Describe your idea. Our AI builds and launches your full-stack website in minutes.
        </p>
        <div className={"sn-ai-builder" + (heroValue ? " has-value" : "")}>
          <div className="sn-ai-textarea-wrap">
            {showTyping && (
              <div className="sn-ai-typing" aria-hidden="true">
                {TYPING_PREFIX}{typingSuffix}
                <span className="sn-ai-typing-cursor" />
              </div>
            )}
            <textarea
              className="sn-ai-textarea"
              placeholder=""
              value={heroValue}
              onChange={(e) => setHeroValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div className="sn-ai-quick">
            {HERO_MODES.filter((m) => m.chip).map((m) => (
              <button
                key={m.key}
                className={"sn-ai-quick-btn" + (mode.key === m.key ? " is-active" : "")}
                onClick={() => { setMode(m); setHeroValue(m.prompt); }}
              >
                {m.chip}
              </button>
            ))}
          </div>
          <button className="sn-ai-submit" aria-label="Generate" onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SnHero;
