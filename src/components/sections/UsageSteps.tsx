import { usageSteps } from "@/lib/product";
import { Container, SectionHeading } from "@/components/ui";

export function UsageSteps() {
  return (
    <section id="kullanim" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Günde bir saşe, <em className="text-plum-700">kendinize ayırdığınız an.</em>
            </>
          }
        />
        {/* Mobil: yan yana kayan kartlar; masaüstü: üç sütun */}
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {usageSteps.map((s) => (
            <div
              key={s.step}
              className="w-[62%] shrink-0 snap-start rounded-xl bg-white px-5 py-6 text-center sm:w-auto sm:bg-transparent sm:px-6 sm:py-0"
            >
              <p className="font-serif text-4xl text-plum-700 sm:text-6xl">{s.step}</p>
              <p className="mt-4 font-medium text-plum-950">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
