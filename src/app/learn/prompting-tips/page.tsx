import {
  Search,
  Command as CommandIcon,
  Target,
  Layers,
  RefreshCw,
  ImageIcon,
  Palette,
  AlertTriangle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LearnSidebar } from "@/components/learn-sidebar";
import SnNavbar from "@/components/staging/sn-navbar";

export default function PromptingTipsPage() {
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
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Prompting Tips</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Write better prompts and get the most out of sitenow.ai.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center py-16 px-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center leading-tight">
              The better the prompt,<br />the better the site.
            </h2>
          </div>

          <section id="why-prompts-matter" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why Prompts Matter</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>sitenow.ai turns your words into a real, working website. The clearer your description, the closer the result will be to what you have in mind.</p>
              <p>Think of prompting like briefing a designer and developer at the same time. They&apos;re fast and capable, but they need direction. A vague request gets you something generic. A thoughtful one gets you something tailored.</p>
              <p>The good news: you don&apos;t have to get it right on the first try. Prompting is a conversation, and you can refine your site step by step.</p>
            </div>
          </section>

          <section id="be-specific" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Be Specific</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Specifics beat adjectives. Instead of asking for a &ldquo;modern&rdquo; or &ldquo;clean&rdquo; site, describe what those words mean to you.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-2">Vague</p>
                  <p className="text-sm text-foreground">&ldquo;Build me a portfolio site.&rdquo;</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Specific</p>
                  <p className="text-sm text-foreground">&ldquo;Build a portfolio site for a freelance illustrator. Include a hero with my name and tagline, a grid of 6 projects, an about section, and a contact form. Use a warm, off-white background with serif headings.&rdquo;</p>
                </div>
              </div>
            </div>
          </section>

          <section id="provide-context" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Provide Context</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Tell sitenow.ai about your audience, your goals, and what makes your project unique. Context helps it make smart defaults you don&apos;t have to specify yourself.</p>
              <p>Useful context to include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Who it&apos;s for</strong> — &ldquo;small business owners,&rdquo; &ldquo;local musicians,&rdquo; &ldquo;enterprise procurement teams.&rdquo;</li>
                <li><strong className="text-foreground">What it does</strong> — sells products, books appointments, showcases work, collects sign-ups.</li>
                <li><strong className="text-foreground">The vibe or feeling</strong> — playful, premium, technical, friendly, minimalist.</li>
                <li><strong className="text-foreground">References</strong> — &ldquo;similar to Linear&rdquo; or &ldquo;in the style of a indie game studio site.&rdquo;</li>
              </ul>
            </div>
          </section>

          <section id="iterate-gradually" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Iterate Gradually</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Don&apos;t try to describe every page, section, and detail in one giant prompt. Start with the core idea, then refine.</p>
              <p>A good loop looks like:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start with the big picture: what the site is and who it&apos;s for.</li>
                <li>Look at what was generated and pick the most important thing to change.</li>
                <li>Make that one change with a clear, focused prompt.</li>
                <li>Repeat until each section feels right.</li>
              </ol>
              <p>Small, targeted edits give you predictable results. Sweeping rewrites often undo things you liked.</p>
            </div>
          </section>

          <section id="use-references" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Use Visual References</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Words can only describe a layout so far. If you have a screenshot, sketch, or example site you like, attach it. sitenow.ai can use images as a reference for layout, color, and tone.</p>
              <p>You can upload:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Screenshots of sites you admire</li>
                <li>Logos, photos, and brand assets</li>
                <li>Wireframes or rough sketches</li>
                <li>Existing brand guidelines or moodboards</li>
              </ul>
              <p>If you&apos;re not sure how to phrase a design idea, show it instead.</p>
            </div>
          </section>

          <section id="style-and-tone" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Clarify Style and Tone</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Style cues sit alongside your content and shape how everything feels. The more specific you are here, the more cohesive the result.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Color</strong> — name a primary color, a mood (&ldquo;earthy,&rdquo; &ldquo;neon&rdquo;), or paste hex codes.</li>
                <li><strong className="text-foreground">Typography</strong> — &ldquo;bold sans-serif headings, smaller serif body&rdquo; or name specific fonts.</li>
                <li><strong className="text-foreground">Density</strong> — minimal and spacious, or rich and information-dense.</li>
                <li><strong className="text-foreground">Voice</strong> — confident and concise, warm and conversational, technical and precise.</li>
              </ul>
            </div>
          </section>

          <section id="common-mistakes" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Common Mistakes to Avoid</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-foreground">Asking for too much at once.</strong> A prompt that asks for ten different changes will get muddled. Pick the most important one and lead with it.</li>
                <li><strong className="text-foreground">Using contradictory direction.</strong> &ldquo;Minimal but bold and detailed&rdquo; pulls in opposite directions. Pick one and commit.</li>
                <li><strong className="text-foreground">Skipping the audience.</strong> A site for kids and a site for surgeons should not look the same. Always say who it&apos;s for.</li>
                <li><strong className="text-foreground">Re-describing what already works.</strong> If a section is great, don&apos;t mention it. Only describe what should change.</li>
                <li><strong className="text-foreground">Vague feedback.</strong> &ldquo;Make it better&rdquo; is hard to act on. Try &ldquo;make the hero headline larger and shorten the subtitle to one line.&rdquo;</li>
              </ul>
              <p className="text-foreground font-semibold text-lg mt-6">Specific in. Specific out. ⚡</p>
            </div>
          </section>
        </main>

        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16 py-16 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
            <ul className="space-y-2 border-l border-border pl-3">
              <li>
                <a href="#why-prompts-matter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Why Prompts Matter
                </a>
              </li>
              <li>
                <a href="#be-specific" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Be Specific
                </a>
              </li>
              <li>
                <a href="#provide-context" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Provide Context
                </a>
              </li>
              <li>
                <a href="#iterate-gradually" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Iterate Gradually
                </a>
              </li>
              <li>
                <a href="#use-references" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Use Visual References
                </a>
              </li>
              <li>
                <a href="#style-and-tone" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Clarify Style and Tone
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Common Mistakes to Avoid
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
