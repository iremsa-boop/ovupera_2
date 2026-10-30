import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-xl tracking-[0.35em]",
        light ? "text-white" : "text-plum-950",
        className,
      )}
    >
      OVUPERA
    </Link>
  );
}
