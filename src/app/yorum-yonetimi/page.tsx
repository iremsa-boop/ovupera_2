import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { ReviewAdmin } from "./ReviewAdmin";

export const metadata: Metadata = {
  title: "Yorum yönetimi",
  robots: { index: false, follow: false },
};

export default function ReviewAdminPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="font-serif text-3xl text-plum-900">Yorum yönetimi</h1>
      <p className="mt-2 text-muted">Formdan gelen yorumlar otomatik yayınlanır. İstemediğiniz yorumu buradan silebilirsiniz.</p>
      <ReviewAdmin />
    </Container>
  );
}
