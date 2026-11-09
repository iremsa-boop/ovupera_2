import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { Img } from "@/components/ui/Img";

/** Ana sayfa blog modülü: dikey görsel, altında kategori ve başlık */
function PostTeaser({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block w-[78%] shrink-0 snap-start sm:w-auto">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-blush-100">
        <Img
          src={post.thumb}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 78vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-[11px] font-medium sm:mt-5 sm:text-xs uppercase tracking-[0.2em] text-plum-600">{post.category}</p>
      <h3 className="mt-2 font-serif text-xl leading-snug sm:text-2xl text-plum-950 transition-colors group-hover:text-plum-700">
        {post.title}
      </h3>
    </Link>
  );
}

export function PostTeaserGrid({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
      {posts.map((p) => (
        <PostTeaser key={p.slug} post={p} />
      ))}
    </div>
  );
}
