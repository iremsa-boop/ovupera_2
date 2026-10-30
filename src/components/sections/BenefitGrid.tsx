import { benefitHighlights, type BenefitIcon } from "@/lib/product";
import { Container, SectionHeading } from "@/components/ui";

const icons: Record<BenefitIcon, React.ReactNode> = {
  cell: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="16" cy="12" r="5" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />,
  cycle: <path d="M20 12a8 8 0 01-14.3 4.9M4 12a8 8 0 0114.3-4.9M18 3v4.5h-4.5M6 21v-4.5h4.5" />,
};

export function BenefitGrid() {
  return (
    <section className="bg-gradient-to-b from-plum-900 to-plum-950 py-20 sm:py-24">
      <Container>
        <SectionHeading
          tone="light"
          eyebrow="Hücresel destek"
          title="Bilimin ışığında, her biri ölçülü."
          intro="Vitamin ve minerallerin onaylı sağlık beyanlarıyla, bedeninizin doğal süreçlerine eşlik eden bir formül."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {benefitHighlights.map((b) => (
            <article key={b.title} className="flex flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-blush-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {icons[b.icon]}
                </svg>
              </span>
              <h3 className="mt-8 font-serif text-2xl text-white">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-blush-200">{b.text}</p>
              <p className="mt-auto border-t border-white/10 pt-5 text-xs leading-relaxed tracking-wide text-blush-300/80 [margin-top:2rem]">
                {b.nutrients}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
