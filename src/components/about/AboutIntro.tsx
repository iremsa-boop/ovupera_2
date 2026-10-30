import { Img } from "@/components/ui/Img";
import { aboutIntro } from "@/lib/about";
import { Container } from "@/components/ui";

/** Hakkımızda girişi: iki tonlu başlık + kısa metin, altında küçük/büyük fotoğraf ikilisi */
export function AboutIntro() {
  const { titleLead, titleAccent, text, badge } = aboutIntro;

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

        <div className="mt-14 grid gap-4 md:grid-cols-[1fr_2.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto">
            <Img
              src="/images/hakkimizda-ofis.jpg"
              alt="Ofiste Ovupera içen bir kadın"
              fill
              priority
              sizes="(min-width: 768px) 32vw, 100vw"
              className="object-cover object-[35%_50%]"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[16/10]">
            <Img
              src="/images/hakkimizda-cift.jpg"
              alt="Kahvaltı masasında gülen bir çift"
              fill
              priority
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-[50%_40%]"
            />
            <div className="absolute bottom-4 right-4 flex max-w-xs items-start gap-3 rounded-xl bg-white/95 p-3.5 shadow-lg backdrop-blur sm:bottom-5 sm:right-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blush-100 text-plum-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <circle cx="12" cy="9" r="6" />
                  <path d="M9 14.5L8 22l4-2 4 2-1-7.5" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{badge.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted">{badge.text}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
