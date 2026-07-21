/**
 * HÖRBI Journal — categories & articles (multi-language)
 * Content is informational; claims follow cited sources only.
 */
window.HORBI_ARTICLES = {
  categories: [
    {
      id: "chlorophyll",
      order: 1,
      cover: "media/articles/chlorophyll-hero.jpg",
      i18n: {
        en: {
          name: "Chlorophyll",
          blurb: "What liquid chlorophyll is, how it is discussed in research, and where to read the primary sources.",
        },
        ru: {
          name: "Хлорофилл",
          blurb: "Что такое жидкий хлорофилл, как его обсуждают в исследованиях и где читать первоисточники.",
        },
        de: {
          name: "Chlorophyll",
          blurb: "Was flüssiges Chlorophyll ist, wie es in der Forschung diskutiert wird und wo die Quellen liegen.",
        },
        it: {
          name: "Clorofilla",
          blurb: "Cos’è la clorofilla liquida, come viene discussa nella ricerca e dove trovare le fonti.",
        },
      },
    },
  ],
  articles: [
    {
      id: "chlorophyll-guide",
      categoryId: "chlorophyll",
      cover: "media/articles/chlorophyll-glass.jpg",
      images: {
        hero: "media/articles/chlorophyll-hero.jpg",
        glass: "media/articles/chlorophyll-glass.jpg",
        leaves: "media/articles/chlorophyll-leaves.jpg",
      },
      published: "2026-07-20",
      sources: [
        {
          id: "pmc64728",
          label: "PMC / NCBI",
          title: "Chlorophyllin research (PMC64728)",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC64728/",
          note: {
            en: "Peer-reviewed literature on chlorophyllin (open access via PMC).",
            ru: "Рецензируемая литература по хлорофиллину (открытый доступ PMC).",
            de: "Begutachtete Literatur zu Chlorophyllin (PMC Open Access).",
            it: "Letteratura peer-reviewed sulla chlorophyllina (PMC).",
          },
        },
        {
          id: "efsa2015",
          label: "EFSA",
          title: "EFSA Scientific Opinion on E140 / E141 (2015)",
          url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4089",
          note: {
            en: "EU safety assessment of chlorophylls and copper chlorophyllins as food colours.",
            ru: "Оценка безопасности хлорофиллов и медных хлорофиллинов как пищевых красителей в ЕС.",
            de: "EU-Sicherheitsbewertung von Chlorophyllen und Kupferchlorophyllinen als Lebensmittelfarbstoffe.",
            it: "Valutazione di sicurezza UE di clorofille e clorofilline di rame come coloranti.",
          },
        },
        {
          id: "mdpi2025",
          label: "MDPI Nutrients",
          title: "Therapeutic overview of chlorophyll (Nutrients, 2025)",
          url: "https://www.mdpi.com/2072-6643/17/16/2653",
          note: {
            en: "Narrative review of chlorophyll-related research and proposed mechanisms.",
            ru: "Обзор исследований по хлорофиллу и обсуждаемых механизмах.",
            de: "Übersichtsarbeit zu Chlorophyll-Forschung und diskutierten Mechanismen.",
            it: "Review narrativa su ricerca e meccanismi proposti legati alla clorofilla.",
          },
        },
        {
          id: "eu-edu",
          label: "EU consumer education",
          title: "Holland & Barrett Health Hub / Darwin Nutrition (EU context)",
          url: "https://www.hollandandbarrett.com/the-health-hub/",
          note: {
            en: "European consumer-facing education on supplements (not primary research).",
            ru: "Европейские потребительские материалы о добавках (не первичные исследования).",
            de: "Europäische Verbraucherinformationen zu Supplements (keine Primärstudien).",
            it: "Materiali educativi europei per consumatori (non ricerca primaria).",
          },
        },
      ],
      i18n: {
        en: {
          title: "Liquid chlorophyll: a clear, source-based guide",
          kicker: "Journal · Chlorophyll",
          lead:
            "Chlorophyll is the green pigment of plants. In supplements it usually appears as water-soluble derivatives (often copper chlorophyllin). This guide summarises what reputable sources discuss — and what they do not claim.",
          readMin: "6 min read",
          sections: [
            {
              h: "What it is",
              html: `
                <p>In green plants, chlorophyll captures light for photosynthesis. Its structure is related to heme (the iron-containing group in blood), which is why it is often described as a “green” molecular cousin — a useful metaphor, not a medical claim.</p>
                <p>In food and supplements, manufacturers more often use <strong>sodium copper chlorophyllin</strong> or related complexes: they are more stable and water-soluble than native chlorophyll extracted from leaves.</p>
              `,
            },
            {
              h: "Why people are interested",
              html: `
                <p>Interest usually clusters around three themes discussed in literature and education materials:</p>
                <ul>
                  <li><strong>Everyday “green” ritual</strong> — liquid formats are easy to dilute in water or juice.</li>
                  <li><strong>Research on chlorophyllin</strong> — peer-reviewed papers (including work available via PMC) study chlorophyllin in laboratory and human contexts; popular summaries sometimes highlight sizable biomarker changes in specific study designs. Always read the original paper for methods and limits.</li>
                  <li><strong>Food-additive safety framing in the EU</strong> — chlorophylls (E140) and copper complexes of chlorophylls/chlorophyllins (E141) have been assessed by EFSA as food colours under defined use conditions.</li>
                </ul>
                <p class="article-note">HÖRBI products are food supplements, not medicines. Nothing on this page is intended to diagnose, treat, cure or prevent disease.</p>
              `,
            },
            {
              h: "What European regulators say about safety (E140 / E141)",
              html: `
                <p>The European Food Safety Authority (EFSA) published a scientific opinion on chlorophylls and copper chlorophyllins used as <em>food colours</em> (E140i, E140ii, E141i, E141ii). The opinion evaluates identity, specifications, exposure and toxicology for authorised colour uses in the EU food system.</p>
                <p>Key takeaway for readers: these substances have a formal EU risk-assessment trail as colours. That is <strong>not</strong> the same as an authorised health claim for “detox”, immunity or energy. Marketing language and scientific safety assessment must stay separate.</p>
                <p>Source: <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4089" target="_blank" rel="noopener">EFSA Journal 2015;13(5):4089</a>.</p>
              `,
            },
            {
              h: "What research reviews discuss",
              html: `
                <p>A 2025 open-access review in <em>Nutrients</em> (MDPI) surveys chlorophyll and chlorophyllin across experimental and applied literature — antioxidant chemistry, interactions with certain toxins in model systems, and other proposed pathways. Reviews map the research landscape; they do not replace clinical guidelines or product labels.</p>
                <p>Source: <a href="https://www.mdpi.com/2072-6643/17/16/2653" target="_blank" rel="noopener">Nutrients 2025, 17(16), 2653</a>.</p>
                <p>For a primary literature entry point via PubMed Central, see also <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC64728/" target="_blank" rel="noopener">PMC64728</a>. When secondary articles mention approximate percentage changes (e.g. around half in a biomarker), treat that as a study-specific result, not a universal effect.</p>
              `,
            },
            {
              h: "European consumer education",
              html: `
                <p>Alongside primary science, European retailers and nutrition educators publish plain-language explainers on green pigments and supplements — for example materials from Holland &amp; Barrett’s Health Hub and independent French nutrition education sites such as Darwin Nutrition. These help orientation for shoppers; they are not peer-reviewed trials.</p>
                <ul>
                  <li><a href="https://www.hollandandbarrett.com/the-health-hub/" target="_blank" rel="noopener">Holland &amp; Barrett — The Health Hub</a></li>
                  <li><a href="https://darwin-nutrition.fr/" target="_blank" rel="noopener">Darwin Nutrition</a> (FR)</li>
                </ul>
              `,
            },
            {
              h: "How this connects to HÖRBI",
              html: `
                <p>HÖRBI liquid chlorophyll concentrates are designed as a practical daily format in three flavours — wild mint, blackcurrant and passion fruit — with transparent labelling. For composition, serving size and precautions, always follow the product label and the information on the retail listing (e.g. Wildberries).</p>
                <p><a class="btn btn-dark" href="index.html#products">View HÖRBI products</a></p>
              `,
            },
          ],
          callouts: [
            { title: "Plant pigment", text: "Native chlorophyll powers photosynthesis in green plants." },
            { title: "Supplement form", text: "Products often use water-soluble chlorophyllin complexes for stability." },
            { title: "EU colours", text: "E140 / E141 assessed by EFSA as food colours (not health claims)." },
            { title: "Read sources", text: "PMC, EFSA and MDPI review link primary literature." },
          ],
        },
        ru: {
          title: "Жидкий хлорофилл: понятный гид по источникам",
          kicker: "Журнал · Хлорофилл",
          lead:
            "Хлорофилл — зелёный пигмент растений. В добавках чаще используют водорастворимые производные (хлорофиллин). Ниже — что обсуждают авторитетные источники и чего они не обещают.",
          readMin: "6 мин",
          sections: [
            {
              h: "Что это такое",
              html: `
                <p>В зелёных растениях хлорофилл участвует в фотосинтезе. По строению молекула родственна гему (железосодержащей группе в крови) — удобная метафора «зелёного родственника», но не медицинское утверждение.</p>
                <p>В пище и БАД чаще применяют <strong>медный комплекс хлорофиллина натрия</strong> и родственные формы: они стабильнее и лучше растворяются в воде, чем «сырой» листовой хлорофилл.</p>
              `,
            },
            {
              h: "Почему тема популярна",
              html: `
                <p>Интерес обычно строится вокруг трёх линий:</p>
                <ul>
                  <li><strong>Ежедневный «зелёный» ритуал</strong> — жидкую форму удобно разводить в воде или соке.</li>
                  <li><strong>Исследования хлорофиллина</strong> — в рецензируемой литературе (в т.ч. через PMC) изучают хлорофиллин в лабораторных и клинических контекстах. В популярных пересказах иногда приводят заметные изменения отдельных биомаркеров в конкретных дизайнах (в т.ч. порядка ~50% в отдельных работах). Важно смотреть оригинал: метод, выборку и ограничения.</li>
                  <li><strong>Безопасность как пищевого красителя в ЕС</strong> — EFSA оценивала хлорофиллы (E140) и медные комплексы хлорофиллов/хлорофиллинов (E141) как пищевые красители при регламентированном применении.</li>
                </ul>
                <p class="article-note">Продукты HÖRBI — БАДы, не лекарства. Материал не для диагностики, лечения или профилактики заболеваний.</p>
              `,
            },
            {
              h: "Что говорит EFSA (E140 / E141)",
              html: `
                <p>Европейское агентство по безопасности продуктов питания (EFSA) опубликовало научное заключение по хлорофиллам и медным хлорофиллинам как <em>пищевым красителям</em>. Это формальная оценка идентичности, спецификаций, экспозиции и токсикологии для разрешённых цветовых применений в ЕС.</p>
                <p>Важно: оценка безопасности красителя — это <strong>не</strong> разрешённый health claim про «детокс», иммунитет или энергию. Научный статус и маркетинговые формулировки нужно разделять.</p>
                <p>Источник: <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4089" target="_blank" rel="noopener">EFSA Journal 2015;13(5):4089</a>.</p>
              `,
            },
            {
              h: "Что обсуждают обзоры",
              html: `
                <p>Обзор 2025 года в журнале <em>Nutrients</em> (MDPI) суммирует исследования хлорофилла и хлорофиллина: химию, модельные системы, обсуждаемые механизмы. Обзор — карта литературы, а не клиническая рекомендация и не замена этикетки.</p>
                <p>Источник: <a href="https://www.mdpi.com/2072-6643/17/16/2653" target="_blank" rel="noopener">Nutrients 2025, 17(16), 2653</a>.</p>
                <p>Точка входа в первичную литературу через PMC: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC64728/" target="_blank" rel="noopener">PMC64728</a>. Проценты из вторичных пересказов относятся к конкретной работе, а не к «универсальному эффекту».</p>
              `,
            },
            {
              h: "Европейские образовательные материалы",
              html: `
                <p>Помимо науки, европейские ритейлеры и образовательные проекты публикуют понятные тексты о зелёных пигментах и добавках — например Health Hub Holland &amp; Barrett и франкоязычный Darwin Nutrition. Это ориентиры для читателя, а не peer-reviewed исследования.</p>
                <ul>
                  <li><a href="https://www.hollandandbarrett.com/the-health-hub/" target="_blank" rel="noopener">Holland &amp; Barrett — The Health Hub</a></li>
                  <li><a href="https://darwin-nutrition.fr/" target="_blank" rel="noopener">Darwin Nutrition</a></li>
                </ul>
              `,
            },
            {
              h: "Как это связано с HÖRBI",
              html: `
                <p>Жидкие хлорофилл-концентраты HÖRBI — практичный формат в трёх вкусах: дикая мята, смородина, маракуйя. Состав, порция и противопоказания — только по этикетке и карточке товара (например, на Wildberries).</p>
                <p><a class="btn btn-dark" href="index.html#products">К продуктам HÖRBI</a></p>
              `,
            },
          ],
          callouts: [
            { title: "Пигмент растений", text: "Хлорофилл — основа зелёного цвета и фотосинтеза." },
            { title: "Форма в БАД", text: "Чаще хлорофиллин — стабильнее и растворим в воде." },
            { title: "ЕС: E140 / E141", text: "EFSA оценивала красители, не health claims." },
            { title: "Источники", text: "PMC, EFSA, обзор MDPI Nutrients." },
          ],
        },
        de: {
          title: "Flüssiges Chlorophyll: klarer Leitfaden mit Quellen",
          kicker: "Journal · Chlorophyll",
          lead:
            "Chlorophyll ist der grüne Pflanzenfarbstoff. In Supplements oft als wasserlösliche Derivate (Chlorophyllin). Hier: was seriöse Quellen sagen — und was sie nicht behaupten.",
          readMin: "6 Min.",
          sections: [
            {
              h: "Was es ist",
              html: `<p>In Pflanzen fängt Chlorophyll Licht für die Photosynthese ein. In Lebensmitteln und Supplements werden häufig stabile, wasserlösliche <strong>Kupfer-Chlorophyllin</strong>-Komplexe verwendet.</p>`,
            },
            {
              h: "Forschung & EU-Sicherheit",
              html: `
                <p>Peer-reviewed Arbeiten (u. a. über PMC) untersuchen Chlorophyllin in definierten Studienkontexten. EFSA hat Chlorophylle (E140) und Kupferkomplexe (E141) als <em>Lebensmittelfarbstoffe</em> bewertet — das ist keine Health-Claim-Zulassung für Detox oder Immunität.</p>
                <p>Quellen: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC64728/" target="_blank" rel="noopener">PMC64728</a>,
                <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4089" target="_blank" rel="noopener">EFSA 2015</a>,
                <a href="https://www.mdpi.com/2072-6643/17/16/2653" target="_blank" rel="noopener">Nutrients 2025</a>.</p>
                <p class="article-note">Nahrungsergänzung, kein Arzneimittel.</p>
              `,
            },
            {
              h: "HÖRBI",
              html: `<p>HÖRBI bietet flüssige Chlorophyll-Konzentrate in drei Geschmacksrichtungen. Maßgeblich sind Etikett und Produktdaten.</p>
                <p><a class="btn btn-dark" href="index.html#products">Zu den Produkten</a></p>`,
            },
          ],
          callouts: [
            { title: "Pflanzenpigment", text: "Chlorophyll macht Pflanzen grün." },
            { title: "Supplement-Form", text: "Oft Chlorophyllin für Stabilität." },
            { title: "EFSA E140/E141", text: "Farbstoffe, keine Health Claims." },
            { title: "Quellen", text: "PMC, EFSA, MDPI-Review." },
          ],
        },
        it: {
          title: "Clorofilla liquida: guida chiara con fonti",
          kicker: "Journal · Clorofilla",
          lead:
            "La clorofilla è il pigmento verde delle piante. Negli integratori spesso compare come derivati idrosolubili (clorofillina). Ecco cosa dicono le fonti — e cosa non promettono.",
          readMin: "6 min",
          sections: [
            {
              h: "Cos’è",
              html: `<p>Nelle piante la clorofilla cattura la luce per la fotosintesi. Negli integratori si usano spesso complessi di <strong>clorofillina di rame</strong>, più stabili e solubili in acqua.</p>`,
            },
            {
              h: "Ricerca e sicurezza UE",
              html: `
                <p>La letteratura peer-reviewed (anche via PMC) studia la clorofillina in contesti definiti. L’EFSA ha valutato clorofille (E140) e complessi di rame (E141) come <em>coloranti alimentari</em> — non come claim su detox o immunità.</p>
                <p>Fonti: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC64728/" target="_blank" rel="noopener">PMC64728</a>,
                <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4089" target="_blank" rel="noopener">EFSA 2015</a>,
                <a href="https://www.mdpi.com/2072-6643/17/16/2653" target="_blank" rel="noopener">Nutrients 2025</a>.</p>
                <p class="article-note">Integratore, non medicinale.</p>
              `,
            },
            {
              h: "HÖRBI",
              html: `<p>HÖRBI propone concentrati liquidi in tre gusti. Etchetta e scheda prodotto restano il riferimento.</p>
                <p><a class="btn btn-dark" href="index.html#products">Vedi i prodotti</a></p>`,
            },
          ],
          callouts: [
            { title: "Pigmento", text: "Verde delle piante e fotosintesi." },
            { title: "Forma integratore", text: "Spesso clorofillina idrosolubile." },
            { title: "EFSA E140/E141", text: "Coloranti, non health claim." },
            { title: "Fonti", text: "PMC, EFSA, review MDPI." },
          ],
        },
      },
    },
  ],
};
