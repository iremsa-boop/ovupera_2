import type { Metadata } from "next";
import { phoneHref, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Ovupera ile iletişime geçin.",
};

const icon = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </>
  ),
};

const channels = [
  { label: "Telefon", value: site.contact.phone, href: phoneHref, icon: icon.phone, external: false },
  { label: "E-posta", value: site.contact.email, href: `mailto:${site.contact.email}`, icon: icon.mail, external: false },
  { label: "Instagram", value: "@ovupera", href: site.social.instagram, icon: icon.instagram, external: true },
].filter((c) => c.value && c.href);

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-blush-100 to-blush-50 pb-24 pt-16 sm:pt-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-600">İletişim</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">Bize Ulaşın</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Ürünle ilgili sorularınız, iş birlikleri ve geri bildirimleriniz için bize yazın.
          </p>

          <ul className="mt-8 space-y-1">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external && { target: "_blank", rel: "noreferrer" })}
                  className="group flex items-center gap-4 py-3"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-plum-700 ring-1 ring-plum-900/10 transition group-hover:bg-plum-800 group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{c.label}</span>
                    <span className="block text-lg text-plum-950 transition group-hover:text-plum-700">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-muted">
            Sağlık durumunuza özel sorular için lütfen doktorunuza danışın.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_-25px_rgba(74,18,56,0.25)] ring-1 ring-plum-900/5 sm:p-10">
          <h2 className="font-serif text-2xl text-plum-900">Mesaj gönderin</h2>
          <p className="mt-1 text-sm text-muted">Tüm alanların doldurulması gereklidir.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
