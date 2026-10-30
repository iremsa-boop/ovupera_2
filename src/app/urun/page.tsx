import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Pill, SectionHeading } from "@/components/ui";
import { BenefitGrid, CtaBanner, IngredientTable, PageHero, UsageSteps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Ürün",
  description: "Ovupera: 22 bileşen, tek saşe. Günde bir saşe, 200 ml suyla, şeftali aromalı.",
};

const specs = [
  ["Form", "Toz saşe, 6,5 g"],
  ["Ambalaj", "30 saşe / kutu"],
  ["Aroma", "Şeftali"],
  ["Kullanım", "Günde 1 saşe, 200 ml suyla"],
  ["Ürün tipi", "Takviye edici gıda"],
] as const;

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Tanışın"
        title={
          <>
            Sizin için <em className="text-plum-700">özenle formüle edildi.</em>
          </>
        }
        intro="Miyo-inositol, L-Karnitin, L-Arjinin, Koenzim Q10, Resveratrol, Alfa Lipoik Asit ve multivitamin içeren takviye edici gıda."
      />

      <section className="pb-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/kutu.jpg" alt="Ovupera kutusu" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-plum-900">Ovupera</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Yumurta hücresinin ihtiyaç duyduğu biyolojik enerjiyi ve korumayı tek bir saşede sunar. Aktif folat
              (Quatrefolic®) ve aktif B12 (MecobalActive®) dahil 10 özel bileşen, 10 vitamin ve 2 mineral.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Quatrefolic®</Pill>
              <Pill>MecobalActive®</Pill>
              <Pill>Şeftali aromalı</Pill>
            </div>
            <Card className="mt-8 p-0">
              <dl className="divide-y divide-blush-200">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 px-6 py-4 text-sm">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium text-plum-950">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-blush-100 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Tek formül"
            title={
              <>
                22 bileşen, <em className="text-plum-700">tek saşe.</em>
              </>
            }
            intro="10 özel bileşen · 10 vitamin · 2 mineral"
          />
          <div className="mt-12">
            <IngredientTable />
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Miktarlar saşe başınadır. Etikette belirtilen değerler esastır.
          </p>
        </Container>
      </section>

      <UsageSteps />
      <BenefitGrid />
      <CtaBanner />
    </>
  );
}
