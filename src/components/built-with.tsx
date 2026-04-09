import Image from "next/image";
import { ArrowRight, MessageSquare, Palette, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const BuiltWith = () => (
  <>
    {/* ── Section 1: Meet sitenow.ai ── */}
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tight">
            Meet <span className="gradient-text">sitenow.ai</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Your ideas deserve a real website — not a template.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Button
            size="lg"
            className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold"
          >
            Start building
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden bg-primary/5 border border-border p-8 md:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Describe it</p>
              <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
                Just tell the AI<br />what you need.
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Describe your business, style, and goals in plain language. Our AI turns your words into a fully designed, ready-to-launch website.
              </p>
            </div>
            <Image
              src="/assets/showcase-chat.jpg"
              alt="AI chat generating a website"
              width={800}
              height={600}
              className="w-full max-w-md mt-8 rounded-2xl shadow-lg h-auto"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-3xl bg-accent/10 border border-border p-8 flex-1 flex flex-col justify-between min-h-[200px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ship anything</p>
                <h3 className="text-2xl font-black text-foreground leading-tight mb-3">
                  Every type of website.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Portfolios, online stores, restaurants, salons, freelancer sites — all production-ready.
                </p>
              </div>
              <Image
                src="/assets/showcase-templates.jpg"
                alt="Multiple website types"
                width={800}
                height={600}
                className="w-full mt-6 rounded-2xl h-auto"
              />
            </div>

            <div className="rounded-3xl bg-foreground text-background p-8 flex-1 flex flex-col justify-center min-h-[180px]">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/60 mb-3">Fully yours</p>
              <h3 className="text-2xl font-black leading-tight mb-3">
                Edit everything.
              </h3>
              <p className="text-background/70 text-sm leading-relaxed">
                Change colors, text, images, and layout after generation. Your site, your rules — no lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Section 2: Powered by the platform ── */}
    <section className="py-28 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
            Powered by the <span className="gradient-text">sitenow.ai</span> platform
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            {
              icon: MessageSquare,
              label: "AI Chat",
              title: "Describe it.\nPublish it.",
              desc: "Tell the AI about your business and get a complete website — no code, no drag-and-drop.",
              accent: false,
            },
            {
              icon: Layers,
              label: "Full-stack hosting",
              title: "Built-in\nhosting & SSL.",
              desc: "Your site goes live instantly with fast hosting, custom domains, and free SSL certificates.",
              accent: false,
            },
            {
              icon: Palette,
              label: "Design engine",
              title: "Beautiful by\ndefault.",
              desc: "Every site is built with modern React and Tailwind CSS for a professional, responsive look.",
              accent: true,
            },
            {
              icon: Shield,
              label: "Security",
              title: "Secure &\nscalable.",
              desc: "Enterprise-grade infrastructure so your website is fast and protected from day one.",
              accent: true,
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 flex flex-col justify-between min-h-[320px] border ${
                card.accent
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    card.accent ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {card.label}
                </p>
                <h3
                  className={`text-xl font-black leading-tight mb-3 whitespace-pre-line ${
                    card.accent ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {card.title}
                </h3>
              </div>

              <div className="mt-auto">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    card.accent ? "bg-primary-foreground/15" : "bg-primary/10"
                  }`}
                >
                  <card.icon
                    size={22}
                    className={card.accent ? "text-primary-foreground" : "text-primary"}
                  />
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    card.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BuiltWith;
