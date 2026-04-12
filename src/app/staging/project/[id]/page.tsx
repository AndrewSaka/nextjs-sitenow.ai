"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  RefreshCw,
  Loader2,
  Pencil,
  FileText,
  Palette,
  Puzzle,
  Globe,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type SiteData = {
  id: number;
  site_url: string;
  admin_url: string;
  site_title: string;
};

const creationSteps = [
  "Understanding your idea",
  "Choosing the right layout",
  "Generating pages and content",
  "Setting up hosting",
  "Finishing touches",
];

export default function ProjectPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params.id as string;
  const initialPrompt = searchParams.get("prompt");

  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<"loading" | "creating" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [projectTitle, setProjectTitle] = useState("New project");
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    if (id === "new" && initialPrompt) {
      setStatus("creating");
      createSite(initialPrompt);
    } else if (id !== "new") {
      loadProject(id);
    }
  }, [id, initialPrompt]);

  async function loadProject(projectId: string) {
    try {
      const res = await fetch("/api/site-engine/list-sites");
      const json = await res.json();
      if (json.ok && json.data?.data) {
        const site = json.data.data.find(
          (s: any) => s.id.toString() === projectId
        );
        if (site) {
          setSiteData({
            id: site.id,
            site_url: site.site_url,
            admin_url: site.admin_url || `${site.site_url}/wp-admin`,
            site_title: site.site_title,
          });
          setProjectTitle(site.site_title || site.name);
          setStatus("ready");
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not load project.");
    }
  }

  async function createSite(prompt: string) {
    setProjectTitle(prompt.slice(0, 40));

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < creationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);

    try {
      const slug = prompt
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 30);

      const subdomain = `${slug}-${Date.now().toString(36)}`;

      const res = await fetch("/api/site-engine/create-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subdomain,
          region: "us-central1-c",
          site_title: prompt.slice(0, 60),
          admin_username: "admin",
          admin_password: `Sn${Date.now().toString(36)}Ax1!`,
          is_demo: 0,
          business_type: "business",
          business_name: prompt.slice(0, 40),
          business_description: prompt,
        }),
      });

      const data = await res.json();
      clearInterval(stepInterval);

      if (data.ok && data.data) {
        const siteUrl = data.data.website_url || data.data.site_url;
        const siteId = data.data.website_id || data.data.id;

        setSiteData({
          id: siteId,
          site_url: siteUrl,
          admin_url: `${siteUrl}/wp-admin`,
          site_title: prompt.slice(0, 60),
        });
        setCurrentStep(creationSteps.length - 1);
        setStatus("ready");
        window.history.replaceState(null, "", `/staging/project/${siteId}`);
      } else {
        setErrorMessage(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      clearInterval(stepInterval);
      setErrorMessage("Could not connect to the server.");
      setStatus("error");
    }
  }

  // ── Creating state ──
  if (status === "creating") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-glow-primary top-[10%] left-[15%] animate-pulse-glow" />
        <div className="glow-blob w-[400px] h-[400px] bg-glow-accent bottom-[15%] right-[10%] animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 w-full max-w-lg mx-auto px-4 text-center">
          <div className="mb-10">
            <p className="text-sm text-muted-foreground mb-2">Building your website</p>
            <p className="text-lg font-semibold text-foreground leading-snug">
              &ldquo;{initialPrompt && initialPrompt.length > 120 ? `${initialPrompt.slice(0, 120)}...` : initialPrompt}&rdquo;
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-xl shadow-foreground/5 text-left mb-8">
            <div className="space-y-4">
              {creationSteps.map((step, i) => {
                const isDone = i < currentStep;
                const isCurrent = i === currentStep;
                return (
                  <div key={step} className="flex items-center gap-3">
                    {isDone ? (
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 size={20} className="text-primary flex-shrink-0 animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0" />
                    )}
                    <span className={`text-sm font-medium transition-colors ${isDone || isCurrent ? "text-foreground" : "text-muted-foreground/50"}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link href="/staging/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (status === "error") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4 space-y-4">
          <XCircle size={40} className="mx-auto text-destructive" />
          <h1 className="text-xl font-bold text-foreground">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">{errorMessage}</p>
          <Button variant="outline" className="rounded-full px-6" onClick={() => router.push("/staging/dashboard")}>
            Back to dashboard
          </Button>
        </div>
      </div>
    );
  }

  // ── Loading state ──
  if (status === "loading" || !siteData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 size={24} className="text-primary animate-spin" />
      </div>
    );
  }

  // ── Ready state ──
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Top bar */}
      <header className="flex items-center justify-between h-14 px-4 border-b border-border bg-card/50 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/staging/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <div className="w-px h-5 bg-border" />
          <span className="text-sm font-semibold text-foreground truncate max-w-[300px]">
            {projectTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const iframe = document.querySelector("iframe");
              if (iframe) iframe.src = siteData.site_url;
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
          <a
            href={siteData.site_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <ExternalLink size={14} />
            Visit site
          </a>
          <a href={siteData.admin_url} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold">
              <Pencil size={14} className="mr-1.5" />
              Edit website
            </Button>
          </a>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar panel */}
        <div className="w-[320px] flex-shrink-0 border-r border-border bg-background overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Site info */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-1">{projectTitle}</h2>
              <a
                href={siteData.site_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <Globe size={12} />
                {siteData.site_url.replace("https://", "")}
              </a>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                WordPress
              </p>
              <div className="space-y-1.5">
                {[
                  { label: "Dashboard", href: siteData.admin_url, icon: Pencil },
                  { label: "Pages", href: `${siteData.admin_url}/edit.php?post_type=page`, icon: FileText },
                  { label: "Customize", href: `${siteData.admin_url}/customize.php`, icon: Palette },
                  { label: "Plugins", href: `${siteData.admin_url}/plugins.php`, icon: Puzzle },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <link.icon size={14} />
                    {link.label}
                    <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 bg-muted/30">
          <iframe
            src={siteData.site_url}
            className="w-full h-full border-0"
            title="Site preview"
          />
        </div>
      </div>
    </div>
  );
}
