import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { PostGrid } from "@/components/blog/PostGrid";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

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
        <header className="bg-gradient-to-b from-blush-100 to-blush-50">
          <Container className="max-w-3xl py-16 text-center sm:py-20">
            <Link href="/blog" className="text-sm text-muted hover:text-plum-700">
              ← Blog
            </Link>
            <Eyebrow className="mt-8">{post.category}</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-plum-900 sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-sm text-muted">
              {formatDate(post.date)} · {post.readingTime} dk okuma
            </p>
          </Container>
        </header>
        <Container className="max-w-3xl">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem]">
            <Image src={post.cover} alt="" fill priority sizes="28rem" className="object-cover" />
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
