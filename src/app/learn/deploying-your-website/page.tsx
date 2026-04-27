import {
  Search,
  Command as CommandIcon,
  CheckCircle2,
  Rocket,
  Link2,
  ShieldCheck,
  History,
  Eye,
  AlertTriangle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LearnSidebar } from "@/components/learn-sidebar";
import SnNavbar from "@/components/staging/sn-navbar";

export default function DeployingYourWebsitePage() {
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
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Deploying Your Website</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Take your site live in one click — hosting, SSL, and CDN included.
          </p>

          <div className="rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center py-16 px-8">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center leading-tight">
              One click.<br />Live to the world.
            </h2>
          </div>

          <section id="how-it-works" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How Deploys Work</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Every sitenow.ai project has two states: a <strong className="text-foreground">draft</strong> you edit in the builder and a <strong className="text-foreground">live</strong> version your visitors see.</p>
              <p>Editing in the builder doesn&apos;t affect the live site. When you&apos;re happy with the draft, you click <strong className="text-foreground">Deploy</strong> and sitenow.ai publishes a new version to the world.</p>
              <p>Each deploy is a snapshot — code, content, and configuration — so you can always roll back to a previous version if something goes wrong.</p>
            </div>
          </section>

          <section id="pre-deploy-checklist" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Pre-Deploy Checklist</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Run through this list before you go live. Five minutes here saves you from embarrassing fixes after launch.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All links work — including footers, navs, and buttons.</li>
                <li>Forms actually submit and you receive the data.</li>
                <li>Auth and payments work end to end.</li>
                <li>The site looks right on mobile, tablet, and a wide desktop monitor.</li>
                <li>Page titles, meta descriptions, and social previews are set.</li>
                <li>Favicon, logo, and brand colors are correct.</li>
                <li>Placeholder text and lorem ipsum are gone.</li>
                <li>Analytics is connected if you want to track traffic.</li>
              </ul>
            </div>
          </section>

          <section id="deploy" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Deploying Your Site</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>To publish, click <strong className="text-foreground">Deploy</strong> in the top right of the editor. sitenow.ai builds your site and pushes it to a global CDN within seconds.</p>
              <p>Your site is immediately available at a free sitenow.ai subdomain like <code className="text-sm bg-muted px-1.5 py-0.5 rounded">your-project.sitenow.app</code>.</p>
              <p>You can keep editing right after deploying. New changes stay in the draft until you click Deploy again — visitors only see what you&apos;ve explicitly published.</p>
            </div>
          </section>

          <section id="custom-domain" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Link2 className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Connecting a Custom Domain</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Free subdomains are great for testing, but most projects deserve a real domain. Connecting one takes a few minutes.</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open your site&apos;s <strong className="text-foreground">Settings → Domains</strong>.</li>
                <li>Click <strong className="text-foreground">Add Domain</strong> and enter the domain you own (e.g. <code className="text-sm bg-muted px-1.5 py-0.5 rounded">yourbrand.com</code>).</li>
                <li>Copy the DNS records sitenow.ai shows you.</li>
                <li>Log into your domain registrar (Namecheap, Cloudflare, GoDaddy, etc.) and paste the records into your DNS settings.</li>
                <li>Come back to sitenow.ai. Once DNS propagates, your domain will show as <strong className="text-foreground">Connected</strong>.</li>
              </ol>
              <p>DNS usually takes a few minutes but can take up to 24 hours depending on your registrar.</p>
            </div>
          </section>

          <section id="ssl" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">SSL and Security</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Every site on sitenow.ai is served over HTTPS. You don&apos;t need to install or renew certificates — sitenow.ai issues and rotates SSL automatically for both subdomains and custom domains.</p>
              <p>You also get:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A global CDN, so your site is fast for visitors anywhere.</li>
                <li>DDoS protection and bot filtering at the edge.</li>
                <li>Automatic redirects from HTTP to HTTPS.</li>
                <li>Optional <code className="text-sm bg-muted px-1.5 py-0.5 rounded">www</code> ↔ apex domain redirects.</li>
              </ul>
            </div>
          </section>

          <section id="preview-deploys" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Preview Deploys</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Want to share a draft with a teammate or client before going live? Use a preview deploy.</p>
              <p>Click the dropdown next to <strong className="text-foreground">Deploy</strong> and choose <strong className="text-foreground">Preview</strong>. sitenow.ai publishes a private, password-optional URL that points to your current draft.</p>
              <p>Preview URLs don&apos;t affect your live site. They&apos;re perfect for getting feedback without risking a half-finished launch.</p>
            </div>
          </section>

          <section id="versions" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <History className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Version History and Rollbacks</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Every deploy is saved. If something breaks after a deploy, you can roll back to any previous version in one click.</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open <strong className="text-foreground">Settings → Deploys</strong>.</li>
                <li>Find the version you want to restore.</li>
                <li>Click <strong className="text-foreground">Rollback</strong>.</li>
              </ol>
              <p>Rollbacks are instant — visitors see the older version within seconds. Your draft stays untouched, so you can keep working on the broken version and re-deploy when it&apos;s fixed.</p>
            </div>
          </section>

          <section id="troubleshooting" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Troubleshooting</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>A few things that occasionally trip people up:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-foreground">Domain not connecting.</strong> Double-check the DNS records match exactly. If your registrar adds your domain to the end of records automatically, don&apos;t add it again.</li>
                <li><strong className="text-foreground">Live site looks stale.</strong> Hard refresh (Cmd/Ctrl + Shift + R) to bypass your browser cache. CDN caches usually clear within 30 seconds.</li>
                <li><strong className="text-foreground">Deploy failed.</strong> Open the deploy log for the specific error. Most failures are missing environment variables or a bad reference in code — fix it in the editor and re-deploy.</li>
                <li><strong className="text-foreground">SSL pending.</strong> Certificates issue automatically once DNS resolves. If it&apos;s been more than an hour, check that your DNS records point to sitenow.ai and not an old host.</li>
              </ul>
              <p className="text-foreground font-semibold text-lg mt-6">Ship early. Ship often. ⚡</p>
            </div>
          </section>
        </main>

        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16 py-16 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
            <ul className="space-y-2 border-l border-border pl-3">
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How Deploys Work
                </a>
              </li>
              <li>
                <a href="#pre-deploy-checklist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pre-Deploy Checklist
                </a>
              </li>
              <li>
                <a href="#deploy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Deploying Your Site
                </a>
              </li>
              <li>
                <a href="#custom-domain" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Custom Domains
                </a>
              </li>
              <li>
                <a href="#ssl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SSL and Security
                </a>
              </li>
              <li>
                <a href="#preview-deploys" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Preview Deploys
                </a>
              </li>
              <li>
                <a href="#versions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Version History
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
