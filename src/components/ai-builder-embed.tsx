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

const AiBuilderEmbed = () => {
  const [mode, setMode] = useState<HeroMode | null>(null);
  const [heroValue, setHeroValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [validationVisible, setValidationVisible] = useState(false);
  const [maxLengthVisible, setMaxLengthVisible] = useState(false);
  const typingSuffix = useTypingSuffix(TYPING_SUFFIXES);

  const showTyping = !heroValue && !isFocused;

  const handleSubmit = () => {
    const input = heroValue.trim();
    if (input.length < 10) {
      setValidationVisible(true);
      setMaxLengthVisible(false);
      return;
    }
    if (heroValue.length > 2000) {
      setMaxLengthVisible(true);
      setValidationVisible(false);
      return;
    }
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    window.location.href = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setHeroValue(val);
    if (val.trim().length >= 10) {
      setValidationVisible(false);
    }
    if (val.length <= 2000) {
      setMaxLengthVisible(false);
    }
  };

  return (
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
          value={heroValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="sn-ai-quick">
        {HERO_MODES.map((m) => (
          <button
            key={m.key}
            className={"sn-ai-quick-btn" + (mode && mode.key === m.key ? " is-active" : "")}
            onClick={() => { setMode(m); setHeroValue(m.prompt); setValidationVisible(false); }}
          >
            {m.chip}
          </button>
        ))}
      </div>
      <button className="sn-ai-submit" aria-label="Generate" onMouseDown={(e) => { e.preventDefault(); handleSubmit(); }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      {validationVisible && (
        <p className="sn-ai-validation">To get better results input no less than 10 symbols.</p>
      )}
      {maxLengthVisible && (
        <p className="sn-ai-validation">Character limit reached.</p>
      )}
    </div>
  );
};

export default AiBuilderEmbed;
