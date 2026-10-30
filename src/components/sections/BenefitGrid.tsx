import Image from "next/image";
import { benefitHighlights } from "@/lib/product";
import { Container, SectionHeading } from "@/components/ui";

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
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefitHighlights.map((b) => (
            <article key={b.title} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
              <div className="relative aspect-[4/5]">
                <Image src={b.image} alt={b.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blush-200">{b.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
