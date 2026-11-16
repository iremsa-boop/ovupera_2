import { promises as fs } from "node:fs";
import path from "node:path";

/** Ziyaretçilerin formdan gönderdiği, otomatik yayınlanan yorumlar */
export type StoredReview = {
  id: string;
  name?: string;
  meta?: string;
  text: string;
  createdAt: string;
};

export const REVIEWS_TAG = "reviews";
const KEY = "ovupera:reviews";
const MAX = 500;

/**
 * Depo seçimi:
 * - Vercel'de Upstash Redis bağlıysa (KV_REST_API_URL / KV_REST_API_TOKEN ya da UPSTASH_REDIS_REST_*) Redis kullanılır.
 * - Yerel geliştirmede (npm run dev) .data/reviews.json dosyası kullanılır.
 * - İkisi de yoksa depo kapalıdır; form yorumu WhatsApp'a yönlendirir.
 */
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const useRedis = Boolean(redisUrl && redisToken);
const useFile = !useRedis && process.env.NODE_ENV === "development";

export const reviewsStoreEnabled = useRedis || useFile;

// --- Upstash Redis (REST) ---------------------------------------------------

async function redis<T>(command: (string | number)[], cacheTags?: string[]): Promise<T> {
  const res = await fetch(redisUrl!, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    ...(cacheTags ? { next: { tags: cacheTags, revalidate: 3600 } } : { cache: "no-store" as const }),
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  const json = (await res.json()) as { result: T; error?: string };
  if (json.error) throw new Error(json.error);
  return json.result;
}

// --- Yerel dosya (geliştirme) -------------------------------------------------

const file = path.join(process.cwd(), ".data", "reviews.json");

async function readFile(): Promise<StoredReview[]> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as StoredReview[];
  } catch {
    return [];
  }
}

async function writeFile(list: StoredReview[]) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(list, null, 2));
}

// --- Ortak arayüz -------------------------------------------------------------

/** En yeni yorum en başta */
export async function listReviews(): Promise<StoredReview[]> {
  if (!reviewsStoreEnabled) return [];
  try {
    if (useRedis) {
      const raw = await redis<string[]>(["LRANGE", KEY, 0, MAX - 1], [REVIEWS_TAG]);
      return raw.map((r) => JSON.parse(r) as StoredReview);
    }
    return await readFile();
  } catch (err) {
    console.error("Yorumlar okunamadı", err);
    return [];
  }
}

export async function addReview(input: Omit<StoredReview, "id" | "createdAt">): Promise<StoredReview> {
  const review: StoredReview = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...input };
  if (useRedis) {
    await redis(["LPUSH", KEY, JSON.stringify(review)]);
    await redis(["LTRIM", KEY, 0, MAX - 1]);
  } else {
    const list = await readFile();
    await writeFile([review, ...list].slice(0, MAX));
  }
  return review;
}

/** Aynı adresten art arda gönderimi sınırlar (Redis'te 60 sn'de 1 yorum). Yerelde sınır yok. */
export async function allowSubmission(ip: string): Promise<boolean> {
  if (!useRedis) return true;
  const ok = await redis<string | null>(["SET", `ovupera:review-rate:${ip}`, "1", "EX", 60, "NX"]);
  return ok === "OK";
}
