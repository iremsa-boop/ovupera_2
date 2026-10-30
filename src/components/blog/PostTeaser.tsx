import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Img } from "@/components/ui/Img";

/** Ana sayfa blog modülü: dikey görselli, çerçevesiz kart */
function PostTeaser({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-blush-100">
        <Img
          src={post.thumb}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.25em] text-plum-600">{post.category}</p>
      <h3 className="mt-2 font-serif text-xl leading-snug text-plum-950 group-hover:text-plum-700">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-3 text-xs text-muted/80">
        {formatDate(post.date)} · {post.readingTime} dk okuma
      </p>
    </Link>
  );
}

export function PostTeaserGrid({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostTeaser key={p.slug} post={p} />
      ))}
    </div>
  );
}
