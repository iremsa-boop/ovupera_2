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
  ["Miyo-inositol", "L-Karnitin", "L-Arjinin", "Koenzim Q10", "Resveratrol", "Alfa Lipoik Asit"].includes(i.name),
);

export const usageSteps = [
  { step: "01", title: "Saşeyi açın", text: "Tek kullanımlık 6,5 g saşe." },
  { step: "02", title: "200 ml suyla karıştırın", text: "Şeftali aromalı, ferahlatıcı bir içecek." },
  { step: "03", title: "Günde 1 saşe tüketin", text: "Size ait küçük bir mola." },
] as const;

export const benefitHighlights = [
  {
    title: "Hücre bölünmesi",
    text: "Folat, B12 vitamini, D vitamini ve çinko hücre bölünmesi sürecinde görev alır.",
    image: "/images/hucre-bolunmesi.jpg",
  },
  {
    title: "Bağışıklık",
    text: "Bağışıklık sisteminin normal fonksiyonuna katkıda bulunan 7 bileşen.",
    image: "/images/bagisiklik.jpg",
  },
  {
    title: "Homosistein metabolizması",
    text: "Folat, B6 ve B12 vitamini normal homosistein metabolizmasına katkıda bulunur.",
    image: "/images/homosistein.jpg",
  },
] as const;

export const productionImages = [
  { src: "/images/uretim-saset-dolum.jpg", alt: "Saşe dolum hattı" },
  { src: "/images/uretim-monodoz.jpg", alt: "Monodoz paketleme hattı" },
  { src: "/images/uretim-shrink.jpg", alt: "Otomatik shrink paketleme" },
  { src: "/images/uretim-kaplama.jpg", alt: "Tablet kaplama ünitesi" },
] as const;
