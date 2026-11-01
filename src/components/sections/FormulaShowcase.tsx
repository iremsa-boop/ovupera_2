import { featuredIngredients } from "@/lib/product";
import { Img } from "@/components/ui/Img";
import { Button, Container } from "@/components/ui";

/**
 * Ana sayfa formül bölümü: ürün fotoğrafı, arka planı bölüm rengine yumuşakça karışan bir "sahne" olarak,
 * yanında öne çıkan bileşenlerin sade listesi.
 */
export function FormulaShowcase() {
  return (
    <section className="overflow-hidden bg-[#d7cbd2] py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div className="relative -mx-5 aspect-[1834/1080] sm:-mx-8 lg:-ml-24 lg:mr-0">
          <Img
            src="/images/kutu-formul.jpg"
            alt="Ovupera kutusu ve 6,5 g saşe"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent),linear-gradient(to_bottom,transparent,#000_16%,#000_84%,transparent)]"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-700">Tek saşe, tam formül</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum-950 sm:text-5xl">
            Her biri ölçülü, <em className="text-plum-700">her biri bilinçli.</em>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-plum-950/70">
            Tek saşede 10 özel bileşen, 10 vitamin ve 2 mineral. Miktarlar etikette olduğu gibi, açıkça.
          </p>

          <dl className="mt-10 border-t border-plum-950/15">
            {featuredIngredients.map((i) => (
              <div key={i.name} className="flex items-baseline justify-between gap-6 border-b border-plum-950/15 py-4">
                <dt>
                  <span className="font-serif text-xl text-plum-950">{i.name}</span>
                  {i.detail && (
                    <span className="mt-0.5 block text-[11px] uppercase tracking-[0.2em] text-plum-700/80">{i.detail}</span>
                  )}
                </dt>
                <dd className="shrink-0 font-serif text-2xl text-plum-800 tabular-nums">{i.amount}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="/bilesenler">22 bileşenin tamamı</Button>
            <span className="text-sm text-plum-950/60">6,5 g saşe · 30 saşe / kutu</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
