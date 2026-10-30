import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bileşenler, etiket okuma ve gebelik planlama sürecine dair bilimsel temelli yazılar.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-blush-100 to-white">
        <Container className="py-20 text-center sm:py-24">
          <h1 className="font-serif text-4xl leading-tight text-plum-900 sm:text-6xl">Bilgi ve Güncellemeler</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Annelik yolculuğunu planlayan kadınlar için seçilmiş yazılar. Bileşenler, etiket okuma ve günlük rutine dair
            bilimin ışığında, anlaşılır bilgiler.
          </p>
        </Container>
      </section>

      <section className="bg-white pb-24 pt-12 sm:pt-16">
        <Container>
          <h2 className="font-serif text-3xl text-plum-900 sm:text-4xl">Tüm Yazılar</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            İçerikler, hekimlerin ve bilimsel kaynakların ışığında hazırlanır. Sağlığınızla ilgili kararlar için her
            zaman doktorunuza danışın.
          </p>
          <div className="mt-8">
            <BlogExplorer posts={posts} />
          </div>
        </Container>
      </section>
    </>
  );
}
