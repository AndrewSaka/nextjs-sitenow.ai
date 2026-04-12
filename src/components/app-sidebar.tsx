"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, FolderOpen, Star, Plus } from "lucide-react";

const navItems = [
  { label: "Home", href: "/staging/dashboard", icon: Home },
  { label: "Search", href: "/staging/search", icon: Search },
];

const projectItems = [
  { label: "All projects", href: "/staging/dashboard", icon: FolderOpen },
  { label: "Starred", href: "/staging/dashboard", icon: Star },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 h-screen sticky top-0 flex flex-col border-r border-border bg-card/50 px-3 py-4">
      {/* Logo */}
      <Link href="/staging/dashboard" className="flex items-center px-2 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wide-color.svg" alt="sitenow.ai" className="h-7 w-auto" />
      </Link>

      {/* New project button */}
      <Link
        href="/staging/dashboard"
        className="flex items-center gap-2 px-3 py-2 mb-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        <Plus size={16} />
        New project
      </Link>

      {/* Navigation */}
      <nav className="space-y-1 mb-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Projects */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 mb-2">
          Projects
        </p>
        <nav className="space-y-1">
          {projectItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary/10 text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom */}
      <div className="space-y-2 px-2">
        <Link
          href="/pricing"
          className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Upgrade plan
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
            A
          </div>
          <span className="text-sm text-foreground font-medium">Andrew</span>
        </div>
      </div>
    </aside>
  );
}
