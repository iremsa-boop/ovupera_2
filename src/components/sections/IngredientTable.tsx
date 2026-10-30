import { groupLabels, ingredientsByGroup, type IngredientGroup } from "@/lib/product";
import { Card } from "@/components/ui";

const groups: IngredientGroup[] = ["ozel", "vitamin", "mineral"];

/** 22 bileşenin üç sütunlu listesi */
export function IngredientTable() {
  return (
    <Card className="grid gap-10 p-8 sm:p-10 md:grid-cols-3">
      {groups.map((g) => {
        const items = ingredientsByGroup(g);
        return (
          <div key={g}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-plum-600">{groupLabels[g]}</p>
            <p className="mt-2 font-serif text-4xl text-plum-800">{items.length}</p>
            <ul className="mt-4">
              {items.map((i) => (
                <li key={i.name} className="flex items-baseline justify-between border-b border-blush-200 py-3">
                  <span className="text-ink">{i.name}</span>
                  {i.amount && <span className="text-sm text-muted">{i.amount}</span>}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Card>
  );
}
