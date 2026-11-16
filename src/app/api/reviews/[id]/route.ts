import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { deleteReview, REVIEWS_TAG } from "@/lib/reviews-store";

/** Yönetim sayfasından yorum silme; REVIEWS_ADMIN_KEY ortam değişkeniyle korunur */
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const key = process.env.REVIEWS_ADMIN_KEY;
  if (!key || req.headers.get("x-admin-key") !== key) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const removed = await deleteReview((await params).id);
  if (removed) revalidateTag(REVIEWS_TAG);
  return NextResponse.json({ ok: removed }, { status: removed ? 200 : 404 });
}
