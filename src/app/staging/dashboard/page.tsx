"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { ArrowUp, Globe } from "lucide-react";

type Website = {
  id: number;
  name: string;
  site_url: string;
  site_title: string;
  created_at: string;
  updated_at: string;
  is_demo: number;
};

export default function DashboardPage() {
  const [prompt, setPrompt] = useState("");
  const [sites, setSites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchSites() {
      try {
        const res = await fetch("/api/site-engine/list-sites");
        const json = await res.json();
        if (json.ok && json.data?.data) {
          setSites(json.data.data);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchSites();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      router.push(`/staging/project/new?prompt=${encodeURIComponent(prompt.trim())}`);
    }
  };

  function timeAgo(dateStr: string) {
    const date = new Date(dateStr + " UTC");
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Hero area with gradient */}
        <div className="relative flex-shrink-0 flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, hsl(258 70% 75% / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, hsl(225 75% 70% / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(280 60% 75% / 0.2) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-8">
              Ready to build?
            </h1>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-4"
            >
              <textarea
                placeholder="Describe the website you want to build..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                rows={2}
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none resize-none text-base leading-relaxed"
              />
              <div className="flex items-center justify-end mt-2">
                <button
                  type="submit"
                  disabled={!prompt.trim()}
                  className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Projects grid */}
        <div className="flex-1 bg-card/50 border-t border-border rounded-t-3xl px-6 md:px-10 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">My projects</h2>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-4 animate-pulse">
                    <div className="aspect-[16/10] rounded-xl bg-muted mb-4" />
                    <div className="h-4 bg-muted rounded w-2/3 mb-2" />
                    <div className="h-3 bg-muted rounded w-1/3" />
                  </div>
                ))}
              </div>
            ) : sites.length === 0 ? (
              <div className="text-center py-16">
                <Globe size={40} className="mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground font-medium">No projects yet</p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Describe what you want to build and we&apos;ll create it for you.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sites.map((site) => (
                  <button
                    key={site.id}
                    onClick={() => router.push(`/staging/project/${site.id}`)}
                    className="text-left rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden group"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
                      <Globe size={32} className="text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-foreground text-sm truncate">
                        {site.site_title || site.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Edited {timeAgo(site.updated_at)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
