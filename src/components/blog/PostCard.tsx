import { Img } from "@/components/ui/Img";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { cn, formatDate } from "@/lib/utils";

type Props = { post: PostMeta; large?: boolean; priority?: boolean };

export function PostCard({ post, large, priority }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-blush-200 bg-white p-4 transition-shadow hover:shadow-[0_12px_40px_-20px_rgba(74,18,56,0.35)] sm:p-5"
    >
      <div className={cn("relative overflow-hidden rounded-xl bg-blush-100", large ? "aspect-[16/9]" : "aspect-[16/10]")}>
        <Img
          src={post.cover}
          alt=""
          fill
          priority={priority}
          sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="flex items-center gap-2.5 text-sm">
          <span className="font-medium text-plum-700">{post.category}</span>
          <span className="h-3.5 w-px bg-blush-300" aria-hidden />
          <time dateTime={post.date} className="text-muted">
            {formatDate(post.date)}
          </time>
        </p>
        <h3 className={cn("mt-3 font-medium leading-snug text-ink", large ? "text-xl" : "text-lg")}>{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-plum-700">
          Devamını oku
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
