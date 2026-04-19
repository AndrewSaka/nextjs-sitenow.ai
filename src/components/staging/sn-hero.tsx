"use client";

import { useState } from "react";
import Link from "next/link";

const HERO_MODES = [
  { key: "idea", chip: null, placeholder: "Describe your website idea in plain English...", prompt: "" },
  { key: "portfolio", chip: "Portfolio", placeholder: "A portfolio for a film photographer...", prompt: "A portfolio site for a film photographer, moody and editorial" },
  { key: "business", chip: "Small business", placeholder: "A small bakery in Brooklyn...", prompt: "A small bakery in Brooklyn with online ordering and a weekly menu" },
  { key: "startup", chip: "Startup", placeholder: "Launch page for my AI startup...", prompt: "Launch page for a Series A AI startup, bold and confident" },
  { key: "store", chip: "Online store", placeholder: "An online store for handmade ceramics...", prompt: "An online store for handmade ceramics with a curated catalog" },
];

const SnHero = () => {
  const [mode, setMode] = useState(HERO_MODES[0]);
  const [heroValue, setHeroValue] = useState("");

  const handleSubmit = () => {
    const input = heroValue.trim();
    if (input.length < 10) return;
    const data = JSON.stringify({ initial_description: input });
    const encoded = encodeURIComponent(data);
    window.location.href = `https://dashboard.sitenow.tech/sign-up?generate-website=1&prefilledAiData=${encoded}&builderType=wvc`;
  };

  return (
    <section className="sn-hero">
      <div className="sn-hero-bg" />

      {/* Inline header — visible at top of page, hidden on mobile */}
      <header className="sn-hero-header">
        <div className="container mx-auto px-4 sn-hero-header-inner">
          <Link href="/staging" className="sn-navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide-color.svg" alt="sitenow.ai" />
          </Link>
          <div className="sn-hero-header-links">
            <Link href="/learn">Learn</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="sn-hero-header-cta">
            <button className="sn-btn sn-btn-ghost sn-nav-signin">Sign in</button>
            <button className="sn-btn sn-btn-nav-cta">Get started</button>
          </div>
        </div>
      </header>

      <div className="sn-container sn-hero-inner">
        <h1 className="sn-hero-title">
          What will you build?
        </h1>
        <p className="sn-hero-sub">
          Describe your idea. Our AI builds and launches your full-stack website in minutes.
        </p>
        <div className={"sn-ai-builder" + (heroValue ? " has-value" : "")}>
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
