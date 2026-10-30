import { Button, Container } from "@/components/ui";

type Props = {
  title?: React.ReactNode;
  text?: string;
  href?: string;
  label?: string;
};

export function CtaBanner({
  title = "Yolculuğunuza başlamadan önce doktorunuza danışın.",
  text = "Ovupera hakkında merak ettiklerinizi bize yazabilir, hekiminizle birlikte size en uygun planı oluşturabilirsiniz.",
  href = "/iletisim",
  label = "Bize ulaşın",
}: Props) {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-br from-plum-800 to-plum-950 px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-blush-200">{text}</p>
          <Button href={href} variant="light" className="mt-8">
            {label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
