"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface SnNavbarProps {
  forceLight?: boolean;
  hideGetStarted?: boolean;
  hideLinks?: boolean;
  /** Hide navbar at top, reveal on scroll (for pages with inline hero header) */
  heroPage?: boolean;
  /** Always show navbar with white background from the start */
  alwaysVisible?: boolean;
  centerSlot?: React.ReactNode;
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

const SnNavbar = ({ forceLight = false, hideGetStarted = false, hideLinks = false, heroPage = false, alwaysVisible = false, centerSlot, rightSlot }: SnNavbarProps) => {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Force light theme if requested
  useEffect(() => {
    if (forceLight) setTheme("light");
  }, [forceLight, setTheme]);

  // Track scroll position — navbar becomes visible after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset submenu when menu closes
  useEffect(() => { if (!open) setLearnOpen(false); }, [open]);

  const isDark = mounted && resolvedTheme === "dark";
  const logoSrc = isDark ? "/logo-wide-white.svg" : "/logo-wide-color.svg";

  return (
    <>
      {/* Sticky navbar — hidden at top, slides in on scroll */}
      <nav className={`sn-navbar ${heroPage ? "is-hero-page" : ""} ${alwaysVisible ? "is-always-visible" : ""} ${scrolled ? "is-scrolled" : ""} ${open ? "is-menu-open" : ""}`}>
        <div className="container mx-auto px-4 sn-navbar-inner">
          <Link href="/staging" className="sn-navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="sitenow.ai" />
          </Link>
          {!hideLinks && (
            <div className="sn-navbar-links">
              <Link className="sn-navbar-link" href="/learn">Learn</Link>
              <Link className="sn-navbar-link" href="/blog">Blog</Link>
              <Link className="sn-navbar-link" href="/pricing">Pricing</Link>
            </div>
          )}
          {centerSlot && <div className="sn-navbar-center">{centerSlot}</div>}
          <div className="sn-navbar-cta">
            {rightSlot}
            <button className="sn-btn sn-btn-ghost sn-nav-signin">Sign in</button>
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

      {/* Mobile overlay */}
      <div className={`sn-mobile-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {/* Mobile header */}
        <div className="sn-mobile-header">
          <Link href="/staging" className="sn-navbar-logo" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="sitenow.ai" />
          </Link>
          <div className="sn-mobile-header-right">
            <button className="sn-btn sn-btn-nav-cta" onClick={() => setOpen(false)}>Get started</button>
            <button className="sn-mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu content — main or submenu */}
        {!learnOpen ? (
          <nav className="sn-mobile-nav" aria-label="Primary">
            <button className="sn-m-row" onClick={() => setLearnOpen(true)}>
              <span className="sn-m-row-label">Learn</span>
              <svg className="sn-m-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <Link className="sn-m-row" href="/blog" onClick={() => setOpen(false)}>
              <span className="sn-m-row-label">Blog</span>
            </Link>
            <Link className="sn-m-row" href="/pricing" onClick={() => setOpen(false)}>
              <span className="sn-m-row-label">Pricing</span>
            </Link>
          </nav>
        ) : (
          <nav className="sn-mobile-nav sn-mobile-sub" aria-label="Learn">
            <button className="sn-m-back" onClick={() => setLearnOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              <span>Back</span>
            </button>
            {learnCats.map((c) => (
              <Link key={c} className="sn-m-row" href="/learn" onClick={() => setOpen(false)}>
                <span className="sn-m-row-label">{c}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};

export default SnNavbar;
