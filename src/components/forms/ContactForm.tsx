"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

const field =
  "w-full rounded-2xl border border-blush-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-plum-600 focus:ring-2 focus:ring-plum-600/15";

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
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Gönderiliyor…" : "Gönder"}
      </Button>
      {messages[status] && (
        <p role="status" className="text-sm text-plum-700">
          {messages[status]}
        </p>
      )}
    </form>
  );
}
