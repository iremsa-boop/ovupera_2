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

type NewReview = { name?: string; meta?: string; text: string };

export const REVIEWS_TAG = "reviews";
const MAX = 500;

/**
 * Depo seçimi:
 * - REVIEWS_SHEET_URL tanımlıysa yorumlar Google E-Tablolar'da tutulur
 *   (script: docs/yorumlar-google-apps-script.gs). Tablodan satır silmek yorumu kaldırır.
 * - Yerel geliştirmede (npm run dev) .data/reviews.json dosyası kullanılır.
 * - İkisi de yoksa depo kapalıdır; form yorumu WhatsApp'a yönlendirir.
 */
const sheetUrl = process.env.REVIEWS_SHEET_URL;
const useSheet = Boolean(sheetUrl);
const useFile = !useSheet && process.env.NODE_ENV === "development";

export const reviewsStoreEnabled = useSheet || useFile;

// --- Google E-Tablolar (Apps Script web uygulaması) ----------------------------

type SheetRow = { createdAt: string; name?: string; meta?: string; text: string };

async function readSheet(): Promise<StoredReview[]> {
  const res = await fetch(sheetUrl!, { next: { tags: [REVIEWS_TAG], revalidate: 600 } });
  if (!res.ok) throw new Error(`Sheet ${res.status}`);
  const json = (await res.json()) as { reviews?: SheetRow[] };
  return (json.reviews ?? []).map((r, i) => ({
    id: `${r.createdAt}-${i}`,
    createdAt: r.createdAt,
    name: r.name || undefined,
    meta: r.meta || undefined,
    text: r.text,
  }));
}

async function writeSheet(input: NewReview, ip: string): Promise<"ok" | "rate-limit"> {
  const res = await fetch(sheetUrl!, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ name: input.name ?? "", city: input.meta ?? "", text: input.text, ip }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Sheet ${res.status}`);
  const json = (await res.json()) as { ok?: boolean; error?: string };
  if (json.error === "rate-limit") return "rate-limit";
  if (!json.ok) throw new Error(json.error || "Sheet error");
  return "ok";
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
    return useSheet ? await readSheet() : await readFile();
  } catch (err) {
    console.error("Yorumlar okunamadı", err);
    return [];
  }
}

/** Yorumu kaydeder; tabloda aynı adresten 60 sn içinde ikinci yorum reddedilir */
export async function addReview(input: NewReview, ip: string): Promise<"ok" | "rate-limit"> {
  if (useSheet) return writeSheet(input, ip);
  const review: StoredReview = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...input };
  const list = await readFile();
  await writeFile([review, ...list].slice(0, MAX));
  return "ok";
}
