"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { PostGrid } from "./PostGrid";

const ALL = "Tüm Yazılar";

/** Arama + kategori filtresi; yazı verisi sunucuda okunup buraya prop olarak gelir */
export function BlogExplorer({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(() => [ALL, ...new Set(posts.map((p) => p.category))], [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");
    return posts.filter(
      (p) =>
        (category === ALL || p.category === category) &&
        (!q || `${p.title} ${p.excerpt}`.toLocaleLowerCase("tr-TR").includes(q)),
    );
  }, [posts, query, category]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Yazılarda ara</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Yazılarda ara..."
            className="w-full rounded-xl border border-blush-200 bg-white py-3 pl-11 pr-4 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/70 focus:border-plum-600 focus:ring-2 focus:ring-plum-600/15"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Kategoriler">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-sm transition-colors",
                  active
                    ? "border-plum-700/40 bg-blush-100 font-medium text-plum-800"
                    : "border-blush-200 bg-white text-ink hover:border-plum-700/30",
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <PostGrid posts={filtered} featured />
        ) : (
          <p className="rounded-2xl border border-dashed border-blush-300 py-16 text-center text-muted">
            Aramanızla eşleşen yazı bulunamadı.
          </p>
        )}
      </div>
    </>
  );
}
