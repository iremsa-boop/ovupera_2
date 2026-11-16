"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Yorum metni. Mobilde 6 satırla sınırlanır ki tek bir uzun yorum
 * bütün kartları uzatıp boşluk bırakmasın; taşan yorumda "Devamını oku" çıkar.
 * Masaüstünde metin her zaman tam gösterilir.
 */
export function ReviewText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <p ref={ref} className={cn(className, !open && "line-clamp-6 sm:line-clamp-none")}>
        {text}
      </p>
      {(overflows || open) && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2 self-start text-[13px] font-medium text-plum-700 underline underline-offset-2 sm:hidden"
        >
          {open ? "Daha az göster" : "Devamını oku"}
        </button>
      )}
    </>
  );
}
