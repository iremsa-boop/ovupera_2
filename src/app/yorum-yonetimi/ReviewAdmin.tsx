"use client";

import { useEffect, useState } from "react";
import type { StoredReview } from "@/lib/reviews-store";

const KEY_STORAGE = "ovupera-review-admin-key";

export function ReviewAdmin() {
  const [reviews, setReviews] = useState<StoredReview[] | null>(null);
  const [enabled, setEnabled] = useState(true);
  const [adminKey, setAdminKey] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      setAdminKey(sessionStorage.getItem(KEY_STORAGE) ?? "");
    } catch {}
    fetch("/api/reviews", { cache: "no-store" })
      .then((r) => r.json())
      .then((d: { enabled: boolean; reviews: StoredReview[] }) => {
        setEnabled(d.enabled);
        setReviews(d.reviews);
      })
      .catch(() => setReviews([]));
  }, []);

  async function remove(id: string) {
    if (!adminKey) return setMessage("Silmek için önce yönetici anahtarını girin.");
    if (!confirm("Bu yorum siteden kalıcı olarak silinsin mi?")) return;
    const res = await fetch(`/api/reviews/${id}`, { method: "DELETE", headers: { "x-admin-key": adminKey } });
    if (res.status === 401) return setMessage("Yönetici anahtarı hatalı.");
    if (!res.ok) return setMessage("Yorum silinemedi.");
    setReviews((list) => list?.filter((r) => r.id !== id) ?? null);
    setMessage("Yorum silindi.");
  }

  return (
    <div className="mt-8 space-y-6">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-plum-950">Yönetici anahtarı</span>
        <input
          type="password"
          value={adminKey}
          onChange={(e) => {
            setAdminKey(e.target.value);
            try {
              sessionStorage.setItem(KEY_STORAGE, e.target.value);
            } catch {}
          }}
          className="w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-plum-600"
        />
      </label>
      {message && <p role="status" className="text-sm text-plum-700">{message}</p>}
      {!enabled && (
        <p className="rounded-xl bg-blush-100 p-4 text-sm text-plum-900">
          Yorum deposu henüz bağlı değil; formdan gelen yorumlar şu an WhatsApp&apos;a gidiyor.
        </p>
      )}
      {reviews === null ? (
        <p className="text-muted">Yükleniyor…</p>
      ) : reviews.length === 0 ? (
        <p className="text-muted">Formdan gelmiş yorum yok.</p>
      ) : (
        <ul className="divide-y divide-blush-200 border-y border-blush-200">
          {reviews.map((r) => (
            <li key={r.id} className="flex items-start justify-between gap-6 py-5">
              <div>
                <p className="font-medium text-ink">
                  {r.name ?? "Ovupera kullanıcısı"}
                  {r.meta && <span className="font-normal text-muted"> · {r.meta}</span>}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink/80">{r.text}</p>
                <p className="mt-1 text-xs text-muted">{new Date(r.createdAt).toLocaleString("tr-TR")}</p>
              </div>
              <button
                type="button"
                onClick={() => remove(r.id)}
                className="shrink-0 rounded-full border border-plum-800/30 px-4 py-2 text-sm text-plum-800 hover:border-plum-800"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
