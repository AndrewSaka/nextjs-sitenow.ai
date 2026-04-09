import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="relative max-w-4xl mx-auto text-center rounded-3xl border border-border bg-card p-14 md:p-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsl(258 70% 55% / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Ready to build?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-5">
            Start creating your website
            <br />
            <span className="gradient-text">in seconds</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Join thousands of creators who use sitenow.ai to build stunning
            websites without writing a single line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold"
            >
              Get Started — It&apos;s Free
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-sm font-semibold bg-background text-foreground border border-foreground/20 shadow-sm hover:bg-background hover:text-foreground hover:border-foreground/20"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
