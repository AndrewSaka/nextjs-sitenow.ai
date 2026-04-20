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
  { key: "business", chip: "Business", prompt: "A website for a Brooklyn bakery with hours, menu, and online ordering" },
  { key: "store", chip: "E-commerce", prompt: "An online store for handmade ceramics with a curated catalog" },
  { key: "portfolio", chip: "Portfolio", prompt: "A portfolio site for a film photographer, moody and editorial" },
  { key: "landing", chip: "Landing page", prompt: "A launch page for a new product with waitlist signup and feature highlights" },
];

type HeroMode = (typeof HERO_MODES)[number];

// ---------- typing suffix hook ----------
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

// ---------- animated counter hook ----------
function useCounter(target: number, ms = 1600) {
  const [n, setN] = useState(Math.round(target * 0.82));

  useEffect(() => {
    const start = performance.now();
    const from = n;
    let raf: number;

    function tick(t: number) {
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return n;
}

// ---------- shared builder (input + chips + submit) ----------
interface BuilderProps {
  heroValue: string;
  setHeroValue: (value: string) => void;
  mode: HeroMode | null;
  setMode: (mode: HeroMode) => void;
  showTyping: boolean;
  typingSuffix: string;
  onSubmit: () => void;
}

function Builder({
  heroValue,
  setHeroValue,
  mode,
  setMode,
  showTyping,
  typingSuffix,
  onSubmit,
}: BuilderProps) {
  const [isFocused, setIsFocused] = useState(false);
  const shouldShowTyping = showTyping && !isFocused;

  return (
    <div className={"sn-ai-builder" + (heroValue ? " has-value" : "")}>
      <div className="sn-ai-textarea-wrap">
        {shouldShowTyping && (
          <div className="sn-ai-typing" aria-hidden="true">
            {TYPING_PREFIX}{typingSuffix}
            <span className="sn-ai-typing-cursor" />
          </div>
        )}
        <textarea
          className="sn-ai-textarea"
          value={heroValue}
          onChange={(e) => setHeroValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="sn-ai-quick">
        {HERO_MODES.map((m) => (
          <button
            key={m.key}
            className={"sn-ai-quick-btn" + (mode && mode.key === m.key ? " is-active" : "")}
            onClick={() => { setMode(m); setHeroValue(m.prompt); }}
          >
            {m.chip}
          </button>
        ))}
      </div>
      <button className="sn-ai-submit" aria-label="Generate" onClick={onSubmit}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// ---------- Variant A: Aurora ----------
function HeroAurora(props: BuilderProps) {
  const liveCount = useCounter(2847);

  return (
    <section className="sn-hero sn-hero--aurora">
      <div className="sn-hero-bg sn-aurora">
        <div className="sn-aurora-blob sn-aurora-blob--1" />
        <div className="sn-aurora-blob sn-aurora-blob--2" />
        <div className="sn-aurora-blob sn-aurora-blob--3" />
        <div className="sn-aurora-grain" />
        <div className="sn-aurora-grid" />
      </div>
      <div className="sn-container sn-hero-inner">
        <div className="sn-hero-eyebrow sn-hero-eyebrow--desktop">
          <span className="sn-hero-dot" />
          <span className="sn-hero-eyebrow-num">{liveCount.toLocaleString()}</span>
          {" "}sites built today
        </div>
        <h1 className="sn-hero-title sn-hero-title--aurora">
          What will you build <span className="sn-hero-title-em">today?</span>
        </h1>
        <div className="sn-hero-livecount sn-hero-livecount--mobile">
          <span className="sn-hero-dot" />
          <strong>{liveCount.toLocaleString()}</strong>
          <span>sites built today</span>
        </div>
        <p className="sn-hero-sub">
          <span className="sn-sub-long">Describe your idea. Our AI designs, builds, and launches a full-stack website in minutes — hosting, CMS, and all.</span>
          <span className="sn-sub-short">Describe your idea. Our AI launches your full-stack website in minutes.</span>
        </p>
        <Builder {...props} />
        <div className="sn-hero-meta">
          <div className="sn-hero-meta-item"><i className="fa-solid fa-bolt" /> Live in 3 minutes</div>
          <div className="sn-hero-meta-sep" />
          <div className="sn-hero-meta-item"><i className="fa-solid fa-code" /> Real code, yours to keep</div>
          <div className="sn-hero-meta-sep" />
          <div className="sn-hero-meta-item"><i className="fa-solid fa-globe" /> Custom domain + SSL</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Root ----------
const SnHero = () => {
  const [mode, setMode] = useState<HeroMode | null>(null);
  const [heroValue, setHeroValue] = useState("");
  const typingSuffix = useTypingSuffix(TYPING_SUFFIXES);

  const handleSubmit = () => {
    const input = heroValue.trim();
    if (input.length < 10) return;
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    window.location.href = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
  };

  const showTyping = !heroValue;

  const shared: BuilderProps = {
    mode,
    setMode,
    heroValue,
    setHeroValue,
    showTyping,
    typingSuffix,
    onSubmit: handleSubmit,
  };

  return <HeroAurora {...shared} />;
};

export default SnHero;
