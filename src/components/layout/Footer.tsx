import Image from "next/image";
import Link from "next/link";
import { companyFacts, footerColumns, phoneHref, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";

const heading = "font-serif text-lg font-bold text-white";
const link = "text-blush-200 transition-colors hover:text-white";

export function Footer() {
  const { email, phone, address } = site.contact;

  return (
    <footer className="bg-plum-900 text-blush-200">
      <Container className="pb-28 pt-14 sm:pb-10 sm:pt-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo light className="text-2xl" />
            <address className="mt-6 space-y-2 not-italic sm:mt-10 sm:space-y-3">
              {address && <p>{address}</p>}
              {phone && (
                <p>
                  <a href={phoneHref} className={link}>
                    {phone}
                  </a>
                </p>
              )}
              <p>
                <a href={`mailto:${email}`} className={link}>
                  {email}
                </a>
              </p>
            </address>
            {companyFacts.length > 0 && (
              <dl className="mt-8 space-y-1 text-sm text-blush-300/80">
                {companyFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="inline">{f.label}: </dt>
                    <dd className="inline">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="mt-7 sm:mt-8">
              <Image
                src="/images/titck-logo-white.png"
                alt="T.C. Sağlık Bakanlığı Türkiye İlaç ve Tıbbi Cihaz Kurumu"
                width={594}
                height={190}
                sizes="220px"
                className="h-auto w-[170px] sm:w-[220px]"
              />
            </div>
          </div>

          {/* Mobil: açılır kapanır başlıklar */}
          <div className="divide-y divide-white/10 border-y border-white/10 lg:hidden">
            {footerColumns.map((col) => (
              <details key={col.title} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
                  <span className={heading}>{col.title}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blush-300 transition-transform group-open:rotate-180" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <ul className="space-y-2.5 pb-5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={link}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          {/* Masaüstü: sütunlar */}
          {footerColumns.map((col) => (
            <div key={col.title} className="hidden lg:block">
              <p className={heading}>{col.title}</p>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={link}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-blush-300/80 sm:mt-16 sm:text-center sm:text-sm">
          Copyright © {new Date().getFullYear()} - {site.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
