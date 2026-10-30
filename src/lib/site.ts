export const site = {
  name: "Ovupera",
  url: "https://www.ovupera.com",
  tagline: "Annelik Yolculuğunda Bilimin ve Zamanın Yanınızdaki Gücü",
  description:
    "Miyo-inositol, L-Karnitin, Koenzim Q10, Resveratrol ve multivitamin/mineral kompleksi içeren, 22 bileşenli takviye edici gıda.",
  // TODO: gerçek iletişim bilgileriyle değiştirin
  contact: {
    email: "info@ovupera.com",
    phone: "",
    address: "",
  },
  social: {
    instagram: "https://www.instagram.com/ovupera",
  },
} as const;

export const navigation = [
  { href: "/urun", label: "Ürün" },
  { href: "/bilesenler", label: "Bileşenler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/yorumlar", label: "Yorumlar" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const disclaimer =
  "Takviye edici gıdadır, ilaç değildir; hastalıkların önlenmesi veya tedavi edilmesi amacıyla kullanılmaz. Takviye edici gıdalar normal beslenmenin yerine geçemez. Dengeli ve çeşitli beslenme ile sağlıklı yaşam tarzı önemlidir. Tavsiye edilen günlük porsiyonu aşmayınız. Hamilelik, emzirme döneminde ve sürekli ilaç kullananların doktora danışması önerilir.";
