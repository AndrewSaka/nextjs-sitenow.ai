"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isStaging = pathname.startsWith("/staging");
  const links = [
    { label: "Learn", href: "/learn" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href={isStaging ? "/staging" : "/"} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-wide-color.svg" alt="sitenow.ai" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Sign in
          </Button>
          <Button size="sm" className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90">
            Get Started — It&apos;s Free
          </Button>
          <ThemeToggle />
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
            <a href="#hero" onClick={() => setOpen(false)}>Get Started — It&apos;s Free</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
