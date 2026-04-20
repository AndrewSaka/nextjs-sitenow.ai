"use client";

import { useState } from "react";

const items = [
  { q: "What is a full-stack website?", a: "A full-stack website includes everything you need to run online \u2014 front-end design, back-end logic, database, hosting, domain, and SSL. With sitenow.ai, all of that is set up for you automatically." },
  { q: "How long does it take to generate a site?", a: "Most sites go live in a few minutes. Complex multi-page builds may take a little longer depending on size and load." },
  { q: "Can I edit the site after it\u2019s generated?", a: "Yes. Every pixel, every word, every layout is yours to change. Use plain English or the visual editor." },
  { q: "What about my own domain?", a: "Bring your own domain or buy one inside sitenow.ai. DNS, SSL, and redirects are handled for you." },
  { q: "Is the code really production-ready?", a: "It\u2019s real WordPress under the hood \u2014 not a closed template engine. You can export, host elsewhere, or leave anytime." },
  { q: "What if I don\u2019t like what the AI generates?", a: "Regenerate, refine the prompt, or edit any section in place. No limit on iterations." },
];

const ChevIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SnFaq = () => {
  const [open, setOpen] = useState(-1);

  return (
    <section className="sn-faq" id="faq">
      <div className="sn-container">
        <div className="sn-section-head">
          <h2 className="sn-section-title">
            Frequently asked <span className="sn-gradient-text">questions</span>
          </h2>
        </div>
        <div className="sn-faq-list">
          {items.map((it, i) => (
            <div key={i} className={"sn-faq-item" + (open === i ? " is-open" : "")}>
              <button className="sn-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <ChevIcon className="sn-faq-chev" />
              </button>
              {open === i && <div className="sn-faq-a">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnFaq;
