/**
 * Ovupera – ziyaretçi yorumları için Google E-Tablolar scripti.
 * Google E-Tablolar > Uzantılar > Apps Komut Dosyası içine olduğu gibi yapıştırın.
 *
 * "Yorumlar" sekmesindeki her satır sitede bir yorumdur.
 * Bir yorumu kaldırmak için satırı silmeniz yeterli; site en geç 1-2 dakikada güncellenir.
 */
const SHEET_NAME = "Yorumlar";
const MAX_REVIEWS = 500;

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Tarih", "İsim", "Şehir", "Yorum"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Hücreye formül olarak yazılmasın diye =, +, -, @ ile başlayan metinlerin başına ' eklenir
function safe_(value, max) {
  const v = String(value || "").slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

/** Site yorumları buradan okur (en yeni en başta) */
function doGet() {
  const sheet = getSheet_();
  const count = sheet.getLastRow() - 1;
  if (count < 1) return json_({ reviews: [] });
  const rows = sheet.getRange(2, 1, count, 4).getValues();
  const reviews = rows
    .filter((r) => String(r[3]).trim())
    .map((r) => ({
      createdAt: r[0] instanceof Date ? r[0].toISOString() : String(r[0]),
      name: String(r[1] || "").trim(),
      meta: String(r[2] || "").trim(),
      text: String(r[3]).trim(),
    }))
    .reverse()
    .slice(0, MAX_REVIEWS);
  return json_({ reviews: reviews });
}

/** Sitedeki form yeni yorumu buraya gönderir */
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const cache = CacheService.getScriptCache();
  const ipKey = data.ip ? "ip:" + String(data.ip).slice(0, 64) : null;
  if (ipKey && cache.get(ipKey)) return json_({ ok: false, error: "rate-limit" });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow([new Date(), safe_(data.name, 40), safe_(data.city, 40), safe_(data.text, 1000)]);
  } finally {
    lock.releaseLock();
  }
  if (ipKey) cache.put(ipKey, "1", 60);
  return json_({ ok: true });
}
