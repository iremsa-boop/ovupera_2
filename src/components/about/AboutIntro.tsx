import { Img } from "@/components/ui/Img";
import { aboutIntro } from "@/lib/about";
import { Container } from "@/components/ui";

/** Hakkımızda girişi: iki tonlu başlık + kısa metin, altında geniş fotoğraf */
export function AboutIntro() {
  const { titleLead, titleAccent, text } = aboutIntro;

  return (
    <section className="bg-white bg-[radial-gradient(var(--color-blush-200)_1px,transparent_1px)] [background-size:22px_22px] py-16 sm:py-24">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            <span className="font-sans font-medium tracking-tight text-ink">{titleLead}</span>
            <br />
            <em className="font-serif text-plum-700">{titleAccent}</em>
          </h1>
          <p className="text-lg leading-relaxed text-muted md:pb-2">{text}</p>
        </div>

        <div className="relative mt-14 aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[21/9]">
          <Img
            src="/images/hakkimizda-cift.jpg"
            alt="Kahvaltı masasında gülen bir çift"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
      </Container>
    </section>
  );
}
