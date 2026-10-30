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
} as const;

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
      { href: "/yorumlar", label: "Kullanıcı Yorumları" },
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

export const disclaimer =
  "Takviye edici gıdadır, ilaç değildir; hastalıkların önlenmesi veya tedavi edilmesi amacıyla kullanılmaz. Takviye edici gıdalar normal beslenmenin yerine geçemez. Dengeli ve çeşitli beslenme ile sağlıklı yaşam tarzı önemlidir. Tavsiye edilen günlük porsiyonu aşmayınız. Hamilelik, emzirme döneminde ve sürekli ilaç kullananların doktora danışması önerilir.";
