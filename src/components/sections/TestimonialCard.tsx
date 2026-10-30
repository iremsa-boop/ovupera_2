import type { Testimonial } from "@/lib/testimonials";
import { formatDate } from "@/lib/utils";
import { Card, Stars } from "@/components/ui";

export function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={t.rating} />
        {t.sample && (
          <span className="rounded-full bg-blush-100 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-plum-600">
            Örnek yorum
          </span>
        )}
      </div>
      <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-plum-950">“{t.text}”</blockquote>
      <div className="mt-6 border-t border-blush-200 pt-4">
        <p className="font-medium text-plum-900">{t.name}</p>
        <p className="text-xs text-muted">
          {[t.meta, formatDate(t.date)].filter(Boolean).join(" · ")}
        </p>
      </div>
    </Card>
  );
}
