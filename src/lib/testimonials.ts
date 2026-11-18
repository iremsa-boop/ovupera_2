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
 * Müşteriden (Acvision) 12 Kasım 2026'da iletilen, müşterinin onayladığı kullanıcı yorumları.
 * Yalnızca yazım hataları düzeltildi.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Zeynep Y.",
    meta: "İstanbul",
    text: "İlk tüp bebek deneyimimden sonra ikinci denemem için daha bilinçli hazırlanıyorum. Özellikle yumurta kalitesi konusunda doktorumla birlikte hareket ediyorum. Bu süreçte kendime daha fazla özen göstermeye başladım.",
  },
  {
    name: "Elif D.",
    meta: "İstanbul",
    text: "Doktorum özellikle önerdi. Aralık'ta yumurtalarımı toplayacaklar 🙏🏻 İnşallah yumurtam çok olur, çok umutluyum. Allah herkese istediğini versin, amin.",
  },
  {
    name: "Ayşe K.",
    meta: "İstanbul",
    text: "Ovupera'nın içeriğini çok beğendim. Özellikle folik asit de içermesi benim için büyük avantaj. Gebelik planlama sürecinde ihtiyaç duyulan vitaminleri bir arada sunması çok güzel. Böylece ekstra folik asit kullanma ihtiyacını da ürünün içeriğine göre doktorumla değerlendirebiliyorum. Kadın sağlığını ve gebelik hazırlığını desteklemek isteyenler için güzel bir alternatif. 🌸",
  },
  {
    name: "Merve Ç.",
    meta: "İstanbul",
    text: "İçeriğindeki vitamin ve minerallerin çeşitliliği çok güzel. Özellikle yumurtalık sağlığını ve yumurtlama sürecini desteklemeye yönelik olması benim için büyük artı. 🌸",
  },
  {
    name: "Büşra Ş.",
    meta: "İstanbul",
    text: "Enerji metabolizmamı desteklemesi çok hoşuma gitti. Günlük hayatımda kendimi daha zinde hissetmek için güzel bir vitamin desteği.",
  },
  {
    name: "Ceren A.",
    meta: "İstanbul",
    text: "Tadı çok güzeeel!",
  },
  {
    name: "Selin A.",
    meta: "İstanbul",
    text: "Siz ne yaptınız böyle! Tadı çok güzel.",
  },
  {
    name: "İrem K.",
    meta: "İstanbul",
    text: "Doktorum önerdiği için aldım. Allah'ım, bu sefer bizim de yüzümüzü güldürsün.",
  },
  {
    name: "Melisa Ö.",
    meta: "İstanbul",
    text: "Doktorum önerdiği için çok güveniyorum.",
  },
  {
    name: "Ebru A.",
    meta: "Almanya",
    text: "Keşke Almanya'da da olsa! 3 kutu birden götürdüm, tekrar kontrole geldiğimde yine stok yapacağım. Doktorum Nagehan, sizi seviyorum, bu işi birlikte başaracağız. Almanya'ya 3 kişi döneceğiz.",
  },
  {
    name: "Derya P.",
    meta: "İstanbul",
    text: "Şehir hastanesinden doktorum reçete etti. Çok güveniyorum, yorumumu güncelleyeceğim.",
  },
  {
    name: "Gamze Y.",
    meta: "Kars",
    text: "Kars'a 2 günde geldi, hızlı teslimat için teşekkürler.",
  },
  {
    name: "Esra K.",
    meta: "Ankara",
    text: "Sipariş verdim, ertesi gün kapımdaydı. Bu kadar hız beklemiyordum.",
  },
  {
    name: "Tuğba Ö.",
    meta: "İstanbul",
    text: "Anadolu Yakası hızlı kurye hizmetinden yararlandım, çok güzeldi.",
  },
  {
    name: "Sude K.",
    meta: "İstanbul",
    text: "Danışma hattı çok bilgili, tüm sorularıma içtenlikle cevap verdi.",
  },
  {
    name: "Eylül Y.",
    meta: "İstanbul",
    text: "Kutum hasarlı ulaştı, Aslı Hanım sağ olsun hemen ilgilendi.",
  },
  {
    name: "Aleyna K.",
    meta: "İstanbul",
    text: "Kargocu kapıma bırakıp gitmiş. Ya başkası alsaydı ve ben tedavime başlayamasaydım? 1 gün bile kıymetli, kargoyu uyarın.",
  },
  {
    name: "İlayda D.",
    meta: "İstanbul",
    text: "Keşke 2. alımda indiriminiz olsa.",
  },
  {
    name: "Nazlı Ş.",
    meta: "İstanbul",
    text: "Erkekler de kullanabilir mi? Eşime de içirsem olur mu?",
  },
  {
    name: "Sıla A.",
    meta: "İstanbul",
    text: "Libido artışı sağladı, çok mutluyum.",
  },
  {
    name: "Yağmur Ç.",
    meta: "İstanbul",
    text: "Bu üründen mi bilmiyorum, ilişkilerim hep ağrılı oluyordu ama şu an çok daha rahat hissediyorum.",
  },
  {
    name: "Aslı Y.",
    meta: "Konya",
    text: "Günlük yaşamda vücudumun ihtiyaç duyduğu vitamin ve mineralleri bir arada sunması çok hoşuma gidiyor. Vitaminleri araştırırken bu ürün karşıma çıktı; doktora danışıp aldım. Konya'ya iki günde geldi.",
  },
  {
    name: "Kübra D.",
    meta: "İstanbul",
    text: "Paketleme güzel, ürünüm elime sağlam ulaştı.",
  },
  {
    name: "Özge A.",
    meta: "İstanbul",
    text: "Bugün teslim aldım, inşallah pazartesi günü başlayacağım. Yorumumu okuyanlar lütfen dua etsin, bu 3. tüp bebek denemem.",
  },
  {
    name: "Şeyma K.",
    meta: "İstanbul",
    text: "Normalde şeftali yemem, hatta tadını bile bilmem. Ürün şeftalili olunca biraz ürperdim ama tadına bakınca çok beğendim.",
  },
  {
    name: "Nilay Ş.",
    meta: "İstanbul",
    text: "Aşılama öncesi doktorum önerdi. İnşallah sonradan güzel haber yazarım.",
  },
  {
    name: "Berfin K.",
    meta: "İstanbul",
    text: "Doktorum önerdiği için başlamıştım. Şimdi ilk kontrolden çıktım ve doktorum daha çok yumurta gördüğünü söyledi. Çok mutluyum, devam edeceğim.",
  },
  {
    name: "Pınar Ö.",
    meta: "İzmir",
    text: "Doktorum iyi kalitedeki embriyo sayımın arttığını söyledi, çok mutluyum. Bir an önce sonuç almak istiyorum.",
  },
  {
    name: "Hilal Ç.",
    meta: "İzmir",
    text: "PCOS olduğumu duyunca ağlamıştım, tüp bebeksiz çocuğun olmaz demişlerdi. Ama Allah Doktor Murat Bey'den razı olsun. Ovupera sayesinde mutlu haberi aldım.",
  },
  {
    name: "Nisa A.",
    meta: "İzmir",
    text: "Kendimi daha dinç hissediyorum. Doktorum bu üründen olabilir, içeriği çok zengin dedi.",
  },
  {
    name: "Betül Y.",
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
