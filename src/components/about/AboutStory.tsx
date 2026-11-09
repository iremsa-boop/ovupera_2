import { aboutStory } from "@/lib/about";
import { Container } from "@/components/ui";

export function AboutStory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <h2 className="text-[1.7rem] leading-tight sm:text-4xl md:mt-16 md:text-right">
          <span className="font-sans font-medium tracking-tight text-ink">Bilim ile doğanın</span>
          <br />
          <em className="font-serif text-plum-700">hücresel uyumu</em>
        </h2>
        <div className="space-y-5 text-base leading-relaxed sm:text-lg text-muted">
          {aboutStory.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
