import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-xs font-medium uppercase tracking-[0.3em] text-plum-600", className)}>{children}</p>
  );
}
