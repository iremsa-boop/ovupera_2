"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:border-plum-600 focus:ring-4 focus:ring-plum-600/10";
const label = "mb-2 block text-sm font-medium text-plum-950";

type Status = "idle" | "sending" | "published" | "whatsapp" | "error";

const errors: Record<string, string> = {
  "too-short": "Yorumunuz en az 10 karakter olmalı.",
  links: "Yorumlarda bağlantı (link) paylaşılamaz.",
  "rate-limit": "Az önce bir yorum gönderdiniz. Lütfen bir dakika sonra tekrar deneyin.",
  consent: "Lütfen yayın iznini onaylayın.",
};

/** Yorum deposu kapalıysa yorumu WhatsApp hattına mesaj olarak iletir */
function sendViaWhatsApp(data: FormData) {
  const name = String(data.get("name") || "").trim() || "Belirtilmedi";
  const city = String(data.get("city") || "").trim() || "Belirtilmedi";
  const lines = [
    "Merhaba, Ovupera web sitesinden yorum gönderiyorum:",
    "",
    `"${String(data.get("text")).trim()}"`,
    "",
    `Ad: ${name}`,
    `Şehir: ${city}`,
    "Yorumumun sitede yayınlanmasına izin veriyorum.",
  ];
  window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
}

/**
 * Ziyaretçi yorum formu. Yorum /api/reviews'e gönderilir ve hemen sitede yayınlanır.
 * Yorum deposu bağlı değilse (503) yorum WhatsApp hattına mesaj olarak gider.
 */
export function ReviewForm({ onDone }: { onDone?: () => void }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          city: data.get("city"),
          text: data.get("text"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      if (res.status === 503) {
        sendViaWhatsApp(data);
        form.reset();
        setStatus("whatsapp");
        return;
      }
      if (!res.ok) {
        const { error: code } = (await res.json().catch(() => ({}))) as { error?: string };
        setError(errors[code ?? ""] ?? "Yorum gönderilemedi. Lütfen tekrar deneyin.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("published");
      router.refresh();
    } catch {
      setError("Yorum gönderilemedi. Lütfen tekrar deneyin.");
      setStatus("error");
    }
  }

  if (status === "published" || status === "whatsapp") {
    return (
      <div role="status" className="py-6 text-center">
        <p className="font-serif text-2xl text-plum-900">Teşekkür ederiz!</p>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {status === "published"
            ? "Yorumunuz yayınlandı. Deneyiminizi paylaştığınız için teşekkürler."
            : "WhatsApp açıldı; mesajı gönderdiğinizde yorumunuz bize ulaşır."}
        </p>
        <button type="button" onClick={onDone} className="mt-5 text-sm font-medium text-plum-700 underline-offset-4 hover:underline">
          Kapat
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      {/* Botları ayıklamak için gizli alan */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="block">
        <span className={label}>Yorumunuz</span>
        <textarea name="text" rows={5} required minLength={10} maxLength={1000} placeholder="Ovupera deneyiminizi paylaşın" className={`${field} resize-none`} />
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
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
