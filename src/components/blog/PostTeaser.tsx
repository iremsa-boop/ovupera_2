import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { Img } from "@/components/ui/Img";

/** Ana sayfa blog modülü: dikey görsel, altında kategori ve başlık */
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
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-plum-600">{post.category}</p>
      <h3 className="mt-2 font-serif text-2xl leading-snug text-plum-950 transition-colors group-hover:text-plum-700">
        {post.title}
      </h3>
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
