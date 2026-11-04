import Link from "next/link";
import { companyFacts, footerColumns, phoneHref, site, socialLinks } from "@/lib/site";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";

const heading = "font-serif text-lg font-bold text-white";
const link = "text-blush-200 transition-colors hover:text-white";

export function Footer() {
  const { email, phone, address } = site.contact;

  return (
    <footer className="bg-plum-900 text-blush-200">
      <Container className="pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo light className="text-2xl" />
            <address className="mt-10 space-y-3 not-italic">
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
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
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

          <div>
            <p className={heading}>Sosyal Medya</p>
            <ul className="mt-6 space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className={link}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-blush-300/80">
          Copyright © {new Date().getFullYear()} - {site.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
