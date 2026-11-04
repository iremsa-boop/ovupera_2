export type IngredientGroup = "ozel" | "vitamin" | "mineral";

export type Ingredient = {
  name: string;
  group: IngredientGroup;
  /** Saşe başına miktar; bilinmeyenlerde boş bırakılır */
  amount?: string;
  detail?: string;
  brd?: string;
  claims?: string[];
  source?: string;
};

export const groupLabels: Record<IngredientGroup, string> = {
  ozel: "Özel Bileşenler",
  vitamin: "Vitaminler",
  mineral: "Mineraller",
};

export const ingredients: Ingredient[] = [
  {
    name: "Miyo-inositol",
    group: "ozel",
    amount: "2000 mg",
    detail: "Formülün merkezinde",
    source:
      "İnositolün doğada en yaygın bulunan formudur; turunçgiller, tahıllar, baklagiller ve kuruyemişler gibi besinlerde doğal olarak yer alır.",
  },
  { name: "L-Karnitin", group: "ozel", amount: "1000 mg" },
  { name: "L-Arjinin", group: "ozel", amount: "500 mg" },
  { name: "Koenzim Q10", group: "ozel", amount: "200 mg" },
  { name: "Resveratrol", group: "ozel", amount: "100 mg" },
  { name: "Alfa Lipoik Asit", group: "ozel", amount: "100 mg" },
  {
    name: "Astaksantin",
    group: "ozel",
    amount: "2 mg",
    source: "Haematococcus pluvialis alginden elde edilir.",
  },
  { name: "Betain", group: "ozel" },
  { name: "PABA", group: "ozel" },
  { name: "Beta Karoten", group: "ozel" },
  {
    name: "C Vitamini",
    group: "vitamin",
    amount: "200 mg",
    detail: "L-Askorbik asit",
    brd: "%250",
    claims: [
      "Bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.",
      "Demir emilimini artırır.",
      "Yorgunluk ve bitkinliğin azalmasına katkıda bulunur.",
    ],
    source: "Turunçgiller, kivi, çilek, biber ve brokoli gibi besinlerde doğal olarak bulunur.",
  },
  {
    name: "E Vitamini",
    group: "vitamin",
    amount: "100 mg α-TE",
    detail: "Tokoferol",
    claims: ["Hücrelerin oksidatif strese karşı korunmasına katkıda bulunur."],
    source: "Bitkisel yağlar, fındık, badem ve tohumlar E vitamininin doğal kaynaklarındandır.",
  },
  { name: "B1 Vitamini", group: "vitamin" },
  { name: "B2 Vitamini", group: "vitamin" },
  { name: "B3 Vitamini", group: "vitamin" },
  { name: "B5 Vitamini", group: "vitamin" },
  {
    name: "B6 Vitamini",
    group: "vitamin",
    amount: "3 mg",
    detail: "Piridoksin",
    brd: "%214",
    claims: [
      "Hormonal aktivitenin düzenlenmesine katkıda bulunur.",
      "Bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.",
      "Yorgunluk ve bitkinliğin azalmasına katkıda bulunur.",
    ],
    source: "Tam tahıllar, baklagiller, muz, patates, balık ve tavuk gibi besinlerde doğal olarak bulunur.",
  },
  {
    name: "Folat",
    group: "vitamin",
    amount: "400 µg",
    detail: "Aktif folat · Quatrefolic®",
    brd: "%200",
    claims: [
      "Gebelik süresince anne dokularının büyümesine katkıda bulunur.",
      "Hücre bölünmesi sürecinde görev alır.",
    ],
  },
  {
    name: "B12 Vitamini",
    group: "vitamin",
    amount: "10 µg",
    detail: "Aktif B12 · Metilkobalamin (MecobalActive®)",
    claims: [
      "Hücre bölünmesi sürecinde görev alır.",
      "Yorgunluk ve bitkinliğin azalmasına katkıda bulunur.",
    ],
  },
  {
    name: "D3 Vitamini",
    group: "vitamin",
    amount: "25 µg",
    detail: "Kolekalsiferol",
    claims: [
      "Bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.",
      "Hücre bölünmesi sürecinde görev alır.",
    ],
  },
  {
    name: "Çinko",
    group: "mineral",
    amount: "15 mg",
    claims: ["Normal doğurganlık ve üremeye katkıda bulunur."],
  },
  {
    name: "Selenyum",
    group: "mineral",
    amount: "100 µg",
    claims: ["Hücrelerin oksidatif strese karşı korunmasına katkıda bulunur."],
  },
];

export const ingredientsByGroup = (group: IngredientGroup) =>
  ingredients.filter((i) => i.group === group);

export const featuredIngredients = ingredients.filter((i) =>
  ["Miyo-inositol", "Koenzim Q10", "L-Karnitin"].includes(i.name),
);

export const usageSteps = [
  { step: "01", title: "Saşeyi açın", text: "Tek kullanımlık 6,5 g saşe." },
  { step: "02", title: "200 ml suyla karıştırın", text: "Şeftali aromalı, ferahlatıcı bir içecek." },
  { step: "03", title: "Günde 1 saşe tüketin", text: "Size ait küçük bir mola." },
] as const;

export type BenefitIcon = "cell" | "shield" | "cycle";

export const benefitHighlights: { title: string; text: string; nutrients: string; icon: BenefitIcon }[] = [
  {
    title: "Hücre bölünmesi",
    text: "Hücre bölünmesi sürecinde görev alır.",
    nutrients: "Folat · B12 vitamini · D vitamini · Çinko",
    icon: "cell",
  },
  {
    title: "Bağışıklık",
    text: "Bağışıklık sisteminin normal fonksiyonuna katkıda bulunur.",
    nutrients: "C · D3 · B6 · B12 vitamini · Folat · Çinko · Selenyum",
    icon: "shield",
  },
  {
    title: "Homosistein metabolizması",
    text: "Normal homosistein metabolizmasına katkıda bulunur.",
    nutrients: "Folat · B6 vitamini · B12 vitamini",
    icon: "cycle",
  },
];

export const productionImages = [
  { src: "/images/uretim-saset-dolum-v2.jpg", alt: "Saşe dolum hattı" },
  { src: "/images/uretim-monodoz-v2.jpg", alt: "Monodoz paketleme hattı" },
  { src: "/images/uretim-shrink-v2.jpg", alt: "Otomatik shrink paketleme" },
  { src: "/images/uretim-kaplama-v2.jpg", alt: "Tablet kaplama ünitesi" },
] as const;

export const productFaq = [
  {
    q: "Ovupera nasıl kullanılır?",
    a: "Günde 1 saşe, 200 ml suda karıştırılarak tüketilir. Tavsiye edilen günlük porsiyonu aşmayınız.",
  },
  {
    q: "Bir kutu kaç gün yeter?",
    a: "Her kutuda 30 saşe bulunur; günde bir saşe ile bir kutu 30 günlük kullanım içindir.",
  },
  {
    q: "Tadı nasıl?",
    a: "Ovupera şeftali aromalıdır. Suyla karıştırıldığında hafif, meyveli bir içecek elde edilir.",
  },
  {
    q: "Hamilelik ya da emzirme döneminde kullanılabilir mi?",
    a: "Hamilelik, emzirme döneminde ve sürekli ilaç kullanıyorsanız kullanmadan önce doktorunuza danışmanız önerilir.",
  },
  {
    q: "Ovupera bir ilaç mı?",
    a: "Hayır. Ovupera takviye edici gıdadır; hastalıkların önlenmesi veya tedavi edilmesi amacıyla kullanılmaz ve normal beslenmenin yerine geçmez.",
  },
] as const;
