import { getAllPosts } from "@/lib/blog";
import { PostTeaserGrid } from "@/components/blog/PostTeaser";
import { Container, SectionHeading } from "@/components/ui";
import {
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
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Blog" title="Bilgiyle güçlenen yolculuk" align="left" />
            <div className="mt-8 sm:mt-12">
              <PostTeaserGrid posts={posts} />
            </div>
          </Container>
        </section>
      )}

    </>
  );
}
