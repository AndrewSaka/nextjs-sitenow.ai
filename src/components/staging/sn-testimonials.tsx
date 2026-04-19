"use client";

const QuoteGlyph = ({ kind }: { kind: string }) => {
  const common = { width: 44, height: 44, viewBox: "0 0 44 44", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.6 };
  if (kind === "bakery") {
    return (
      <svg {...common}>
        <path d="M8 26 Q10 14 22 12 Q34 14 36 26 Q30 30 22 30 Q14 30 8 26 Z" stroke="currentColor" fill="currentColor" fillOpacity="0.08" />
        <path d="M13 22 L15 18 M18 21 L20 16 M23 20 L25 15 M28 21 L30 17 M14 27 L16 24 M20 27 L22 23 M26 27 L28 24" stroke="currentColor" />
      </svg>
    );
  }
  if (kind === "saas") {
    return (
      <svg {...common}>
        <path d="M10 26 Q10 20 16 20 Q17 14 24 14 Q31 14 32 20 Q37 20 37 26 Q37 30 32 30 L15 30 Q10 30 10 26 Z" stroke="currentColor" fill="currentColor" fillOpacity="0.1" />
        <path d="M28 10 L29 14 L33 15 L29 16 L28 20 L27 16 L23 15 L27 14 Z" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
      </svg>
    );
  }
  if (kind === "wine") {
    return (
      <svg {...common}>
        <path d="M15 10 L29 10 Q30 18 27 22 Q24 25 22 25 Q20 25 17 22 Q14 18 15 10 Z" stroke="currentColor" fill="currentColor" fillOpacity="0.15" />
        <path d="M22 25 L22 34" stroke="currentColor" />
        <path d="M16 34 L28 34" stroke="currentColor" />
      </svg>
    );
  }
  if (kind === "analytics") {
    return (
      <svg {...common}>
        <path d="M8 32 L14 26 L20 28 L26 20 L32 22 L38 14" stroke="currentColor" />
        <circle cx="14" cy="26" r="2" fill="currentColor" />
        <circle cx="20" cy="28" r="2" fill="currentColor" />
        <circle cx="26" cy="20" r="2" fill="currentColor" />
        <circle cx="32" cy="22" r="2" fill="currentColor" />
        <path d="M8 36 L38 36" stroke="currentColor" opacity="0.4" />
      </svg>
    );
  }
  if (kind === "restaurant") {
    return (
      <svg {...common}>
        <circle cx="22" cy="22" r="10" stroke="currentColor" fill="currentColor" fillOpacity="0.1" />
        <circle cx="22" cy="22" r="6" stroke="currentColor" opacity="0.5" />
        <path d="M10 10 L10 20 M10 10 L8 14 M10 10 L12 14" stroke="currentColor" />
        <path d="M34 10 L34 34 M34 14 Q36 16 36 20" stroke="currentColor" />
      </svg>
    );
  }
  return null;
};

const items = [
  {
    quote: "I described a bakery website at 2pm. We were taking orders online by 4pm. A month of agency work in a single afternoon.",
    name: "Ali B.",
    role: "Owner, Meadowlark Bakery",
    kind: "bakery",
    tone: "cream",
  },
  {
    quote: "Spun up a launch page for our Series A in ten minutes. Investors couldn\u2019t tell it wasn\u2019t a custom design job.",
    name: "Daniela P.",
    role: "Co-founder, Frostline",
    kind: "saas",
    tone: "dark",
    featured: true,
  },
  {
    quote: "Real WordPress under the hood. We exported it and moved hosts in one command. No lock-in, no migration tax.",
    name: "Marcus W.",
    role: "Head of Marketing, Harbor & Vine",
    kind: "wine",
    tone: "wine",
  },
  {
    quote: "Our team of two shipped twelve landing pages in one sprint. Every iteration was just another prompt.",
    name: "Priya N.",
    role: "Growth Lead, Lantern",
    kind: "analytics",
    tone: "violet",
  },
  {
    quote: "I\u2019m a chef, not a developer. It understood what a restaurant site actually needs — menu, hours, reservations — and built it.",
    name: "Tom\u00e1s I.",
    role: "Chef & Owner, Casa Peque\u00f1a",
    kind: "restaurant",
    tone: "dark-warm",
  },
];

const SnTestimonials = () => {
  return (
    <section className="sn-testimonial">
      <div className="sn-container">
        <div className="sn-test-head">
          <p className="sn-eyebrow">In their words</p>
          <h2 className="sn-section-title">
            Operators who <span className="sn-gradient-text">shipped.</span>
          </h2>
          <p className="sn-section-lead">Five people who had an idea on a Monday and a live site by Tuesday.</p>
        </div>
        <div className="sn-qcard-grid">
          {items.map((t, i) => (
            <article
              key={i}
              className={`sn-qcard sn-qcard--${t.tone} ${t.featured ? "is-featured" : ""}`}
              style={{ "--i": String(i), animationDelay: `${i * 60}ms` } as React.CSSProperties}
            >
              <div className="sn-qcard-mark" aria-hidden="true">
                <QuoteGlyph kind={t.kind} />
              </div>
              <blockquote className="sn-qcard-quote">{t.quote}</blockquote>
              <footer className="sn-qcard-foot">
                <div className="sn-qcard-name">{t.name}</div>
                <div className="sn-qcard-role">{t.role}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnTestimonials;
