import {
  Search,
  Command as CommandIcon,
  PenLine,
  Eye,
  MessageSquare,
  Settings,
  Rocket,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LearnSidebar } from "@/components/learn-sidebar";
import SnNavbar from "@/components/staging/sn-navbar";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <SnNavbar
        hideLinks
        hideGetStarted
        centerSlot={
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
        }
        rightSlot={
          <>
            <div className="w-px h-5 bg-border" />
            <ThemeToggle />
          </>
        }
      />

      <div className="container mx-auto flex gap-0 px-4 pt-[30px] md:pt-[60px]">
        <LearnSidebar />

        <main className="flex-1 min-w-0 py-16 px-4 md:px-12">
          <p className="text-sm font-semibold text-primary mb-3">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Getting Started</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Build and launch your first website with sitenow.ai in under 10 minutes.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center py-16 px-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center leading-tight">
              From blank page<br />to live site.
            </h2>
          </div>

          <section id="create-account" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">1. Create Your Account</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Sign up for sitenow.ai with your email or a Google account. New accounts come with free credits, so you can start building right away — no card required.</p>
              <p>Once you&apos;re in, you&apos;ll land on your dashboard. This is where all your sites live and where you start new ones.</p>
            </div>
          </section>

          <section id="describe-site" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <PenLine className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">2. Describe Your Site</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Click <strong className="text-foreground">New Site</strong> and tell sitenow.ai what you want to build. Plain English works best — describe the project, the audience, and the vibe.</p>
              <div className="rounded-xl border border-border bg-card p-5 mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Example prompt</p>
                <p className="text-sm text-foreground">&ldquo;Create a landing page for a small-batch coffee roaster. Include a hero, a story section about our farms, a grid of 4 featured roasts, and a sign-up form for the newsletter. Warm tones, clean serif type.&rdquo;</p>
              </div>
              <p>Within a few seconds, sitenow.ai generates a fully working site you can edit and preview live.</p>
            </div>
          </section>

          <section id="preview-edit" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">3. Preview and Refine</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>The editor shows your site on the right and a chat panel on the left. As you preview, look for the most important thing to change first.</p>
              <p>You have a few ways to make edits:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Chat</strong> — describe the change in plain language.</li>
                <li><strong className="text-foreground">Direct Edit</strong> — click any text or element and tweak it inline.</li>
                <li><strong className="text-foreground">Discuss Mode</strong> — ask questions about your site before committing to a change.</li>
              </ul>
              <p>Each change is saved as a version, so you can always roll back if something doesn&apos;t feel right.</p>
            </div>
          </section>

          <section id="add-features" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">4. Add Real Features</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>sitenow.ai isn&apos;t just templates — it writes real code with a real backend. You can add things like:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Auth</strong> — sign-up and login, with email or social providers.</li>
                <li><strong className="text-foreground">Database</strong> — store form submissions, products, posts, anything.</li>
                <li><strong className="text-foreground">Email</strong> — send notifications and newsletters.</li>
                <li><strong className="text-foreground">Payments</strong> — collect money through Stripe.</li>
              </ul>
              <p>Just ask in chat. There&apos;s no separate dashboard to set up or service to connect.</p>
            </div>
          </section>

          <section id="configure" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">5. Configure the Details</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Before you ship, polish the things that matter for a real launch:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Set the site title, description, and favicon.</li>
                <li>Add your logo and brand colors.</li>
                <li>Connect a custom domain (or use a free sitenow.ai subdomain).</li>
                <li>Hook up analytics so you can see who&apos;s visiting.</li>
              </ul>
            </div>
          </section>

          <section id="deploy" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">6. Deploy Your Site</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>When you&apos;re ready, hit <strong className="text-foreground">Deploy</strong>. sitenow.ai pushes your site live in a single click — hosting, SSL, and CDN are all handled for you.</p>
              <p>You can keep editing after launch. Every deploy is versioned, so you can roll back to any earlier version if something goes wrong.</p>
              <p className="text-foreground font-semibold text-lg mt-6">That&apos;s it. You&apos;ve shipped a website. ⚡</p>
            </div>
          </section>

          <section id="next-steps" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Next Steps</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Now that your first site is live, here&apos;s where to go next:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Read the <a href="/learn/prompting-tips" className="text-primary hover:underline">Prompting Tips</a> guide to get more out of every request.</li>
                <li>Connect a custom domain to make it truly yours.</li>
                <li>Explore Auth, Database, and Payments to turn your site into a real product.</li>
              </ul>
            </div>
          </section>
        </main>

        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16 py-16 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
            <ul className="space-y-2 border-l border-border pl-3">
              <li>
                <a href="#create-account" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Create Your Account
                </a>
              </li>
              <li>
                <a href="#describe-site" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Describe Your Site
                </a>
              </li>
              <li>
                <a href="#preview-edit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Preview and Refine
                </a>
              </li>
              <li>
                <a href="#add-features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Add Real Features
                </a>
              </li>
              <li>
                <a href="#configure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Configure the Details
                </a>
              </li>
              <li>
                <a href="#deploy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Deploy Your Site
                </a>
              </li>
              <li>
                <a href="#next-steps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Next Steps
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
