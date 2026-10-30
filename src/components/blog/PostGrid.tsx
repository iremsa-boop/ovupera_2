import type { PostMeta } from "@/lib/blog";
import { PostCard } from "./PostCard";

export function PostGrid({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
