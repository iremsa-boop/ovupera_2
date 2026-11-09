import { coreValues } from "@/lib/about";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";

export function CoreValues() {
  return (
    <section className="bg-blush-100 py-16 sm:py-28">
      <Container>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-600">İlkelerimiz</p>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight text-plum-900 sm:text-5xl">Temel değerlerimiz</h2>
          <p className="mt-4 text-muted">Araştırmadan formüle, yaptığımız her şeye yön veren ilkeler.</p>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {coreValues.map((v, i) => {
            const featured = i === 0;
            return (
              <article
                key={v.title}
                className={cn(
                  "flex w-[78%] shrink-0 snap-start flex-col items-center rounded-2xl px-6 py-8 text-center sm:w-[60%] md:w-auto md:px-7 md:py-10 shadow-[0_2px_12px_-6px_rgba(74,18,56,0.15)]",
                  featured ? "bg-plum-800 text-white" : "bg-white",
                )}
              >
                <h3 className={cn("font-serif text-xl sm:text-2xl", featured ? "text-white" : "text-ink")}>{v.title}</h3>
                <p className={cn("mt-2 max-w-xs text-sm leading-relaxed", featured ? "text-blush-200" : "text-muted")}>{v.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
