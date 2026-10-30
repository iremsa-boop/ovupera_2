import { Img } from "@/components/ui/Img";
import { aboutHello } from "@/lib/about";
import { Container } from "@/components/ui";

export function AboutHello() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Img
            src="/images/hakkimizda-kadin.jpg"
            alt="Evde şeftali aromalı Ovupera içen bir kadın"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-600">{aboutHello.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl italic text-plum-700 sm:text-5xl">{aboutHello.title}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {aboutHello.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
