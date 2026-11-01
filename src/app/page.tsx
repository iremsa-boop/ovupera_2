import { getAllPosts } from "@/lib/blog";
import { featuredIngredients } from "@/lib/product";
import { PostTeaserGrid } from "@/components/blog/PostTeaser";
import { Img } from "@/components/ui/Img";
import { Button, Container, SectionHeading } from "@/components/ui";
import {
  CtaBanner,
  HomeHero,
  IngredientCard,
  IntroStatement,
  Testimonials,
  UsageSteps,
} from "@/components/sections";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomeHero />
      <IntroStatement />

      <section className="bg-blush-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Formülün merkezinde"
            title="Her biri ölçülü, her biri bilinçli."
            intro="Yumurta hücresinin ihtiyaç duyduğu biyolojik enerji ve koruma için özenle seçilmiş özel bileşenler."
          />
          <div className="relative mt-14 aspect-[1834/1080] overflow-hidden rounded-[2rem]">
            <Img
              src="/images/kutu-formul.jpg"
              alt="Ovupera kutusu ve 6,5 g saşe"
              fill
              sizes="(min-width: 1152px) 68rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredIngredients.map((i) => (
              <IngredientCard key={i.name} ingredient={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/bilesenler" variant="outline">
              22 bileşenin tamamını görün
            </Button>
          </div>
        </Container>
      </section>

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
              <PostTeaserGrid posts={posts} />
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
