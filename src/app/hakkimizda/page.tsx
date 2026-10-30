import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Ornament, SectionHeading } from "@/components/ui";
import { CtaBanner, PageHero, ProductionGallery, SplitFeature } from "@/components/sections";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Zamanı değil, gücü yönetmek: Ovupera'nın hikayesi.",
};

const values = [
  {
    title: "Bilimin ışığında",
    text: "Formülümüz, hücresel kaliteyi klinik araştırmaların ışığında desteklemek için tasarlandı.",
  },
  {
    title: "Hekimlerin güveniyle",
    text: "Aşılama ve tüp bebek (IVF) süreçleri öncesine yönelik, hekim önerili bir formül.",
  },
  {
    title: "Doğayla uyum içinde",
    text: "Bilim ile doğanın hücresel düzeydeki uyumundan doğan, özenle seçilmiş 22 bileşen.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Ovupera'nın hikayesi"
        title={
          <>
            Zamanı değil, <em className="text-plum-700">gücü</em> yönetmek.
          </>
        }
        intro="Kadın bedeninin mucizevi gücü, doğru zamanda doğru destekle buluştuğunda yeni yaşamların kapısını aralar."
      />

      <SplitFeature
        image="/images/lifestyle-cift.jpg"
        imageAlt="Aynı hayali paylaşan bir çift"
        eyebrow="Neden Ovupera"
        title="Bilim ile doğanın hücresel düzeydeki uyumu"
        className="pt-4"
      >
        <p>
          Günümüz dünyasında annelik yolculuğu 35 yaş ve sonrasında yeni bir anlam kazanıyor. Ancak zaman ilerledikçe
          hücresel seviyedeki enerji ihtiyacı ve antioksidan desteği gereksinimi artıyor. Ovupera, tam da bu noktada,
          bilim ile doğanın hücresel düzeydeki mükemmel uyumundan doğdu.
        </p>
        <p>
          Zengin içeriğindeki yüksek kaliteli Miyo-inositol, L-Karnitin, Koenzim Q10, Resveratrol ve güçlü antioksidan
          kompleksiyle Ovupera; yumurta hücresinin ihtiyaç duyduğu biyolojik enerjiyi ve korumayı tek bir saşede sunar.
        </p>
        <p>
          Aşılama ve tüp bebek tedavileri öncesinde bedeninizin doğal potansiyelini en üst seviyeye çıkarmak, hücresel
          kaliteyi klinik araştırmaların ışığında desteklemek için tasarlandı.
        </p>
      </SplitFeature>

      <section className="bg-plum-900 py-20 sm:py-28">
        <Container className="text-center">
          <Ornament />
          <blockquote className="mx-auto mt-10 max-w-3xl font-serif text-2xl italic leading-relaxed text-white sm:text-3xl">
            “Hekimlerin bilimsel güveni, kadınların ise umut dolu yolculuklarındaki en güçlü destekçisi olan Ovupera,
            yeni bir hayata atılan her adımda bedeninize ihtiyacı olan hücresel gücü geri kazandırır.”
          </blockquote>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-gold-400">
            Annelik yolculuğunda bilimin ve zamanın yanınızdaki gücü
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Merhaba!" title="Biz Ovupera." align="left" />
            <div className="mt-6 space-y-5 leading-relaxed text-muted">
              <p>
                Yeni bir hayata adım atma fikrinin heyecanını, umudunu ve bazen de getirdiği soruları çok iyi
                biliyoruz.
              </p>
              <p>
                Özellikle annelik yolculuğuna çıkan kadınlar için zamanın değil, hücresel gücün ne kadar belirleyici
                olduğunun farkındayız. Bilimin ışığında, hekimlerin güveniyle geliştirdiğimiz Ovupera; zengin
                içeriğindeki Miyo-inositol, Koenzim Q10, Resveratrol, L-Karnitin ve güçlü multivitamin/mineral
                kompleksiyle bedeninizin doğal potansiyelini desteklemek için burada.
              </p>
              <p>
                Aşılama ve tüp bebek (IVF) süreçleri öncesinde yumurta (oosit) kalitesini ve hücresel enerjiyi
                desteklemeye yönelik hekim önerili formülümüzle, bu özel yolculukta yanınızdayız.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/lifestyle-seftali.jpg"
              alt="Kendine ayırdığı anda Ovupera içen bir kadın"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-blush-100 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Değerlerimiz" title="Her adımda yanınızda" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Card key={v.title}>
                <p className="font-serif text-3xl text-gold-500">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-xl text-plum-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Üretim"
            title="Özenle üretilir, özenle paketlenir."
            intro="Ovupera, modern ve hijyenik üretim hatlarında, saşe dolumundan paketlemeye kadar kontrollü süreçlerle üretilir."
          />
          <div className="mt-12">
            <ProductionGallery />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Gebe kalma yolculuğunuzda bilimin gücünü keşfedin."
        text="Bizi takip etmeyi ve kullanım öncesinde doktorunuza danışmayı unutmayın."
        href="/urun"
        label="Ovupera'yı tanıyın"
      />
    </>
  );
}
