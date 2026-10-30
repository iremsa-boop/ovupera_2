"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-blush-200/70 bg-blush-50/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-plum-700",
                  active ? "text-plum-800 font-medium" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden -mr-2 p-2 text-plum-900"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menüyü aç/kapat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>
      {open && (
        <nav className="border-t border-blush-200 bg-blush-50 md:hidden" aria-label="Mobil menü">
          <Container className="flex flex-col py-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="py-3 font-serif text-lg text-plum-900">
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
