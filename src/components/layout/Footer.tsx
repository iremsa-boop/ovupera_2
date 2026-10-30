import Link from "next/link";
import { disclaimer, navigation, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-plum-950 text-blush-200">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm font-serif text-lg italic leading-relaxed text-blush-100">
              {site.tagline}.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">Sayfalar</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">İletişim</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-8 text-center text-xs leading-relaxed text-blush-300/80">{disclaimer}</p>
        <p className="mt-6 text-center text-xs text-blush-300/60">
          © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
