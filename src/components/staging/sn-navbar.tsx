"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface SnNavbarProps {
  /** Force light theme on mount (used by blog, pricing) */
  forceLight?: boolean;
  /** Hide the "Get started" CTA button */
  hideGetStarted?: boolean;
  /** Hide the Learn/Blog/Pricing nav links (used by learn page) */
  hideLinks?: boolean;
  /** Render elements between the nav links and the CTA (e.g. search bar) */
  centerSlot?: React.ReactNode;
  /** Render extra elements in the right side of the navbar (e.g. theme toggle) */
  rightSlot?: React.ReactNode;
}

const learnCats: string[] = [
  "Documentation",
  "Guides & Tutorials",
  "Troubleshooting",
  "Community & Support",
  "YouTube",
  "Twitter",
];

const SnNavbar = ({ forceLight = false, hideGetStarted = false, hideLinks = false, centerSlot, rightSlot }: SnNavbarProps) => {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Force light theme if requested
  useEffect(() => {
    if (forceLight) setTheme("light");
  }, [forceLight, setTheme]);

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

  return (
    <>
      <nav className={`sn-navbar ${open ? "is-menu-open" : ""}`}>
        <div className="container mx-auto px-4 sn-navbar-inner">
          <Link href="/staging" className="sn-navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mounted && resolvedTheme === "dark" ? "/logo-wide-white.svg" : "/logo-wide-color.svg"} alt="sitenow.ai" />
          </Link>
          {!hideLinks && (
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
          )}
          {centerSlot && <div className="sn-navbar-center">{centerSlot}</div>}
          <div className="sn-navbar-cta">
            {rightSlot}
            <button className="sn-btn sn-btn-ghost sn-nav-signin">
              Sign in
            </button>
            {!hideGetStarted && (
              <button className="sn-btn sn-btn-nav-cta">Get started</button>
            )}
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
                    onClick={() => setOpen(false)}
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
