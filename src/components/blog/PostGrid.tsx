import type { PostMeta } from "@/lib/blog";
import { PostCard } from "./PostCard";

/** featured: ilk iki yazı geniş, kalanlar üçlü sıra (blog sayfası düzeni) */
export function PostGrid({ posts, featured }: { posts: PostMeta[]; featured?: boolean }) {
  const top = featured ? posts.slice(0, 2) : [];
  const rest = featured ? posts.slice(2) : posts;

  return (
    <div className="space-y-6">
      {top.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {top.map((p) => (
            <PostCard key={p.slug} post={p} large priority />
          ))}
        </div>
      )}
      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
