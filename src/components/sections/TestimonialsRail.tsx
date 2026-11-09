"use client";

import { useRef } from "react";
import { Container } from "@/components/ui";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const arrow =
  "grid size-11 place-items-center rounded-full border border-white/60 text-white transition hover:border-white hover:bg-white hover:text-plum-900";

/** Koyu bant üzerinde yatay kaydırılan yorum kartları; fare kullanıcıları için önceki/sonraki okları */
export function TestimonialsRail({ title, subtitle, children }: Props) {
  const rail = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = rail.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  }

  return (
    <>
      <Container className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>}
        </div>
        <div className="hidden shrink-0 gap-3 md:flex">
          <button type="button" onClick={() => scroll(-1)} className={arrow} aria-label="Önceki yorumlar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" onClick={() => scroll(1)} className={arrow} aria-label="Sonraki yorumlar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
      {/* Kartlar container hizasında başlar, sağa doğru sayfa kenarına kadar taşar */}
      <div
        ref={rail}
        className="mt-10 flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-5 overflow-x-auto px-[var(--gutter)] pb-6 pt-1 [--gutter:1.25rem] [scrollbar-width:none] sm:[--gutter:2rem] lg:[--gutter:3rem] xl:[--gutter:4rem] min-[1680px]:[--gutter:calc((100%-1680px)/2+4rem)]"
      >
        {children}
      </div>
    </>
  );
}
