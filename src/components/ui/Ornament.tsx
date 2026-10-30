import { cn } from "@/lib/utils";

/** Marka görsellerindeki çizgi + elmas ayıracı */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden>
      <span className="h-px w-12 bg-gold-400/70" />
      <span className="size-1.5 rotate-45 bg-gold-500" />
      <span className="h-px w-12 bg-gold-400/70" />
    </div>
  );
}
