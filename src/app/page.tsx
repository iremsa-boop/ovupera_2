import { getAllPosts } from "@/lib/blog";
import { featuredIngredients } from "@/lib/product";
import { PostGrid } from "@/components/blog/PostGrid";
import { Button, Container, SectionHeading } from "@/components/ui";
import {
  BenefitGrid,
  CtaBanner,
  IntroStatement,
  HomeHero,
  IngredientCard,
  SplitFeature,
  Testimonials,
  UsageSteps,
} from "@/components/sections";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomeHero />
      <IntroStatement />

      <SplitFeature
        image="/images/lifestyle-cift-sabah.jpg"
        imageAlt="Gebelik planlayan bir çift kahvaltıda"
        eyebrow="Gebelik planlarken"
        title={
          <>
            Her sabah, aynı hayale <em className="text-plum-700">birlikte uyanmak.</em>
          </>
        }
      >
        <p>
          Annelik yolculuğu 35 yaş ve sonrasında yeni bir anlam kazanıyor. Zaman ilerledikçe hücresel seviyedeki
          enerji ihtiyacı ve antioksidan desteği gereksinimi artıyor.
        </p>
        <p>
          Ovupera; aşılama ve tüp bebek (IVF) süreçleri öncesinde bedeninizin doğal potansiyelini desteklemek için,
          hekimlerin bilimsel güveniyle geliştirildi.
        </p>
        <Button href="/hakkimizda" variant="outline">
          Hikayemiz
        </Button>
      </SplitFeature>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Formülün merkezinde"
            title="Her biri ölçülü, her biri bilinçli."
            intro="Yumurta hücresinin ihtiyaç duyduğu biyolojik enerji ve koruma için özenle seçilmiş özel bileşenler."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredIngredients.map((i) => (
              <IngredientCard key={i.name} ingredient={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/bilesenler" variant="outline">
              Tüm bileşenleri görün
            </Button>
          </div>
        </Container>
      </section>

      <BenefitGrid />
      <UsageSteps />
      <Testimonials />

      {posts.length > 0 && (
        <section className="border-t border-blush-200 py-20 sm:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Blog" title="Bilgiyle güçlenen yolculuk" align="left" />
              <Button href="/blog" variant="outline">
                Tüm yazılar
              </Button>
            </div>
            <div className="mt-12">
              <PostGrid posts={posts} />
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
