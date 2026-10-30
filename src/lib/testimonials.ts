export type Testimonial = {
  name: string;
  /** Örn. "İstanbul" veya "34 yaş" */
  meta?: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  /** true iken kartta "Örnek yorum" etiketi görünür. Gerçek yorumlar gelince kaldırın. */
  sample?: boolean;
};

// TODO: Örnek yorumları, izni alınmış gerçek kullanıcı yorumlarıyla değiştirin.
export const testimonials: Testimonial[] = [
  {
    name: "Ayşe K.",
    meta: "İstanbul",
    text: "Saşeyi suyla karıştırmak çok pratik, şeftali aroması da hoş. Sabah kahvaltısıyla birlikte rutinimin bir parçası oldu.",
    rating: 5,
    date: "2026-10-20",
    sample: true,
  },
  {
    name: "Elif D.",
    meta: "Ankara",
    text: "Birçok bileşeni ayrı ayrı almak yerine tek saşede olması işimi kolaylaştırdı. Doktorumla konuşarak kullanmaya başladım.",
    rating: 5,
    date: "2026-10-12",
    sample: true,
  },
  {
    name: "Zeynep A.",
    meta: "İzmir",
    text: "Kutunun ve saşenin tasarımı çok şık. Çantamda taşıyıp ofiste de rahatlıkla kullanabiliyorum.",
    rating: 4,
    date: "2026-10-05",
    sample: true,
  },
];

export const averageRating = () =>
  testimonials.length ? testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length : 0;
