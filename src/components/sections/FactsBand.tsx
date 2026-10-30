import { productFacts } from "@/lib/product";
import { Container } from "@/components/ui";

export function FactsBand() {
  return (
    <section className="bg-plum-900 text-white">
      <Container className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
        {productFacts.map((f) => (
          <div key={f.label} className="text-center">
            <p className="font-serif text-4xl sm:text-5xl">{f.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-blush-300">{f.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
