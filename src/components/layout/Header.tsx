"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";

const CTA_HREF = "/iletisim";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ana sayfada hero fotoğrafının üzerinde şeffaf, beyaz yazılı
  const overlay = pathname === "/" && !scrolled && !open;
  const links = navigation.filter((n) => n.href !== CTA_HREF);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        overlay ? "border-transparent bg-transparent" : "border-blush-200/70 bg-blush-50/90 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo light={overlay} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {links.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  overlay
                    ? "text-white/85 hover:text-white"
                    : cn("hover:text-plum-700", active ? "font-medium text-plum-800" : "text-muted"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={CTA_HREF}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              overlay
                ? "border-white/70 text-white hover:bg-white hover:text-plum-900"
                : "border-plum-800/30 text-plum-800 hover:border-plum-800 hover:bg-white",
            )}
          >
            İletişim
          </Link>
        </nav>
        <button
          className={cn("-mr-2 p-2 md:hidden", overlay ? "text-white" : "text-plum-900")}
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
