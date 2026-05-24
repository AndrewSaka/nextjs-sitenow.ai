"use client";

const StepArtDescribe = () => (
  <svg viewBox="0 0 300 130" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="descBorder" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#6c3ee0" />
        <stop offset="1" stopColor="#3b57db" />
      </linearGradient>
    </defs>
    <rect
      x="20"
      y="18"
      width="260"
      height="94"
      rx="14"
      fill="#fff"
      stroke="url(#descBorder)"
      strokeWidth="1.5"
    />
    <text
      x="34"
      y="38"
      fontFamily="Montserrat"
      fontSize="8"
      fontWeight="500"
      fill="#8a8a95"
    >
      Describe your website idea...
    </text>
    <rect x="34" y="48" width="150" height="6" rx="3" fill="#14151f" />
    <rect x="34" y="60" width="110" height="6" rx="3" fill="#14151f" />
    <rect x="146" y="59" width="1.4" height="8" fill="#6c3ee0">
      <animate
        attributeName="opacity"
        values="1;0;1"
        dur="1s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="34"
      y="78"
      width="54"
      height="14"
      rx="7"
      fill="#f2efe9"
      stroke="#e8e3d9"
    />
    <text
      x="61"
      y="88"
      fontFamily="Montserrat"
      fontSize="7"
      fontWeight="500"
      fill="#3d3d48"
      textAnchor="middle"
    >
      Portfolio
    </text>
    <rect
      x="92"
      y="78"
      width="44"
      height="14"
      rx="7"
      fill="#f2efe9"
      stroke="#e8e3d9"
    />
    <text
      x="114"
      y="88"
      fontFamily="Montserrat"
      fontSize="7"
      fontWeight="500"
      fill="#3d3d48"
      textAnchor="middle"
    >
      Bakery
    </text>
    <rect
      x="140"
      y="78"
      width="56"
      height="14"
      rx="7"
      fill="#f2efe9"
      stroke="#e8e3d9"
    />
    <text
      x="168"
      y="88"
      fontFamily="Montserrat"
      fontSize="7"
      fontWeight="500"
      fill="#3d3d48"
      textAnchor="middle"
    >
      SaaS site
    </text>
    <circle cx="258" cy="92" r="11" fill="#6c3ee0" />
    <path
      d="M255 92h6M258 89v6"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const StepArtGenerate = () => {
  const agents = [
    { x: 50, y: 34, label: "DESIGN", delay: "0s", bob: "0s" },
    { x: 50, y: 100, label: "CODE", delay: "0.4s", bob: "0.8s" },
    { x: 250, y: 34, label: "WORDPRESS", delay: "0.2s", bob: "0.4s" },
    { x: 250, y: 100, label: "SEO", delay: "0.6s", bob: "1.2s" },
  ];
  return (
    <svg viewBox="0 0 300 130" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="genBg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1d1e2a" />
          <stop offset="1" stopColor="#14151f" />
        </linearGradient>
        <symbol id="cog" viewBox="-12 -12 24 24">
          <path d="M -1.4 -10 L 1.4 -10 L 2 -7.2 Q 3.4 -6.8 4.6 -6 L 7.1 -7.4 L 9.1 -5.4 L 7.7 -2.9 Q 8.5 -1.7 8.9 -0.3 L 11.7 0.3 L 11.7 3.1 L 8.9 3.7 Q 8.5 5.1 7.7 6.3 L 9.1 8.8 L 7.1 10.8 L 4.6 9.4 Q 3.4 10.2 2 10.6 L 1.4 13.4 L -1.4 13.4 L -2 10.6 Q -3.4 10.2 -4.6 9.4 L -7.1 10.8 L -9.1 8.8 L -7.7 6.3 Q -8.5 5.1 -8.9 3.7 L -11.7 3.1 L -11.7 0.3 L -8.9 -0.3 Q -8.5 -1.7 -7.7 -2.9 L -9.1 -5.4 L -7.1 -7.4 L -4.6 -6 Q -3.4 -6.8 -2 -7.2 Z" transform="translate(0, -1.7) scale(0.75)" fill="currentColor" />
          <circle r="3" fill="#14151f" />
        </symbol>
      </defs>
      <rect x="0" y="0" width="300" height="130" fill="url(#genBg)" />

      {/* Big central cog */}
      <g transform="translate(150,65)" color="#6c3ee0" opacity="0.5">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite" />
          <use href="#cog" transform="scale(1.2)" />
        </g>
      </g>

      {/* Connection lines */}
      <g stroke="#6c3ee0" strokeWidth="0.8" opacity="0.5" fill="none">
        <path d="M50 32 Q95 42 142 60" />
        <path d="M50 100 Q95 88 142 70" />
        <path d="M250 32 Q205 42 158 60" />
        <path d="M250 100 Q205 88 158 70" />
      </g>

      {/* Four robot agents */}
      {agents.map((n, i) => (
        <g key={i}>
          {/* Pulsing aura */}
          <circle cx={n.x} cy={n.y} r="18" fill="none" stroke="#6c3ee0" strokeOpacity="0.35">
            <animate attributeName="r" values="16;24;16" dur="2.4s" begin={n.delay} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="2.4s" begin={n.delay} repeatCount="indefinite" />
          </circle>
          {/* Robot body — bobs gently */}
          <g transform={`translate(${n.x},${n.y})`}>
            <animateTransform attributeName="transform" type="translate" values={`${n.x},${n.y - 1.5}; ${n.x},${n.y + 1.5}; ${n.x},${n.y - 1.5}`} dur="3s" begin={n.bob} repeatCount="indefinite" />
            {/* Antenna */}
            <line x1="0" y1="-13" x2="0" y2="-17" stroke="#6c3ee0" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="0" cy="-18" r="1.6" fill="#fff">
              <animate attributeName="fill" values="#fff;#6c3ee0;#fff" dur="1.4s" begin={n.delay} repeatCount="indefinite" />
            </circle>
            {/* Head */}
            <rect x="-9" y="-13" width="18" height="13" rx="4" fill="#6c3ee0" stroke="#fff" strokeOpacity="0.2" />
            {/* Eyes */}
            <circle cx="-3.2" cy="-6.5" r="1.4" fill="#fff" />
            <circle cx="3.2" cy="-6.5" r="1.4" fill="#fff" />
            <circle cx="-3.2" cy="-6.5" r="0.6" fill="#14151f" />
            <circle cx="3.2" cy="-6.5" r="0.6" fill="#14151f" />
            {/* Mouth */}
            <rect x="-3" y="-3" width="6" height="1" rx="0.5" fill="#fff" opacity="0.55" />
            {/* Body panel */}
            <rect x="-10" y="1" width="20" height="13" rx="3" fill="#fff" opacity="0.97" />
            <rect x="-10" y="1" width="20" height="3" rx="3" fill="#14151f" opacity="0.85" />
            {/* Chest icon */}
            {n.label === "CODE" && (
              <g stroke="#14151f" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-4 7 L-6 9.5 L-4 12" />
                <path d="M4 7 L6 9.5 L4 12" />
                <path d="M1.6 6 L-1.6 13" strokeWidth="0.9" />
              </g>
            )}
            {n.label === "DESIGN" && (
              <g stroke="#14151f" strokeWidth="1.1" fill="none" strokeLinecap="round">
                <circle cx="0" cy="9.5" r="3.2" />
                <path d="M-3 6.5 L3 12.5 M-3 12.5 L3 6.5" strokeWidth="0.85" opacity="0.7" />
              </g>
            )}
            {n.label === "WORDPRESS" && (
              <g>
                <text x="0" y="12.5" textAnchor="middle" fontFamily="'Font Awesome 6 Brands'" fontSize="11" fill="#14151f">{"\uf19a"}</text>
              </g>
            )}
            {n.label === "SEO" && (
              <g stroke="#14151f" strokeWidth="1.2" fill="none" strokeLinecap="round">
                <circle cx="-1" cy="8.5" r="2.8" />
                <path d="M1.2 10.7 L3.8 13.2" />
              </g>
            )}
            {/* Feet */}
            <rect x="-6" y="14.5" width="3" height="2.2" rx="1" fill="#6c3ee0" />
            <rect x="3" y="14.5" width="3" height="2.2" rx="1" fill="#6c3ee0" />
          </g>
          {/* Label */}
          <text x={n.x} y={n.y + 28} fontFamily="ui-monospace, monospace" fontSize="6.5" fontWeight="700" fill="#fff" opacity="0.75" textAnchor="middle" letterSpacing="0.5">{n.label}</text>
        </g>
      ))}

      {/* Side cog wheels */}
      <g transform="translate(112,36)" color="#6c3ee0" opacity="0.6">
        <use href="#cog" transform="scale(0.45)">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="7s" repeatCount="indefinite" />
        </use>
      </g>
      <g transform="translate(192,94)" color="#3b57db" opacity="0.55">
        <use href="#cog" transform="scale(0.45)">
          <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="9s" repeatCount="indefinite" />
        </use>
      </g>

      {/* Central site being built */}
      <rect x="130" y="48" width="40" height="34" rx="4" fill="#fff" opacity="0.97" />
      <rect x="134" y="53" width="14" height="3" rx="1.5" fill="#14151f" />
      <rect x="134" y="59" width="32" height="2" rx="1" fill="#14151f" opacity="0.35" />
      <rect x="134" y="63" width="24" height="2" rx="1" fill="#14151f" opacity="0.35" />
      <rect x="134" y="69" width="20" height="8" rx="4" fill="#6c3ee0" />

      {/* Spinning outer ring */}
      <g transform="translate(150,65)">
        <circle r="30" fill="none" stroke="#6c3ee0" strokeWidth="1" strokeDasharray="6 6" opacity="0.55">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Code tag floating top-center */}
      <g transform="translate(150,18)" fill="#fff" opacity="0.85">
        <rect x="-18" y="-7" width="36" height="13" rx="3" fill="#fff" opacity="0.08" />
        <text x="0" y="2.5" fontFamily="ui-monospace, monospace" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#fff">&lt;/&gt;</text>
      </g>

      {/* Progress dots bottom */}
      <g>
        <circle cx="138" cy="118" r="2" fill="#6c3ee0">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="147" cy="118" r="2" fill="#6c3ee0">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="156" cy="118" r="2" fill="#6c3ee0">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

const StepArtLaunch = () => (
  <svg viewBox="0 0 300 130" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="launchG" x1="0" x2="1">
        <stop offset="0" stopColor="#6c3ee0" />
        <stop offset="1" stopColor="#3b57db" />
      </linearGradient>
      <clipPath id="launchClip"><rect x="20" y="14" width="260" height="106" rx="10" /></clipPath>
    </defs>
    {/* Window shadow */}
    <rect x="22" y="18" width="260" height="106" rx="10" fill="#000" opacity="0.08" />
    {/* Window */}
    <rect x="20" y="14" width="260" height="106" rx="10" fill="#fff" stroke="#e5e5ec" />
    <g clipPath="url(#launchClip)">
      {/* Title bar */}
      <rect x="20" y="14" width="260" height="26" fill="#f4f4f8" />
      {/* Traffic lights */}
      <circle cx="32" cy="27" r="3.5" fill="#ff5f57" />
      <circle cx="42" cy="27" r="3.5" fill="#febc2e" />
      <circle cx="52" cy="27" r="3.5" fill="#28c840" />
      {/* URL bar */}
      <rect x="72" y="20" width="170" height="14" rx="7" fill="#fff" stroke="#e2e2ea" />
      {/* Padlock */}
      <path d="M81 26 v-2 a2 2 0 0 1 4 0 v2" stroke="#14151f" strokeWidth="0.9" fill="none" />
      <rect x="79.5" y="26" width="7" height="5.5" rx="1" fill="#14151f" opacity="0.75" />
      {/* URL text */}
      <text x="92" y="31" fontFamily="ui-monospace,Menlo,monospace" fontSize="7.5" fill="#14151f">sitenow.ai/yoursite</text>
      {/* Reload icon */}
      <circle cx="251" cy="27" r="4" fill="none" stroke="#9ca3af" strokeWidth="1" />
      <path d="M249 25 l2 0 l0 -2" stroke="#9ca3af" strokeWidth="1" fill="none" />
      {/* Divider */}
      <line x1="20" y1="40" x2="280" y2="40" stroke="#ececf2" />
      {/* Hero panel */}
      <rect x="32" y="50" width="236" height="44" rx="6" fill="url(#launchG)" />
      <rect x="42" y="62" width="110" height="6" rx="2" fill="#fff" opacity="0.95" />
      <rect x="42" y="74" width="78" height="5" rx="2" fill="#fff" opacity="0.65" />
      <rect x="212" y="70" width="44" height="14" rx="7" fill="#fff" />
      <text x="234" y="80" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="800" fill="#6c3ee0">LIVE</text>
      {/* Feature row below hero */}
      <rect x="32" y="100" width="68" height="14" rx="3" fill="#f0eefc" />
      <rect x="108" y="100" width="68" height="14" rx="3" fill="#f0eefc" />
      <rect x="184" y="100" width="84" height="14" rx="3" fill="#f0eefc" />
    </g>
  </svg>
);

interface StepData {
  num: string;
  title: string;
  desc: string;
  art: React.ReactNode;
}

const steps: StepData[] = [
  {
    num: "01",
    title: "Describe",
    desc: "Tell us what you want in plain English. A portfolio, a product launch, a small business site — whatever it is.",
    art: <StepArtDescribe />,
  },
  {
    num: "02",
    title: "Generate",
    desc: "AI agents design, write copy, and wire your site together on WordPress \u2014 database, hosting, and all.",
    art: <StepArtGenerate />,
  },
  {
    num: "03",
    title: "Go live",
    desc: "Hit publish. Your site is live on a free subdomain, or bring your own. Edit anything, anytime.",
    art: <StepArtLaunch />,
  },
];

const SnSteps = () => {
  return (
    <section className="sn-steps" id="how">
      <div className="sn-container">
        <div className="sn-section-head">
          <p className="sn-eyebrow">How it works</p>
          <h2 className="sn-section-title">
            Three steps to your<br />
            <span className="sn-gradient-text">dream site.</span>
          </h2>
        </div>
        <div className="sn-steps-grid">
          {steps.map((s) => (
            <div className="sn-step" key={s.num}>
              <span className="sn-step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="sn-step-art">{s.art}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnSteps;
