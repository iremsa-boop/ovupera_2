import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";
import { Stars } from "@/components/ui";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase("tr-TR");

export function TestimonialCard({ testimonial: t, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <article className={cn("flex h-full flex-col rounded-2xl border border-blush-200 bg-white p-7 sm:p-8", className)}>
      <Stars rating={t.rating} className="[&_svg]:size-6" />
      <p className="mt-6 flex-1 text-[17px] leading-relaxed text-muted">{t.text}</p>
      <div className="mt-10 flex items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-plum-600 to-plum-900 text-sm font-medium text-white">
          {initials(t.name)}
        </span>
        <div>
          <p className="text-ink">{t.name}</p>
          {t.meta && <p className="text-sm text-muted">{t.meta}</p>}
        </div>
      </div>
    </article>
  );
}
