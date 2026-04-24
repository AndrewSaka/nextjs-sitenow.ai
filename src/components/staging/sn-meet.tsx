"use client";

const SnMeet = () => {
  return (
    <section className="sn-meet" id="features">
      <div className="sn-container">
        <div className="sn-section-head">
          <p className="sn-eyebrow">Meet</p>
          <h2 className="sn-section-title">
            <span className="sn-gradient-text">sitenow.ai</span>
          </h2>
          <p className="sn-section-lead">Four moves. One site. Zero templates.</p>
        </div>
        <div className="sn-bento">
          {/* Describe tile */}
          <div className="sn-bento-tile bt-describe">
            <span className="sn-bento-badge">01 · Describe</span>
            <h3>Just tell the AI what you need.</h3>
            <p>A sentence or two. We&apos;ll handle the rest — structure, copy, imagery, layout.</p>
            <div className="bt-describe-bp-row" aria-hidden="true">
              {/* Wireframe 1: Landing */}
              <svg className="bt-bp" viewBox="0 0 220 170" fill="none">
                <defs>
                  <pattern id="bpgrid1" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" strokeWidth="0.4" opacity="0.3" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="220" height="170" fill="url(#bpgrid1)" />
                <rect x="8" y="8" width="204" height="154" rx="6" strokeWidth="1.2" />
                <line x1="8" y1="24" x2="212" y2="24" strokeWidth="0.8" opacity="0.85" />
                <rect x="14" y="14" width="22" height="4" strokeWidth="0.8" />
                <rect x="194" y="13" width="14" height="7" rx="1.5" strokeWidth="0.8" />
                <rect x="14" y="36" width="140" height="10" strokeWidth="1.1" />
                <rect x="14" y="50" width="110" height="6" strokeWidth="0.9" opacity="0.85" />
                <rect x="14" y="82" width="40" height="10" rx="2" strokeWidth="1.1" />
                <rect x="58" y="82" width="34" height="10" rx="2" strokeWidth="0.8" strokeDasharray="3 2" />
                <rect x="14" y="102" width="192" height="50" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="14" y1="102" x2="206" y2="152" strokeWidth="0.7" opacity="0.7" />
                <line x1="206" y1="102" x2="14" y2="152" strokeWidth="0.7" opacity="0.7" />
                <text x="14" y="164" fontSize="6" fontFamily="ui-monospace,monospace" opacity="0.65">LANDING</text>
              </svg>
              {/* Wireframe 2: Dashboard */}
              <svg className="bt-bp" viewBox="0 0 220 170" fill="none">
                <defs>
                  <pattern id="bpgrid2" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" strokeWidth="0.4" opacity="0.3" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="220" height="170" fill="url(#bpgrid2)" />
                <rect x="8" y="8" width="204" height="154" rx="6" strokeWidth="1.2" />
                <line x1="50" y1="8" x2="50" y2="162" strokeWidth="0.9" opacity="0.9" />
                <rect x="14" y="16" width="30" height="4" strokeWidth="0.8" />
                <rect x="56" y="32" width="46" height="26" strokeWidth="1" />
                <rect x="106" y="32" width="46" height="26" strokeWidth="1" />
                <rect x="156" y="32" width="50" height="26" strokeWidth="1" />
                <rect x="56" y="64" width="150" height="62" strokeWidth="1" />
                <polyline points="62,116 78,102 92,108 108,88 124,94 140,78 158,84 178,70 200,74" strokeWidth="1.1" opacity="0.95" />
                <text x="56" y="164" fontSize="6" fontFamily="ui-monospace,monospace" opacity="0.65">DASHBOARD</text>
              </svg>
              {/* Wireframe 3: Portfolio */}
              <svg className="bt-bp" viewBox="0 0 220 170" fill="none">
                <defs>
                  <pattern id="bpgrid3" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" strokeWidth="0.4" opacity="0.3" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="220" height="170" fill="url(#bpgrid3)" />
                <rect x="8" y="8" width="204" height="154" rx="6" strokeWidth="1.2" />
                <rect x="14" y="16" width="60" height="8" strokeWidth="1.1" />
                {[0, 1, 2].map((c) =>
                  [0, 1].map((r) => {
                    const x = 14 + c * 66;
                    const y = 38 + r * 56;
                    return (
                      <g key={`g${c}${r}`}>
                        <rect x={x} y={y} width="58" height="48" strokeWidth="1" strokeDasharray="3 2" />
                        <line x1={x} y1={y} x2={x + 58} y2={y + 48} strokeWidth="0.6" opacity="0.7" />
                        <line x1={x + 58} y1={y} x2={x} y2={y + 48} strokeWidth="0.6" opacity="0.7" />
                      </g>
                    );
                  })
                )}
                <text x="14" y="164" fontSize="6" fontFamily="ui-monospace,monospace" opacity="0.65">PORTFOLIO</text>
              </svg>
            </div>
          </div>

          {/* Design tile */}
          <div className="sn-bento-tile bt-design">
            <span className="sn-bento-badge">02 · Design</span>
            <h3>Every type of site, beautifully.</h3>
            <p>Portfolio, storefront, blog, SaaS — the AI picks a vibe that fits.</p>
            <div className="bt-design-tiles" aria-hidden="true">
              <div className="bt-style bt-style-editorial">
                <div className="bt-style-specimen" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Aa</div>
                <div className="bt-style-meta">
                  <span className="bt-style-label">Editorial</span>
                  <span className="bt-style-mark" style={{ fontFamily: "'Instrument Serif', serif" }}>Serif · 1.6</span>
                </div>
              </div>
              <div className="bt-style bt-style-boutique">
                <div className="bt-style-specimen" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>Aa</div>
                <div className="bt-style-meta">
                  <span className="bt-style-label">Boutique</span>
                  <span className="bt-style-mark" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>Display · 1.4</span>
                </div>
              </div>
              <div className="bt-style bt-style-saas">
                <div className="bt-style-specimen" style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.04em" }}>Aa</div>
                <div className="bt-style-meta">
                  <span className="bt-style-label">Product</span>
                  <span className="bt-style-mark">Sans · 1.5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ship tile */}
          <div className="sn-bento-tile bt-ship">
            <span className="sn-bento-badge">03 · Launch</span>
            <h3>Live. Everywhere.<br />Your domain.</h3>
            <p>SSL, hosting, and CDN — all handled. Get a free sitenow.ai subdomain, or point to any custom domain you own.</p>
            <div className="sn-bento-mock">
              <div className="mock-url">
                <span className="mock-url-dot" />
                https://<span className="mock-url-path">yourbrand.com</span>
              </div>
            </div>
          </div>

          {/* Edit tile */}
          <div className="sn-bento-tile bt-edit">
            <span className="sn-bento-badge">04 · Edit</span>
            <div className="bt-edit-head">
              <h3>Two ways to edit.<br /><span className="sn-gradient-text">Both are yours.</span></h3>
              <p>Chat your changes into the AI builder, or create and edit pages directly in WordPress. Real WordPress under the hood, real ownership over your site.</p>
            </div>
            <div className="bt-edit-panels" aria-hidden="true">
              <div className="bt-edit-panel bt-edit-ai">
                <div className="bt-edit-panel-head">
                  <span className="bt-edit-panel-tag"><i className="fa-solid fa-wand-magic-sparkles" /> AI Vibe Builder</span>
                  <span className="bt-edit-panel-sub">Describe it, ship it.</span>
                </div>
                <div className="bt-edit-chat">
                  <div className="bt-edit-msg bt-edit-msg-you">
                    Make the hero warmer and push the CTA higher. Swap the photo for something outdoors.
                  </div>
                  <div className="bt-edit-msg bt-edit-msg-ai">
                    <span className="bt-edit-msg-avatar">S</span>
                    <div>
                      <div>Warming the palette, lifting the CTA, and finding a new hero image.</div>
                      <div className="bt-edit-diff">
                        <span className="bt-edit-diff-row"><span className="bt-edit-diff-mark">+</span> <code>hero.bg</code> <span className="bt-edit-chip" style={{background:'#f5e8d4'}}/> <span className="bt-edit-arrow">→</span> <span className="bt-edit-chip" style={{background:'#e9c89a'}}/></span>
                        <span className="bt-edit-diff-row"><span className="bt-edit-diff-mark">+</span> <code>hero.cta.y</code> <span className="bt-edit-diff-val">72 → 36</span></span>
                        <span className="bt-edit-diff-row"><span className="bt-edit-diff-mark">+</span> <code>hero.image</code> <span className="bt-edit-diff-val">studio-portrait → golden-hour-field</span></span>
                      </div>
                      <div className="bt-edit-msg-foot">Deployed · 8s</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bt-edit-panel bt-edit-wp">
                <div className="bt-edit-panel-head">
                  <span className="bt-edit-panel-tag bt-edit-panel-tag-wp"><i className="fa-brands fa-wordpress" /> WordPress CMS</span>
                  <span className="bt-edit-panel-sub">Real WordPress. Real export.</span>
                </div>
                <div className="bt-edit-wp-admin">
                  <div className="bt-edit-wp-side">
                    <span className="bt-edit-wp-side-title">Dashboard</span>
                    <span><i className="fa-solid fa-thumbtack" /> Posts</span>
                    <span className="is-active"><i className="fa-solid fa-file-lines" /> Pages</span>
                    <span><i className="fa-solid fa-image" /> Media</span>
                    <span><i className="fa-solid fa-palette" /> Appearance</span>
                    <span><i className="fa-solid fa-plug" /> Plugins</span>
                    <span><i className="fa-solid fa-gears" /> Settings</span>
                  </div>
                  <div className="bt-edit-wp-main">
                    <div className="bt-edit-wp-bar">
                      <span>Edit Page — Home</span>
                      <span className="bt-edit-wp-save">Update</span>
                    </div>
                    <div className="bt-edit-wp-canvas">
                      <div className="bt-edit-wp-block is-selected">
                        <span className="bt-edit-wp-block-tag">Heading</span>
                        <div className="bt-edit-wp-line" style={{width:'72%'}} />
                      </div>
                      <div className="bt-edit-wp-block">
                        <span className="bt-edit-wp-block-tag">Paragraph</span>
                        <div className="bt-edit-wp-line" style={{width:'92%'}} />
                        <div className="bt-edit-wp-line" style={{width:'60%'}} />
                      </div>
                      <div className="bt-edit-wp-block">
                        <span className="bt-edit-wp-block-tag">Image</span>
                        <div className="bt-edit-wp-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-only simplified panels */}
            <div className="bt-edit-panels-m" aria-hidden="true">
              <div className="bt-edit-panel-m bt-edit-panel-m-ai">
                <div className="bt-edit-panel-m-head">
                  <span className="bt-edit-panel-tag"><i className="fa-solid fa-wand-magic-sparkles" /> AI Vibe Builder</span>
                </div>
                <div className="bt-edit-m-chat">
                  <div className="bt-edit-m-you">&quot;Make the hero warmer.&quot;</div>
                  <div className="bt-edit-m-ai">
                    <span className="bt-edit-msg-avatar">S</span>
                    <span>Warming the palette.</span>
                  </div>
                  <div className="bt-edit-m-swatch">
                    <span className="bt-edit-m-chip" style={{background:'#f5e8d4'}} />
                    <i className="fa-solid fa-arrow-right" />
                    <span className="bt-edit-m-chip" style={{background:'#e9c89a'}} />
                    <span className="bt-edit-m-deployed"><span className="bt-edit-m-dot" /> Deployed · 8s</span>
                  </div>
                </div>
              </div>
              <div className="bt-edit-panel-m bt-edit-panel-m-wp">
                <div className="bt-edit-panel-m-head">
                  <span className="bt-edit-panel-tag bt-edit-panel-tag-wp"><i className="fa-brands fa-wordpress" /> WordPress CMS</span>
                </div>
                <div className="bt-edit-m-wp">
                  <div className="bt-edit-m-wp-bar">
                    <span>Edit Page — Home</span>
                    <span className="bt-edit-wp-save">Update</span>
                  </div>
                  <div className="bt-edit-m-wp-canvas">
                    <div className="bt-edit-m-wp-block is-selected">
                      <span className="bt-edit-m-wp-tag">Heading</span>
                      <div className="bt-edit-wp-line" style={{width:'72%'}} />
                    </div>
                    <div className="bt-edit-m-wp-block">
                      <span className="bt-edit-m-wp-tag">Paragraph</span>
                      <div className="bt-edit-wp-line" style={{width:'92%'}} />
                      <div className="bt-edit-wp-line" style={{width:'60%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bt-edit-foot">
              <span className="bt-edit-foot-item"><i className="fa-solid fa-bolt" /> Changes go live in seconds</span>
              <span className="bt-edit-foot-item"><i className="fa-solid fa-plug" /> 59,000+ WP plugins work</span>
              <span className="bt-edit-foot-item"><i className="fa-solid fa-download" /> Export your site anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnMeet;
