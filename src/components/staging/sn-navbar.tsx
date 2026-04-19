"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const learnCats: string[] = [
  "Documentation",
  "Guides & Tutorials",
  "Troubleshooting",
  "Community & Support",
  "YouTube",
  "Twitter",
];

const SnNavbar = () => {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset accordion when menu closes
  useEffect(() => {
    if (!open) setLearnOpen(false);
  }, [open]);

  const closeAndNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    if (href && href.startsWith("#")) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    }
  };

  return (
    <>
      <nav className={`sn-navbar ${open ? "is-menu-open" : ""}`}>
        <div className="sn-container sn-navbar-inner">
          <Link href="/staging" className="sn-navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide-color.svg" alt="sitenow.ai" />
          </Link>
          <div className="sn-navbar-links">
            <Link className="sn-navbar-link" href="/learn">
              Learn
            </Link>
            <Link className="sn-navbar-link" href="/blog">
              Blog
            </Link>
            <Link className="sn-navbar-link" href="/pricing">
              Pricing
            </Link>
          </div>
          <div className="sn-navbar-cta">
            <button className="sn-btn sn-btn-ghost sn-nav-signin">
              Sign in
            </button>
            <button className="sn-btn sn-btn-nav-cta">Get started</button>
          </div>
          <button
            className={`sn-burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="sn-burger-line sn-burger-line-a" />
            <span className="sn-burger-line sn-burger-line-m" />
            <span className="sn-burger-line sn-burger-line-b" />
          </button>
        </div>
      </nav>

      <div
        className={`sn-mobile-overlay ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="sn-mobile-nav" aria-label="Primary">
          <div
            className={`sn-m-section ${learnOpen ? "is-expanded" : ""}`}
          >
            <button
              className="sn-m-row sn-m-row-toggle"
              onClick={() => setLearnOpen((v) => !v)}
              aria-expanded={learnOpen}
            >
              <span className="sn-m-row-label">Learn</span>
              <span className="sn-m-toggle" aria-hidden="true">
                <span className="sn-m-toggle-h" />
                <span className="sn-m-toggle-v" />
              </span>
            </button>
            <div className="sn-m-sub" role="region">
              <div className="sn-m-sub-inner">
                {learnCats.map((c) => (
                  <Link
                    key={c}
                    className="sn-m-sub-link"
                    href="/learn"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            className="sn-m-row sn-m-row-flat"
            href="/blog"
            onClick={() => setOpen(false)}
          >
            <span className="sn-m-row-label">Blog</span>
          </Link>
          <Link
            className="sn-m-row sn-m-row-flat"
            href="/pricing"
            onClick={() => setOpen(false)}
          >
            <span className="sn-m-row-label">Pricing</span>
          </Link>
        </nav>

        <div className="sn-mobile-footer">
          <button
            className="sn-m-footer-btn sn-m-footer-signin"
            onClick={() => setOpen(false)}
          >
            Sign in
          </button>
          <button
            className="sn-m-footer-btn sn-m-footer-cta"
            onClick={() => setOpen(false)}
          >
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default SnNavbar;
