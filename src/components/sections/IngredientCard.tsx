import type { Ingredient } from "@/lib/product";
import { Card } from "@/components/ui";

export function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  const [num, ...unit] = (ingredient.amount ?? "").split(" ");
  return (
    <Card className="flex h-full flex-col">
      {ingredient.amount && (
        <p className="font-serif text-4xl text-plum-800">
          {num}
          <span className="ml-1 text-sm font-sans uppercase tracking-wider text-plum-600">{unit.join(" ")}</span>
        </p>
      )}
      <h3 className="mt-3 font-serif text-xl text-plum-950">{ingredient.name}</h3>
      {ingredient.detail && <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold-500">{ingredient.detail}</p>}
      {ingredient.brd && <p className="mt-2 text-xs tracking-widest text-muted">{ingredient.brd} BRD*</p>}
      {ingredient.claims && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {ingredient.claims.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" />
              {c}
            </li>
          ))}
        </ul>
      )}
      {ingredient.source && (
        <p className="mt-auto pt-4 text-xs leading-relaxed text-muted/80 italic">{ingredient.source}</p>
      )}
    </Card>
  );
}
