import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is sitenow.ai?",
    a: "sitenow.ai is an AI-powered website builder that lets you create beautiful, production-ready websites just by describing what you want. No coding or design skills required.",
  },
  {
    q: "Do I need coding experience?",
    a: "Not at all. Simply describe your website in plain English and our AI handles everything: design, layout, content, and deployment.",
  },
  {
    q: "How fast can I launch a website?",
    a: "Most websites are generated in under 60 seconds. You can go from idea to a live, hosted website in minutes.",
  },
  {
    q: "Can I customize the generated website?",
    a: "Absolutely. After generation, you can edit every element (text, images, colors, layout) to make it perfectly yours.",
  },
  {
    q: "Is hosting included?",
    a: "Yes. Every website comes with free hosting, SSL certificate, and a subdomain. Custom domains are available on Pro and Enterprise plans.",
  },
];

const FAQ = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
          Frequently asked
          <br />
          <span className="gradient-text">questions</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
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
);

export default FAQ;
