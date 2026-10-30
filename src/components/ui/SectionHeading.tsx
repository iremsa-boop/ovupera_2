import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "center", tone = "dark", className }: Props) {
  const light = tone === "light";
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "", "max-w-2xl", className)}>
      {eyebrow && <Eyebrow className={cn("mb-4", light && "text-blush-300")}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight sm:text-4xl",
          light ? "text-white" : "text-plum-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed", light ? "text-blush-200" : "text-muted")}>{intro}</p>
      )}
    </div>
  );
}
