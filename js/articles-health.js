/**
 * HÖRBI Journal — health notes on the nutrients in the line.
 * Load after articles-capsules.js and before articles-app.js.
 * Benefit lines follow authorised wording in Regulation (EU) No 432/2012.
 * Doses follow the HÖRBI specification tables. Not a medicine, not a treatment.
 */
(function () {
  "use strict";

  var data = window.HORBI_ARTICLES;
  if (!data || !data.categories || !data.articles) return;

  var note = function (en, ru, de, it) {
    return { en: en, ru: ru, de: de, it: it };
  };

  var REG = {
    id: "eu-432-2012",
    label: "EU 432/2012",
    title: "Commission Regulation (EU) No 432/2012 — authorised health claims",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02012R0432-20210517",
    note: note(
      "The list of wording the EU allows for vitamins and minerals. A claim may be used only when the food is at least a source of that nutrient. It is not a permission to treat a disease.",
      "Список формулировок, которые ЕС разрешает для витаминов и минералов. Фразу можно использовать, только если продукт — источник этого нутриента. Это не разрешение лечить болезнь.",
      "Die Formulierungen, die die EU für Vitamine und Mineralstoffe erlaubt. Ein Claim gilt nur, wenn das Lebensmittel eine Quelle des Nährstoffs ist. Keine Erlaubnis, eine Krankheit zu behandeln.",
      "Le formule che l’UE consente per vitamine e minerali. Un claim vale solo se l’alimento è fonte di quel nutriente. Non è un permesso di curare una malattia."
    ),
  };

  data.categories.push({
    id: "health",
    order: 3,
    cover: "media/web/soon-magnesium-chelate/00.jpg",
    i18n: {
      ru: {
        name: "Здоровье",
        blurb: "Зачем эти добавки: роль магния, витаминов, цинка, меди и коллагена — теми словами, которые можно сказать, и с дозой с банки.",
      },
      en: {
        name: "Health",
        blurb: "What these supplements are for: the roles of magnesium, vitamins, zinc, copper and collagen, in wording that can be said, with the dose on the jar.",
      },
      de: {
        name: "Gesundheit",
        blurb: "Wozu diese Ergänzungen da sind: die Rollen von Magnesium, Vitaminen, Zink, Kupfer und Kollagen, mit der Dosis auf der Dose.",
      },
      it: {
        name: "Salute",
        blurb: "A cosa servono questi integratori: i ruoli di magnesio, vitamine, zinco, rame e collagene, con la dose sul barattolo.",
      },
    },
  });

  function fig(src, alt, cap) {
    return (
      '<figure class="article-figure"><img src="' +
      src +
      '" alt="' +
      alt +
      '" width="1045" height="1400" loading="lazy" /><figcaption>' +
      cap +
      "</figcaption></figure>"
    );
  }

  function dose(items) {
    return (
      '<div class="dose">' +
      items
        .map(function (x) {
          return '<div class="dose-item"><div class="k">' + x[0] + '</div><div class="v">' + x[1] + '</div><div class="s">' + x[2] + "</div></div>";
        })
        .join("") +
      "</div>"
    );
  }

  function links(pairs) {
    return (
      "<p>" +
      pairs
        .map(function (x) {
          return '<a href="' + x[0] + '">' + x[1] + "</a>";
        })
        .join(" · ") +
      "</p>"
    );
  }

  data.articles.push(
    {
      id: "health-magnesium",
      categoryId: "health",
      featured: true,
      cover: "media/web/soon-magnesium-chelate/00.jpg",
      images: { hero: "media/web/soon-magnesium-chelate/01.jpg" },
      published: "2026-10-07",
      sources: [REG],
      i18n: {
        ru: {
          title: "Зачем магний и витамин B6",
          kicker: "Журнал · Здоровье · Магний",
          lead: "Магний держат в рационе ради мышц, нервов, обычного энергетического обмена и меньшей усталости. Витамин B6 рядом поддерживает нервную систему, кроветворение и регуляцию гормональной активности. Ниже — разрешённые формулировки и доза с двух банок HÖRBI.",
          readMin: "6 мин",
          callouts: [
            { title: "Мышцы и нервы", text: "Магний способствует нормальной работе мышц и нервной системы." },
            { title: "Усталость", text: "И магний, и витамин B6 связаны с уменьшением усталости и утомляемости." },
            { title: "Кости", text: "Магний способствует поддержанию нормального состояния костей и зубов." },
            { title: "Две соли", text: "Хелат — 402 мг магния. У цитрата в названии 800 мг, в таблице — 480 мг магния." },
          ],
          sections: [
            {
              h: "Какая от них польза",
              html:
                "<p>В европейском реестре у магния есть прямые фразы. Он способствует уменьшению усталости и утомляемости, нормальному энергетическому обмену, электролитному балансу, нормальной работе мышц и нервной системы, нормальной психологической функции, синтезу белка, поддержанию нормального состояния костей и зубов и участвует в делении клеток.</p>" +
                "<p>У витамина B6 свои фразы. Он способствует уменьшению усталости, нормальной работе нервной системы и нормальной психологической функции, нормальному образованию эритроцитов, нормальной работе иммунной системы и регуляции гормональной активности. Ещё он участвует в обмене белка и гликогена и в обмене гомоцистеина.</p>" +
                "<p>Это описание роли нутриента у человека с обычной потребностью. Это не обещание, что банка лечит бессонницу, судороги или стресс. На этикетках HÖRBI написано короче: дополнительный источник магния и витамина B6.</p>" +
                fig(
                  "media/web/soon-magnesium-chelate/01.jpg",
                  "Банка HÖRBI Хелат магния + B6",
                  "Хелат магния + B6. Иконки на банке — оформление полки. Роль нутриента в этой статье взята из реестра claims, доза — из таблицы состава."
                ),
            },
            {
              h: "Сколько в банках HÖRBI",
              html:
                "<p>Две соли, одна и та же логика. Цифра магния — из таблицы состава, не из названия.</p>" +
                dose([
                  ["Хелат", "402 мг", "магний · 3 капсулы · 102%*"],
                  ["Цитрат", "480 мг", "магний · 4 капсулы · 120%*"],
                  ["Витамин B6", "6 мг", "в обеих банках · 300%*"],
                ]) +
                "<p>«800 мг» у цитрата стоит в названии продукта. В суточной дозе из четырёх капсул — 480 мг магния. Витамин B6 в обеих банках — пиридоксина гидрохлорид, 6 мг. Курс на этикетке — 1 месяц, взрослым, во время еды. Перед применением рекомендуется консультация врача.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство. Беременность и кормление грудью — в противопоказаниях.</p>',
            },
            {
              h: "Где читать дальше",
              html:
                "<p>Фразы выше разрешены Регламентом (EU) 432/2012, если продукт является источником нутриента. Проценты на банках HÖRBI это закрывают. Верхние уровни потребления — отдельная тема: у магния из добавок европейская планка ниже, чем 402 и 480 мг, а 6 мг B6 ниже планки 12 мг. Разбор этих цифр уже лежит в карточках журнала.</p>" +
                links([
                  ["article.html?id=capsule-magnesium-chelate", "хелат: 402 мг рядом с верхними уровнями"],
                  ["article.html?id=capsule-magnesium-citrate", "цитрат: 800 мг в названии и 480 мг в таблице"],
                  ["index.html#products", "продукты"],
                ]),
            },
          ],
        },
        en: {
          title: "What magnesium and vitamin B6 are for",
          kicker: "Journal · Health · Magnesium",
          lead: "Magnesium is kept in the diet for muscles, nerves, ordinary energy metabolism and less tiredness. Vitamin B6 beside it supports the nervous system, red blood cells and the regulation of hormonal activity. Below are the authorised lines and the dose on the two HÖRBI jars.",
          readMin: "6 min",
          callouts: [
            { title: "Muscles and nerves", text: "Magnesium contributes to normal muscle function and to the normal functioning of the nervous system." },
            { title: "Tiredness", text: "Both magnesium and vitamin B6 are tied to a reduction of tiredness and fatigue." },
            { title: "Bones", text: "Magnesium contributes to the maintenance of normal bones and teeth." },
            { title: "Two salts", text: "Chelate: 402 mg of magnesium. Citrate says 800 mg in the name and 480 mg of magnesium in the table." },
          ],
          sections: [
            {
              h: "The benefit, in allowed words",
              html:
                "<p>The EU register gives magnesium plain sentences. It contributes to a reduction of tiredness and fatigue, to normal energy-yielding metabolism, to electrolyte balance, to normal muscle function, to the normal functioning of the nervous system, to normal psychological function and to normal protein synthesis. It contributes to the maintenance of normal bones and teeth and has a role in cell division.</p>" +
                "<p>Vitamin B6 has its own sentences. It contributes to a reduction of tiredness and fatigue, to the normal functioning of the nervous system, to normal psychological function, to normal red blood cell formation, to the normal function of the immune system and to the regulation of hormonal activity. It also contributes to normal protein and glycogen metabolism and to normal homocysteine metabolism.</p>" +
                "<p>That describes the nutrient’s role for an ordinary requirement. It is not a promise that the jar treats insomnia, cramps or stress. The HÖRBI labels say it more shortly: an additional source of magnesium and vitamin B6.</p>" +
                fig(
                  "media/web/soon-magnesium-chelate/01.jpg",
                  "HÖRBI magnesium chelate bottle",
                  "Magnesium chelate + B6. Icons on the jar are shelf design. The role in this note comes from the claims register; the dose comes from the specification table."
                ),
            },
            {
              h: "How much is in the HÖRBI jars",
              html:
                "<p>Two salts, the same reading rule. The magnesium figure is the table, not the product name.</p>" +
                dose([
                  ["Chelate", "402 mg", "magnesium · 3 capsules · 102%*"],
                  ["Citrate", "480 mg", "magnesium · 4 capsules · 120%*"],
                  ["Vitamin B6", "6 mg", "in both jars · 300%*"],
                ]) +
                "<p>“800 mg” on the citrate jar is the product name. The daily serving of four capsules lists 480 mg of magnesium. Vitamin B6 in both jars is pyridoxine hydrochloride, 6 mg. The labelled course is 1 month, for adults, with food. A doctor’s advice is recommended before use.</p>" +
                '<p class="article-note">A food supplement, not a medicine. Pregnancy and breastfeeding are contraindications.</p>',
            },
            {
              h: "Where to read on",
              html:
                "<p>The sentences above are authorised by Regulation (EU) No 432/2012 when the food is a source of the nutrient. The percentages on the HÖRBI jars meet that. Upper levels are a separate note: the European figure for magnesium from supplements sits under 402 and 480 mg, while 6 mg of vitamin B6 sits under the 12 mg figure. Those comparisons are already in the jar notes.</p>" +
                links([
                  ["article.html?id=capsule-magnesium-chelate", "chelate: 402 mg next to the upper levels"],
                  ["article.html?id=capsule-magnesium-citrate", "citrate: 800 mg in the name, 480 mg in the table"],
                  ["index.html#products", "products"],
                ]),
            },
          ],
        },
        de: {
          title: "Wozu Magnesium und Vitamin B6 da sind",
          kicker: "Journal · Gesundheit · Magnesium",
          lead: "Magnesium steht für Muskeln, Nerven, den gewöhnlichen Energiestoffwechsel und weniger Müdigkeit. Vitamin B6 daneben stützt das Nervensystem, die Blutbildung und die Regulierung der Hormontätigkeit. Unten die erlaubten Sätze und die Dosis der beiden HÖRBI-Dosen.",
          readMin: "6 Min.",
          callouts: [
            { title: "Muskeln und Nerven", text: "Magnesium trägt zu einer normalen Muskelfunktion und zu einer normalen Funktion des Nervensystems bei." },
            { title: "Müdigkeit", text: "Magnesium und Vitamin B6 sind mit der Verringerung von Müdigkeit verbunden." },
            { title: "Knochen", text: "Magnesium trägt zur Erhaltung normaler Knochen und Zähne bei." },
            { title: "Zwei Salze", text: "Chelat: 402 mg Magnesium. Citrat trägt 800 mg im Namen und 480 mg Magnesium in der Tabelle." },
          ],
          sections: [
            {
              h: "Der Nutzen in erlaubten Worten",
              html:
                "<p>Im EU-Register hat Magnesium klare Sätze. Es trägt bei zur Verringerung von Müdigkeit, zu einem normalen Energiestoffwechsel, zu einem normalen Elektrolytgleichgewicht, zu einer normalen Muskelfunktion, zu einer normalen Funktion des Nervensystems, zu einer normalen psychischen Funktion und zu einer normalen Eiweißsynthese. Es trägt zur Erhaltung normaler Knochen und Zähne bei und hat eine Funktion bei der Zellteilung.</p>" +
                "<p>Vitamin B6 hat eigene Sätze. Es trägt bei zur Verringerung von Müdigkeit, zu einer normalen Funktion des Nervensystems, zu einer normalen psychischen Funktion, zur normalen Bildung roter Blutkörperchen, zu einer normalen Funktion des Immunsystems und zur Regulierung der Hormontätigkeit. Dazu kommen Eiweiß- und Glykogenstoffwechsel und der Homocystein-Stoffwechsel.</p>" +
                "<p>Das beschreibt die Rolle des Nährstoffs beim gewöhnlichen Bedarf. Es ist kein Versprechen, dass die Dose Schlaflosigkeit, Krämpfe oder Stress behandelt. Auf den HÖRBI-Etiketten steht kürzer: zusätzliche Quelle von Magnesium und Vitamin B6.</p>" +
                fig(
                  "media/web/soon-magnesium-chelate/01.jpg",
                  "HÖRBI Magnesium-Chelat",
                  "Magnesium-Chelat + B6. Die Icons sind Regalgestaltung. Die Rolle kommt aus dem Claims-Register, die Dosis aus der Spezifikation."
                ),
            },
            {
              h: "Wie viel in den HÖRBI-Dosen steckt",
              html:
                "<p>Zwei Salze, dieselbe Lesart. Die Magnesiumzahl steht in der Tabelle, nicht im Produktnamen.</p>" +
                dose([
                  ["Chelat", "402 mg", "Magnesium · 3 Kapseln · 102%*"],
                  ["Citrat", "480 mg", "Magnesium · 4 Kapseln · 120%*"],
                  ["Vitamin B6", "6 mg", "in beiden Dosen · 300%*"],
                ]) +
                "<p>„800 mg“ beim Citrat ist der Produktname. Die Tagesdosis aus vier Kapseln nennt 480 mg Magnesium. Vitamin B6 ist in beiden Dosen Pyridoxinhydrochlorid, 6 mg. Die Kur auf dem Etikett dauert 1 Monat, für Erwachsene, zum Essen. Vor der Anwendung wird eine ärztliche Beratung empfohlen.</p>" +
                '<p class="article-note">Ein Nahrungsergänzungsmittel, kein Arzneimittel. Schwangerschaft und Stillzeit stehen in den Gegenanzeigen.</p>',
            },
            {
              h: "Weiterlesen",
              html:
                "<p>Die Sätze oben erlaubt die Verordnung (EU) Nr. 432/2012, wenn das Lebensmittel eine Quelle des Nährstoffs ist. Die Prozente auf den HÖRBI-Dosen erfüllen das. Höchstmengen sind ein eigenes Thema: die europäische Zahl für Magnesium aus Ergänzungen liegt unter 402 und 480 mg, 6 mg Vitamin B6 liegen unter 12 mg. Der Vergleich steht schon in den Dosen-Artikeln.</p>" +
                links([
                  ["article.html?id=capsule-magnesium-chelate", "Chelat: 402 mg neben den Höchstmengen"],
                  ["article.html?id=capsule-magnesium-citrate", "Citrat: 800 mg im Namen, 480 mg in der Tabelle"],
                  ["index.html#products", "Produkte"],
                ]),
            },
          ],
        },
        it: {
          title: "A cosa servono magnesio e vitamina B6",
          kicker: "Journal · Salute · Magnesio",
          lead: "Il magnesio resta nella dieta per muscoli, nervi, il normale metabolismo energetico e meno stanchezza. La vitamina B6 accanto sostiene il sistema nervoso, i globuli rossi e la regolazione dell’attività ormonale. Sotto, le formule autorizzate e la dose dei due barattoli HÖRBI.",
          readMin: "6 min",
          callouts: [
            { title: "Muscoli e nervi", text: "Il magnesio contribuisce alla normale funzione muscolare e del sistema nervoso." },
            { title: "Stanchezza", text: "Magnesio e vitamina B6 sono legati alla riduzione di stanchezza e affaticamento." },
            { title: "Ossa", text: "Il magnesio contribuisce al mantenimento di ossa e denti normali." },
            { title: "Due sali", text: "Chelato: 402 mg di magnesio. Il citrato ha 800 mg nel nome e 480 mg di magnesio in tabella." },
          ],
          sections: [
            {
              h: "Il beneficio, con le parole consentite",
              html:
                "<p>Nel registro UE il magnesio ha frasi dirette. Contribuisce alla riduzione di stanchezza e affaticamento, al normale metabolismo energetico, all’equilibrio elettrolitico, alla normale funzione muscolare, alla normale funzione del sistema nervoso, alla normale funzione psicologica e alla normale sintesi proteica. Contribuisce al mantenimento di ossa e denti normali e ha un ruolo nella divisione cellulare.</p>" +
                "<p>La vitamina B6 ha frasi proprie. Contribuisce alla riduzione della stanchezza, alla normale funzione del sistema nervoso, alla normale funzione psicologica, alla normale formazione dei globuli rossi, alla normale funzione del sistema immunitario e alla regolazione dell’attività ormonale. Contribuisce anche al metabolismo di proteine e glicogeno e al metabolismo dell’omocisteina.</p>" +
                "<p>È il ruolo del nutriente per un fabbisogno ordinario. Non è una promessa che il barattolo curi insonnia, crampi o stress. Sulle etichette HÖRBI c’è una frase più corta: fonte aggiuntiva di magnesio e vitamina B6.</p>" +
                fig(
                  "media/web/soon-magnesium-chelate/01.jpg",
                  "Barattolo HÖRBI chelato di magnesio",
                  "Chelato di magnesio + B6. Le icone sono grafica da scaffale. Il ruolo viene dal registro dei claim, la dose dalla specifica."
                ),
            },
            {
              h: "Quanto c’è nei barattoli HÖRBI",
              html:
                "<p>Due sali, la stessa lettura. La cifra del magnesio è quella della tabella, non del nome.</p>" +
                dose([
                  ["Chelato", "402 mg", "magnesio · 3 capsule · 102%*"],
                  ["Citrato", "480 mg", "magnesio · 4 capsule · 120%*"],
                  ["Vitamina B6", "6 mg", "in entrambi · 300%*"],
                ]) +
                "<p>«800 mg» sul citrato è il nome del prodotto. La dose giornaliera di quattro capsule indica 480 mg di magnesio. La vitamina B6 in entrambi è piridossina cloridrato, 6 mg. Il ciclo in etichetta è di 1 mese, per adulti, con i pasti. Prima dell’uso si consiglia un medico.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale. Gravidanza e allattamento sono controindicazioni.</p>',
            },
            {
              h: "Dove continuare",
              html:
                "<p>Le frasi sopra sono autorizzate dal regolamento (UE) n. 432/2012 se l’alimento è fonte del nutriente. Le percentuali sui barattoli HÖRBI lo soddisfano. I livelli massimi sono un altro tema: la cifra europea per il magnesio dagli integratori sta sotto 402 e 480 mg, mentre 6 mg di vitamina B6 stanno sotto 12 mg. Il confronto è già nelle schede del journal.</p>" +
                links([
                  ["article.html?id=capsule-magnesium-chelate", "chelato: 402 mg accanto ai livelli massimi"],
                  ["article.html?id=capsule-magnesium-citrate", "citrato: 800 mg nel nome, 480 mg in tabella"],
                  ["index.html#products", "prodotti"],
                ]),
            },
          ],
        },
      },
    },
    {
      id: "health-folate",
      categoryId: "health",
      cover: "media/web/soon-inositol/00.jpg",
      images: { hero: "media/web/soon-inositol/01.jpg" },
      published: "2026-10-07",
      sources: [REG],
      i18n: {
        ru: {
          title: "Зачем фолиевая кислота и инозитол",
          kicker: "Журнал · Здоровье · Инозитол",
          lead: "Фолиевая кислота участвует в кроветворении, делении клеток и снижении усталости. Инозитол — молекула, которой клетки пользуются в передаче сигналов. На банке HÖRBI суточная доза — 1000 мг инозитола и 400 мкг фолиевой кислоты.",
          readMin: "5 мин",
          callouts: [
            { title: "Кровь", text: "Фолат способствует нормальному кроветворению." },
            { title: "Клетки", text: "Фолат участвует в делении клеток и в обмене гомоцистеина." },
            { title: "Усталость", text: "Фолат способствует уменьшению усталости и утомляемости." },
            { title: "1000 мг", text: "Инозитол в двух капсулах. Фолиевой кислоты — 400 мкг." },
          ],
          sections: [
            {
              h: "Что можно сказать про фолат",
              html:
                "<p>У фолиевой кислоты в европейском реестре есть понятные роли. Она способствует нормальному кроветворению, нормальному обмену гомоцистеина, нормальной психологической функции, нормальной работе иммунной системы и уменьшению усталости и утомляемости. Она участвует в процессе деления клеток и в нормальном синтезе аминокислот.</p>" +
                "<p>Отдельная фраза реестра говорит о росте тканей матери при беременности. Банку HÖRBI под эту фразу не подставляем: на этикетке беременность и кормление грудью стоят в противопоказаниях. Для беременности эта добавка не предназначена.</p>" +
                fig(
                  "media/web/soon-inositol/01.jpg",
                  "Банка HÖRBI Инозитол и фолиевая кислота",
                  "Комплекс инозитол + фолиевая кислота. Доза в статье — из таблицы состава: 1000 мг и 400 мкг."
                ),
            },
            {
              h: "Где здесь инозитол",
              html:
                "<p>Инозитол, его ещё называют мио-инозитом, клетки используют в передаче сигналов. Отдельной разрешённой фразы «лечит» или «назначается при» у него в том же реестре нет. Международное руководство по СПКЯ 2023 года допускает обсудить инозитол по желанию женщины и прямо пишет, что клиническая польза ограничена, а конкретную дозу не назначает.</p>" +
                dose([
                  ["Инозитол", "1000 мг", "2 капсулы · 200%*"],
                  ["Фолиевая кислота", "400 мкг", "витамин B9 · 200%*"],
                  ["Курс", "1 месяц", "2 капсулы в день, с едой"],
                ]) +
                "<p>Капсула весит 620 мг, в упаковке 120 капсул. Перед применением рекомендуется консультация врача.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство.</p>',
            },
            {
              h: "Рядом в журнале",
              html: links([
                ["article.html?id=capsule-inositol", "разбор банки: 1000 мг, не 1400"],
                ["index.html#products", "продукты"],
              ]),
            },
          ],
        },
        en: {
          title: "What folic acid and inositol are for",
          kicker: "Journal · Health · Inositol",
          lead: "Folic acid takes part in blood formation, cell division and a reduction of tiredness. Inositol is a molecule cells use in signalling. The HÖRBI daily serving is 1000 mg of inositol and 400 µg of folic acid.",
          readMin: "5 min",
          callouts: [
            { title: "Blood", text: "Folate contributes to normal blood formation." },
            { title: "Cells", text: "Folate has a role in cell division and in homocysteine metabolism." },
            { title: "Tiredness", text: "Folate contributes to the reduction of tiredness and fatigue." },
            { title: "1000 mg", text: "Inositol in two capsules. Folic acid is 400 µg." },
          ],
          sections: [
            {
              h: "What can be said about folate",
              html:
                "<p>The EU register gives folic acid clear roles. It contributes to normal blood formation, to normal homocysteine metabolism, to normal psychological function, to the normal function of the immune system and to the reduction of tiredness and fatigue. It has a role in cell division and contributes to normal amino acid synthesis.</p>" +
                "<p>A separate line in the register mentions maternal tissue growth during pregnancy. The HÖRBI jar does not sit under that line: the label lists pregnancy and breastfeeding as contraindications. This supplement is not meant for pregnancy.</p>" +
                fig(
                  "media/web/soon-inositol/01.jpg",
                  "HÖRBI inositol and folic acid bottle",
                  "Inositol + folic acid. The dose in this note is the specification table: 1000 mg and 400 µg."
                ),
            },
            {
              h: "Where inositol fits",
              html:
                "<p>Inositol, also called myo-inositol, is used by cells in signalling. The same register has no authorised “treats” sentence for it. The 2023 international PCOS guideline allows inositol to be considered if a woman wants it, and it says the clinical benefit is limited and that no specific dose is recommended.</p>" +
                dose([
                  ["Inositol", "1000 mg", "2 capsules · 200%*"],
                  ["Folic acid", "400 µg", "vitamin B9 · 200%*"],
                  ["Course", "1 month", "2 capsules a day, with food"],
                ]) +
                "<p>One capsule weighs 620 mg. The pack holds 120 capsules. A doctor’s advice is recommended before use.</p>" +
                '<p class="article-note">A food supplement, not a medicine.</p>',
            },
            {
              h: "Next to this note",
              html: links([
                ["article.html?id=capsule-inositol", "the jar note: 1000 mg, not 1400"],
                ["index.html#products", "products"],
              ]),
            },
          ],
        },
        de: {
          title: "Wozu Folsäure und Inositol da sind",
          kicker: "Journal · Gesundheit · Inositol",
          lead: "Folsäure ist an der Blutbildung, der Zellteilung und der Verringerung von Müdigkeit beteiligt. Inositol ist ein Molekül, das Zellen bei der Signalweitergabe nutzen. Die HÖRBI-Tagesdosis ist 1000 mg Inositol und 400 µg Folsäure.",
          readMin: "5 Min.",
          callouts: [
            { title: "Blut", text: "Folat trägt zu einer normalen Blutbildung bei." },
            { title: "Zellen", text: "Folat hat eine Funktion bei der Zellteilung und im Homocystein-Stoffwechsel." },
            { title: "Müdigkeit", text: "Folat trägt zur Verringerung von Müdigkeit bei." },
            { title: "1000 mg", text: "Inositol in zwei Kapseln. Folsäure: 400 µg." },
          ],
          sections: [
            {
              h: "Was sich über Folat sagen lässt",
              html:
                "<p>Im EU-Register hat Folsäure klare Rollen. Sie trägt bei zu einer normalen Blutbildung, zu einem normalen Homocystein-Stoffwechsel, zu einer normalen psychischen Funktion, zu einer normalen Funktion des Immunsystems und zur Verringerung von Müdigkeit. Sie hat eine Funktion bei der Zellteilung und trägt zu einer normalen Aminosäuresynthese bei.</p>" +
                "<p>Ein eigener Satz im Register nennt das Wachstum mütterlichen Gewebes in der Schwangerschaft. Die HÖRBI-Dose steht nicht unter diesem Satz: Schwangerschaft und Stillzeit sind Gegenanzeigen. Diese Ergänzung ist nicht für die Schwangerschaft gedacht.</p>" +
                fig(
                  "media/web/soon-inositol/01.jpg",
                  "HÖRBI Inositol und Folsäure",
                  "Inositol + Folsäure. Die Dosis kommt aus der Spezifikation: 1000 mg und 400 µg."
                ),
            },
            {
              h: "Wo Inositol hingehört",
              html:
                "<p>Inositol, auch Myo-Inositol, nutzen Zellen bei der Signalweitergabe. Im selben Register gibt es dafür keinen zugelassenen Satz „behandelt“. Die internationale PCOS-Leitlinie von 2023 erlaubt, Inositol nach Wunsch zu erwägen, und schreibt, dass der klinische Nutzen begrenzt ist und keine konkrete Dosis empfohlen wird.</p>" +
                dose([
                  ["Inositol", "1000 mg", "2 Kapseln · 200%*"],
                  ["Folsäure", "400 µg", "Vitamin B9 · 200%*"],
                  ["Kur", "1 Monat", "2 Kapseln täglich, zum Essen"],
                ]) +
                "<p>Eine Kapsel wiegt 620 mg. Die Packung enthält 120 Kapseln. Vor der Anwendung wird eine ärztliche Beratung empfohlen.</p>" +
                '<p class="article-note">Ein Nahrungsergänzungsmittel, kein Arzneimittel.</p>',
            },
            {
              h: "Daneben im Journal",
              html: links([
                ["article.html?id=capsule-inositol", "die Dose: 1000 mg, nicht 1400"],
                ["index.html#products", "Produkte"],
              ]),
            },
          ],
        },
        it: {
          title: "A cosa servono acido folico e inositolo",
          kicker: "Journal · Salute · Inositolo",
          lead: "L’acido folico partecipa alla formazione del sangue, alla divisione cellulare e alla riduzione della stanchezza. L’inositolo è una molecola che le cellule usano nella segnalazione. La dose giornaliera HÖRBI è 1000 mg di inositolo e 400 µg di acido folico.",
          readMin: "5 min",
          callouts: [
            { title: "Sangue", text: "Il folato contribuisce alla normale formazione del sangue." },
            { title: "Cellule", text: "Il folato ha un ruolo nella divisione cellulare e nel metabolismo dell’omocisteina." },
            { title: "Stanchezza", text: "Il folato contribuisce alla riduzione di stanchezza e affaticamento." },
            { title: "1000 mg", text: "Inositolo in due capsule. Acido folico: 400 µg." },
          ],
          sections: [
            {
              h: "Cosa si può dire del folato",
              html:
                "<p>Nel registro UE l’acido folico ha ruoli chiari. Contribuisce alla normale formazione del sangue, al normale metabolismo dell’omocisteina, alla normale funzione psicologica, alla normale funzione del sistema immunitario e alla riduzione di stanchezza e affaticamento. Ha un ruolo nella divisione cellulare e contribuisce alla normale sintesi degli aminoacidi.</p>" +
                "<p>Una frase a parte del registro parla della crescita dei tessuti materni in gravidanza. Il barattolo HÖRBI non sta sotto quella frase: gravidanza e allattamento sono controindicazioni. Questo integratore non è pensato per la gravidanza.</p>" +
                fig(
                  "media/web/soon-inositol/01.jpg",
                  "Barattolo HÖRBI inositolo e acido folico",
                  "Inositolo + acido folico. La dose è quella della specifica: 1000 mg e 400 µg."
                ),
            },
            {
              h: "Dove entra l’inositolo",
              html:
                "<p>L’inositolo, anche mio-inositolo, è usato dalle cellule nella segnalazione. Nello stesso registro non ha una frase autorizzata del tipo «cura». La linea guida internazionale PCOS del 2023 consente di valutarlo se la donna lo desidera e scrive che il beneficio clinico è limitato e che non raccomanda una dose.</p>" +
                dose([
                  ["Inositolo", "1000 mg", "2 capsule · 200%*"],
                  ["Acido folico", "400 µg", "vitamina B9 · 200%*"],
                  ["Ciclo", "1 mese", "2 capsule al giorno, con i pasti"],
                ]) +
                "<p>Una capsula pesa 620 mg. La confezione ne ha 120. Prima dell’uso si consiglia un medico.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale.</p>',
            },
            {
              h: "Accanto nel journal",
              html: links([
                ["article.html?id=capsule-inositol", "la scheda: 1000 mg, non 1400"],
                ["index.html#products", "prodotti"],
              ]),
            },
          ],
        },
      },
    },
    {
      id: "health-collagen",
      categoryId: "health",
      cover: "media/web/soon-collagen/00.jpg",
      images: { hero: "media/web/soon-collagen/02.jpg" },
      published: "2026-10-07",
      sources: [REG],
      i18n: {
        ru: {
          title: "Зачем витамин C рядом с морским коллагеном",
          kicker: "Журнал · Здоровье · Коллаген",
          lead: "Польза, которую можно назвать прямо, сидит на витамине C: он участвует в нормальном образовании коллагена для кожи, костей, хрящей, дёсен, сосудов и зубов. Пептиды рыбного коллагена в банке — белковая часть формулы, 1050 мг в трёх капсулах.",
          readMin: "5 мин",
          callouts: [
            { title: "Кожа и хрящ", text: "Витамин C способствует нормальному образованию коллагена для кожи, хрящей и дёсен." },
            { title: "Кости и сосуды", text: "Та же роль — для костей, сосудов и зубов." },
            { title: "1050 мг", text: "Гидролизованный рыбный коллаген в трёх капсулах. Типа I или III на этикетке нет." },
            { title: "45 мг", text: "Гиалуроновая кислота в суточной дозе. Отдельной разрешённой фразы про неё нет." },
          ],
          sections: [
            {
              h: "Где здесь польза",
              html:
                "<p>Витамин C в европейском реестре связан с нормальным образованием коллагена — и эта фраза повторяется для нормальной функции сосудов, костей, хрящей, дёсен, кожи и зубов. Отдельно он способствует защите клеток от окислительного стресса, нормальной работе иммунной системы, уменьшению усталости и утомляемости и повышает усвоение железа.</p>" +
                "<p>Это роль витамина. Она не превращается в обещание, что банка убирает морщины или лечит суставы. У самих пептидов коллагена отдельной такой фразы в реестре нет. Обзор 2025 года, который уже разобран в заметке про банку, не нашёл клинических доказательств, что добавки коллагена предупреждают или лечат старение кожи.</p>" +
                fig(
                  "media/web/soon-collagen/02.jpg",
                  "Инфографика HÖRBI: 1050 мг коллагена, витамин C, гиалуроновая кислота",
                  "Три цифры с карточки совпадают с таблицей: 1050 мг, 100,5 мг и 45 мг."
                ),
            },
            {
              h: "Что в суточной дозе",
              html:
                dose([
                  ["Коллаген", "1050 мг", "пептиды · 3 капсулы"],
                  ["Витамин C", "100,5 мг", "168%*"],
                  ["Гиалуроновая кислота", "45 мг", "90%"],
                ]) +
                "<p>Взрослым по 1 капсуле 3 раза в день во время еды. Курс на этикетке — 3 месяца. В упаковке 120 капсул: при таком приёме банки хватает на 40 дней. Гиалуроновая кислота указана в составе на 45 мг; отдельной разрешённой фразы про кожу для неё эта статья не добавляет. Противопоказания: непереносимость, беременность, кормление грудью. Источник коллагена — рыба, это важно при аллергии.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство.</p>',
            },
            {
              h: "Рядом в журнале",
              html: links([
                ["article.html?id=capsule-collagen", "разбор банки и обзор 2025 года"],
                ["index.html#products", "продукты"],
              ]),
            },
          ],
        },
        en: {
          title: "Why vitamin C sits next to marine collagen",
          kicker: "Journal · Health · Collagen",
          lead: "The benefit that can be said outright sits on vitamin C: it contributes to normal collagen formation for skin, bones, cartilage, gums, blood vessels and teeth. The fish collagen peptides in the jar are the protein part of the formula, 1050 mg in three capsules.",
          readMin: "5 min",
          callouts: [
            { title: "Skin and cartilage", text: "Vitamin C contributes to normal collagen formation for skin, cartilage and gums." },
            { title: "Bones and vessels", text: "The same role covers bones, blood vessels and teeth." },
            { title: "1050 mg", text: "Hydrolyzed fish collagen in three capsules. The label does not state type I or III." },
            { title: "45 mg", text: "Hyaluronic acid in the daily serving. There is no separate authorised sentence for it." },
          ],
          sections: [
            {
              h: "Where the benefit is",
              html:
                "<p>In the EU register, vitamin C is tied to normal collagen formation, and that sentence is repeated for the normal function of blood vessels, bones, cartilage, gums, skin and teeth. It also contributes to the protection of cells from oxidative stress, to the normal function of the immune system and to the reduction of tiredness and fatigue, and it increases iron absorption.</p>" +
                "<p>That is the vitamin’s role. It does not become a promise that the jar removes wrinkles or treats joints. Collagen peptides themselves have no such authorised sentence. The 2025 review already discussed in the jar note found no clinical evidence that collagen supplements prevent or treat skin aging.</p>" +
                fig(
                  "media/web/soon-collagen/02.jpg",
                  "HÖRBI card: 1050 mg collagen, vitamin C, hyaluronic acid",
                  "The three figures on the card match the table: 1050 mg, 100.5 mg and 45 mg."
                ),
            },
            {
              h: "The daily serving",
              html:
                dose([
                  ["Collagen", "1050 mg", "peptides · 3 capsules"],
                  ["Vitamin C", "100.5 mg", "168%*"],
                  ["Hyaluronic acid", "45 mg", "90%"],
                ]) +
                "<p>Adults: 1 capsule 3 times a day with food. The labelled course is 3 months. The pack holds 120 capsules, which at that pace is 40 days. Hyaluronic acid is listed at 45 mg; this note does not add an authorised skin sentence for it. Contraindications: intolerance, pregnancy, breastfeeding. The collagen is from fish, which matters for allergy.</p>" +
                '<p class="article-note">A food supplement, not a medicine.</p>',
            },
            {
              h: "Next to this note",
              html: links([
                ["article.html?id=capsule-collagen", "the jar note and the 2025 review"],
                ["index.html#products", "products"],
              ]),
            },
          ],
        },
        de: {
          title: "Wozu Vitamin C neben Meereskollagen steht",
          kicker: "Journal · Gesundheit · Kollagen",
          lead: "Der Nutzen, den man direkt sagen kann, hängt am Vitamin C: Es trägt zur normalen Kollagenbildung für Haut, Knochen, Knorpel, Zahnfleisch, Gefäße und Zähne bei. Die Fischkollagenpeptide in der Dose sind der Proteinanteil, 1050 mg in drei Kapseln.",
          readMin: "5 Min.",
          callouts: [
            { title: "Haut und Knorpel", text: "Vitamin C trägt zur normalen Kollagenbildung für Haut, Knorpel und Zahnfleisch bei." },
            { title: "Knochen und Gefäße", text: "Dieselbe Rolle gilt für Knochen, Blutgefäße und Zähne." },
            { title: "1050 mg", text: "Hydrolysiertes Fischkollagen in drei Kapseln. Typ I oder III steht nicht auf dem Etikett." },
            { title: "45 mg", text: "Hyaluronsäure in der Tagesdosis. Einen eigenen zugelassenen Satz gibt es dafür nicht." },
          ],
          sections: [
            {
              h: "Wo der Nutzen liegt",
              html:
                "<p>Im EU-Register ist Vitamin C mit der normalen Kollagenbildung verbunden, und dieser Satz gilt für die normale Funktion von Blutgefäßen, Knochen, Knorpel, Zahnfleisch, Haut und Zähnen. Dazu kommt der Schutz der Zellen vor oxidativem Stress, eine normale Funktion des Immunsystems, die Verringerung von Müdigkeit und eine höhere Eisenaufnahme.</p>" +
                "<p>Das ist die Rolle des Vitamins. Daraus wird kein Versprechen, dass die Dose Falten entfernt oder Gelenke behandelt. Für Kollagenpeptide selbst gibt es diesen zugelassenen Satz nicht. Die Übersicht von 2025, schon in der Dosen-Notiz besprochen, fand keine klinische Evidenz, dass Kollagenpräparate Hautalterung verhindern oder behandeln.</p>" +
                fig(
                  "media/web/soon-collagen/02.jpg",
                  "HÖRBI-Grafik: 1050 mg Kollagen, Vitamin C, Hyaluron",
                  "Die drei Zahlen der Grafik entsprechen der Tabelle: 1050 mg, 100,5 mg und 45 mg."
                ),
            },
            {
              h: "Die Tagesdosis",
              html:
                dose([
                  ["Kollagen", "1050 mg", "Peptide · 3 Kapseln"],
                  ["Vitamin C", "100,5 mg", "168%*"],
                  ["Hyaluronsäure", "45 mg", "90%"],
                ]) +
                "<p>Erwachsene: 1 Kapsel 3-mal täglich zum Essen. Die Kur auf dem Etikett dauert 3 Monate. Die Packung hat 120 Kapseln, das reicht bei diesem Tempo für 40 Tage. Hyaluronsäure steht mit 45 mg in der Tabelle; diese Notiz ergänzt keinen Haut-Claim dafür. Gegenanzeigen: Unverträglichkeit, Schwangerschaft, Stillzeit. Das Kollagen stammt vom Fisch, das zählt bei einer Allergie.</p>" +
                '<p class="article-note">Ein Nahrungsergänzungsmittel, kein Arzneimittel.</p>',
            },
            {
              h: "Daneben im Journal",
              html: links([
                ["article.html?id=capsule-collagen", "die Dose und die Übersicht von 2025"],
                ["index.html#products", "Produkte"],
              ]),
            },
          ],
        },
        it: {
          title: "Perché la vitamina C sta accanto al collagene marino",
          kicker: "Journal · Salute · Collagene",
          lead: "Il beneficio che si può dire in modo diretto sta sulla vitamina C: contribuisce alla normale formazione del collagene per pelle, ossa, cartilagine, gengive, vasi e denti. I peptidi di collagene di pesce nel barattolo sono la parte proteica, 1050 mg in tre capsule.",
          readMin: "5 min",
          callouts: [
            { title: "Pelle e cartilagine", text: "La vitamina C contribuisce alla normale formazione del collagene per pelle, cartilagine e gengive." },
            { title: "Ossa e vasi", text: "Lo stesso ruolo vale per ossa, vasi sanguigni e denti." },
            { title: "1050 mg", text: "Collagene idrolizzato di pesce in tre capsule. Il tipo I o III non è in etichetta." },
            { title: "45 mg", text: "Acido ialuronico nella dose giornaliera. Non ha una frase autorizzata a parte." },
          ],
          sections: [
            {
              h: "Dov’è il beneficio",
              html:
                "<p>Nel registro UE la vitamina C è legata alla normale formazione del collagene, e la frase vale per la normale funzione di vasi, ossa, cartilagine, gengive, pelle e denti. Contribuisce anche alla protezione delle cellule dallo stress ossidativo, alla normale funzione del sistema immunitario, alla riduzione della stanchezza e aumenta l’assorbimento del ferro.</p>" +
                "<p>È il ruolo della vitamina. Non diventa una promessa che il barattolo tolga le rughe o curi le articolazioni. I peptidi di collagene non hanno questa frase autorizzata. La rassegna del 2025, già nella scheda del barattolo, non ha trovato prove cliniche che gli integratori di collagene prevengano o trattino l’invecchiamento della pelle.</p>" +
                fig(
                  "media/web/soon-collagen/02.jpg",
                  "Grafica HÖRBI: 1050 mg di collagene, vitamina C, acido ialuronico",
                  "Le tre cifre della grafica coincidono con la tabella: 1050 mg, 100,5 mg e 45 mg."
                ),
            },
            {
              h: "La dose giornaliera",
              html:
                dose([
                  ["Collagene", "1050 mg", "peptidi · 3 capsule"],
                  ["Vitamina C", "100,5 mg", "168%*"],
                  ["Acido ialuronico", "45 mg", "90%"],
                ]) +
                "<p>Adulti: 1 capsula 3 volte al giorno con i pasti. Il ciclo in etichetta è di 3 mesi. La confezione ha 120 capsule: a quel ritmo bastano per 40 giorni. L’acido ialuronico è indicato a 45 mg; questa nota non aggiunge una frase autorizzata sulla pelle. Controindicazioni: intolleranza, gravidanza, allattamento. Il collagene è di pesce: conta in caso di allergia.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale.</p>',
            },
            {
              h: "Accanto nel journal",
              html: links([
                ["article.html?id=capsule-collagen", "la scheda e la rassegna del 2025"],
                ["index.html#products", "prodotti"],
              ]),
            },
          ],
        },
      },
    },
    {
      id: "health-zinc",
      categoryId: "health",
      cover: "media/web/soon-testobooster/00.jpg",
      images: { hero: "media/web/soon-testobooster/01.jpg" },
      published: "2026-10-07",
      sources: [REG],
      i18n: {
        ru: {
          title: "Зачем цинк в тестобустере",
          kicker: "Журнал · Здоровье · Цинк",
          lead: "У цинка есть прямая разрешённая фраза: он способствует поддержанию нормального уровня тестостерона в крови. Рядом — иммунная система, защита клеток от окислительного стресса, кожа, волосы и ногти. Это поддержание нормы, не обещание её поднять.",
          readMin: "6 мин",
          callouts: [
            { title: "Тестостерон", text: "Цинк способствует поддержанию нормального уровня тестостерона в крови." },
            { title: "Иммунитет", text: "Цинк способствует нормальной работе иммунной системы." },
            { title: "Кожа и волосы", text: "Цинк способствует поддержанию нормального состояния кожи, волос и ногтей." },
            { title: "25 мг", text: "Ровно европейский верхний уровень для взрослых. Вторую цинковую добавку в тот же день не складывают." },
          ],
          sections: [
            {
              h: "Какая польза у цинка",
              html:
                "<p>В реестре ЕС цинк способствует поддержанию нормального уровня тестостерона в крови, нормальной фертильности и репродукции, нормальной работе иммунной системы, защите клеток от окислительного стресса, нормальной когнитивной функции и синтезу белка и ДНК. Он способствует поддержанию нормального состояния кожи, волос и ногтей.</p>" +
                "<p>Ключевое слово — «поддержание нормального». Фраза не говорит, что добавка поднимает тестостерон выше своей нормы у человека, которому цинка и так хватает. На банке HÖRBI цинк указан как 25 мг в трёх капсулах, 166,6%*. Это и есть европейский верхний уровень цинка для взрослых, поэтому второй высокодозный цинк в тот же день эту планку переходит.</p>" +
                fig(
                  "media/web/soon-testobooster/01.jpg",
                  "Банка HÖRBI Тестобустер",
                  "Тестобустер. Разрешённая фраза про тестостерон относится к цинку, 25 мг. Остальные ингредиенты этой фразы не получают."
                ),
            },
            {
              h: "Что ещё в капсуле",
              html:
                dose([
                  ["Цинк", "25 мг", "3 капсулы · 166,6%*"],
                  ["Аспарагиновая кислота", "1000 мг", "8,2%"],
                  ["Мака", "500 мг", "экстракт корня"],
                  ["Пажитник", "500 мг", "экстракт"],
                ]) +
                "<p>D-аспарагиновая кислота, экстракт маки и экстракт пажитника в составе есть. Отдельной разрешённой фразы ЕС на эту банку у них нет. Экстракт чёрного перца указан в составе без миллиграммов. Исследования по этим ингредиентам разобраны в заметке про банку: человеческие данные по D-аспарагиновой кислоте неоднородны, а готовый комплекс — не то же самое, что отдельный экстракт в чужом испытании.</p>" +
                "<p>Взрослым по 1 капсуле 3 раза в день во время еды, курс 1 месяц. Противопоказания: непереносимость, беременность, кормление грудью.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство. Она не обещает повысить тестостерон.</p>',
            },
            {
              h: "Рядом в журнале",
              html: links([
                ["article.html?id=capsule-testobooster", "разбор банки и исследований"],
                ["index.html#products", "продукты"],
              ]),
            },
          ],
        },
        en: {
          title: "Why zinc is in the testobooster",
          kicker: "Journal · Health · Zinc",
          lead: "Zinc has a direct authorised sentence: it contributes to the maintenance of normal testosterone levels in the blood. Beside that sit the immune system, protection of cells from oxidative stress, skin, hair and nails. That is maintenance of a normal level, not a promise to raise it.",
          readMin: "6 min",
          callouts: [
            { title: "Testosterone", text: "Zinc contributes to the maintenance of normal testosterone levels in the blood." },
            { title: "Immunity", text: "Zinc contributes to the normal function of the immune system." },
            { title: "Skin and hair", text: "Zinc contributes to the maintenance of normal skin, hair and nails." },
            { title: "25 mg", text: "Exactly the European adult upper level. A second zinc supplement the same day stacks past it." },
          ],
          sections: [
            {
              h: "What zinc contributes",
              html:
                "<p>In the EU register, zinc contributes to the maintenance of normal testosterone levels in the blood, to normal fertility and reproduction, to the normal function of the immune system, to the protection of cells from oxidative stress, to normal cognitive function and to normal protein and DNA synthesis. It contributes to the maintenance of normal skin, hair and nails.</p>" +
                "<p>The operative words are “maintenance of normal”. The sentence does not say the supplement lifts testosterone above a person’s own normal level when zinc is already sufficient. The HÖRBI jar lists 25 mg of zinc in three capsules, 166.6%*. That is the European adult upper level for zinc, so a second high-zinc product the same day goes past it.</p>" +
                fig(
                  "media/web/soon-testobooster/01.jpg",
                  "HÖRBI Testobooster bottle",
                  "Testobooster. The authorised testosterone sentence belongs to zinc, 25 mg. The other ingredients do not receive that sentence."
                ),
            },
            {
              h: "What else is in the capsule",
              html:
                dose([
                  ["Zinc", "25 mg", "3 capsules · 166.6%*"],
                  ["Aspartic acid", "1000 mg", "8.2%"],
                  ["Maca", "500 mg", "root extract"],
                  ["Fenugreek", "500 mg", "extract"],
                ]) +
                "<p>D-aspartic acid, maca extract and fenugreek extract are in the composition. They do not have a separate EU sentence on this jar. Black-pepper extract is listed with no milligrams. The studies on those ingredients are in the jar note: human data on D-aspartic acid are inconsistent, and a finished blend is not the same thing as one extract in someone else’s trial.</p>" +
                "<p>Adults: 1 capsule 3 times a day with food, course 1 month. Contraindications: intolerance, pregnancy, breastfeeding.</p>" +
                '<p class="article-note">A food supplement, not a medicine. It does not promise to raise testosterone.</p>',
            },
            {
              h: "Next to this note",
              html: links([
                ["article.html?id=capsule-testobooster", "the jar note and the studies"],
                ["index.html#products", "products"],
              ]),
            },
          ],
        },
        de: {
          title: "Wozu Zink im Testobooster steckt",
          kicker: "Journal · Gesundheit · Zink",
          lead: "Zink hat einen direkten zugelassenen Satz: Es trägt zur Erhaltung eines normalen Testosteronspiegels im Blut bei. Daneben stehen Immunsystem, Schutz der Zellen vor oxidativem Stress, Haut, Haare und Nägel. Das ist Erhaltung eines normalen Spiegels, kein Versprechen, ihn anzuheben.",
          readMin: "6 Min.",
          callouts: [
            { title: "Testosteron", text: "Zink trägt zur Erhaltung eines normalen Testosteronspiegels im Blut bei." },
            { title: "Immunsystem", text: "Zink trägt zu einer normalen Funktion des Immunsystems bei." },
            { title: "Haut und Haar", text: "Zink trägt zur Erhaltung normaler Haut, Haare und Nägel bei." },
            { title: "25 mg", text: "Genau die europäische Höchstmenge für Erwachsene. Ein zweites Zinkpräparat am selben Tag liegt darüber." },
          ],
          sections: [
            {
              h: "Was Zink beiträgt",
              html:
                "<p>Im EU-Register trägt Zink bei zur Erhaltung eines normalen Testosteronspiegels im Blut, zu normaler Fruchtbarkeit und Reproduktion, zu einer normalen Funktion des Immunsystems, zum Schutz der Zellen vor oxidativem Stress, zu einer normalen kognitiven Funktion und zu normaler Protein- und DNA-Synthese. Es trägt zur Erhaltung normaler Haut, Haare und Nägel bei.</p>" +
                "<p>Entscheidend ist „Erhaltung eines normalen Spiegels“. Der Satz sagt nicht, dass die Ergänzung Testosteron über das eigene Normalmaß hebt, wenn Zink schon reicht. Auf der HÖRBI-Dose stehen 25 mg Zink in drei Kapseln, 166,6%*. Das ist die europäische Höchstmenge für Erwachsene. Ein zweites hochdosiertes Zinkpräparat am selben Tag liegt darüber.</p>" +
                fig(
                  "media/web/soon-testobooster/01.jpg",
                  "HÖRBI Testobooster",
                  "Testobooster. Der zugelassene Testosteron-Satz gehört zum Zink, 25 mg. Die anderen Inhaltsstoffe bekommen diesen Satz nicht."
                ),
            },
            {
              h: "Was noch in der Kapsel ist",
              html:
                dose([
                  ["Zink", "25 mg", "3 Kapseln · 166,6%*"],
                  ["Asparaginsäure", "1000 mg", "8,2%"],
                  ["Maca", "500 mg", "Wurzelextrakt"],
                  ["Bockshornklee", "500 mg", "Extrakt"],
                ]) +
                "<p>D-Asparaginsäure, Maca-Extrakt und Bockshornklee-Extrakt stehen in der Zusammensetzung. Einen eigenen EU-Satz auf dieser Dose haben sie nicht. Schwarzer-Pfeffer-Extrakt ist ohne Milligramm angegeben. Die Studien dazu stehen in der Dosen-Notiz: die Humandaten zu D-Asparaginsäure sind uneinheitlich, und eine fertige Mischung ist nicht dasselbe wie ein Extrakt in einer fremden Studie.</p>" +
                "<p>Erwachsene: 1 Kapsel 3-mal täglich zum Essen, Kur 1 Monat. Gegenanzeigen: Unverträglichkeit, Schwangerschaft, Stillzeit.</p>" +
                '<p class="article-note">Ein Nahrungsergänzungsmittel, kein Arzneimittel. Es verspricht nicht, Testosteron zu erhöhen.</p>',
            },
            {
              h: "Daneben im Journal",
              html: links([
                ["article.html?id=capsule-testobooster", "die Dose und die Studien"],
                ["index.html#products", "Produkte"],
              ]),
            },
          ],
        },
        it: {
          title: "Perché lo zinco è nel testobooster",
          kicker: "Journal · Salute · Zinco",
          lead: "Lo zinco ha una frase autorizzata diretta: contribuisce al mantenimento di normali livelli di testosterone nel sangue. Accanto stanno il sistema immunitario, la protezione delle cellule dallo stress ossidativo, pelle, capelli e unghie. È il mantenimento di un livello normale, non una promessa di alzarlo.",
          readMin: "6 min",
          callouts: [
            { title: "Testosterone", text: "Lo zinco contribuisce al mantenimento di normali livelli di testosterone nel sangue." },
            { title: "Immunità", text: "Lo zinco contribuisce alla normale funzione del sistema immunitario." },
            { title: "Pelle e capelli", text: "Lo zinco contribuisce al mantenimento di pelle, capelli e unghie normali." },
            { title: "25 mg", text: "Proprio il livello massimo europeo per gli adulti. Un secondo integratore di zinco lo stesso giorno lo supera." },
          ],
          sections: [
            {
              h: "Che cosa apporta lo zinco",
              html:
                "<p>Nel registro UE lo zinco contribuisce al mantenimento di normali livelli di testosterone nel sangue, alla normale fertilità e riproduzione, alla normale funzione del sistema immunitario, alla protezione delle cellule dallo stress ossidativo, alla normale funzione cognitiva e alla normale sintesi di proteine e DNA. Contribuisce al mantenimento di pelle, capelli e unghie normali.</p>" +
                "<p>Le parole che contano sono «mantenimento di livelli normali». La frase non dice che l’integratore alza il testosterone sopra il livello normale di una persona che ha già zinco a sufficienza. Sul barattolo HÖRBI lo zinco è 25 mg in tre capsule, 166,6%*. È il livello massimo europeo per gli adulti, quindi un secondo prodotto ricco di zinco lo stesso giorno lo supera.</p>" +
                fig(
                  "media/web/soon-testobooster/01.jpg",
                  "Barattolo HÖRBI Testobooster",
                  "Testobooster. La frase autorizzata sul testosterone appartiene allo zinco, 25 mg. Gli altri ingredienti non la ricevono."
                ),
            },
            {
              h: "Che altro c’è nella capsula",
              html:
                dose([
                  ["Zinco", "25 mg", "3 capsule · 166,6%*"],
                  ["Acido aspartico", "1000 mg", "8,2%"],
                  ["Maca", "500 mg", "estratto di radice"],
                  ["Fieno greco", "500 mg", "estratto"],
                ]) +
                "<p>Acido D-aspartico, estratto di maca ed estratto di fieno greco sono nella composizione. Non hanno una frase UE separata su questo barattolo. L’estratto di pepe nero è indicato senza milligrammi. Gli studi su questi ingredienti sono nella scheda del barattolo: i dati sull’uomo per l’acido D-aspartico sono incoerenti, e una miscela finita non è la stessa cosa di un estratto in uno studio altrui.</p>" +
                "<p>Adulti: 1 capsula 3 volte al giorno con i pasti, ciclo di 1 mese. Controindicazioni: intolleranza, gravidanza, allattamento.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale. Non promette di alzare il testosterone.</p>',
            },
            {
              h: "Accanto nel journal",
              html: links([
                ["article.html?id=capsule-testobooster", "la scheda e gli studi"],
                ["index.html#products", "prodotti"],
              ]),
            },
          ],
        },
      },
    },
    {
      id: "health-copper",
      categoryId: "health",
      cover: "media/web/smorodina/00.jpg",
      images: { hero: "media/articles/chlorophyll-glass.jpg" },
      published: "2026-10-07",
      sources: [REG],
      i18n: {
        ru: {
          title: "Зачем медь в жидком хлорофилле",
          kicker: "Журнал · Здоровье · Хлорофилл",
          lead: "В стакане жидкого хлорофилла минерал с прямой разрешённой ролью — медь. Она участвует в энергетическом обмене, соединительной ткани, транспорте железа, работе нервной и иммунной системы и в защите клеток от окислительного стресса.",
          readMin: "5 мин",
          callouts: [
            { title: "Энергия", text: "Медь способствует нормальному энергетическому обмену." },
            { title: "Ткани", text: "Медь способствует поддержанию нормального состояния соединительных тканей." },
            { title: "Железо", text: "Медь способствует нормальному транспорту железа в организме." },
            { title: "1,3–2,6 мг", text: "Медь в ягодной линейке при 20–40 мл в день. У мяты доза меньше: 0,75–2,25 мг." },
          ],
          sections: [
            {
              h: "Что медь делает",
              html:
                "<p>В европейском реестре медь способствует нормальному энергетическому обмену, поддержанию нормального состояния соединительных тканей, нормальной работе нервной системы, нормальному транспорту железа, нормальной работе иммунной системы и защите клеток от окислительного стресса. Она способствует нормальной пигментации волос и кожи.</p>" +
                "<p>Хлорофилл в том же стакане — зелёный пигмент и сам ритуал. Отдельной разрешённой фразы «детокс» или «лечит» у пигмента нет. Минеральная польза, которую можно сказать этими словами, относится к меди из медного комплекса хлорофиллина.</p>" +
                fig(
                  "media/web/smorodina/00.jpg",
                  "Бутылка HÖRBI Хлорофилл со вкусом смородины",
                  "Ягодная линейка 500 мл. Суточная порция 20–40 мл даёт 1,3–2,6 мг меди."
                ),
            },
            {
              h: "Сколько меди в линейке",
              html:
                dose([
                  ["Ягоды", "1,3–2,6 мг", "20–40 мл · 130–260% АУП"],
                  ["Мята", "0,75–2,25 мг", "5–15 мл · 75–225% нормы"],
                  ["Хлорофилл", "25–50 мг", "ягодная порция · процента нет"],
                ]) +
                "<p>Ягодная линейка — смородина, маракуйя, лесные ягоды и малина: взрослым 2 столовые ложки (20 мл) 1–2 раза в день. Мята — чайная ложка (5 мл) 1–3 раза в день. Курс 1 месяц. Противопоказания те же: непереносимость, беременность, кормление грудью.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство.</p>',
            },
            {
              h: "Рядом в журнале",
              html: links([
                ["article.html?id=chlorophyll-green-ritual", "зелёный ритуал без мифов"],
                ["index.html#products", "продукты"],
              ]),
            },
          ],
        },
        en: {
          title: "Why copper is in liquid chlorophyll",
          kicker: "Journal · Health · Chlorophyll",
          lead: "In a glass of liquid chlorophyll, the mineral with a direct authorised role is copper. It takes part in energy metabolism, connective tissue, iron transport, the nervous and immune systems, and the protection of cells from oxidative stress.",
          readMin: "5 min",
          callouts: [
            { title: "Energy", text: "Copper contributes to normal energy-yielding metabolism." },
            { title: "Tissues", text: "Copper contributes to the maintenance of normal connective tissues." },
            { title: "Iron", text: "Copper contributes to normal iron transport in the body." },
            { title: "1.3–2.6 mg", text: "Copper in the berry line at 20–40 ml a day. Mint is lower: 0.75–2.25 mg." },
          ],
          sections: [
            {
              h: "What copper does",
              html:
                "<p>In the EU register, copper contributes to normal energy-yielding metabolism, to the maintenance of normal connective tissues, to the normal functioning of the nervous system, to normal iron transport, to the normal function of the immune system and to the protection of cells from oxidative stress. It contributes to normal hair and skin pigmentation.</p>" +
                "<p>Chlorophyll in the same glass is the green pigment and the ritual itself. The pigment has no authorised “detox” or “treats” sentence. The mineral benefit that can be said in these words belongs to the copper in the copper chlorophyllin complex.</p>" +
                fig(
                  "media/web/smorodina/00.jpg",
                  "HÖRBI blackcurrant chlorophyll bottle",
                  "The berry line, 500 ml. A daily 20–40 ml provides 1.3–2.6 mg of copper."
                ),
            },
            {
              h: "How much copper is in the line",
              html:
                dose([
                  ["Berries", "1.3–2.6 mg", "20–40 ml · 130–260% AI"],
                  ["Mint", "0.75–2.25 mg", "5–15 ml · 75–225% of the reference"],
                  ["Chlorophyll", "25–50 mg", "berry serving · no percentage"],
                ]) +
                "<p>The berry line — blackcurrant, passion fruit, forest berries and raspberry — is 2 tablespoons (20 ml) 1–2 times a day for adults. Mint is 1 teaspoon (5 ml) 1–3 times a day. The course is 1 month. The contraindications are the same: intolerance, pregnancy, breastfeeding.</p>" +
                '<p class="article-note">A food supplement, not a medicine.</p>',
            },
            {
              h: "Next to this note",
              html: links([
                ["article.html?id=chlorophyll-green-ritual", "the green ritual without the myths"],
                ["index.html#products", "products"],
              ]),
            },
          ],
        },
        de: {
          title: "Wozu Kupfer im flüssigen Chlorophyll steckt",
          kicker: "Journal · Gesundheit · Chlorophyll",
          lead: "Im Glas flüssiges Chlorophyll ist Kupfer der Mineralstoff mit einer direkten zugelassenen Rolle. Es ist beteiligt am Energiestoffwechsel, am Bindegewebe, am Eisentransport, an Nerven- und Immunsystem und am Schutz der Zellen vor oxidativem Stress.",
          readMin: "5 Min.",
          callouts: [
            { title: "Energie", text: "Kupfer trägt zu einem normalen Energiestoffwechsel bei." },
            { title: "Gewebe", text: "Kupfer trägt zur Erhaltung normalen Bindegewebes bei." },
            { title: "Eisen", text: "Kupfer trägt zu einem normalen Eisentransport im Körper bei." },
            { title: "1,3–2,6 mg", text: "Kupfer in der Beerenlinie bei 20–40 ml am Tag. Minze liegt niedriger: 0,75–2,25 mg." },
          ],
          sections: [
            {
              h: "Was Kupfer tut",
              html:
                "<p>Im EU-Register trägt Kupfer bei zu einem normalen Energiestoffwechsel, zur Erhaltung normalen Bindegewebes, zu einer normalen Funktion des Nervensystems, zu einem normalen Eisentransport, zu einer normalen Funktion des Immunsystems und zum Schutz der Zellen vor oxidativem Stress. Es trägt zu einer normalen Pigmentierung von Haaren und Haut bei.</p>" +
                "<p>Chlorophyll im selben Glas ist der grüne Farbstoff und das Ritual. Für den Farbstoff gibt es keinen zugelassenen Satz „Detox“ oder „behandelt“. Der mineralische Nutzen in diesen Worten gehört zum Kupfer im Kupferchlorophyllin-Komplex.</p>" +
                fig(
                  "media/web/smorodina/00.jpg",
                  "HÖRBI Chlorophyll Johannisbeere",
                  "Die Beerenlinie, 500 ml. 20–40 ml am Tag liefern 1,3–2,6 mg Kupfer."
                ),
            },
            {
              h: "Wie viel Kupfer in der Linie steckt",
              html:
                dose([
                  ["Beeren", "1,3–2,6 mg", "20–40 ml · 130–260% AI"],
                  ["Minze", "0,75–2,25 mg", "5–15 ml · 75–225% der Referenz"],
                  ["Chlorophyll", "25–50 mg", "Beerenportion · kein Prozent"],
                ]) +
                "<p>Die Beerenlinie — Johannisbeere, Maracuja, Waldbeeren und Himbeere — sind für Erwachsene 2 Esslöffel (20 ml) 1–2-mal täglich. Minze ist 1 Teelöffel (5 ml) 1–3-mal täglich. Die Kur dauert 1 Monat. Die Gegenanzeigen sind dieselben: Unverträglichkeit, Schwangerschaft, Stillzeit.</p>" +
                '<p class="article-note">Ein Nahrungsergänzungsmittel, kein Arzneimittel.</p>',
            },
            {
              h: "Daneben im Journal",
              html: links([
                ["article.html?id=chlorophyll-green-ritual", "das grüne Ritual ohne Mythen"],
                ["index.html#products", "Produkte"],
              ]),
            },
          ],
        },
        it: {
          title: "Perché il rame è nella clorofilla liquida",
          kicker: "Journal · Salute · Clorofilla",
          lead: "Nel bicchiere di clorofilla liquida il minerale con un ruolo autorizzato diretto è il rame. Partecipa al metabolismo energetico, al tessuto connettivo, al trasporto del ferro, al sistema nervoso e immunitario e alla protezione delle cellule dallo stress ossidativo.",
          readMin: "5 min",
          callouts: [
            { title: "Energia", text: "Il rame contribuisce al normale metabolismo energetico." },
            { title: "Tessuti", text: "Il rame contribuisce al mantenimento dei normali tessuti connettivi." },
            { title: "Ferro", text: "Il rame contribuisce al normale trasporto del ferro nell’organismo." },
            { title: "1,3–2,6 mg", text: "Rame nella linea ai frutti a 20–40 ml al giorno. La menta è più bassa: 0,75–2,25 mg." },
          ],
          sections: [
            {
              h: "Che cosa fa il rame",
              html:
                "<p>Nel registro UE il rame contribuisce al normale metabolismo energetico, al mantenimento dei normali tessuti connettivi, alla normale funzione del sistema nervoso, al normale trasporto del ferro, alla normale funzione del sistema immunitario e alla protezione delle cellule dallo stress ossidativo. Contribuisce alla normale pigmentazione di capelli e pelle.</p>" +
                "<p>La clorofilla nello stesso bicchiere è il pigmento verde e il rituale. Il pigmento non ha una frase autorizzata «detox» o «cura». Il beneficio minerale che si può dire con queste parole appartiene al rame del complesso di clorofillina rameica.</p>" +
                fig(
                  "media/web/smorodina/00.jpg",
                  "Bottiglia HÖRBI clorofilla al ribes",
                  "Linea ai frutti, 500 ml. 20–40 ml al giorno apportano 1,3–2,6 mg di rame."
                ),
            },
            {
              h: "Quanto rame c’è nella linea",
              html:
                dose([
                  ["Frutti", "1,3–2,6 mg", "20–40 ml · 130–260% AI"],
                  ["Menta", "0,75–2,25 mg", "5–15 ml · 75–225% del riferimento"],
                  ["Clorofilla", "25–50 mg", "porzione frutti · nessuna percentuale"],
                ]) +
                "<p>La linea ai frutti — ribes, maracuja, frutti di bosco e lampone — per gli adulti è 2 cucchiai (20 ml) 1–2 volte al giorno. La menta è 1 cucchiaino (5 ml) 1–3 volte al giorno. Il ciclo è di 1 mese. Le controindicazioni sono le stesse: intolleranza, gravidanza, allattamento.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale.</p>',
            },
            {
              h: "Accanto nel journal",
              html: links([
                ["article.html?id=chlorophyll-green-ritual", "il rituale verde senza miti"],
                ["index.html#products", "prodotti"],
              ]),
            },
          ],
        },
      },
    }
  );
})();
