import type { Metadata } from "next";
import { groupLabels, ingredientsByGroup, type IngredientGroup } from "@/lib/product";
import { Card, Container, SectionHeading } from "@/components/ui";
import { IngredientCard, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Bileşenler",
  description: "Ovupera'nın 22 bileşeni: miktarlar, görevleri ve doğal kaynakları.",
};

const groups: IngredientGroup[] = ["ozel", "vitamin", "mineral"];

export default function IngredientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Takviye edici gıda"
        title={
          <>
            Bir saşede <em className="text-plum-700">neler var?</em>
          </>
        }
        intro="Her biri ölçülü, her biri bilinçli. 22 bileşenin saşe başına miktarlarını ve görevlerini inceleyin."
      />

      {groups.map((g) => (
        <section key={g} className="py-14">
          <Container>
            <SectionHeading title={groupLabels[g]} align="left" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ingredientsByGroup(g).map((i) => (
                <IngredientCard key={i.name} ingredient={i} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-14">
        <Container>
          <Card className="mx-auto max-w-3xl p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-plum-600">Etiket okuma rehberi</p>
            <h2 className="mt-3 font-serif text-3xl text-plum-900">%BRD ne anlatır?</h2>
            <p className="mt-4 leading-relaxed text-muted">
              <strong className="text-plum-800">Beslenme Referans Değeri (BRD)</strong>, bir vitamin ya da mineral için
              belirlenmiş günlük referans miktarıdır. Etiketteki yüzde, bir porsiyonun bu referansın ne kadarını
              karşıladığını gösterir.
            </p>
            <div className="mt-8">
              <div className="flex items-end justify-between font-serif text-plum-800">
                <span className="text-3xl">
                  400 <span className="text-sm">µg</span>
                </span>
                <span className="text-3xl">%200</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-blush-200">
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-plum-600 to-plum-900" />
              </div>
              <p className="mt-2 text-xs text-muted">Folat: 400 µg ÷ 200 µg referans = %200 BRD</p>
            </div>
            <p className="mt-6 text-sm text-muted">
              Miyo-inositol gibi beslenme referans değeri belirlenmemiş bileşenler için etikette yüzde verilmez.
            </p>
          </Card>
        </Container>
      </section>

    </>
  );
}
