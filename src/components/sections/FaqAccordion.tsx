type Props = {
  items: readonly { q: string; a: string }[];
};

/** JS gerektirmeyen akordeon (details/summary) */
export function FaqAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-blush-200 border-y border-blush-200">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-plum-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-blush-200 text-plum-700 transition group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
