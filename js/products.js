/**
 * HÖRBI product catalog
 * Put photos in media/products/<id>/01.jpg, 02.jpg, ...
 * First image is the card cover.
 */
window.HORBI_PRODUCTS = [
  {
    id: "chlorophyll-a",
    status: "live",
    sku: "CHL-500-A",
    images: ["media/products/chlorophyll-a/01.jpg"],
    wb: "https://www.wildberries.ru/catalog/1095385962/detail.aspx",
    i18n: {
      en: {
        name: "HÖRBI Chlorophyll Liquid 500 ml",
        short: "Daily liquid chlorophyll",
        description:
          "Liquid food chlorophyll in a convenient 500 ml format. Supports everyday detox feel, freshness and gentle energy. Natural-oriented formula for a simple daily ritual.",
      },
      de: {
        name: "HÖRBI Flüssigchlorophyll 500 ml",
        short: "Tägliches Flüssigchlorophyll",
        description:
          "Flüssiges Nahrungs-Chlorophyll im praktischen 500-ml-Format. Für ein frisches Alltagsgefühl und sanfte Energie. Naturnahe Formel für ein einfaches tägliches Ritual.",
      },
      ru: {
        name: "HÖRBI Хлорофилл жидкий 500 мл",
        short: "Жидкий хлорофилл на каждый день",
        description:
          "Жидкий пищевой хлорофилл в удобном формате 500 мл. Для ощущения очищения, свежести и мягкой энергии. Натуральный подход к простому ежедневному ритуалу.",
      },
      it: {
        name: "HÖRBI Clorofilla liquida 500 ml",
        short: "Clorofilla liquida quotidiana",
        description:
          "Clorofilla alimentare liquida nel comodo formato da 500 ml. Per una sensazione di freschezza e energia leggera ogni giorno. Formula orientata al naturale per un rituale semplice.",
      },
    },
  },
  {
    id: "chlorophyll-b",
    status: "live",
    sku: "CHL-500-B",
    images: ["media/products/chlorophyll-b/01.jpg"],
    wb: "https://www.wildberries.ru/catalog/1095345290/detail.aspx",
    i18n: {
      en: {
        name: "HÖRBI Chlorophyll — Clean & Energy",
        short: "Cleansing support + vitality",
        description:
          "Liquid chlorophyll focused on inner balance and everyday vitality. A clean-label style supplement for people who want a simple green shot in their routine.",
      },
      de: {
        name: "HÖRBI Chlorophyll — Rein & Energie",
        short: "Reinigung + Vitalität",
        description:
          "Flüssigchlorophyll für inneres Gleichgewicht und Alltagsvitalität. Ein klar formuliertes Supplement für alle, die ein einfaches grünes Ritual wollen.",
      },
      ru: {
        name: "HÖRBI Хлорофилл — очищение и энергия",
        short: "Очищение + тонус",
        description:
          "Жидкий хлорофилл с акцентом на очищение и ежедневный тонус. Для тех, кто хочет простой «зелёный» ритуал без лишней сложности.",
      },
      it: {
        name: "HÖRBI Clorofilla — Pulizia & Energia",
        short: "Supporto detox + vitalità",
        description:
          "Clorofilla liquida pensata per equilibrio interno e vitalità quotidiana. Un integratore semplice da inserire nella routine.",
      },
    },
  },
  {
    id: "chlorophyll-c",
    status: "live",
    sku: "CHL-500-C",
    images: ["media/products/chlorophyll-c/01.jpg"],
    wb: "https://www.wildberries.ru/catalog/1095385962/detail.aspx",
    i18n: {
      en: {
        name: "HÖRBI Chlorophyll — Inner Cleanse",
        short: "From the inside out",
        description:
          "Liquid chlorophyll for a light, clean daily habit. Built for consistency: pour, drink, go — with a focus on feeling fresh from within.",
      },
      de: {
        name: "HÖRBI Chlorophyll — Innere Reinigung",
        short: "Von innen heraus",
        description:
          "Flüssigchlorophyll für eine leichte, saubere Alltagsgewohnheit. Für Kontinuität gemacht: eingießen, trinken, weiter — mit Fokus auf Frische von innen.",
      },
      ru: {
        name: "HÖRBI Хлорофилл — очищение изнутри",
        short: "Изнутри наружу",
        description:
          "Жидкий хлорофилл для лёгкой ежедневной привычки. Простой сценарий: налил — выпил — пошёл. Акцент на ощущении свежести изнутри.",
      },
      it: {
        name: "HÖRBI Clorofilla — Detox interiore",
        short: "Dal di dentro",
        description:
          "Clorofilla liquida per un’abitudine quotidiana leggera e pulita. Pensata per la costanza: versa, bevi, parti — con focus sulla freschezza interiore.",
      },
    },
  },
  // Coming soon slots
  ...["soon-1", "soon-2", "soon-3", "soon-4", "soon-5"].map((id, i) => ({
    id,
    status: "soon",
    sku: "",
    images: [],
    wb: "",
    i18n: {
      en: {
        name: `New formula ${i + 1}`,
        short: "In development",
        description: "A new HÖRBI supplement is coming. Details and photos will appear here soon.",
      },
      de: {
        name: `Neue Formel ${i + 1}`,
        short: "In Entwicklung",
        description: "Ein neues HÖRBI-Supplement kommt bald. Details und Fotos folgen hier.",
      },
      ru: {
        name: `Новая формула ${i + 1}`,
        short: "В разработке",
        description: "Новый БАД HÖRBI скоро появится. Описание и фото будут на этой карточке.",
      },
      it: {
        name: `Nuova formula ${i + 1}`,
        short: "In sviluppo",
        description: "Un nuovo integratore HÖRBI sta arrivando. Dettagli e foto a breve.",
      },
    },
  })),
];
