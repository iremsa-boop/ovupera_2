import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-blush-100">
        <Image
          src={post.cover}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
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
