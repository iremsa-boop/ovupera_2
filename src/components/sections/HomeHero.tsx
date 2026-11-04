import { Img } from "@/components/ui/Img";
import { Button, Container } from "@/components/ui";

const trustPoints = ["22 bileşen", "Günde 1 saşe", "Aktif folat ve B12"];

/**
 * Ana sayfa hero'su. Header bunun üzerine şeffaf biner (-mt-16).
 * Masaüstü: fotoğraf sağda, metin solda koyu geçiş üzerinde. Mobil: fotoğraf üstte, metin altta.
 */
export function HomeHero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-plum-950 md:flex md:h-[72vh] md:min-h-[560px] md:max-h-[720px]">
      <div className="relative aspect-[4/3] md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[68%]">
        <Img
          src="/images/hero-cift.jpg"
          alt="Gebelik planlayan, koltukta birbirine gülümseyen bir çift"
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          className="object-cover object-[60%_30%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-plum-950 to-transparent md:hidden" />
      </div>
      {/* Masaüstünde metnin okunması için soldan koyulaşan katman; üstte header için hafif gölge */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-plum-950 from-35% via-plum-950/70 via-55% to-transparent md:block" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-plum-950/60 to-transparent" />

      <Container className="relative flex flex-col justify-center pb-14 pt-2 md:pb-0 md:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blush-300">
          Gebelik planlayan kadınlar için takviye edici gıda
        </p>
        <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Tek saşe, <em className="text-blush-300">eksiksiz hazırlık.</em>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          Aşılama ve tüp bebek süreçleri öncesinde hücresel enerjiyi desteklemek için 22 bileşen bir arada.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/urun" variant="light">
            Ürünü inceleyin
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
          {trustPoints.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blush-300" aria-hidden>
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
