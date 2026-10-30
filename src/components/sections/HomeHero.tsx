import Image from "next/image";
import { Button, Container, Eyebrow, Pill } from "@/components/ui";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blush-100 via-blush-50 to-blush-200">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-[1fr_1.1fr] md:py-24">
        <div>
          <Eyebrow>Takviye edici gıda</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-plum-900 sm:text-6xl">
            Zamanı değil, <em className="text-plum-700">gücü</em> yönetmek.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Miyo-inositol, Koenzim Q10, Resveratrol, L-Karnitin ve güçlü multivitamin/mineral kompleksi.
            22 bileşen, tek saşede.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Günde 1 saşe</Pill>
            <Pill>Şeftali aromalı</Pill>
            <Pill>30 saşe</Pill>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/urun">Ürünü keşfedin</Button>
            <Button href="/bilesenler" variant="outline">
              22 bileşen
            </Button>
          </div>
        </div>
        <div className="relative aspect-[2048/1434] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(74,18,56,0.45)]">
          <Image
            src="/images/kutu-saset.jpg"
            alt="Ovupera kutu ve saşe"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
