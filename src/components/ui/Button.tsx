import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-plum-800 text-white hover:bg-plum-700",
  outline: "border border-plum-800/30 text-plum-800 hover:border-plum-800 hover:bg-white",
  light: "bg-white text-plum-800 hover:bg-blush-100",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ({ href: string } | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>));

export function Button({ variant = "primary", className, children, ...rest }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors",
    variants[variant],
    className,
  );
  if (rest.href !== undefined) {
    // Dış bağlantılar (WhatsApp vb.) yeni sekmede açılır
    if (/^https?:/.test(rest.href)) {
      return (
        <a href={rest.href} target="_blank" rel="noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
