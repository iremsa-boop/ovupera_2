import type { Metadata } from "next";
import { site } from "@/lib/site";
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
            <p className="text-xs uppercase tracking-[0.3em] text-plum-600">E-posta</p>
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
      </section>
    </>
  );
}
