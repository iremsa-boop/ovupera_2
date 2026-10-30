import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui";

type Props = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

/** Görsel + metin yan yana blok */
export function SplitFeature({ image, imageAlt, eyebrow, title, children, reverse, className }: Props) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className={cn("relative aspect-[4/5] overflow-hidden rounded-[2rem]", reverse && "md:order-2")}>
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">{children}</div>
        </div>
      </Container>
    </section>
  );
}
