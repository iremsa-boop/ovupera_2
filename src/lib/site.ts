export const site = {
  name: "Ovupera",
  url: "https://www.ovupera.com",
  tagline: "Annelik Yolculuğunda Bilimin ve Zamanın Yanınızdaki Gücü",
  description:
    "Miyo-inositol, L-Karnitin, Koenzim Q10, Resveratrol ve multivitamin/mineral kompleksi içeren, 22 bileşenli takviye edici gıda.",
  // TODO: gerçek iletişim bilgileriyle değiştirin
  contact: {
    email: "info@ovupera.com",
    phone: "" as string,
    address: "" as string,
  },
  // Boş bırakılan hesaplar footer'da gösterilmez
  social: {
    instagram: "https://www.instagram.com/ovupera",
    facebook: "" as string,
    youtube: "" as string,
    linkedin: "" as string,
  },
  // TODO: Üretici ve kayıt bilgileri. Boş alanlar sitede gösterilmez.
  company: {
    manufacturer: "" as string,
    manufacturerAddress: "" as string,
    /** Tarım ve Orman Bakanlığı onay / kayıt numarası */
    registrationNo: "" as string,
  },
  // "Nereden alınır?" butonu. Satış bağlantısı (e-ticaret, eczane listesi) gelince href'i değiştirin.
  purchase: {
    label: "Nereden alınır?",
    href: "/iletisim#nereden-alinir" as string,
  },
  forms: {
    /** Formspree / Getform gibi bir servisin adresi. Boşken form e-posta uygulamasını açar. */
    contactEndpoint: "" as string,
  },
} as const;

/** Footer ve ürün sayfasında gösterilen, doldurulmuş şirket bilgileri */
export const companyFacts = [
  { label: "Üretici", value: site.company.manufacturer },
  { label: "Üretici adresi", value: site.company.manufacturerAddress },
  { label: "Kayıt / onay no", value: site.company.registrationNo },
].filter((f) => f.value);

export const productDisclaimer =
  "Takviye edici gıdadır, ilaç değildir; hastalıkların önlenmesi veya tedavi edilmesi amacıyla kullanılmaz. Takviye edici gıdalar normal beslenmenin yerine geçemez. Dengeli ve çeşitli beslenme ile sağlıklı yaşam tarzı önemlidir. Tavsiye edilen günlük porsiyonu aşmayınız. Hamilelik, emzirme döneminde ve sürekli ilaç kullananların doktora danışması önerilir.";

export const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
  { label: "YouTube", href: site.social.youtube },
  { label: "LinkedIn", href: site.social.linkedin },
].filter((s) => s.href);

export const footerColumns = [
  {
    title: "Hızlı Bağlantılar",
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/blog", label: "Blog" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Ovupera",
    links: [
      { href: "/urun", label: "Ürün" },
      { href: "/bilesenler", label: "Bileşenler" },
      { href: "/urun#kullanim", label: "Kullanım" },
    ],
  },
] as const;

export const navigation = [
  { href: "/urun", label: "Ürün" },
  { href: "/bilesenler", label: "Bileşenler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;
