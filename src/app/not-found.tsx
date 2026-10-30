import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-serif text-7xl text-plum-800">404</p>
      <p className="mt-6 text-muted">Aradığınız sayfa bulunamadı.</p>
      <Button href="/" className="mt-8">
        Ana sayfaya dön
      </Button>
    </Container>
  );
}
