import Image, { type ImageProps } from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";

/**
 * next/image + otomatik bulanık önizleme.
 * Görsel yüklenene kadar boş kutu yerine görselin bulanık hali görünür.
 * Önizleme verisi `npm run images` ile üretilir.
 */
export function Img({ src, alt, ...props }: ImageProps) {
  const placeholder = typeof src === "string" ? imagePlaceholders[src] : undefined;
  return (
    <Image
      src={src}
      alt={alt}
      {...(placeholder && { placeholder: "blur" as const, blurDataURL: placeholder.blur })}
      {...props}
    />
  );
}
