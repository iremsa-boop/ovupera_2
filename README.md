# Ovupera Web

Next.js 15 (App Router) + Tailwind CSS v4.

```
src/
  app/            Sayfalar (/, /urun, /bilesenler, /hakkimizda, /blog, /yorumlar, /iletisim)
  components/
    ui/           Temel parçalar: Button, Card, Container, Eyebrow, Ornament, Pill, SectionHeading
    layout/       Header, Footer, Logo
    sections/     Sayfa blokları: HomeHero, PageHero, SplitFeature, IngredientCard/Table, Testimonials ...
    blog/         PostCard, PostGrid
    forms/        ContactForm
  lib/            Veri ve yardımcılar (component içermez)
    site.ts       Site ayarları, menü, iletişim, yasal uyarı
    product.ts    22 bileşen, miktarlar, beyanlar, kullanım adımları
    blog.ts       content/blog/*.md okuma
    utils.ts      cn, formatDate, readingTime
content/blog/     Blog yazıları (Markdown + frontmatter)
public/images/    Görseller
```

## Yeni blog yazısı

`content/blog/` içine `yazi-adi.md` ekleyin:

```md
---
title: "Başlık"
excerpt: "Kısa özet"
date: "2026-11-01"
cover: "/images/kapak.jpg"
category: "Rehber"
---

Metin...
```

## Çalıştırma

```bash
npm install
npm run dev
```
