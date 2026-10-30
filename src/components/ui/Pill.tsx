import { cn } from "@/lib/utils";

export function Pill({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-plum-800/15 bg-white/70 px-3 py-1 text-xs font-medium text-plum-800",
        className,
      )}
    >
      {children}
    </span>
  );
}
