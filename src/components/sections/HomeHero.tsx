import Image from "next/image";
import { Button, Container } from "@/components/ui";

const chipImages = [
  "/images/lifestyle-ofis.jpg",
  "/images/lifestyle-seftali.jpg",
  "/images/lifestyle-cift-sabah.jpg",
  "/images/kutu.jpg",
];

/** Tam genişlik fotoğraflı hero; Header ana sayfada bunun üzerine şeffaf biner (-mt-16). */
export function HomeHero() {
  return (
    <section className="relative -mt-16 flex min-h-[680px] overflow-hidden bg-plum-950 md:h-[92vh] md:max-h-[920px]">
      <div className="absolute inset-0 md:left-auto md:w-[72%]">
        <Image
          src="/images/hero-cift.jpg"
          alt="Gebelik planlayan, koltukta birbirine gülümseyen bir çift"
          fill
          priority
          sizes="(min-width: 768px) 72vw, 100vw"
          className="object-cover object-[65%_35%]"
        />
      </div>
      {/* Okunabilirlik için soldan ve alttan koyulaşan katmanlar */}
      <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/60 to-plum-950/20 md:bg-gradient-to-r md:from-plum-950 md:from-30% md:via-plum-950/70 md:via-50% md:to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-plum-950/50 to-transparent" />

      <Container className="relative flex flex-col justify-end pb-14 pt-32 md:pb-20">
        <h1 className="max-w-2xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Zamanı değil, <em className="text-blush-300">gücü</em> yönetmek.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
          Miyo-inositol, Koenzim Q10, Resveratrol, L-Karnitin ve güçlü multivitamin/mineral kompleksi. Annelik
          yolculuğunuzda hücresel güç, tek saşede.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Button href="/urun" variant="light">
            Ürünü keşfedin
          </Button>
          <a href="/hakkimizda" className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">
            Hakkımızda →
          </a>
        </div>

        <div className="mt-12 flex w-fit items-center gap-4 rounded-full border border-white/20 bg-white/10 py-2.5 pl-2.5 pr-6 backdrop-blur-md md:absolute md:bottom-20 md:right-8 md:mt-0">
          <div className="flex -space-x-3">
            {chipImages.map((src) => (
              <span key={src} className="relative size-11 overflow-hidden rounded-full ring-2 ring-white/70">
                <Image src={src} alt="" fill sizes="44px" className="object-cover object-[50%_45%] scale-[1.8]" />
              </span>
            ))}
          </div>
          <div className="text-white">
            <p className="font-serif text-2xl leading-none">22 bileşen</p>
            <p className="mt-1 whitespace-nowrap text-xs text-white/75">Tek saşede, günde bir kez</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
