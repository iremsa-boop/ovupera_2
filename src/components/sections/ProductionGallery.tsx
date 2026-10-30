import { Img } from "@/components/ui/Img";
import { productionImages } from "@/lib/product";

export function ProductionGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {productionImages.map((img) => (
        <figure key={img.src} className="overflow-hidden rounded-2xl bg-white">
          <div className="relative aspect-[4/5]">
            <Img src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
          </div>
          <figcaption className="px-4 py-3 text-xs text-muted">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
