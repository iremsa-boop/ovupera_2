import { usageSteps } from "@/lib/product";
import { Card, Container, SectionHeading } from "@/components/ui";

export function UsageSteps() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Kullanım önerisi"
          title={
            <>
              Günde bir saşe, <em className="text-plum-700">kendinize ayırdığınız an.</em>
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {usageSteps.map((s) => (
            <Card key={s.step} className="text-center">
              <p className="font-serif text-3xl text-plum-700">{s.step}</p>
              <p className="mt-3 font-medium text-plum-950">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
