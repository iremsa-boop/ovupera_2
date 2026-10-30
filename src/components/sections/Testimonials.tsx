import { averageRating, testimonials } from "@/lib/testimonials";
import { Button, Container, SectionHeading, Stars } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";

type Props = { limit?: number; showLink?: boolean };

export function Testimonials({ limit, showLink = true }: Props) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  if (items.length === 0) return null;
  const avg = averageRating();

  return (
    <section className="bg-blush-100 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Kullanıcı yorumları" title="Yolculuğu paylaşanlar" />
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted">
          <Stars rating={avg} />
          <span>
            {avg.toFixed(1)} / 5 · {testimonials.length} yorum
          </span>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <TestimonialCard key={`${t.name}-${t.date}`} testimonial={t} />
          ))}
        </div>
        {showLink && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/yorumlar" variant="outline">
              Tüm yorumlar
            </Button>
            <Button href="/yorumlar#yorum-yaz">Yorum yazın</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
