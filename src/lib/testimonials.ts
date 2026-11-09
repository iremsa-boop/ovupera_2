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
  {
    name: "Merve T.",
    meta: "Bursa",
    text: "Günde tek saşe olması ve hazırlamasının bir dakika sürmesi en sevdiğim yanı. Kutudaki bilgiler de çok açık ve anlaşılır.",
    rating: 5,
    date: "2026-09-28",
    sample: true,
  },
  {
    name: "Selin Y.",
    meta: "Antalya",
    text: "Bileşen listesini ve miktarları web sitesinden detaylıca inceleyebilmek güven verdi. Hekimime de rahatça gösterebildim.",
    rating: 5,
    date: "2026-09-20",
    sample: true,
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
