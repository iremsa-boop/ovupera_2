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
    <article className={cn("flex flex-col rounded-xl bg-white p-4 sm:p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]", className)}>
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-plum-600 to-plum-900 text-sm sm:size-14 sm:text-base font-medium text-white">
          {t.photo ? (
            <Img src={t.photo} alt="" fill sizes="56px" className="object-cover" />
          ) : t.name ? (
            initials(t.name)
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <circle cx="12" cy="8" r="4" />
              <path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
            </svg>
          )}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink sm:text-base">{t.name ?? "Ovupera kullanıcısı"}</p>
          {t.meta && <p className="mt-0.5 text-xs text-muted sm:text-sm">{t.meta}</p>}
        </div>
      </div>
      {t.rating && <Stars rating={t.rating} tone="gold" className="mt-5 [&_svg]:size-5" />}
      <p className={cn(t.rating ? "mt-3" : "mt-4 sm:mt-5", "text-[13.5px] leading-relaxed sm:text-[15px] text-ink/80")}>{t.text}</p>
    </article>
  );
}
