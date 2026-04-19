"use client";

import { useState, useEffect } from "react";

/* ───── SiteMock variants ───── */

export const SiteMock = ({ kind }: { kind: string }) => {
  if (kind === "bakery") {
    return (
      <div className="sm-wrap sm-bakery">
        <div className="sm-nav">
          <span className="sm-logo sm-bakery-logo">Meadowlark</span>
          <span className="sm-nav-links"><span /><span /><span /></span>
        </div>
        <div className="sm-hero">
          <h4>Fresh sourdough,<br />baked daily.</h4>
          <div className="sm-cta-row">
            <span className="sm-cta sm-cta-solid">Order</span>
            <span className="sm-cta sm-cta-ghost">Menu</span>
          </div>
        </div>
        <div className="sm-bakery-cards">
          <div className="sm-bakery-card"><span className="sm-bakery-emoji">🥐</span><b>Croissant</b><span>$4.50</span></div>
          <div className="sm-bakery-card"><span className="sm-bakery-emoji">🍞</span><b>Sourdough</b><span>$9</span></div>
          <div className="sm-bakery-card"><span className="sm-bakery-emoji">🥖</span><b>Baguette</b><span>$6</span></div>
        </div>
      </div>
    );
  }
  if (kind === "saas") {
    return (
      <div className="sm-wrap sm-saas">
        <div className="sm-nav sm-saas-nav">
          <span className="sm-logo sm-saas-logo">◆ frostline</span>
          <span className="sm-nav-right">
            <span className="sm-pill-ghost">Login</span>
            <span className="sm-pill-solid">Get access</span>
          </span>
        </div>
        <div className="sm-saas-hero">
          <span className="sm-saas-badge">⚡ Series A — now hiring</span>
          <h4>Cold storage,<br /><em>for warm teams.</em></h4>
          <p>Encrypted file sync that doesn&apos;t get in the way.</p>
          <div className="sm-saas-glass" />
        </div>
      </div>
    );
  }
  if (kind === "wine") {
    return (
      <div className="sm-wrap sm-wine">
        <div className="sm-wine-top">
          <span className="sm-wine-logo">H &amp; V</span>
          <span className="sm-wine-cart"><i className="fa-solid fa-bag-shopping" /> 2</span>
        </div>
        <div className="sm-wine-hero">
          <span className="sm-wine-eyebrow">EST. 2014</span>
          <h4>A curated cellar<br />for the unpretentious.</h4>
        </div>
        <div className="sm-wine-bottles">
          <div className="sm-bottle sm-b-red" />
          <div className="sm-bottle sm-b-white" />
          <div className="sm-bottle sm-b-rose" />
          <div className="sm-bottle sm-b-orange" />
        </div>
      </div>
    );
  }
  if (kind === "analytics") {
    return (
      <div className="sm-wrap sm-analytics">
        <div className="sm-nav sm-an-nav">
          <span className="sm-logo sm-an-logo">✦ Lantern</span>
          <span className="sm-pill-solid sm-an-cta">Start free</span>
        </div>
        <div className="sm-an-body">
          <h4>See every user.<br />Understand every one.</h4>
          <div className="sm-an-chart">
            <svg viewBox="0 0 220 80" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sm-an-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#6c3ee0" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#6c3ee0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,62 L18,54 L36,58 L54,40 L72,44 L90,28 L108,36 L126,22 L144,30 L162,16 L180,24 L198,12 L220,18 L220,80 L0,80 Z" fill="url(#sm-an-fill)" />
              <path d="M0,62 L18,54 L36,58 L54,40 L72,44 L90,28 L108,36 L126,22 L144,30 L162,16 L180,24 L198,12 L220,18" fill="none" stroke="#6c3ee0" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="sm-an-stats">
            <span><b>12.4k</b>MAU</span>
            <span><b>94%</b>retention</span>
            <span><b>2.1s</b>load</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "restaurant") {
    return (
      <div className="sm-wrap sm-rest">
        <div className="sm-rest-hero">
          <span className="sm-rest-eyebrow">CASA PEQUEÑA · MEXICO CITY</span>
          <h4>Small plates.<br /><em>Big flavor.</em></h4>
          <span className="sm-rest-reserve">Reserve a table →</span>
        </div>
        <div className="sm-rest-grid">
          <span>18:00</span><span>18:30</span><span className="is-on">19:00</span><span>19:30</span><span>20:00</span><span>20:30</span>
        </div>
      </div>
    );
  }
  if (kind === "studio") {
    return (
      <div className="sm-wrap sm-studio">
        <div className="sm-studio-nav">
          <span className="sm-logo sm-studio-logo">Northwind<sup>®</sup></span>
          <span className="sm-studio-links"><span /><span /><span /></span>
        </div>
        <div className="sm-studio-hero">
          <h4>Brand systems<br />for the <em>quietly ambitious.</em></h4>
        </div>
        <div className="sm-studio-clients">
          <span>FLUX</span>
          <span className="serif">Harbor</span>
          <span className="mono">lantern/</span>
          <span>◆ FROST</span>
        </div>
      </div>
    );
  }
  return null;
};

/* ───── LdStep ───── */

const LdStep = ({ label, active, done }: { label: string; active: boolean; done: boolean }) => (
  <li className={`sn-ld-step ${done ? "is-done" : ""} ${active && !done ? "is-active" : ""}`}>
    <span className="sn-ld-step-icon">
      {done ? <i className="fa-solid fa-check" /> : active ? <span className="sn-ld-spinner" /> : <span className="sn-ld-pip" />}
    </span>
    <span>{label}</span>
  </li>
);

/* ───── LiveDemo ───── */

const prompts = [
  { text: "A wine shop for natural wine in Brooklyn", kind: "wine" },
  { text: "Portfolio site for a film photographer", kind: "studio" },
  { text: "Landing page for a Series A cold storage SaaS", kind: "saas" },
  { text: "Site for a small bakery with online ordering", kind: "bakery" },
];

const SnLiveDemo = () => {
  const [phase, setPhase] = useState<"typing" | "building" | "done">("typing");
  const [promptIdx, setPromptIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [elapsed, setElapsed] = useState(0);

  const current = prompts[promptIdx];

  // Typing animation
  useEffect(() => {
    if (phase !== "typing") return;
    if (typed.length === 0) setElapsed(0);
    if (typed.length >= current.text.length) {
      const t = setTimeout(() => setPhase("building"), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTyped(current.text.slice(0, typed.length + 1)), 32);
    return () => clearTimeout(t);
  }, [typed, phase, current]);

  // Building → done
  useEffect(() => {
    if (phase !== "building") return;
    setElapsed(0);
    const start = Date.now();
    const timer = setInterval(() => setElapsed(Math.min(47, Math.round((Date.now() - start) / 1000 * 22))), 60);
    const t = setTimeout(() => { clearInterval(timer); setElapsed(47); setPhase("done"); }, 2200);
    return () => { clearInterval(timer); clearTimeout(t); };
  }, [phase]);

  // Done → next
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setTyped("");
      setPromptIdx((promptIdx + 1) % prompts.length);
      setPhase("typing");
    }, 3200);
    return () => clearTimeout(t);
  }, [phase, promptIdx]);

  return (
    <section className="sn-livedemo">
      <div className="sn-container">
        <div className="sn-section-head">
          <p className="sn-eyebrow">Watch it happen</p>
          <h2 className="sn-section-title">From prompt to <span className="sn-gradient-text">published</span>.</h2>
          <p className="sn-section-lead">A real prompt. A real site. A real time. No cuts, no cheating.</p>
        </div>
        <div className="sn-ld-stage">
          {/* Left: prompt + console */}
          <div className="sn-ld-left">
            <div className="sn-ld-prompt-label">Prompt</div>
            <div className="sn-ld-prompt">
              <span className="sn-ld-prompt-text">{typed}</span>
              {phase === "typing" && <span className="sn-ld-caret" />}
            </div>
            <div className="sn-ld-console">
              <div className="sn-ld-console-label">Build</div>
              <ul className="sn-ld-steps">
                <LdStep label="Understanding intent" active={phase === "building" && elapsed >= 0} done={phase === "done" || (phase === "building" && elapsed >= 12)} />
                <LdStep label="Generating copy & sitemap" active={phase === "building" && elapsed >= 12} done={phase === "done" || (phase === "building" && elapsed >= 24)} />
                <LdStep label="Composing layout" active={phase === "building" && elapsed >= 24} done={phase === "done" || (phase === "building" && elapsed >= 36)} />
                <LdStep label="Deploying to CDN" active={phase === "building" && elapsed >= 36} done={phase === "done"} />
              </ul>
              <div className="sn-ld-timer">
                <span className="sn-ld-timer-label">Elapsed</span>
                <span className="sn-ld-timer-val">{phase === "typing" ? "—" : `${elapsed}s`}</span>
              </div>
            </div>
          </div>
          {/* Right: preview */}
          <div className="sn-ld-right">
            <div className="sn-ld-chrome">
              <span className="sn-show-dot" />
              <span className="sn-show-dot" />
              <span className="sn-show-dot" />
              <div className="sn-ld-url">
                {phase === "done" && <><i className="fa-solid fa-lock" /> yoursite.sitenow.ai</>}
                {phase !== "done" && <span className="sn-ld-url-dim">waiting for prompt…</span>}
              </div>
            </div>
            <div className="sn-ld-preview">
              {phase === "typing" && (
                <div className="sn-ld-empty">
                  <div className="sn-ld-empty-ring" />
                  <p>Preview appears here.</p>
                </div>
              )}
              {phase === "building" && (
                <div className="sn-ld-building">
                  <div className="sn-ld-scan" />
                  <div className="sn-ld-skeleton">
                    <div className="sk sk-nav" />
                    <div className="sk sk-h1" />
                    <div className="sk sk-p" />
                    <div className="sk sk-p sk-p-short" />
                    <div className="sk sk-cta" />
                    <div className="sk sk-img" />
                  </div>
                </div>
              )}
              {phase === "done" && (
                <div className="sn-ld-done">
                  <SiteMock kind={current.kind} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnLiveDemo;
