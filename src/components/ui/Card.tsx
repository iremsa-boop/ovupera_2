import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-blush-200 bg-white/80 p-6 shadow-[0_10px_40px_-20px_rgba(74,18,56,0.25)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
