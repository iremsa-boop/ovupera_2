"use client";

import { useRef } from "react";
import { Container } from "@/components/ui";

type Props = {
  title: string;
  children: React.ReactNode;
};

const arrow =
  "grid size-11 place-items-center rounded-full border border-plum-900/20 text-plum-900 transition hover:border-plum-900 hover:bg-plum-900 hover:text-white";

/** Yatay kaydırılan kart şeridi; fare kullanıcıları için önceki/sonraki okları */
export function TestimonialsRail({ title, children }: Props) {
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
        <h2 className="font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">{title}</h2>
        <div className="hidden shrink-0 gap-2 md:flex">
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
        className="mt-12 flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-5 overflow-x-auto px-[var(--gutter)] pb-4 [--gutter:1.25rem] [scrollbar-width:none] sm:[--gutter:2rem] lg:[--gutter:3rem] min-[1400px]:[--gutter:calc((100%-1400px)/2+3rem)]"
      >
        {children}
      </div>
    </>
  );
}
