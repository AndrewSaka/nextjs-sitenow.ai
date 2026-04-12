import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Rocket,
  Lightbulb,
  BookOpen,
  Globe,
  Search,
  Command as CommandIcon,
} from "lucide-react";
import { LearnSidebar } from "@/components/learn-sidebar";

const quickStartCards = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics of sitenow.ai and how to build your first website.",
  },
  {
    icon: Lightbulb,
    title: "From Idea to Live Website",
    description: "Step by step guide to get started, covering all the key features.",
  },
  {
    icon: BookOpen,
    title: "Prompting Tips",
    description: "Tips and tricks for getting the most out of sitenow.ai.",
  },
  {
    icon: Globe,
    title: "Deploying Your Website",
    description: "Learn how to deploy your website to the public in one click.",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto flex items-center h-16 px-4">
          <Link href="/staging" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide-color.svg" alt="sitenow.ai" className="h-8 w-auto" />
          </Link>

          {/* Centered search */}
          <div className="flex-1 flex justify-center px-4">
            <button
              type="button"
              className="hidden sm:flex items-center gap-2 h-9 w-full max-w-md px-3 rounded-lg border border-border bg-muted/50 text-sm text-muted-foreground hover:bg-muted transition-colors"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Search docs...</span>
              <kbd className="hidden md:inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 text-[11px] font-medium text-foreground shadow-sm">
                <CommandIcon className="h-3 w-3" strokeWidth={2.25} />
                <span>K</span>
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Button variant="ghost" size="sm" className="hover:text-nav-hover hover:bg-nav-hover/10">
              Support
            </Button>
            <Link href="/staging">
              <Button size="sm" className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90">
                Go to sitenow.ai
              </Button>
            </Link>
            <div className="w-px h-5 bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Content with inline sidebar */}
      <div className="container mx-auto flex gap-0 px-4">
        <LearnSidebar />

        <main className="flex-1 min-w-0 py-16 px-4 md:px-12">
          <p className="text-sm font-semibold text-primary mb-3">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Welcome</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Build beautiful and custom websites in minutes. No coding required.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center py-16 px-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center leading-tight">
              Bring your<br />ideas to life.
            </h2>
          </div>

          <section id="what-is-sitenow" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is sitenow.ai?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">sitenow.ai</strong> is an AI-powered website builder that allows you to create beautiful, custom websites using natural language.</p>
              <p>You simply describe what you want in plain English (or your native language), and sitenow.ai will generate it custom-tailored to your request. You can then keep making changes, improving it, adding features until it&apos;s ready to launch. Finally you can deploy it in one-click and share it with the world.</p>
              <p>sitenow.ai is different than traditional no-code website builders like Wix, Squarespace, and Webflow. It&apos;s powered by AI and actually writes code, which means the possibilities are endless, rather than using templates and having to learn a complicated interface.</p>
              <p>sitenow.ai comes with built-in auth, database, backend, and hosting, all fully integrated. You don&apos;t need to connect and pay for multiple other services. It works better and is more reliable.</p>
              <p>Our design philosophy is that sitenow.ai should be the single tool for you to build, launch, deploy and manage your website.</p>
              <p className="text-foreground font-semibold text-lg mt-6">Describe it. Generate it. Launch it. ⚡</p>
            </div>
          </section>

          <section id="quick-start" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Quick Start</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickStartCards.map((card) => (
                <div
                  key={card.title}
                  className="group border border-border rounded-2xl p-6 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer hover:border-primary/30"
                >
                  <card.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1.5">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* On this page - right sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16 py-16 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
            <ul className="space-y-2 border-l border-border pl-3">
              <li>
                <a href="#what-is-sitenow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  What is sitenow.ai?
                </a>
              </li>
              <li>
                <a href="#quick-start" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Quick Start
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
