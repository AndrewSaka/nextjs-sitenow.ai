"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown, Rocket, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: { monthly: "Free", annual: "Free" },
    description: "Best way to get started with sitenow.ai.",
    credits: "20 credits to get started",
    cta: "Start for Free",
    ctaStyle: "outline" as const,
    featured: false,
    chooseIf: [
      "Are working on personal projects",
      "Have an app idea",
      "Want to see what sitenow.ai can do",
    ],
    includes: [
      "Deploy 1 app",
      "Enjoy AI-powered features",
    ],
  },
  {
    name: "Bronze",
    icon: Zap,
    price: { monthly: "$29", annual: "$23" },
    period: "/mo",
    description: "Build full-stack sites with a WordPress backend. No coding needed.",
    credits: "1,500 credits / mo",
    cta: "Get Bronze",
    ctaStyle: "filled-dark" as const,
    featured: false,
    chooseIf: [
      "Need a full CMS backend",
      "Want to deploy to a domain",
      "Want to work on a larger project",
    ],
    includes: [
      "Everything from the free tier",
      "WordPress backend included",
      "Managed WordPress hosting",
      "Access to Max mode for complex tasks",
      "Support for medium size apps",
      "Publish up to 5 apps",
      "Up to 5 custom domains",
      "14 days of analytics history",
      "Send up to 500 emails / mo",
      "Remove watermarks",
    ],
  },
  {
    name: "Silver",
    icon: Crown,
    price: { monthly: "$79", annual: "$63" },
    period: "/mo",
    description: "For professionals building complex WordPress-powered apps.",
    credits: "4,500 credits / mo",
    cta: "Get Silver",
    ctaStyle: "primary" as const,
    featured: true,
    chooseIf: [
      "Build larger, more complex apps",
      "Want advanced WordPress customization",
      "Want to get fast help from our team",
    ],
    includes: [
      "Everything in Bronze",
      "Advanced WordPress configuration",
      "Plugin & theme customization",
      "Support for large apps",
      "Custom login options & branding",
      "Publish up to 15 apps",
      "Up to 15 custom domains",
      "60 days of analytics history",
      "Send up to 2,500 emails / mo",
      "Priority customer support",
    ],
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: { monthly: "Custom", annual: "Custom" },
    description: "Built for teams and agencies shipping at scale.",
    credits: "Custom volume pricing",
    cta: "Contact Us",
    ctaStyle: "outline" as const,
    featured: false,
    chooseIf: [
      "Have a team of 5+ building together",
      "Need SOC 2 and GDPR compliance",
      "Want a dedicated success manager",
    ],
    includes: [
      "Everything in Silver",
      "Enterprise WordPress",
      "Unlimited apps & custom domains",
      "SSO / SAML authentication",
      "SOC 2 & GDPR compliance",
      "Single-tenant environments",
      "VPC peering & static outbound IPs",
      "Design system & brand kit support",
      "Data warehouse connections",
      "Custom user groups & permissions",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
  },
];

const pricingFaqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or commitments. You can cancel your subscription at any time from your account settings, and you'll retain access until the end of your billing period.",
  },
  {
    q: "What happens when I run out of credits?",
    a: "You can continue using sitenow.ai with reduced AI features, or purchase additional credits on demand. Your apps and websites remain live regardless of your credit balance.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. When upgrading, you get immediate access to the new features. When downgrading, changes take effect at the next billing cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund. No questions asked.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes! Switch to annual billing and save 20% on Bronze and Silver plans. That's like getting over two months free every year.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar hideGetStarted />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">Pricing</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Anyone can start using sitenow.ai for free! As your needs grow, unlock more powerful AI features.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors ${
                isAnnual ? "bg-primary" : "bg-input"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                  isAnnual ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs font-bold uppercase tracking-wide text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full animate-in fade-in slide-in-from-left-2 duration-200">
                Save 20%
              </span>
            )}
          </div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {plans.map((p) => {
              const displayPrice = isAnnual ? p.price.annual : p.price.monthly;
              return (
                <div
                  key={p.name}
                  className={`p-7 flex flex-col rounded-2xl transition-all relative ${
                    p.featured
                      ? "border border-primary shadow-md shadow-primary/5 z-10"
                      : "border border-border hover:border-muted-foreground/30"
                  }`}
                  style={p.featured ? { background: "linear-gradient(180deg, hsl(258 60% 96% / 0.6) 0%, hsl(258 40% 98% / 0.3) 40%, hsl(0 0% 100%) 100%)" } : undefined}
                >
                  {/* Plan header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        Most popular
                      </span>
                    )}
                  </div>

                  <div className="mb-1">
                    <span className="text-5xl font-black text-foreground tracking-tight">{displayPrice}</span>
                    {p.period && displayPrice !== "Custom" && (
                      <span className="text-base text-muted-foreground ml-1">{p.period}</span>
                    )}
                  </div>

                  {p.credits && <p className="text-sm text-muted-foreground mb-1">{p.credits}</p>}
                  {isAnnual && p.price.annual !== "Free" && p.price.annual !== "Custom" && (
                    <p className="text-xs text-primary font-medium mb-4">Billed annually</p>
                  )}
                  {(!isAnnual || p.price.annual === "Free" || p.price.annual === "Custom") && <div className="mb-4" />}

                  <p className="text-sm font-medium text-foreground mb-6">{p.description}</p>

                  <Button
                    className={`w-full rounded-full h-11 mb-8 font-semibold text-sm ${
                      p.ctaStyle === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : p.ctaStyle === "filled-dark"
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : "bg-background text-foreground border border-foreground/20 shadow-sm hover:bg-background hover:text-foreground hover:border-foreground/20"
                    }`}
                  >
                    {p.cta}
                  </Button>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Choose if you…</p>
                    <ul className="space-y-2">
                      {p.chooseIf.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-primary mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border mb-6" />

                  <ul className="space-y-3 flex-1">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check size={15} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-muted-foreground">
            <Shield size={16} className="text-primary" />
            <span>Cancel anytime · No contracts · No surprises</span>
          </div>

          <div className="flex flex-col items-center mt-8 gap-3">
            <div className="flex -space-x-2">
              {["SC", "MJ", "ER", "AK", "LP"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 text-primary text-xs font-bold flex items-center justify-center"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">2,000+</span> creators and teams
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              Questions? We&apos;ve got <span className="gradient-text">answers</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-2xl px-6 bg-card data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
