import { Zap, Layout, Brain, Globe, Shield, Palette } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Your website goes from concept to live in under 60 seconds." },
  { icon: Layout, title: "Pixel Perfect", desc: "Every page is designed with modern aesthetics and responsive layouts." },
  { icon: Brain, title: "AI-Powered", desc: "Advanced AI understands your brand and creates matching designs." },
  { icon: Globe, title: "Ready to Launch", desc: "Hosting, SSL, domain — everything handled for you automatically." },
  { icon: Shield, title: "Secure & Fast", desc: "Built on modern infrastructure with top-tier security standards." },
  { icon: Palette, title: "Fully Customizable", desc: "Edit anything after generation. Your site, your rules." },
];

const Features = () => (
  <section id="features" className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why sitenow.ai?</p>
        <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
          Everything included.
          <br />
          <span className="gradient-text">Zero setup.</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
          Turn ideas into real websites — without hiring developers or touching code.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
