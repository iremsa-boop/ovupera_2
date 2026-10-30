import { publishedTestimonials } from "@/lib/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialsRail } from "./TestimonialsRail";

/** Ana sayfa yorum şeridi. Yayına alınmış (sample olmayan) yorum yoksa bölüm görünmez. */
export function Testimonials() {
  if (publishedTestimonials.length === 0) return null;

  return (
    <section className="overflow-hidden bg-blush-100/60 py-20 sm:py-24">
      <TestimonialsRail title="Yolculuğu paylaşanlar">
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
