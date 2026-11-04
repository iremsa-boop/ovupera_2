import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStory } from "@/components/about/AboutStory";
import { CoreValues } from "@/components/about/CoreValues";
import { Container, SectionHeading } from "@/components/ui";
import { ProductionGallery } from "@/components/sections";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Zamanı değil, gücü yönetmek: Ovupera'nın hikayesi, değerleri ve üretimi.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutStory />
      <CoreValues />

      <section className="bg-white py-20 sm:py-24">
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

    </>
  );
}
