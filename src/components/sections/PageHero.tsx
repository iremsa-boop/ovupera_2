import { Container, Eyebrow } from "@/components/ui";

type Props = { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode };

export function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush-100 to-blush-50">
      <Container className="py-20 text-center sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">{title}</h1>
        {intro && <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </Container>
    </section>
  );
}
