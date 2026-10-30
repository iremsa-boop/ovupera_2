import type { Metadata } from "next";
import { testimonials } from "@/lib/testimonials";
import { Card, Container, SectionHeading } from "@/components/ui";
import { PageHero, TestimonialCard } from "@/components/sections";
import { ReviewForm } from "@/components/forms/ReviewForm";

export const metadata: Metadata = {
  title: "Kullanıcı Yorumları",
  description: "Ovupera kullananların deneyimleri. Siz de yorumunuzu paylaşın.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kullanıcı yorumları"
        title={
          <>
            Yolculuğu <em className="text-plum-700">paylaşanlar</em>
          </>
        }
        intro="Ovupera'yı günlük rutinine ekleyenlerin deneyimleri."
      />

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.date}`} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <section id="yorum-yaz" className="scroll-mt-24 bg-blush-100 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Yorum yazın"
            title="Deneyiminizi paylaşın"
            intro="Yorumunuz ekibimiz tarafından incelendikten sonra yayınlanır."
          />
          <Card className="mt-10 p-8 sm:p-10">
            <ReviewForm />
          </Card>
          <p className="mt-6 text-center text-xs leading-relaxed text-muted">
            Yorumlar kullanıcıların kişisel deneyimlerini yansıtır; tıbbi tavsiye yerine geçmez. Kullanım öncesinde
            doktorunuza danışınız.
          </p>
        </Container>
      </section>
    </>
  );
}
