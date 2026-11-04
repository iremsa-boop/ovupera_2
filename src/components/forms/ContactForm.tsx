"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

const field =
  "w-full rounded-xl border border-plum-900/15 bg-blush-50/40 px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 hover:border-plum-900/25 focus:border-plum-600 focus:bg-white focus:ring-4 focus:ring-plum-600/10";
const label = "mb-2 block text-sm font-medium text-plum-950";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const messages: Partial<Record<Status, string>> = {
  sent: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
  mailto: "E-posta uygulamanız açıldı. Teşekkür ederiz!",
  error: `Mesaj gönderilemedi. Lütfen tekrar deneyin ya da ${site.contact.email} adresine yazın.`,
};

/**
 * site.forms.contactEndpoint (Formspree vb.) tanımlıysa formu oraya gönderir,
 * tanımlı değilse e-posta istemcisini açar.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = site.forms.contactEndpoint;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const subject = encodeURIComponent(`Web sitesi: ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`);
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Ad Soyad</span>
          <input name="name" required autoComplete="name" placeholder="Adınız ve soyadınız" className={field} />
        </label>
        <label className="block">
          <span className={label}>E-posta</span>
          <input name="email" type="email" required autoComplete="email" placeholder="ornek@eposta.com" className={field} />
        </label>
      </div>
      <label className="block">
        <span className={label}>Mesajınız</span>
        <textarea name="message" rows={6} required placeholder="Size nasıl yardımcı olabiliriz?" className={`${field} resize-none`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" disabled={status === "sending"} className="px-8">
          {status === "sending" ? "Gönderiliyor…" : "Mesajı gönder"}
        </Button>
        {messages[status] && (
          <p role="status" className="text-sm text-plum-700">
            {messages[status]}
          </p>
        )}
      </div>
    </form>
  );
}
