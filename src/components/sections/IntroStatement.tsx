import { Container } from "@/components/ui";

/** Hero altı: solda büyük başlık, sağda Ovupera'nın neyi desteklediğini anlatan paragraf */
export function IntroStatement() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-8 md:grid-cols-2 md:gap-16">
        <h2 className="font-serif text-4xl leading-[1.1] text-plum-900 sm:text-5xl">
          Annelik yolculuğunda hücresel güç desteği
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Ovupera; Miyo-inositol, Koenzim Q10, Resveratrol ve L-Karnitin içeren formülüyle aşılama ve tüp bebek
            süreçleri öncesinde yumurta hücresinin ihtiyaç duyduğu biyolojik enerjiyi ve korumayı desteklemek için
            tasarlandı.
          </p>
          <p>
            Folat gebelik süresince anne dokularının büyümesine, çinko normal doğurganlık ve üremeye katkıda bulunur.
            Selenyum ve E vitamini hücrelerin oksidatif strese karşı korunmasına, B6 vitamini hormonal aktivitenin
            düzenlenmesine katkıda bulunur.
          </p>
        </div>
      </Container>
    </section>
  );
}
