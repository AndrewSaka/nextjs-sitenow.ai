"use client";

import { useState, FormEvent } from "react";

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Templates", href: "#" },
      { label: "Changelog", href: "#", badge: "New" },
      { label: "Roadmap", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Build with",
    links: [
      { label: "WordPress", href: "#" },
      { label: "Custom domains", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "E-commerce", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#", badge: "We're hiring" },
      { label: "Press kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
      { label: "Privacy", href: "/privacy-statement" },
      { label: "Terms", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Twitter", href: "#", icon: "fa-brands fa-x-twitter" },
  { label: "GitHub", href: "#", icon: "fa-brands fa-github" },
  { label: "LinkedIn", href: "#", icon: "fa-brands fa-linkedin-in" },
  { label: "YouTube", href: "#", icon: "fa-brands fa-youtube" },
  { label: "Discord", href: "#", icon: "fa-brands fa-discord" },
];

const SnFooter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(""); }, 3200);
  };

  return (
    <footer className="sn-footer">
      <div className="container mx-auto px-4 sn-footer-inner">
        {/* Top: brand + newsletter */}
        <div className="sn-footer-top">
          <div className="sn-footer-brand">
            <a href="/staging" className="sn-footer-logo-link" aria-label="sitenow.ai home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-wide-color-black.svg" alt="sitenow.ai" className="sn-footer-logo" />
            </a>
            <p className="sn-footer-blurb">
              From idea to live website — in minutes. Real WordPress, real code, zero templates.
            </p>
            <div className="sn-footer-status" role="status">
              <span className="sn-footer-status-dot" />
              <span className="sn-footer-status-text">All systems normal</span>
              <span className="sn-footer-status-sep">·</span>
              <a href="#" className="sn-footer-status-link">status.sitenow.ai</a>
            </div>
          </div>

          <div className="sn-footer-newsletter">
            <div className="sn-footer-news-eyebrow">The Monthly Ship</div>
            <h3 className="sn-footer-news-title">
              New features, real builds, <span className="sn-gradient-text">zero spam.</span>
            </h3>
            <form className={"sn-footer-news-form" + (submitted ? " is-sent" : "")} onSubmit={onSubmit}>
              <div className="sn-footer-news-field">
                <i className="fa-regular fa-envelope sn-footer-news-icon" aria-hidden="true" />
                <input
                  type="email"
                  required
                  placeholder="you@goodidea.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="sn-footer-news-input"
                  aria-label="Email address"
                />
              </div>
              <button type="submit" className="sn-footer-news-btn">
                {submitted ? (
                  <>Subscribed <i className="fa-solid fa-check" aria-hidden="true" /></>
                ) : (
                  <>Subscribe <i className="fa-solid fa-arrow-right" aria-hidden="true" /></>
                )}
              </button>
            </form>
            <p className="sn-footer-news-fineprint">One email a month. Unsubscribe in one click.</p>
          </div>
        </div>

        {/* Middle: link grid */}
        <nav className="sn-footer-grid" aria-label="Footer">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="sn-footer-col">
              <h4 className="sn-footer-col-title">{col.title}</h4>
              <ul className="sn-footer-links">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>
                      {l.label}
                      {l.badge && <span className="sn-footer-link-badge">{l.badge}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Giant wordmark */}
        <div className="sn-footer-wordmark" aria-hidden="true">sitenow.ai</div>

        {/* Bottom legal bar */}
        <div className="sn-footer-legal">
          <div className="sn-footer-legal-left">
            <span>© {new Date().getFullYear()} sitenow.ai</span>
            <span className="sn-footer-legal-sep">·</span>
            <a href="/privacy-statement">Privacy</a>
            <span className="sn-footer-legal-sep">·</span>
            <a href="#">Terms</a>
            <span className="sn-footer-legal-sep">·</span>
            <a href="#">Cookies</a>
            <span className="sn-footer-legal-sep">·</span>
            <a href="#">DPA</a>
            <span className="sn-footer-legal-sep">·</span>
            <ul className="sn-footer-socials" aria-label="Social">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="sn-footer-social">
                    <i className={s.icon} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SnFooter;
