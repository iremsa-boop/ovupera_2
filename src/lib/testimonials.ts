export type Testimonial = {
  /** Kullanıcı izin verdiyse adı (örn. "Derya D."); yoksa kartta "Ovupera kullanıcısı" yazar */
  name?: string;
  /** Örn. "İstanbul" veya "34 yaş" */
  meta?: string;
  /** İsteğe bağlı, izinli profil fotoğrafı (örn. /images/yorum-ayse.jpg); yoksa baş harfler gösterilir */
  photo?: string;
  text: string;
  /** Kullanıcı puan verdiyse; yoksa yıldız gösterilmez */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Yer tutucu metin; yayına almadan önce gerçek, izinli bir yorumla değiştirilmeli. Sitede görünmez. */
  sample?: boolean;
};

/**
 * Müşteriden (Acvision) 12 Kasım 2026'da iletilen kullanıcı yorumları.
 * Yazım hataları düzeltildi, doktor adları çıkarıldı. Soru, şikâyet ve
 * takviye edici gıda mevzuatına aykırı sağlık/sonuç iddiası içeren mesajlar eklenmedi.
 */
export const testimonials: Testimonial[] = [
  {
    text: "İlk tüp bebek deneyimimden sonra ikinci denemem için daha bilinçli hazırlanıyorum. Özellikle yumurta kalitesi konusunda doktorumla birlikte hareket ediyorum. Bu süreçte kendime daha fazla özen göstermeye başladım.",
  },
  {
    text: "Doktorum özellikle önerdi. Aralık'ta yumurtalarımı toplayacaklar 🙏🏻 İnşallah yumurtam çok olur, çok umutluyum. Allah herkese istediğini versin, amin.",
  },
  {
    text: "Ovupera'nın içeriğini çok beğendim. Özellikle folik asit de içermesi benim için büyük avantaj. Gebelik planlama sürecinde ihtiyaç duyulan vitaminleri bir arada sunması çok güzel. Böylece ekstra folik asit kullanma ihtiyacını da ürünün içeriğine göre doktorumla değerlendirebiliyorum. Kadın sağlığını ve gebelik hazırlığını desteklemek isteyenler için güzel bir alternatif. 🌸",
  },
  {
    text: "Enerji metabolizmamı desteklemesi çok hoşuma gitti. Günlük hayatımda kendimi daha zinde hissetmek için güzel bir vitamin desteği.",
  },
  {
    text: "Tadı çok güzeeel!",
  },
  {
    text: "Siz ne yaptınız böyle! Tadı çok güzel.",
  },
  {
    text: "Doktorum önerdiği için aldım. Allah'ım, bu sefer bizim de yüzümüzü güldürsün.",
  },
  {
    text: "Doktorum önerdiği için çok güveniyorum.",
  },
  {
    meta: "Almanya",
    text: "Keşke Almanya'da da olsa! 3 kutu birden götürdüm, tekrar kontrole geldiğimde yine stok yapacağım. Doktorum, sizi seviyorum, bu işi birlikte başaracağız. Almanya'ya 3 kişi döneceğiz.",
  },
  {
    meta: "Kars",
    text: "Kars'a 2 günde geldi, hızlı teslimat için teşekkürler.",
  },
  {
    meta: "Ankara",
    text: "Sipariş verdim, ertesi gün kapımdaydı. Bu kadar hız beklemiyordum.",
  },
  {
    meta: "İstanbul",
    text: "Anadolu Yakası hızlı kurye hizmetinden yararlandım, çok güzeldi.",
  },
  {
    text: "Danışma hattı çok bilgili, tüm sorularıma içtenlikle cevap verdi.",
  },
  {
    text: "Kutum hasarlı ulaştı, Aslı Hanım sağ olsun hemen ilgilendi.",
  },
  {
    meta: "Konya",
    text: "Günlük yaşamda vücudumun ihtiyaç duyduğu vitamin ve mineralleri bir arada sunması çok hoşuma gidiyor. Vitaminleri araştırırken bu ürün karşıma çıktı; doktora danışıp aldım. Konya'ya iki günde geldi.",
  },
  {
    text: "Paketleme güzel, ürünüm elime sağlam ulaştı.",
  },
  {
    text: "Bugün teslim aldım, inşallah pazartesi günü başlayacağım. Yorumumu okuyanlar lütfen dua etsin, bu 3. tüp bebek denemem.",
  },
  {
    text: "Normalde şeftali yemem, hatta tadını bile bilmem. Ürün şeftalili olunca biraz ürperdim ama tadına bakınca çok beğendim.",
  },
  {
    text: "Aşılama öncesi doktorum önerdi. İnşallah sonradan güzel haber yazarım.",
  },
  {
    text: "Kendimi daha dinç hissediyorum.",
  },
  {
    meta: "Azerbaycan",
    text: "Hamınızı salamlayıram. Allah üzünüzü güldürsün.",
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
