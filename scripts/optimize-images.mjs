// public/images içindeki görselleri sıkıştırır ve bulanık önizleme (blur placeholder) verisini üretir.
// Yeni görsel ekledikten sonra çalıştırın: npm run images
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "images");
const OUT = path.join(process.cwd(), "src", "lib", "image-placeholders.ts");
const MAX = 2000;

const files = (await fs.readdir(DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const entries = [];

for (const file of files) {
  const full = path.join(DIR, file);
  const input = await fs.readFile(full);
  const meta = await sharp(input).metadata();

  if (/\.jpe?g$/i.test(file)) {
    const out = await sharp(input)
      .rotate()
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toBuffer();
    if (out.length < input.length) await fs.writeFile(full, out);
  }

  const blur = await sharp(input).resize(16, 16, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  entries.push(
    `  "/images/${file}": { w: ${meta.width}, h: ${meta.height}, blur: "data:image/webp;base64,${blur.toString("base64")}" },`,
  );
}

await fs.writeFile(
  OUT,
  `// Otomatik üretildi: npm run images. Elle düzenlemeyin.\nexport const imagePlaceholders: Record<string, { w: number; h: number; blur: string }> = {\n${entries.join("\n")}\n};\n`,
);

const total = (await Promise.all(files.map((f) => fs.stat(path.join(DIR, f))))).reduce((s, x) => s + x.size, 0);
console.log(`${files.length} görsel işlendi, toplam ${(total / 1024 / 1024).toFixed(1)} MB`);
