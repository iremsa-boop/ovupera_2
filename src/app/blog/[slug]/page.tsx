import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui";

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
            <h1 className="mt-4 font-serif text-[1.75rem] leading-tight text-plum-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed sm:text-lg text-muted">{post.excerpt}</p>
          </Container>
        </header>
        <Container className="max-w-3xl pb-24">
          <div className="prose-ovupera" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>
    </>
  );
}
