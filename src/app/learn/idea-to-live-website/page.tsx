import {
  Search,
  Command as CommandIcon,
  Lightbulb,
  ClipboardList,
  Wand2,
  Layers,
  Database,
  TestTube,
  Globe,
  TrendingUp,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LearnSidebar } from "@/components/learn-sidebar";
import SnNavbar from "@/components/staging/sn-navbar";

export default function IdeaToLiveWebsitePage() {
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
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">From Idea to Live Website</h1>
          <p className="text-lg text-muted-foreground mb-10">
            A complete walkthrough for taking a website from a one-line idea to something real people use.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center py-16 px-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center leading-tight">
              Imagine it.<br />Ship it. Grow it.
            </h2>
          </div>

          <section id="overview" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Overview</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>This guide walks you through the full lifecycle of a sitenow.ai project — from the moment you have an idea to the moment real visitors are using your site.</p>
              <p>It&apos;s longer than the <a href="/learn/getting-started" className="text-primary hover:underline">Getting Started</a> guide, but more thorough. Skim the sections that matter for your project, and come back as your site grows.</p>
              <p>You&apos;ll cover seven stages:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Shape the idea</li>
                <li>Plan before you prompt</li>
                <li>Generate the first version</li>
                <li>Refine the design and content</li>
                <li>Add backend features</li>
                <li>Test and prepare for launch</li>
                <li>Deploy and grow</li>
              </ol>
            </div>
          </section>

          <section id="shape-the-idea" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">1. Shape the Idea</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Before you open sitenow.ai, get clear on three things. You don&apos;t need essays — a sentence each is enough.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">What is it?</strong> A landing page, a portfolio, a store, a directory, a SaaS product.</li>
                <li><strong className="text-foreground">Who is it for?</strong> Be specific. &ldquo;Indie game developers&rdquo; is better than &ldquo;creators.&rdquo;</li>
                <li><strong className="text-foreground">What should they do?</strong> Sign up, buy, book, read, contact, share.</li>
              </ul>
              <p>If you can answer these three, you&apos;re ready to write a great first prompt.</p>
            </div>
          </section>

          <section id="plan-before-prompt" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">2. Plan Before You Prompt</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Spend five minutes outlining the site before you generate anything. A loose plan helps sitenow.ai give you a coherent first draft instead of a jumble of sections.</p>
              <p>A good outline includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Pages</strong> — home, about, pricing, blog, contact, etc.</li>
                <li><strong className="text-foreground">Sections per page</strong> — hero, features, testimonials, FAQ.</li>
                <li><strong className="text-foreground">Style direction</strong> — colors, typography, mood, references.</li>
                <li><strong className="text-foreground">Content</strong> — real headlines, copy, and product details if you have them.</li>
              </ul>
              <p>Real content beats placeholder text every time. If you have it, paste it in.</p>
            </div>
          </section>

          <section id="generate" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Wand2 className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">3. Generate the First Version</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Open the dashboard, click <strong className="text-foreground">New Site</strong>, and write a prompt that pulls all your planning into one paragraph. Don&apos;t worry about getting it perfect — your goal is a working draft.</p>
              <div className="rounded-xl border border-border bg-card p-5 mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Example prompt</p>
                <p className="text-sm text-foreground">&ldquo;Build a marketing site for &lsquo;Drift&rsquo;, a focus timer app for indie game developers. Pages: home, pricing, changelog. Home should have a hero, three features, a testimonial, an FAQ, and a sign-up CTA. Confident, technical tone. Dark theme with a single neon-green accent. Bold sans-serif headings, mono for code samples.&rdquo;</p>
              </div>
              <p>Once it generates, take a slow first pass. Don&apos;t edit yet — just notice what feels right and what doesn&apos;t.</p>
            </div>
          </section>

          <section id="refine" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">4. Refine the Design and Content</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Now iterate. The trick is to change one meaningful thing at a time so you can see exactly what each prompt does.</p>
              <p>A useful order to work in:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong className="text-foreground">Structure</strong> — add, remove, or reorder sections so the page tells the right story.</li>
                <li><strong className="text-foreground">Copy</strong> — sharpen headlines, shorten paragraphs, fix the tone.</li>
                <li><strong className="text-foreground">Visuals</strong> — adjust color, type, spacing, and imagery.</li>
                <li><strong className="text-foreground">Polish</strong> — hover states, micro-interactions, mobile spacing.</li>
              </ol>
              <p>If a change goes the wrong way, use <strong className="text-foreground">Version History</strong> to roll back. Nothing you do is permanent.</p>
              <p>For more on writing good prompts, see <a href="/learn/prompting-tips" className="text-primary hover:underline">Prompting Tips</a>.</p>
            </div>
          </section>

          <section id="backend" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">5. Add Backend Features</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>This is where sitenow.ai pulls ahead of traditional builders. You can add real backend functionality just by asking.</p>
              <p>Common things to add:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Authentication</strong> — &ldquo;add email and Google sign-in to a /login page.&rdquo;</li>
                <li><strong className="text-foreground">A database</strong> — &ldquo;store sign-ups in a leads table with name, email, and source.&rdquo;</li>
                <li><strong className="text-foreground">Forms with email</strong> — &ldquo;send me an email when someone fills out the contact form.&rdquo;</li>
                <li><strong className="text-foreground">Payments</strong> — &ldquo;sell a $19 monthly plan with Stripe and gate /dashboard behind it.&rdquo;</li>
                <li><strong className="text-foreground">A simple CMS</strong> — &ldquo;add a blog where I can create posts from an admin page.&rdquo;</li>
              </ul>
              <p>Each of these wires into the same project — no third-party dashboards to configure.</p>
            </div>
          </section>

          <section id="test" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TestTube className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">6. Test and Prepare for Launch</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Before you flip the switch, walk through the site like a real visitor. Check the easy-to-miss details:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Every link goes to the right place — including footers and navs.</li>
                <li>Forms actually submit and you receive the data.</li>
                <li>Auth, payments, and any custom flows work end to end.</li>
                <li>The site looks correct on mobile and on a wide desktop monitor.</li>
                <li>Page titles, descriptions, and social previews are set.</li>
                <li>Favicon, logo, and brand colors are in place.</li>
              </ul>
              <p>Ask a friend to click around. Fresh eyes catch things you&apos;ve stopped seeing.</p>
            </div>
          </section>

          <section id="deploy" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">7. Deploy and Connect a Domain</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Click <strong className="text-foreground">Deploy</strong> and your site goes live in seconds. Hosting, SSL, and CDN are all handled for you.</p>
              <p>To use your own domain:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open the site&apos;s settings and go to <strong className="text-foreground">Domains</strong>.</li>
                <li>Add your domain and follow the DNS instructions.</li>
                <li>Wait a few minutes for DNS to propagate. SSL is automatic.</li>
              </ol>
              <p>You can keep editing after launch. Each deploy is versioned — if anything breaks, roll back instantly.</p>
            </div>
          </section>

          <section id="grow" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">8. Measure and Grow</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>A live site is the start, not the finish. Once you have visitors, let real data drive your next changes.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Analytics</strong> — see which pages people read and where they drop off.</li>
                <li><strong className="text-foreground">Form and signup data</strong> — review what your users are actually telling you.</li>
                <li><strong className="text-foreground">Iterate weekly</strong> — small, frequent improvements beat large rewrites.</li>
                <li><strong className="text-foreground">Share and learn</strong> — post your site, watch reactions, and listen.</li>
              </ul>
              <p className="text-foreground font-semibold text-lg mt-6">Your site is alive. Keep shipping. ⚡</p>
            </div>
          </section>
        </main>

        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16 py-16 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
            <ul className="space-y-2 border-l border-border pl-3">
              <li>
                <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#shape-the-idea" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shape the Idea
                </a>
              </li>
              <li>
                <a href="#plan-before-prompt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Plan Before You Prompt
                </a>
              </li>
              <li>
                <a href="#generate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Generate the First Version
                </a>
              </li>
              <li>
                <a href="#refine" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Refine Design and Content
                </a>
              </li>
              <li>
                <a href="#backend" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Add Backend Features
                </a>
              </li>
              <li>
                <a href="#test" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Test and Prepare
                </a>
              </li>
              <li>
                <a href="#deploy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Deploy and Connect a Domain
                </a>
              </li>
              <li>
                <a href="#grow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Measure and Grow
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
