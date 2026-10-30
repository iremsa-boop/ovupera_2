"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

const field =
  "w-full rounded-2xl border border-blush-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-plum-600 focus:ring-2 focus:ring-plum-600/15";

/**
 * Şimdilik e-posta istemcisini açar.
 * Bir form servisi (ör. Formspree, Resend) bağlandığında handleSubmit burada güncellenir.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Web sitesi: ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Ad Soyad</span>
          <input name="name" required className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">E-posta</span>
          <input name="email" type="email" required className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">Mesajınız</span>
        <textarea name="message" rows={6} required className={field} />
      </label>
      <Button type="submit">Gönder</Button>
      {sent && <p className="text-sm text-plum-700">E-posta uygulamanız açıldı. Teşekkür ederiz!</p>}
    </form>
  );
}
