import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";
import { Stars } from "@/components/ui";
import { Img } from "@/components/ui/Img";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase("tr-TR");

export function TestimonialCard({ testimonial: t, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <article className={cn("flex flex-col rounded-xl bg-white p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]", className)}>
      <div className="flex items-center gap-4">
        <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-plum-600 to-plum-900 text-base font-medium text-white">
          {t.photo ? <Img src={t.photo} alt="" fill sizes="56px" className="object-cover" /> : initials(t.name)}
        </span>
        <div>
          <p className="font-semibold text-ink">{t.name}</p>
          {t.meta && <p className="mt-0.5 text-sm text-muted">{t.meta}</p>}
        </div>
      </div>
      <Stars rating={t.rating} tone="gold" className="mt-5 [&_svg]:size-5" />
      <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{t.text}</p>
    </article>
  );
}
