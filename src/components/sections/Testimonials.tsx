import { publishedTestimonials } from "@/lib/testimonials";
import { whatsappLink } from "@/lib/site";
import { Button, Container } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialsRail } from "./TestimonialsRail";

const title = "Yolculuğu paylaşanlar";

/**
 * Kullanıcı yorumları. Yayına alınmış (sample olmayan) yorum varsa kaydırmalı şerit,
 * yoksa deneyim paylaşmaya davet eden sade bir kutu gösterilir (örnek yorumlar asla yayınlanmaz).
 */
export function Testimonials() {
  if (publishedTestimonials.length === 0) {
    const shareHref = whatsappLink("Merhaba, Ovupera deneyimimi paylaşmak istiyorum.");
    return (
      <section className="bg-blush-100/60 py-20 sm:py-24">
        <Container className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-600">Kullanıcı yorumları</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Ovupera kullanıcılarının deneyimleri çok yakında burada. Siz de yolculuğunuzu bizimle paylaşın.
          </p>
          {shareHref && (
            <div className="mt-8">
              <Button href={shareHref}>Deneyiminizi paylaşın</Button>
            </div>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-blush-100/60 py-20 sm:py-24">
      <TestimonialsRail title={title}>
        {publishedTestimonials.map((t) => (
          <TestimonialCard
            key={`${t.name}-${t.date}`}
            testimonial={t}
            className="w-[85%] shrink-0 snap-start sm:w-[420px] lg:w-[460px]"
          />
        ))}
      </TestimonialsRail>
    </section>
  );
}
