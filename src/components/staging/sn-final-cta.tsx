"use client";

import { useState, useEffect } from "react";

const SnFinalCta = () => {
  const [count, setCount] = useState(1842);

  useEffect(() => {
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
      setTimeout(tick, 2800 + Math.random() * 3400);
    };
    const t = setTimeout(tick, 1200);
    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, []);

  const formatted = count.toLocaleString();

  return (
    <section className="sn-final">
      <div className="sn-final-blob" />
      <div className="sn-container" style={{ position: "relative" }}>
        <div className="sn-final-live">
          <span className="sn-final-live-pulse" />
          <span className="sn-final-live-label">Live</span>
          <span className="sn-final-live-text">
            <strong>{formatted}</strong> sites built today
          </span>
        </div>
        <h2>
          Your site is <span className="sn-gradient-text">minutes</span> away.
        </h2>
        <p className="sn-section-lead" style={{ marginBottom: 40 }}>
          No contracts. No templates. No lock-in. Cancel anytime.
        </p>
        <div className="sn-final-btn-wrap">
          <button
            className="sn-btn sn-btn-dark sn-btn-xl sn-final-btn"
            onClick={() => {
              window.location.href = "https://dashboard.sitenow.tech/sign-up";
            }}
          >
            Start building for free{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="sn-final-compare">
          <div className="sn-final-compare-row">
            <span className="sn-final-compare-label">Traditional agency</span>
            <div className="sn-final-compare-bar sn-final-compare-bar-them">
              <span style={{ width: "100%" }} />
            </div>
            <span className="sn-final-compare-val">4–12 weeks</span>
          </div>
          <div className="sn-final-compare-row">
            <span className="sn-final-compare-label">DIY website builder</span>
            <div className="sn-final-compare-bar sn-final-compare-bar-them">
              <span style={{ width: "35%" }} />
            </div>
            <span className="sn-final-compare-val">2–5 days</span>
          </div>
          <div className="sn-final-compare-row is-us">
            <span className="sn-final-compare-label">sitenow.ai</span>
            <div className="sn-final-compare-bar sn-final-compare-bar-us">
              <span style={{ width: "1%" }} />
            </div>
            <span className="sn-final-compare-val">~5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnFinalCta;
