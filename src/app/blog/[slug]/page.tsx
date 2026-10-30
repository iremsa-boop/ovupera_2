import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { PostGrid } from "@/components/blog/PostGrid";
import { Container, SectionHeading } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", images: [post.cover] },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-gradient-to-b from-blush-100 to-white">
          <Container className="max-w-3xl pb-12 pt-14 sm:pt-16">
            <Link href="/blog" className="text-sm text-muted hover:text-plum-700">
              ← Tüm yazılar
            </Link>
            <p className="mt-8 flex items-center gap-2.5 text-sm">
              <span className="font-medium text-plum-700">{post.category}</span>
              <span className="h-3.5 w-px bg-blush-300" aria-hidden />
              <time dateTime={post.date} className="text-muted">
                {formatDate(post.date)}
              </time>
              <span className="h-3.5 w-px bg-blush-300" aria-hidden />
              <span className="text-muted">{post.readingTime} dk okuma</span>
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-plum-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
          </Container>
        </header>
        <Container className="max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-blush-200">
            <Img src={post.cover} alt="" fill priority sizes="(min-width: 896px) 56rem, 100vw" className="object-cover" />
          </div>
          <div className="prose-ovupera mx-auto mt-14 max-w-2xl" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>

      {related.length > 0 && (
        <section className="mt-24 border-t border-blush-200 py-20">
          <Container>
            <SectionHeading title="Diğer yazılar" align="left" />
            <div className="mt-10">
              <PostGrid posts={related} />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
