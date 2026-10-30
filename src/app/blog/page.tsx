import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PostGrid } from "@/components/blog/PostGrid";
import { Container } from "@/components/ui";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bileşenler, etiket okuma ve gebelik planlama sürecine dair yazılar.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Bilgiyle güçlenen <em className="text-plum-700">yolculuk</em>
          </>
        }
        intro="Bileşenler, etiket okuma ve günlük rutine dair bilimin ışığında yazılar."
      />
      <section className="pb-12">
        <Container>
          <PostGrid posts={posts} />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
