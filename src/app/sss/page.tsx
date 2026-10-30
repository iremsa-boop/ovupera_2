import type { Metadata } from "next";
import { faqs } from "@/lib/faq";
import { Container } from "@/components/ui";
import { CtaBanner, FaqList, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Ovupera'nın kullanımı, içeriği ve etiket bilgilerine dair sık sorulan sorular.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="SSS" title="Sıkça sorulan sorular" />
      <section className="pb-12">
        <Container className="max-w-3xl">
          <FaqList items={faqs} />
        </Container>
      </section>
      <CtaBanner title="Sorunuzun cevabını bulamadınız mı?" text="Bize yazın, en kısa sürede dönüş yapalım." />
    </>
  );
}
