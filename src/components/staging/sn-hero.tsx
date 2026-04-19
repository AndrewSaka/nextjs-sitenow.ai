"use client";

import { useState } from "react";

interface HeroMode {
  key: string;
  chip: string | null;
  title: [string, string, string];
  sub: string;
  placeholder: string;
  prompt?: string;
}

const HERO_MODES: HeroMode[] = [
  {
    key: "idea",
    chip: null,
    title: ["Bring your ", "ideas", ""],
    sub: "Describe what you want...",
    placeholder: "Describe your website idea in plain English...",
  },
  {
    key: "portfolio",
    chip: "Portfolio",
    title: ["Launch your ", "portfolio", "."],
    sub: "A site that makes your work look as considered as it is.",
    placeholder: "A portfolio for a film photographer...",
    prompt:
      "A portfolio site for a film photographer, moody and editorial",
  },
  {
    key: "business",
    chip: "Small business",
    title: ["Open for ", "business", "."],
    sub: "Menus, hours, directions, online ordering.",
    placeholder: "A small bakery in Brooklyn...",
    prompt:
      "A small bakery in Brooklyn with online ordering and a weekly menu",
  },
  {
    key: "startup",
    chip: "Startup",
    title: ["Ship your ", "launch page", "."],
    sub: "A polished landing page for a Series A, a waitlist, or anything.",
    placeholder: "Launch page for my AI startup...",
    prompt:
      "Launch page for a Series A AI startup, bold and confident",
  },
  {
    key: "store",
    chip: "Online store",
    title: ["Sell what you ", "make", "."],
    sub: "Products, cart, checkout, domain. A full storefront.",
    placeholder: "An online store for handmade ceramics...",
    prompt:
      "An online store for handmade ceramics with a curated catalog",
  },
];

const SnHero = () => {
  const [mode, setMode] = useState<HeroMode>(HERO_MODES[0]);
  const [heroValue, setHeroValue] = useState("");

  const handleSubmit = () => {
    const input = heroValue.trim();
    if (input.length < 10) return;
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    window.location.href = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
  };

  return (
    <section className="sn-hero" data-mode={mode.key}>
      <div className="sn-hero-bg">
        <div className="sn-blob sn-blob-1" />
        <div className="sn-blob sn-blob-2" />
      </div>
      <div className="sn-container sn-hero-inner">
        <h1 className="sn-hero-title sn-morph" key={mode.key + "-t"}>
          {mode.title[0]}
          <span className="sn-gradient-text">{mode.title[1]}</span>
          {mode.title[2] ? (
            mode.title[2]
          ) : mode.key === "idea" ? (
            <>
              <br />
              to life.
            </>
          ) : null}
        </h1>
        <div
          className={
            "sn-ai-builder" + (heroValue ? " has-value" : "")
          }
        >
          <textarea
            className="sn-ai-textarea"
            placeholder={mode.placeholder}
            value={heroValue}
            onChange={(e) => setHeroValue(e.target.value)}
          />
          <div className="sn-ai-quick">
            {HERO_MODES.filter((m) => m.chip).map((m) => (
              <button
                key={m.key}
                className={
                  "sn-ai-quick-btn" +
                  (mode.key === m.key ? " is-active" : "")
                }
                onClick={() => {
                  setMode(m);
                  setHeroValue(m.prompt || "");
                }}
              >
                {m.chip}
              </button>
            ))}
          </div>
          <button
            className="sn-ai-submit"
            aria-label="Generate"
            onClick={handleSubmit}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="sn-hero-feats">
          <span>
            <i className="fa-brands fa-wordpress" aria-hidden="true" />{" "}
            WordPress backend
          </span>
          <span>
            <i className="fa-solid fa-bolt" aria-hidden="true" /> Live
            in minutes
          </span>
        </div>
      </div>
    </section>
  );
};

export default SnHero;
