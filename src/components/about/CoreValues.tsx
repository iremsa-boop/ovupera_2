import { coreValues, type ValueIcon } from "@/lib/about";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";

const icons: Record<ValueIcon, React.ReactNode> = {
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 006 21h12a1.7 1.7 0 001.5-2.5L14 9V3M7.5 15h9" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
};

export function CoreValues() {
  return (
    <section className="bg-blush-100 py-20 sm:py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl">
            <span className="font-sans font-medium tracking-tight text-ink">Temel </span>
            <em className="font-serif text-plum-700">değerlerimiz</em>
          </h2>
          <p className="mt-4 text-muted">Araştırmadan formüle, yaptığımız her şeye yön veren ilkeler.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {coreValues.map((v, i) => {
            const featured = i === 0;
            return (
              <article
                key={v.title}
                className={cn(
                  "flex min-h-64 flex-col rounded-2xl p-7 shadow-[0_2px_12px_-6px_rgba(74,18,56,0.15)]",
                  featured ? "bg-plum-800 text-white" : "bg-white",
                )}
              >
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-xl",
                    featured ? "bg-white/10 text-white" : "bg-blush-100 text-plum-800",
                  )}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {icons[v.icon]}
                  </svg>
                </span>
                <h3 className={cn("mt-auto pt-12 text-xl", featured ? "text-white" : "text-ink")}>{v.title}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", featured ? "text-blush-200" : "text-muted")}>{v.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
