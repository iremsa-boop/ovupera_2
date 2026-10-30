import { testimonials } from "@/lib/testimonials";
import { Container } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";

/** Ana sayfa yorum şeridi: yatay kaydırılan kartlar */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="overflow-hidden bg-blush-100/60 py-20 sm:py-24">
      <Container>
        <h2 className="font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">Yolculuğu paylaşanlar</h2>
      </Container>
      {/* Kartlar container hizasında başlar, sağa doğru sayfa kenarına kadar taşar */}
      <div className="mt-12 flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-5 overflow-x-auto px-[var(--gutter)] pb-4 [--gutter:1.25rem] [scrollbar-width:none] sm:[--gutter:2rem] xl:[--gutter:max(2rem,calc((100%-72rem)/2+2rem))]">
        {testimonials.map((t) => (
          <TestimonialCard
            key={`${t.name}-${t.date}`}
            testimonial={t}
            className="w-[85%] shrink-0 snap-start sm:w-[420px] lg:w-[460px]"
          />
        ))}
      </div>
    </section>
  );
}
