"use client";

import { SiteMock } from "./sn-live-demo";

type Site = {
  key: string;
  domain: string;
  label: string;
  kind: string;
  image?: { desktop: string; mobile: string };
};

const sites: Site[] = [
  { key: "bakery", domain: "yoursite.sitenow.ai", label: "Bakery · Brooklyn", kind: "bakery", image: { desktop: "/cake_screenshot_desktop.png", mobile: "/cake_screeshot_mobile.png" } },
  { key: "saas", domain: "yoursite.sitenow.ai", label: "SaaS · Series A", kind: "saas", image: { desktop: "/icevault_screenshot_desktop.png", mobile: "/icevault_screeshot_mobile.png" } },
  { key: "portfolio", domain: "yoursite.sitenow.ai", label: "Wine shop", kind: "wine", image: { desktop: "/wine_screenshot_desktop.png", mobile: "/wine_screeshot_mobile.png" } },
  { key: "project-management", domain: "yoursite.sitenow.ai", label: "Project management", kind: "project-management", image: { desktop: "/project_management_screenshot_desktop.png", mobile: "/project_management_screeshot_mobile.png" } },
  { key: "restaurant", domain: "yoursite.sitenow.ai", label: "Restaurant", kind: "restaurant", image: { desktop: "/pasta_screenshot_desktop.png", mobile: "/pasta_screeshot_mobile.png" } },
  { key: "studio", domain: "yoursite.sitenow.ai", label: "Design studio", kind: "studio", image: { desktop: "/architecture_screenshot_desktop.png", mobile: "/architecture_screeshot_mobile.png" } },
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
                {s.image ? (
                  <picture>
                    <source media="(max-width: 640px)" srcSet={s.image.mobile} />
                    <img src={s.image.desktop} alt={s.label} className="sn-show-screenshot" />
                  </picture>
                ) : (
                  <SiteMock kind={s.kind} />
                )}
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
