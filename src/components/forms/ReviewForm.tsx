"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:border-plum-600 focus:ring-4 focus:ring-plum-600/10";
const label = "mb-2 block text-sm font-medium text-plum-950";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Ziyaretçi yorum formu. Yorumlar doğrudan yayınlanmaz; incelendikten sonra
 * src/lib/testimonials.ts dosyasına eklenir.
 * site.forms.reviewEndpoint tanımlıysa oraya gönderilir, değilse WhatsApp hattına mesaj olarak gider.
 */
export function ReviewForm({ onDone }: { onDone?: () => void }) {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = site.forms.reviewEndpoint;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("rating", String(rating));

    if (!endpoint) {
      const name = String(data.get("name") || "").trim() || "Belirtilmedi";
      const city = String(data.get("city") || "").trim() || "Belirtilmedi";
      const lines = [
        "Merhaba, Ovupera web sitesinden yorum gönderiyorum:",
        "",
        `"${String(data.get("text")).trim()}"`,
        "",
        `Ad: ${name}`,
        `Şehir: ${city}`,
        `Puan: ${rating ? `${rating}/5` : "Belirtilmedi"}`,
        "Yorumumun sitede yayınlanmasına izin veriyorum.",
      ];
      window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
      form.reset();
      setRating(0);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setRating(0);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-6 text-center">
        <p className="font-serif text-2xl text-plum-900">Teşekkür ederiz!</p>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {endpoint
            ? "Yorumunuz bize ulaştı. İncelendikten sonra sitede yayınlanacaktır."
            : "WhatsApp açıldı; mesajı gönderdiğinizde yorumunuz bize ulaşır. İncelendikten sonra sitede yayınlanacaktır."}
        </p>
        <button type="button" onClick={onDone} className="mt-5 text-sm font-medium text-plum-700 underline-offset-4 hover:underline">
          Kapat
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <span className={label}>Puanınız</span>
        <div className="flex gap-1" role="radiogroup" aria-label="Puanınız">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} yıldız`}
              onClick={() => setRating(n)}
              className={cn("transition", n <= rating ? "text-[#E7B13B]" : "text-plum-900/20 hover:text-[#E7B13B]/60")}
            >
              <svg width="30" height="30" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>
            Adınız <span className="font-normal text-muted">(isteğe bağlı)</span>
          </span>
          <input name="name" autoComplete="given-name" placeholder="Örn. Ayşe K." className={field} />
        </label>
        <label className="block">
          <span className={label}>
            Şehir <span className="font-normal text-muted">(isteğe bağlı)</span>
          </span>
          <input name="city" placeholder="Örn. İstanbul" className={field} />
        </label>
      </div>
      <label className="block">
        <span className={label}>Yorumunuz</span>
        <textarea name="text" rows={5} required minLength={10} placeholder="Ovupera deneyiminizi paylaşın" className={`${field} resize-none`} />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-plum-700" />
        Yorumumun, adım ve şehrimle birlikte Ovupera web sitesinde yayınlanmasına izin veriyorum.
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-plum-800 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-plum-700 disabled:opacity-60"
        >
          {status === "sending" ? "Gönderiliyor…" : "Yorumu gönder"}
        </button>
        {status === "error" && (
          <p role="status" className="text-sm text-plum-700">
            Yorum gönderilemedi. Lütfen tekrar deneyin.
          </p>
        )}
      </div>
      <p className="text-xs leading-relaxed text-muted">Yorumlar incelendikten sonra yayınlanır.</p>
    </form>
  );
}
