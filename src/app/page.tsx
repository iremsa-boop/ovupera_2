import { getAllPosts } from "@/lib/blog";
import { PostTeaserGrid } from "@/components/blog/PostTeaser";
import { Button, Container, SectionHeading } from "@/components/ui";
import {
  CtaBanner,
  FormulaShowcase,
  HomeHero,
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

      <FormulaShowcase />
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
