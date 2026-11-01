import type { Metadata } from "next";
import { phoneHref, site } from "@/lib/site";
import { Card, Container } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Ovupera ile iletişime geçin.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Size nasıl yardımcı olabiliriz?"
        intro="Ürünle ilgili sorularınız, iş birlikleri ve geri bildirimleriniz için bize yazın."
      />
      <section className="pb-24">
        <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <Card className="p-8 sm:p-10">
            <ContactForm />
          </Card>
          <Card className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-plum-600">{site.contact.phoneLabel}</p>
            <a href={phoneHref} className="mt-2 block font-serif text-xl text-plum-900">
              {site.contact.phone}
            </a>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-plum-600">E-posta</p>
            <a href={`mailto:${site.contact.email}`} className="mt-2 block font-serif text-xl text-plum-900">
              {site.contact.email}
            </a>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-plum-600">Sosyal medya</p>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="mt-2 block font-serif text-xl text-plum-900">
              Instagram
            </a>
            <p className="mt-10 text-sm leading-relaxed text-muted">
              Sağlık durumunuza özel sorular için lütfen doktorunuza danışın.
            </p>
          </Card>
        </Container>

        <Container>
          <div
            id="nereden-alinir"
            className="mt-8 scroll-mt-24 rounded-[2rem] bg-plum-900 p-8 text-blush-200 sm:p-10 md:flex md:items-center md:justify-between md:gap-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blush-300">Nereden alınır?</p>
              <h2 className="mt-3 font-serif text-3xl text-white">Size en yakın satış noktasını öğrenin.</h2>
              <p className="mt-3 max-w-xl leading-relaxed">
                Ovupera&apos;yı nereden temin edebileceğinizi öğrenmek için bize yazın; satış noktalarını sizinle paylaşalım.
              </p>
            </div>
            <a
              href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Ovupera satış noktaları")}`}
              className="mt-6 inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-plum-900 transition hover:bg-blush-100 md:mt-0"
            >
              Bize yazın
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
