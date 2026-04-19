"use client";

import { SiteMock } from "./sn-live-demo";

const sites = [
  { key: "bakery", domain: "meadowlarkbakery.com", label: "Bakery · Brooklyn", kind: "bakery" },
  { key: "saas", domain: "frostline.io", label: "SaaS · Series A", kind: "saas" },
  { key: "portfolio", domain: "harborandvine.com", label: "Wine shop", kind: "wine" },
  { key: "analytics", domain: "lantern.so", label: "Analytics", kind: "analytics" },
  { key: "restaurant", domain: "casapequena.mx", label: "Restaurant", kind: "restaurant" },
  { key: "studio", domain: "northwind.studio", label: "Design studio", kind: "studio" },
];

const SnShowcase = () => {
  return (
    <section className="sn-showcase" id="showcase">
      <div className="sn-container">
        <div className="sn-section-head">
          <p className="sn-eyebrow">Built with sitenow.ai</p>
          <h2 className="sn-section-title">
            Sites shipped in <span className="sn-gradient-text">minutes, not months.</span>
          </h2>
          <p className="sn-section-lead">
            Every thumbnail below is a real site built from a single prompt. No templates. No editing. No exceptions.
          </p>
        </div>
        <div className="sn-showcase-grid">
          {sites.map((s, i) => (
            <article
              key={s.key}
              className={`sn-show-card sn-show-${s.kind}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="sn-show-chrome">
                <span className="sn-show-dot" />
                <span className="sn-show-dot" />
                <span className="sn-show-dot" />
                <div className="sn-show-url">
                  <i className="fa-solid fa-lock" /> {s.domain}
                </div>
              </div>
              <div className="sn-show-body">
                <SiteMock kind={s.kind} />
              </div>
              <div className="sn-show-meta">
                <span className="sn-show-label">{s.label}</span>
                <span className="sn-show-time">
                  <i className="fa-regular fa-clock" /> minutes
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnShowcase;
