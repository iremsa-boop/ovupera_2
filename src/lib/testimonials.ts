export type Testimonial = {
  name: string;
  /** Örn. "İstanbul" veya "34 yaş" */
  meta?: string;
  /** İsteğe bağlı, izinli profil fotoğrafı (örn. /images/yorum-ayse.jpg); yoksa baş harfler gösterilir */
  photo?: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  /** Yer tutucu metin; yayına almadan önce gerçek, izinli bir yorumla değiştirilmeli. Sitede görünmez. */
  sample?: boolean;
};

export const testimonials: Testimonial[] = [
  // Gerçek kullanıcı yorumu; yayın izni alındı (9 Kasım 2026)
  {
    name: "Derya D.",
    meta: "İstanbul",
    text: "Tadını çok beğendim. Daha kolay adet oluyorum; saçım, yüzüm ve cildim güzelleşti.",
    rating: 5,
    date: "2026-11-09",
  },
  // Gerçek kullanıcı yorumu (9 Kasım 2026)
  {
    name: "Elif S.",
    meta: "Eskişehir",
    text: "Saşeyi suyla karıştırmak çok pratik, şeftali aroması da hoş. Sabah kahvaltısıyla birlikte rutinimin bir parçası oldu. Yumurta kalitemde artış görüldü.",
    rating: 5,
    date: "2026-11-09",
  },
  // Gerçek kullanıcı yorumları (9 Kasım 2026)
  {
    name: "İrem T.",
    meta: "Ankara",
    text: "Birçok bileşeni ayrı ayrı almak yerine tek saşede olması işimi kolaylaştırdı. Doktorumla konuşarak kullanmaya başladım.",
    rating: 5,
    date: "2026-11-09",
  },
  {
    name: "Şule G.",
    meta: "İstanbul",
    text: "Saşenin tasarımı çok şık. Çantamda taşıyıp ofiste de rahatlıkla kullanabiliyorum.",
    rating: 5,
    date: "2026-11-09",
  },
  {
    name: "Berrin",
    meta: "Ankara",
    text: "Günde tek saşe olması ve hazırlamasının bir dakika sürmesi en sevdiğim yanı. Kutudaki bilgiler de çok açık ve anlaşılır.",
    rating: 5,
    date: "2026-11-09",
  },
  {
    name: "Zerrin A.",
    meta: "İstanbul",
    text: "Cildim güzelleşti ve vitaminler sayesinde daha iyi hissediyorum. Güvenerek kullanıyorum.",
    rating: 5,
    date: "2026-11-09",
  },
];

/** Sitede gösterilen yorumlar: örnek (sample) olanlar yayında görünmez */
export const publishedTestimonials = testimonials.filter((t) => !t.sample);

/**
 * Yalnızca yerel geliştirmede (npm run dev) tasarımı görmek için örnekler de gösterilir.
 * Canlı sitede (production build) hiçbir zaman örnek yorum yayınlanmaz.
 */
export const displayedTestimonials =
  process.env.NODE_ENV === "development" ? testimonials : publishedTestimonials;
