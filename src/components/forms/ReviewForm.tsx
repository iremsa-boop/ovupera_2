"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

const field =
  "w-full rounded-2xl border border-blush-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-plum-600 focus:ring-2 focus:ring-plum-600/15";

/**
 * Yorumlar onaydan sonra yayınlanır. Şimdilik e-posta istemcisini açar;
 * bir form servisi veya veritabanı bağlandığında handleSubmit burada güncellenir.
 */
export function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Yeni kullanıcı yorumu: ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Ad: ${data.get("name")}`,
        `Şehir: ${data.get("city") || "-"}`,
        `Puan: ${rating}/5`,
        `Yayın izni: ${data.get("consent") ? "Evet" : "Hayır"}`,
        "",
        `${data.get("text")}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Puanınız</span>
        <div className="flex gap-1" role="radiogroup" aria-label="Puan">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} yıldız`}
              onClick={() => setRating(n)}
              className="p-1 text-accent-500"
            >
              <svg width="28" height="28" viewBox="0 0 20 20" fill={n <= rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" aria-hidden>
                <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Ad (soyadın baş harfi)</span>
          <input name="name" required placeholder="Ayşe K." className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Şehir (isteğe bağlı)</span>
          <input name="city" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Yorumunuz</span>
        <textarea name="text" rows={5} required minLength={20} className={field} />
      </label>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input name="consent" type="checkbox" required className="mt-1 accent-plum-700" />
        Yorumumun adım ve şehrimle birlikte Ovupera web sitesinde yayınlanmasına izin veriyorum.
      </label>
      <Button type="submit">Yorumu gönder</Button>
      {sent && (
        <p className="text-sm text-plum-700">
          E-posta uygulamanız açıldı. Yorumunuz incelendikten sonra yayınlanacaktır, teşekkür ederiz!
        </p>
      )}
    </form>
  );
}
