import { displayedTestimonials } from "@/lib/testimonials";
import { whatsappLink } from "@/lib/site";
import { Container } from "@/components/ui";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialsRail } from "./TestimonialsRail";

const title = "Yolculuğu paylaşanlar";
const subtitle = "Ovupera'yı günlük rutinine katan kullanıcılarımızın deneyimleri.";

/** Koyu mürdüm bant: renkli arka plan, sol üstte başlık, sağda oklar, altında beyaz yorum kartları */
const band =
  "overflow-hidden bg-plum-900 bg-[radial-gradient(55%_120%_at_88%_15%,rgba(176,90,146,0.55),transparent_70%)] py-20 sm:py-24";

/**
 * Kullanıcı yorumları. Yayında yalnızca gerçek (sample olmayan) yorumlar gösterilir;
 * hiç yoksa aynı bant içinde deneyim paylaşmaya davet edilir.
 */
export function Testimonials() {
  if (displayedTestimonials.length === 0) {
    const shareHref = whatsappLink("Merhaba, Ovupera deneyimimi paylaşmak istiyorum.");
    return (
      <section className={band}>
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Kullanıcılarımızın deneyimleri çok yakında burada. Siz de yolculuğunuzu bizimle paylaşın.
            </p>
          </div>
          {shareHref && (
            <a
              href={shareHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-plum-800 transition-colors hover:bg-blush-100"
            >
              Deneyiminizi paylaşın
            </a>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className={band}>
      <TestimonialsRail title={title} subtitle={subtitle}>
        {displayedTestimonials.map((t) => (
          <TestimonialCard
            key={`${t.name}-${t.date}`}
            testimonial={t}
            className="w-[82%] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
          />
        ))}
      </TestimonialsRail>
    </section>
  );
}
