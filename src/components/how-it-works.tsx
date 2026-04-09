import { MessageSquare, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe",
    description: "Tell our AI what your website should look like, feel like, and do.",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "Generate",
    description: "Watch as AI crafts a complete, polished website in seconds.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Launch instantly with hosting, domain, and everything ready to go.",
    step: "03",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
        <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
          Three steps to your
          <br />
          <span className="gradient-text">dream site</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="relative group text-center p-10 rounded-3xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <span className="text-7xl font-black text-primary/8 absolute top-6 right-8 select-none">{s.step}</span>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
              <s.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
