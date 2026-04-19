"use client";

import Link from "next/link";

const cols = [
  { title: "Product", items: ["Features", "Pricing", "Templates", "Integrations"] },
  { title: "Resources", items: ["Blog", "Learn", "Help Center", "Contact"] },
  { title: "Company", items: ["About", "Careers", "Privacy", "Terms"] },
];

const SnFooter = () => {
  return (
    <footer className="sn-footer">
      <div className="sn-container">
        <div className="sn-footer-head">
          <h2 className="sn-footer-title">
            Bring your <span className="sn-gradient-text">ideas</span> to life.
          </h2>
        </div>
        <div className="sn-footer-grid">
          <div>
            <Link href="/staging">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="sn-footer-logo" src="/logo-wide-color.svg" alt="sitenow.ai" />
            </Link>
            <p className="sn-footer-blurb">
              From idea to live website, instantly. Describe what you want, watch it come to life.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="sn-footer-col-title">{c.title}</h4>
              <ul className="sn-footer-links">
                {c.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sn-footer-legal">
          <span>© 2026 sitenow.ai. All rights reserved.</span>
          <span>Built with sitenow.ai · of course.</span>
        </div>
      </div>
    </footer>
  );
};

export default SnFooter;
