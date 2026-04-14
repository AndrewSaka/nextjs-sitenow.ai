import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Templates", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy-statement" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-muted/40 py-20 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
          Bring your ideas to life
        </h2>
        <p className="text-muted-foreground text-lg">using AI — no coding.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        <div>
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide-color.svg" alt="sitenow.ai" className="h-8 w-auto" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            From idea to live website — instantly. AI-powered website generation for everyone.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} sitenow.ai. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
