import { Img } from "@/components/ui/Img";
import { Button, Container } from "@/components/ui";
import { whatsappHref } from "@/lib/site";

const trustPoints = ["22 bileşen", "Günde 1 saşe", "Aktif folat ve B12"];

/**
 * Ana sayfa hero'su. Header bunun üzerine şeffaf biner (-mt-16).
 * Masaüstü: fotoğraf sağda, metin solda koyu geçiş üzerinde.
 * Mobil: üstte kare fotoğraf, metin fotoğrafın kararan alt kısmından başlar.
 */
export function HomeHero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-plum-950 md:flex md:h-[72vh] md:min-h-[560px] md:max-h-[720px]">
      <div className="absolute inset-x-0 top-0 aspect-square md:inset-y-0 md:left-auto md:aspect-auto md:w-[68%]">
        <Img
          src="/images/hero-cift.jpg"
          alt="Gebelik planlayan, koltukta birbirine gülümseyen bir çift"
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          className="object-cover object-[45%_30%] md:object-[60%_30%]"
        />
        {/* Mobil: fotoğrafın altı metne yumuşakça kararır */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-plum-950 via-plum-950/70 to-transparent md:hidden" />
      </div>
      {/* Masaüstü: soldan koyulaşan katman */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-plum-950 from-35% via-plum-950/70 via-55% to-transparent md:block" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-plum-950/60 to-transparent" />

      <Container className="relative flex flex-col justify-center pb-12 pt-[calc(100vw-4.5rem)] md:pb-0 md:pt-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blush-300 sm:text-xs sm:tracking-[0.25em]">
          Gebelik planlayan kadınlar için
          <br className="sm:hidden" /> takviye edici gıda
        </p>
        <h1 className="mt-3 max-w-xl font-serif text-[2.1rem] leading-[1.08] text-white sm:mt-4 sm:text-5xl lg:text-6xl">
          Tek saşe, <em className="text-blush-300">eksiksiz hazırlık.</em>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
          Aşılama ve tüp bebek süreçleri öncesinde hücresel enerjiyi desteklemek için 22 bileşen bir arada.
        </p>
        <div className="mt-7 sm:mt-8">
          <Button href={whatsappHref} variant="light" className="w-full py-3 text-sm sm:w-auto sm:py-3 sm:text-sm">
            Satın almak için tıklayın
          </Button>
        </div>
        <ul className="mt-8 hidden flex-wrap gap-x-6 gap-y-2 text-sm text-white/75 sm:flex">
          {trustPoints.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blush-300" aria-hidden>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
