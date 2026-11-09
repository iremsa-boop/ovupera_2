import type { PostMeta } from "@/lib/blog";
import { PostCard } from "./PostCard";
import { PostTeaserGrid } from "./PostTeaser";

/** featured: ilk iki yazı geniş, kalanlar üçlü sıra (blog sayfası düzeni). Mobilde yatay kaydırılan sıra. */
export function PostGrid({ posts, featured }: { posts: PostMeta[]; featured?: boolean }) {
  const top = featured ? posts.slice(0, 2) : [];
  const rest = featured ? posts.slice(2) : posts;

  return (
    <>
      <div className="sm:hidden">
        <PostTeaserGrid posts={posts} />
      </div>

      <div className="hidden space-y-6 sm:block">
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
    </>
  );
}
