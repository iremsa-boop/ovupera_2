import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { addReview, listReviews, REVIEWS_TAG, reviewsStoreEnabled } from "@/lib/reviews-store";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";

/** Yayındaki ziyaretçi yorumları */
export async function GET() {
  return NextResponse.json({ enabled: reviewsStoreEnabled, reviews: await listReviews() });
}

/** Yeni yorum: doğrulanır ve hemen yayınlanır */
export async function POST(req: Request) {
  if (!reviewsStoreEnabled) {
    return NextResponse.json({ error: "store-disabled" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Botlar için gizli alan: doluysa sessizce kabul edilmiş gibi davran
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }, { status: 201 });

  const text = typeof body.text === "string" ? body.text.trim().slice(0, 1000) : "";
  const name = clean(body.name, 40);
  const city = clean(body.city, 40);

  if (body.consent !== true) return NextResponse.json({ error: "consent" }, { status: 400 });
  if (text.length < 10) return NextResponse.json({ error: "too-short" }, { status: 400 });
  if (/https?:\/\/|www\.|<[a-z]/i.test(text + name + city)) {
    return NextResponse.json({ error: "links" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
  let result: "ok" | "rate-limit";
  try {
    result = await addReview({ text, name: name || undefined, meta: city || undefined }, ip);
  } catch (err) {
    console.error("Yorum kaydedilemedi", err);
    return NextResponse.json({ error: "store-failed" }, { status: 503 });
  }
  if (result === "rate-limit") {
    return NextResponse.json({ error: "rate-limit" }, { status: 429 });
  }

  revalidateTag(REVIEWS_TAG);
  return NextResponse.json({ ok: true }, { status: 201 });
}
