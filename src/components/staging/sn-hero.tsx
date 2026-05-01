"use client";

import { useState, useEffect } from "react";
import AiBuilderMock from "@/components/staging/ai-builder-mock";

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

// ---------- Variant A: Aurora ----------
const SnHero = () => {
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
        <AiBuilderMock />
        <div className="sn-hero-meta">
          <div className="sn-hero-meta-item"><i className="fa-solid fa-bolt" /> Live in 3 minutes</div>
          <div className="sn-hero-meta-sep" />
          <div className="sn-hero-meta-item"><i className="fa-solid fa-database" /> CMS + database included</div>
          <div className="sn-hero-meta-sep" />
          <div className="sn-hero-meta-item"><i className="fa-solid fa-code" /> Real code, yours to keep</div>
        </div>
      </div>
    </section>
  );
};

export default SnHero;
