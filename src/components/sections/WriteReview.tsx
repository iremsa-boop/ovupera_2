"use client";

import { useState } from "react";
import { ReviewForm } from "@/components/forms/ReviewForm";

/** Yorumlar bandının altında "Yorum yaz" butonu; tıklanınca form açılır */
export function WriteReview() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-plum-800 transition-colors hover:bg-blush-100"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
        </svg>
        Yorum yaz
      </button>
    );
  }

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-blush-50 p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-plum-900">Deneyiminizi paylaşın</h3>
          <p className="mt-1 text-sm text-muted">Ovupera ile ilgili düşüncelerinizi merak ediyoruz.</p>
        </div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Formu kapat" className="text-plum-900/60 hover:text-plum-900">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <ReviewForm onDone={() => setOpen(false)} />
    </div>
  );
}
