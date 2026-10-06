/**
 * HÖRBI Journal — five capsule supplements.
 * Load after articles-data.js and before articles-app.js.
 * Daily amounts follow the specification tables on the HÖRBI labels.
 */
(function () {
  "use strict";

  var data = window.HORBI_ARTICLES;
  if (!data || !data.categories || !data.articles) return;

  var note = function (en, ru, de, it) {
    return { en: en, ru: ru, de: de, it: it };
  };

  var SRC = {
    efsaMg: {
      id: "efsa-mg-2015",
      label: "EFSA",
      title: "Dietary Reference Values for magnesium (EFSA Journal, 2015)",
      url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4186",
      note: note(
        "Adequate intake from the diet: 350 mg/day for men and 300 mg/day for women. This is not a supplement dose.",
        "Адекватное потребление с пищей: 350 мг/сутки для мужчин и 300 мг для женщин. Это не доза добавки.",
        "Angemessene Zufuhr aus der Nahrung: 350 mg/Tag für Männer, 300 mg für Frauen. Keine Supplementdosis.",
        "Assunzione adeguata dalla dieta: 350 mg/giorno per gli uomini e 300 mg per le donne. Non è una dose da integratore."
      ),
    },
    scfMg: {
      id: "scf-mg-ul",
      label: "SCF / EFSA",
      title: "Tolerable upper intake levels — magnesium from supplements (SCF, carried by EFSA)",
      url: "https://www.efsa.europa.eu/sites/default/files/efsa_rep/blobserver_assets/ndatolerableuil.pdf",
      note: note(
        "Supplemental UL of 250 mg/day for readily dissociable magnesium salts and MgO, set because of mild osmotic diarrhoea. Food magnesium is not included.",
        "Верхний уровень 250 мг/сутки для магния из добавок (легко диссоциирующие соли и оксид) — из-за мягкого послабляющего эффекта. Магний из еды сюда не входит.",
        "Höchstmenge 250 mg/Tag für Magnesium aus Ergänzungen (leicht lösliche Salze und MgO), wegen milder osmotischer Diarrhö. Magnesium aus Lebensmitteln zählt nicht mit.",
        "Livello massimo di 250 mg/giorno per il magnesio dagli integratori (sali facilmente dissociabili e MgO), per la lieve diarrea osmotica. Il magnesio degli alimenti non è incluso."
      ),
    },
    nihMg: {
      id: "nih-mg",
      label: "NIH ODS",
      title: "Magnesium — Health Professional Fact Sheet",
      url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
      note: note(
        "US upper level for magnesium from supplements and medicines is 350 mg/day for adults. People with kidney disease are told to be careful with supplemental magnesium.",
        "В справочнике NIH верхний уровень магния из добавок и лекарств для взрослых — 350 мг/сутки. При болезнях почек магний из добавок обсуждают с врачом.",
        "Im NIH-Merkblatt liegt die Höchstmenge für Magnesium aus Ergänzungen und Arzneimitteln bei 350 mg/Tag für Erwachsene. Bei Nierenerkrankung ärztlich klären.",
        "Nel foglio NIH il livello massimo del magnesio da integratori e farmaci è 350 mg/giorno per gli adulti. Con malattie renali va chiesto al medico."
      ),
    },
    efsaB6: {
      id: "efsa-b6-2023",
      label: "EFSA",
      title: "Tolerable upper intake level for vitamin B6 (EFSA Journal, 2023)",
      url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.8006",
      note: note(
        "Adult UL set at 12 mg/day, including pregnancy and lactation, because of peripheral neuropathy at excess intakes.",
        "Для взрослых верхний уровень 12 мг/сутки, включая беременность и лактацию: ориентир связан с периферической нейропатией при избытке.",
        "UL für Erwachsene 12 mg/Tag, auch in Schwangerschaft und Stillzeit, wegen peripherer Neuropathie bei Überschuss.",
        "UL per gli adulti 12 mg/giorno, anche in gravidanza e allattamento, per la neuropatia periferica da eccesso."
      ),
    },
    pcos: {
      id: "pcos-2023",
      label: "JCEM / PMC",
      title: "2023 International evidence-based guideline for PCOS",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/",
      note: note(
        "Inositol may be considered for personal preference, with limited clinical benefit. For infertility it is treated as experimental. No specific dose is recommended.",
        "Инозитол можно обсуждать по желанию женщины, клиническая польза ограничена. При бесплодии его считают экспериментальным. Конкретную дозу руководство не назначает.",
        "Inositol kann nach Präferenz erwogen werden, der klinische Nutzen ist begrenzt. Bei Infertilität gilt es als experimentell. Keine konkrete Dosis wird empfohlen.",
        "L’inositolo si può valutare in base alle preferenze, con beneficio clinico limitato. Nell’infertilità è considerato sperimentale. Nessuna dose specifica è raccomandata."
      ),
    },
    nihFolate: {
      id: "nih-folate",
      label: "NIH ODS",
      title: "Folate — Health Professional Fact Sheet",
      url: "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/",
      note: note(
        "Background on folate and folic acid. It does not authorise this HÖRBI product in pregnancy: the label lists pregnancy and breastfeeding as contraindications.",
        "Справка по фолатам и фолиевой кислоте. Она не разрешает этот продукт HÖRBI при беременности: на этикетке беременность и кормление грудью стоят в противопоказаниях.",
        "Hintergrund zu Folat. Daraus folgt keine Freigabe dieses HÖRBI-Produkts in der Schwangerschaft: das Etikett nennt Schwangerschaft und Stillzeit als Kontraindikation.",
        "Contesto sul folato. Non autorizza questo prodotto HÖRBI in gravidanza: l’etichetta indica gravidanza e allattamento tra le controindicazioni."
      ),
    },
    ajm: {
      id: "ajm-2025",
      label: "Am J Med",
      title: "Myung & Park. Collagen supplements and skin aging (American Journal of Medicine, 2025)",
      url: "https://www.amjmed.com/article/S0002-9343(25)00283-9/fulltext",
      note: note(
        "23 randomised trials, 1474 people. The pooled result looked positive. Studies without pharmaceutical funding, and higher-quality studies, did not show an effect. The authors say there is currently no clinical evidence that collagen supplements prevent or treat skin aging.",
        "23 рандомизированных испытания, 1474 человека. Сводный результат выглядел положительным. В работах без финансирования фармкомпаний и в исследованиях более высокого качества эффекта не было. Авторы пишут, что клинических доказательств профилактики или лечения старения кожи коллагеном сейчас нет.",
        "23 randomisierte Studien, 1474 Personen. Die Gesamtschau wirkte positiv. Arbeiten ohne Pharmafinanzierung und Studien höherer Qualität zeigten keinen Effekt.",
        "23 studi randomizzati, 1474 persone. Il risultato aggregato sembrava positivo. Gli studi senza finanziamento farmaceutico e quelli di qualità più alta non hanno mostrato effetto."
      ),
    },
    nihC: {
      id: "nih-c",
      label: "NIH ODS",
      title: "Vitamin C — Health Professional Fact Sheet",
      url: "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/",
      note: note(
        "Vitamin C is a cofactor for enzymes that stabilise collagen. That is a biochemical role, not a promise that this capsule changes skin.",
        "Витамин C — кофактор ферментов, которые стабилизируют коллаген. Это биохимическая роль, а не обещание, что капсула меняет кожу.",
        "Vitamin C ist ein Kofaktor der Enzyme, die Kollagen stabilisieren. Das ist eine biochemische Rolle, kein Hautversprechen.",
        "La vitamina C è un cofattore degli enzimi che stabilizzano il collagene. È un ruolo biochimico, non una promessa sulla pelle."
      ),
    },
    daaReview: {
      id: "daa-review-2017",
      label: "PMC",
      title: "Roshanzamir & Safavi. D-aspartic acid and testosterone: a systematic review (2017)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5340133/",
      note: note(
        "Animal studies often report a testosterone increase. The human studies available at the time were inconsistent.",
        "В работах на животных тестостерон часто рос. В человеческих исследованиях, которые вошли в обзор, результаты были неоднородными.",
        "Tierstudien berichten oft einen Testosteronanstieg. Die damaligen Humanstudien waren uneinheitlich.",
        "Negli animali il testosterone spesso aumentava. Negli studi sull’uomo allora disponibili i risultati erano incoerenti."
      ),
    },
    melville: {
      id: "melville-2017",
      label: "PLOS One",
      title: "Melville, Siegler, Marshall. D-aspartic acid in resistance-trained men (2017)",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182630",
      note: note(
        "6 g/day for three months alongside training. Total and free testosterone did not change. The authors call the supplement ineffective for testosterone and training outcomes in that group. The HÖRBI label dose is 1 g, not 6 g.",
        "6 г/сутки три месяца на фоне тренировок. Общий и свободный тестостерон не изменились. Авторы считают добавку неэффективной для тестостерона и результатов тренировок в этой группе. На этикетке HÖRBI — 1 г, не 6 г.",
        "6 g/Tag über drei Monate plus Training. Gesamt- und freies Testosteron änderten sich nicht. Die Etikettendosis von HÖRBI ist 1 g, nicht 6 g.",
        "6 g/giorno per tre mesi con l’allenamento. Testosterone totale e libero invariati. La dose in etichetta HÖRBI è 1 g, non 6 g."
      ),
    },
    kuchakulla: {
      id: "kuchakulla-2020",
      label: "PubMed",
      title: "Kuchakulla et al. Ingredients in popular testosterone supplements (Int J Impot Res, 2020)",
      url: "https://pubmed.ncbi.nlm.nih.gov/32358510/",
      note: note(
        "Review of ingredients in popular over-the-counter testosterone and ED products. No finished supplement in that set had a published randomised trial. Most ingredients had contradictory or thin evidence.",
        "Разбор составов популярных безрецептурных продуктов «для тестостерона». Ни у одного готового комплекса из выборки не было опубликованного рандомизированного испытания. У большинства ингредиентов доказательства слабые или противоречивые.",
        "Überblick zu Inhaltsstoffen populärer Testosteron- und ED-Produkte. Kein Fertigprodukt der Auswahl hatte eine publizierte randomisierte Studie.",
        "Rassegna degli ingredienti di integratori popolari per il testosterone. Nessun prodotto finito del campione aveva uno studio randomizzato pubblicato."
      ),
    },
    smithHerbs: {
      id: "smith-2021",
      label: "Adv Nutr",
      title: "Smith et al. Herbs and testosterone in men: a systematic review (Advances in Nutrition, 2021)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8166567/",
      note: note(
        "Some fenugreek extracts showed a signal in particular trials. Those trials used defined extracts and doses. They are not a trial of the HÖRBI capsule.",
        "У отдельных экстрактов пажитника в конкретных испытаниях был сигнал. Там были свои экстракты и дозы. Это не испытание капсулы HÖRBI.",
        "Einzelne Bockshornklee-Extrakte zeigten in bestimmten Studien ein Signal. Das ist keine Studie zur HÖRBI-Kapsel.",
        "Alcuni estratti di fieno greco hanno dato un segnale in studi specifici. Non sono uno studio sulla capsula HÖRBI."
      ),
    },
    scfZn: {
      id: "scf-zn-ul",
      label: "SCF / EFSA",
      title: "Tolerable upper intake level for zinc (adults 25 mg/day)",
      url: "https://www.efsa.europa.eu/sites/default/files/efsa_rep/blobserver_assets/ndatolerableuil.pdf",
      note: note(
        "European adult upper level for zinc is 25 mg/day. The HÖRBI serving is 25 mg, so a second high-zinc product the same day goes past that figure.",
        "Европейский верхний уровень цинка для взрослых — 25 мг в сутки. Порция HÖRBI как раз 25 мг, поэтому вторая высокодозная цинковая добавка в тот же день эту планку переходит.",
        "Europäische Höchstmenge für Zink bei Erwachsenen: 25 mg/Tag. Die HÖRBI-Portion ist 25 mg. Ein zweites hochdosiertes Zinkpräparat am selben Tag liegt darüber.",
        "Livello massimo europeo dello zinco per gli adulti: 25 mg/giorno. La porzione HÖRBI è 25 mg. Un secondo prodotto ricco di zinco lo stesso giorno lo supera."
      ),
    },
    nihZn: {
      id: "nih-zn",
      label: "NIH ODS",
      title: "Zinc — Health Professional Fact Sheet",
      url: "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/",
      note: note(
        "Zinc repletion matters when someone is deficient. Extra zinc does not raise testosterone in people who already have enough. High intakes can interfere with copper. The US adult UL is 40 mg/day.",
        "Восполнение цинка важно при дефиците. У людей без дефицита добавка не поднимает тестостерон. Высокие дозы мешают меди. Американский верхний уровень для взрослых — 40 мг/сутки.",
        "Zink hilft beim Mangel. Bei guter Versorgung hebt es Testosteron nicht. Hohe Mengen stören Kupfer. US-UL für Erwachsene: 40 mg/Tag.",
        "Lo zinco conta se c’è carenza. Se i livelli sono già sufficienti, non alza il testosterone. Dosi alte interferiscono con il rame. UL USA per adulti: 40 mg/giorno."
      ),
    },
  };

  data.categories.push({
    id: "capsules",
    order: 2,
    cover: "media/web/soon-collagen/00.jpg",
    i18n: {
      ru: {
        name: "Капсулы",
        blurb: "Пять баночных формул: две соли магния, инозитол, морской коллаген и тестобустер. Доза — с этикетки, остальное — по источникам.",
      },
      en: {
        name: "Capsules",
        blurb: "Five jar formulas: two magnesium salts, inositol, marine collagen and testobooster. The dose comes from the label; the rest follows the sources.",
      },
      de: {
        name: "Kapseln",
        blurb: "Fünf Formeln: zwei Magnesiumsalze, Inositol, Meereskollagen und Testobooster. Die Dosis steht auf dem Etikett.",
      },
      it: {
        name: "Capsule",
        blurb: "Cinque formule: due sali di magnesio, inositolo, collagene marino e testobooster. La dose è quella in etichetta.",
      },
    },
  });

  function moreRu(skip) {
    var items = [
      ["capsule-magnesium-chelate", "хелат магния"],
      ["capsule-magnesium-citrate", "цитрат магния"],
      ["capsule-inositol", "инозитол"],
      ["capsule-collagen", "морской коллаген"],
      ["capsule-testobooster", "тестобустер"],
    ];
    return (
      "<p>Другие капсулы в журнале: " +
      items
        .filter(function (x) {
          return x[0] !== skip;
        })
        .map(function (x) {
          return '<a href="article.html?id=' + x[0] + '">' + x[1] + "</a>";
        })
        .join(", ") +
      ".</p>"
    );
  }

  function moreEn(skip) {
    var items = [
      ["capsule-magnesium-chelate", "magnesium chelate"],
      ["capsule-magnesium-citrate", "magnesium citrate"],
      ["capsule-inositol", "inositol"],
      ["capsule-collagen", "marine collagen"],
      ["capsule-testobooster", "testobooster"],
    ];
    return (
      "<p>Other capsule notes: " +
      items
        .filter(function (x) {
          return x[0] !== skip;
        })
        .map(function (x) {
          return '<a href="article.html?id=' + x[0] + '">' + x[1] + "</a>";
        })
        .join(", ") +
      ".</p>"
    );
  }

  function shop(wb, lang) {
    var catalog = {
      ru: "Смотреть продукты HÖRBI",
      en: "View HÖRBI products",
      de: "HÖRBI-Produkte ansehen",
      it: "Vedi i prodotti HÖRBI",
    };
    var card = {
      ru: "Карточка на Wildberries",
      en: "Wildberries listing",
      de: "Wildberries-Karte",
      it: "Scheda su Wildberries",
    };
    return (
      '<p><a class="btn btn-dark" href="index.html#products">' +
      catalog[lang] +
      '</a> <a class="btn btn-ghost" href="' +
      wb +
      '" target="_blank" rel="noopener">' +
      card[lang] +
      "</a></p>"
    );
  }

  data.articles.push(
    {
      id: "capsule-magnesium-chelate",
      categoryId: "capsules",
      cover: "media/web/soon-magnesium-chelate/00.jpg",
      images: { hero: "media/web/soon-magnesium-chelate/00.jpg" },
      published: "2026-10-06",
      sources: [SRC.efsaMg, SRC.scfMg, SRC.nihMg, SRC.efsaB6],
      i18n: {
        ru: {
          title: "Хелат магния + B6: 402 мг магния и 6 мг витамина на этикетке",
          kicker: "Журнал · Капсулы · Магний",
          lead:
            "Банка HÖRBI «Хелат магния + B6» — дополнительный источник магния и витамина B6. Суточная доза по таблице состава: 402 мг магния и 6 мг витамина B6 в трёх капсулах. Ниже — как эту цифру читают рядом с европейскими ориентирами, без обещания сна, сердца или «антистресса».",
          readMin: "8 мин",
          sections: [
            {
              h: "Что лежит в капсуле",
              html:
                "<p>Магний — минерал. В пище он приходит с разными солями. «Хелат» на этой банке значит, что в составе указан магния хелат: минерал связан с органической молекулой. Этикетка не называет конкретный лиганд и не даёт массу всей соли. Цифра, которой стоит пользоваться, — содержание магния в суточной дозе.</p>" +
                "<p>Рядом в той же капсуле — витамин B6 в форме пиридоксина гидрохлорида. Его обсуждают вместе с магнием, потому что B6 участвует в обмене, но это не делает пару лекарством от судорог или бессонницы.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-chelate/01.jpg" alt="Банка HÖRBI Хелат магния + B6" width="1045" height="1400" loading="lazy" /><figcaption>Фото банки с карточки товара. Иконки на этикетке — оформление полки. Доза в этой статье взята из таблицы состава.</figcaption></figure>' +
                "<p>Имеет смысл держать три слоя отдельно: что такое вещество, что написано в справочниках и обзорах, и что напечатано на конкретной банке HÖRBI.</p>",
            },
            {
              h: "Суточная доза с банки",
              html:
                "<p>Взрослым — по 1 капсуле 3 раза в день во время еды. Курс на этикетке — 1 месяц, при необходимости его повторяют. Перед применением производитель рекомендует консультацию врача. Масса одной капсулы — 800 мг.</p>" +
                '<div class="dose" aria-label="Суточная доза хелата магния">' +
                '<div class="dose-item"><div class="k">Магний</div><div class="v">402 мг</div><div class="s">3 капсулы · 102%*</div></div>' +
                '<div class="dose-item"><div class="k">Витамин B6</div><div class="v">6 мг</div><div class="s">пиридоксина гидрохлорид · 300%*</div></div>' +
                '<div class="dose-item"><div class="k">Курс</div><div class="v">1 месяц</div><div class="s">1 капсула × 3, с едой</div></div>' +
                "</div>" +
                "<p>Звёздочка на этикетке относится к российской маркировке: «не превышает верхнего допустимого уровня». Состав: магния хелат, желатин оболочки, диоксид кремния (Е551), магниевая или кальциевая соль стеариновой кислоты, витамин B6. Срок годности — 2 года, хранить до +25 °C. Противопоказания: индивидуальная непереносимость, беременность, кормление грудью. СГР AM.01.11.01.003.R.000577.10.24 от 24.10.2024, ТУ 10.89.19-031-26264713-2024.</p>" +
                "<p>На части маркетинговых слайдов магний округляют до 400 мг и отдельно печатают массу соли. В журнале остаётся таблица состава: <strong>402 мг магния</strong>.</p>" +
                '<p class="article-note">Это биологически активная добавка к пище, не лекарство. Текст не ставит диагноз и не заменяет врача.</p>',
            },
            {
              h: "С чем сравнивают 402 мг",
              html:
                "<p><a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4186\" target=\"_blank\" rel=\"noopener\">EFSA в 2015 году</a> оценила адекватное потребление магния с пищей: около 350 мг в сутки для мужчин и 300 мг для женщин. Это описание обычного рациона, а не рекомендация купить добавку на эту сумму.</p>" +
                "<p>Отдельная планка есть у магния именно из добавок. Научный комитет по пище ЕС, и вслед за ним материалы EFSA, поставили верхний уровень <strong>250 мг в сутки</strong> для легко диссоциирующих солей и оксида магния. Повод — мягкий послабляющий эффект: нежелательный эффект замечали примерно с 360–365 мг магния из добавки, а уровень без этого эффекта взяли как 250 мг. Магний из обычной еды в эти 250 мг не засчитывается.</p>" +
                "<p>В <a href=\"https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">справочнике NIH</a> американский верхний уровень магния из добавок и лекарств для взрослых — 350 мг в сутки. 402 мг на банке HÖRBI выше и европейской цифры 250 мг, и американской 350 мг. При этом сноска российской этикетки говорит, что свой верхний допустимый уровень не превышен. Это две разные шкалы, а не опечатка.</p>" +
                "<p>Практическое чтение такое. Европейскую планку снизили до 250 мг из-за возможного послабления стула, а не из-за токсического отравления: опасную гипермагниемию описывают на совсем других, многограммовых дозах. Людям с болезнью почек магний из добавок лучше согласовать с врачом — почки выводят избыток. На банке и так стоит строка про консультацию врача.</p>" +
                "<p>Витамин B6 на этой банке — 6 мг. <a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.8006\" target=\"_blank\" rel=\"noopener\">В 2023 году EFSA</a> установила для взрослых верхний уровень 12 мг в сутки, включая беременность и лактацию: избыток B6 связывают с периферической нейропатией. 6 мг с этикетки ниже этой планки. 300% на банке — процент от рекомендуемого уровня потребления, а не от верхнего.</p>",
            },
            {
              h: "Рядом стоит цитрат, это другая соль",
              html:
                "<p>В линейке есть вторая банка, <a href=\"article.html?id=capsule-magnesium-citrate\">цитрат магния</a>. Там в названии фигурируют 800 мг, а в таблице состава элементарный магний — 480 мг в четырёх капсулах. Витамина B6 столько же, 6 мг. Противопоказания те же. Хелат не «сильнее» и не «слабее» цитрата в этой статье: это две соли и две разные цифры магния.</p>" +
                moreRu("capsule-magnesium-chelate") +
                shop("https://www.wildberries.ru/catalog/1442970838/detail.aspx", "ru"),
            },
          ],
          callouts: [
            { title: "402 мг", text: "Магний в трёх капсулах. Так написано в таблице, не «около 400»." },
            { title: "6 мг B6", text: "Ниже европейского верхнего уровня 12 мг (EFSA, 2023)." },
            { title: "250 мг", text: "Европейский потолок магния из добавок. На банке шкала другая." },
            { title: "Не при беременности", text: "Беременность и кормление грудью — в противопоказаниях." },
          ],
        },
        en: {
          title: "Magnesium chelate + B6: 402 mg of magnesium and 6 mg of vitamin B6",
          kicker: "Journal · Capsules · Magnesium",
          lead:
            "HÖRBI Magnesium chelate + B6 is a food supplement. The specification table gives 402 mg of magnesium and 6 mg of vitamin B6 in three capsules. Here is how that number sits next to European and US reference figures, without a promise about sleep, the heart, or stress.",
          readMin: "7 min read",
          sections: [
            {
              h: "What is in the capsule",
              html:
                "<p>Magnesium is a mineral. “Chelate” on this jar means the composition lists magnesium chelate: the mineral bound to an organic molecule. The label does not name the ligand and does not give the weight of the whole salt. The number to use is the magnesium in a daily serving.</p>" +
                "<p>The same capsule carries vitamin B6 as pyridoxine hydrochloride. Sharing a capsule with magnesium does not make the product a medicine for cramps or insomnia.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-chelate/01.jpg" alt="HÖRBI magnesium chelate bottle" width="1045" height="1400" loading="lazy" /><figcaption>Pack shot from the product card. Icons on the label are shelf design. The dose in this note is the specification table.</figcaption></figure>',
            },
            {
              h: "The labelled daily serving",
              html:
                "<p>Adults: 1 capsule 3 times a day with food. The labelled course is 1 month. The producer recommends asking a doctor before use. One capsule weighs 800 mg.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesium</div><div class="v">402 mg</div><div class="s">3 capsules · 102%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin B6</div><div class="v">6 mg</div><div class="s">pyridoxine hydrochloride · 300%*</div></div>' +
                '<div class="dose-item"><div class="k">Course</div><div class="v">1 month</div><div class="s">1 capsule, 3 times, with food</div></div>' +
                "</div>" +
                "<p>The asterisk is the Russian label note: the amount does not exceed the upper level used on that label. Composition: magnesium chelate, gelatin shell, silicon dioxide (E551), magnesium or calcium stearate, vitamin B6. Shelf life 2 years, store at or below +25 °C. Contraindications: intolerance, pregnancy, breastfeeding. Registration AM.01.11.01.003.R.000577.10.24 of 24 October 2024.</p>" +
                "<p>Some marketplace slides round magnesium to 400 mg and also print a salt weight. This note keeps the table: <strong>402 mg of magnesium</strong>.</p>" +
                '<p class="article-note">A food supplement, not a medicine.</p>',
            },
            {
              h: "How 402 mg compares",
              html:
                "<p><a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4186\" target=\"_blank\" rel=\"noopener\">EFSA in 2015</a> set an adequate intake from the diet of about 350 mg/day for men and 300 mg/day for women. That describes food, not a supplement target.</p>" +
                "<p>Supplemental magnesium has its own ceiling. The EU Scientific Committee on Food, still cited by EFSA, set <strong>250 mg/day</strong> for readily dissociable salts and magnesium oxide, because mild osmotic diarrhoea showed up around 360–365 mg from supplements. Magnesium already in food is outside that 250 mg.</p>" +
                "<p>The <a href=\"https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH fact sheet</a> gives a US upper level of 350 mg/day for magnesium from supplements and medicines in adults. The 402 mg on this jar is above both 250 mg and 350 mg. The Russian label’s asterisk says its own upper level is not exceeded. Those are different scales.</p>" +
                "<p>The European figure is about loose stools, not about gram-scale magnesium toxicity. People with kidney disease should ask a doctor before supplemental magnesium, because the kidneys clear the excess. The label already asks for that conversation.</p>" +
                "<p>Vitamin B6 here is 6 mg. <a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.8006\" target=\"_blank\" rel=\"noopener\">EFSA in 2023</a> set an adult upper level of 12 mg/day, including pregnancy and lactation, because of peripheral neuropathy at higher intakes. Six milligrams sits under that level. The “300%” on the jar is a share of the reference intake, not of the upper level.</p>",
            },
            {
              h: "Citrate is the other salt",
              html:
                "<p>The line also has <a href=\"article.html?id=capsule-magnesium-citrate\">magnesium citrate</a>. The name says 800 mg; the table says 480 mg of elemental magnesium in four capsules, plus the same 6 mg of vitamin B6. This note does not rank the two salts.</p>" +
                moreEn("capsule-magnesium-chelate") +
                shop("https://www.wildberries.ru/catalog/1442970838/detail.aspx", "en"),
            },
          ],
          callouts: [
            { title: "402 mg", text: "Magnesium in three capsules, from the table." },
            { title: "6 mg B6", text: "Under the 2023 EFSA upper level of 12 mg." },
            { title: "250 mg", text: "EU ceiling for supplemental magnesium. The jar uses another scale." },
            { title: "Not in pregnancy", text: "Pregnancy and breastfeeding are contraindications." },
          ],
        },
        de: {
          title: "Magnesiumchelat + B6: 402 mg Magnesium und 6 mg Vitamin B6",
          kicker: "Journal · Kapseln · Magnesium",
          lead:
            "Die Tagesportion laut Tabelle: 402 mg Magnesium und 6 mg Vitamin B6 in drei Kapseln. So liegt die Zahl neben den europäischen Orientierungswerten — ohne Versprechen zu Schlaf oder Herz.",
          readMin: "5 Min.",
          sections: [
            {
              h: "Was auf dem Etikett steht",
              html:
                "<p>Die Zusammensetzung nennt Magnesiumchelat, ohne den Liganden und ohne das Gewicht des ganzen Salzes. Maßgeblich sind 402 mg Magnesium. Vitamin B6 liegt als Pyridoxinhydrochlorid daneben. Erwachsene nehmen 1 Kapsel 3-mal täglich zum Essen, die Kur dauert 1 Monat. Eine Kapsel wiegt 800 mg.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesium</div><div class="v">402 mg</div><div class="s">3 Kapseln · 102%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin B6</div><div class="v">6 mg</div><div class="s">300%* der Referenz</div></div>' +
                '<div class="dose-item"><div class="k">Kur</div><div class="v">1 Monat</div><div class="s">1 Kapsel, 3-mal, zum Essen</div></div>' +
                "</div>" +
                "<p>Der Stern ist der russische Hinweis, dass die eigene Höchstmenge nicht überschritten sei. Haltbarkeit 2 Jahre, bis +25 °C. Kontraindikationen: Unverträglichkeit, Schwangerschaft, Stillzeit. Registrierung AM.01.11.01.003.R.000577.10.24 vom 24.10.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-chelate/00.jpg" alt="HÖRBI Magnesiumchelat" width="1045" height="1400" loading="lazy" /><figcaption>Packshot. Marktgrafiken runden Magnesium teils auf 400 mg. Hier gilt die Tabelle: 402 mg.</figcaption></figure>',
            },
            {
              h: "402 mg und die europäischen Zahlen",
              html:
                "<p>EFSA nennt für die Nahrung eine angemessene Zufuhr von etwa 350 mg/Tag für Männer und 300 mg für Frauen. Für Magnesium aus Ergänzungen gilt ein anderer Deckel: 250 mg/Tag für leicht lösliche Salze und Magnesiumoxid, wegen milder osmotischer Diarrhö. Das NIH-Merkblatt nennt für Ergänzungen und Arzneimittel 350 mg/Tag. 402 mg liegen über beiden Werten. Die russische Fußnote benutzt eine andere Skala.</p>" +
                "<p>Bei Nierenerkrankung Magnesium aus Ergänzungen mit einer Ärztin oder einem Arzt klären. Vitamin B6 ist hier 6 mg. EFSA hat 2023 für Erwachsene 12 mg/Tag als Obergrenze gesetzt, wegen peripherer Neuropathie. 6 mg liegen darunter.</p>" +
                '<p class="article-note">Nahrungsergänzungsmittel, kein Arzneimittel.</p>',
            },
            {
              h: "Die andere Magnesiumbank",
              html:
                "<p><a href=\"article.html?id=capsule-magnesium-citrate\">Magnesiumcitrat</a> trägt 800 mg im Namen und 480 mg elementares Magnesium in der Tabelle, plus dieselben 6 mg B6.</p>" +
                shop("https://www.wildberries.ru/catalog/1442970838/detail.aspx", "de"),
            },
          ],
          callouts: [
            { title: "402 mg", text: "Magnesium in drei Kapseln, laut Tabelle." },
            { title: "6 mg B6", text: "Unter der EFSA-Grenze von 12 mg (2023)." },
            { title: "250 mg", text: "EU-Deckel für Magnesium aus Ergänzungen." },
            { title: "Nicht in der Schwangerschaft", text: "Schwangerschaft und Stillzeit sind ausgeschlossen." },
          ],
        },
        it: {
          title: "Chelato di magnesio + B6: 402 mg di magnesio e 6 mg di vitamina B6",
          kicker: "Journal · Capsule · Magnesio",
          lead:
            "La dose giornaliera in tabella è 402 mg di magnesio e 6 mg di vitamina B6 in tre capsule. Ecco come si legge accanto ai riferimenti europei, senza promesse su sonno o cuore.",
          readMin: "5 min",
          sections: [
            {
              h: "Cosa c’è in etichetta",
              html:
                "<p>La composizione indica chelato di magnesio, senza nominare il legante e senza il peso del sale intero. Il numero da usare è 402 mg di magnesio. La vitamina B6 è piridossina cloridrato. Adulti: 1 capsula 3 volte al giorno con i pasti, ciclo di 1 mese. Una capsula pesa 800 mg.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesio</div><div class="v">402 mg</div><div class="s">3 capsule · 102%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamina B6</div><div class="v">6 mg</div><div class="s">300%* del riferimento</div></div>' +
                '<div class="dose-item"><div class="k">Ciclo</div><div class="v">1 mese</div><div class="s">1 capsula, 3 volte, coi pasti</div></div>' +
                "</div>" +
                "<p>L’asterisco è la nota russa: non si supera il livello massimo usato su quell’etichetta. Scadenza 2 anni, fino a +25 °C. Controindicazioni: intolleranza, gravidanza, allattamento. Registrazione AM.01.11.01.003.R.000577.10.24 del 24.10.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-chelate/00.jpg" alt="HÖRBI chelato di magnesio" width="1045" height="1400" loading="lazy" /><figcaption>Foto del barattolo. Alcune grafiche arrotondano a 400 mg. Qui vale la tabella: 402 mg.</figcaption></figure>',
            },
            {
              h: "402 mg e i livelli europei",
              html:
                "<p>EFSA indica un’assunzione adeguata dalla dieta di circa 350 mg/giorno per gli uomini e 300 mg per le donne. Per il magnesio dagli integratori il tetto europeo è 250 mg/giorno per i sali facilmente dissociabili e l’ossido, a causa di una lieve diarrea osmotica. Il foglio NIH indica 350 mg/giorno da integratori e farmaci. 402 mg stanno sopra entrambe le cifre. La nota russa usa un’altra scala.</p>" +
                "<p>Con malattie renali il magnesio da integratore va concordato con il medico. La vitamina B6 è 6 mg. Nel 2023 EFSA ha fissato 12 mg/giorno per gli adulti, per la neuropatia periferica. 6 mg stanno sotto quel livello.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale.</p>',
            },
            {
              h: "L’altro sale di magnesio",
              html:
                "<p>Il <a href=\"article.html?id=capsule-magnesium-citrate\">citrato di magnesio</a> ha 800 mg nel nome e 480 mg di magnesio elementare in tabella, più gli stessi 6 mg di B6.</p>" +
                shop("https://www.wildberries.ru/catalog/1442970838/detail.aspx", "it"),
            },
          ],
          callouts: [
            { title: "402 mg", text: "Magnesio in tre capsule, dalla tabella." },
            { title: "6 mg di B6", text: "Sotto il livello EFSA di 12 mg (2023)." },
            { title: "250 mg", text: "Tetto UE per il magnesio dagli integratori." },
            { title: "Non in gravidanza", text: "Gravidanza e allattamento sono controindicazioni." },
          ],
        },
      },
    },
    {
      id: "capsule-magnesium-citrate",
      categoryId: "capsules",
      cover: "media/web/soon-magnesium-citrate/00.jpg",
      images: { hero: "media/web/soon-magnesium-citrate/00.jpg" },
      published: "2026-10-06",
      sources: [SRC.efsaMg, SRC.scfMg, SRC.nihMg, SRC.efsaB6],
      i18n: {
        ru: {
          title: "Цитрат магния: в названии 800 мг, в таблице — 480 мг магния",
          kicker: "Журнал · Капсулы · Магний",
          lead:
            "У банки два числа, и они про разное. «800 мг» стоит в названии продукта. В таблице состава суточная доза — 480 мг магния и 6 мг витамина B6 в четырёх капсулах. Статья держится за таблицу.",
          readMin: "7 мин",
          sections: [
            {
              h: "Соль и элементарный магний",
              html:
                "<p>Цитрат магния — соль. В её массе есть и магний, и цитрат. Название «Цитрат магния 800 мг + B6» использует 800 мг как имя формулы. Сколько магния человек получает за сутки, напечатано отдельно: 480 мг в четырёх капсулах.</p>" +
                "<p>Маркетинговый слайд может показывать несколько граммов самого цитрата. Это вес соли, если он вообще совпадает с рецептурой, а не строка «магний» из таблицы. В журнале не используется цифра 3200 мг. Используется 480 мг магния.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-citrate/01.jpg" alt="Банка HÖRBI Цитрат магния + B6" width="1045" height="1400" loading="lazy" /><figcaption>Фото банки. Название говорит «800 мг». Суточный магний в спецификации — 480 мг.</figcaption></figure>',
            },
            {
              h: "Суточная доза с банки",
              html:
                "<p>Взрослым — по 2 капсулы 2 раза в день во время еды. Курс — 1 месяц. Масса одной капсулы — 1120 мг. Перед применением рекомендуется консультация врача.</p>" +
                '<div class="dose" aria-label="Суточная доза цитрата магния">' +
                '<div class="dose-item"><div class="k">Магний</div><div class="v">480 мг</div><div class="s">4 капсулы · 120%*</div></div>' +
                '<div class="dose-item"><div class="k">Витамин B6</div><div class="v">6 мг</div><div class="s">300%* · не верхний уровень</div></div>' +
                '<div class="dose-item"><div class="k">В названии</div><div class="v">800 мг</div><div class="s">имя формулы, не строка «магний»</div></div>' +
                "</div>" +
                "<p>Состав: магния цитрат, микрокристаллическая целлюлоза (Е460), желатин оболочки, диоксид кремния (Е551), магниевая или кальциевая соль стеариновой кислоты, витамин B6. Срок годности — 3 года, хранить до +25 °C. Противопоказания: индивидуальная непереносимость, беременность, кормление грудью. СГР AM.01.11.01.003.R.000155.03.24 от 04.03.2024, ТУ 10.89.19-009-26264713-2023. Звёздочка снова про российскую сноску: верхний допустимый уровень на этой маркировке не превышен.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство.</p>',
            },
            {
              h: "480 мг и чужие потолки",
              html:
                "<p>Адекватное потребление магния с едой у <a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4186\" target=\"_blank\" rel=\"noopener\">EFSA</a> — около 350 мг для мужчин и 300 мг для женщин. Верхний уровень магния из добавок в материалах SCF/EFSA — <strong>250 мг в сутки</strong> для легко диссоциирующих солей, из-за мягкого послабления стула. <a href=\"https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH</a> для добавок и лекарств указывает 350 мг. 480 мг элементарного магния выше обеих цифр. Российская сноска при этом говорит, что свой верхний уровень не превышен.</p>" +
                "<p>Цитрат как раз относится к солям, из-за которых эту европейскую планку и обсуждают: осмотический эффект в кишечнике. Кому стул и так нестабилен, это повод начать с разговора с врачом, а не с максимальной банки. При болезни почек магний из добавок тоже согласуют с врачом.</p>" +
                "<p>Витамин B6 — те же 6 мг, что у хелата. Верхний уровень EFSA 2023 года для взрослых — 12 мг в сутки. 6 мг ниже. Процент 300% на банке считается от рекомендуемого потребления, не от потолка.</p>",
            },
            {
              h: "Как не перепутать с хелатом",
              html:
                "<p><a href=\"article.html?id=capsule-magnesium-chelate\">Хелат</a> даёт 402 мг магния в трёх капсулах массой 800 мг, курс тоже месяц, B6 тоже 6 мг. Цитрат — 480 мг магния в четырёх более тяжёлых капсулах, и в составе есть целлюлоза Е460. Выбор между ними эта статья не делает.</p>" +
                moreRu("capsule-magnesium-citrate") +
                shop("https://www.wildberries.ru/catalog/1443005218/detail.aspx", "ru"),
            },
          ],
          callouts: [
            { title: "480 мг", text: "Элементарный магний в четырёх капсулах." },
            { title: "800 мг", text: "Стоит в названии. Это не строка «магний» в таблице." },
            { title: "6 мг B6", text: "Ниже европейских 12 мг для витамина B6." },
            { title: "Стул", text: "Европейские 250 мг как раз про послабление от солей магния." },
          ],
        },
        en: {
          title: "Magnesium citrate: the name says 800 mg, the table says 480 mg",
          kicker: "Journal · Capsules · Magnesium",
          lead:
            "The two numbers describe different things. “800 mg” is in the product name. The specification table lists 480 mg of magnesium and 6 mg of vitamin B6 in four capsules. This note follows the table.",
          readMin: "6 min read",
          sections: [
            {
              h: "Salt weight and elemental magnesium",
              html:
                "<p>Magnesium citrate is a salt. Its mass includes both magnesium and citrate. The name “Magnesium citrate 800 mg + B6” uses 800 mg as the formula’s name. The daily magnesium is printed separately: 480 mg in four capsules.</p>" +
                "<p>A marketplace slide can show several grams of citrate. That is a salt weight, not the “magnesium” row. This note does not use 3200 mg. It uses 480 mg of magnesium.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-citrate/01.jpg" alt="HÖRBI magnesium citrate bottle" width="1045" height="1400" loading="lazy" /><figcaption>Pack shot. The name says 800 mg. Specified daily magnesium is 480 mg.</figcaption></figure>',
            },
            {
              h: "The labelled daily serving",
              html:
                "<p>Adults: 2 capsules twice a day with food, for 1 month. One capsule weighs 1120 mg. Ask a doctor before use.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesium</div><div class="v">480 mg</div><div class="s">4 capsules · 120%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin B6</div><div class="v">6 mg</div><div class="s">300% of the reference intake</div></div>' +
                '<div class="dose-item"><div class="k">In the name</div><div class="v">800 mg</div><div class="s">formula name, not the magnesium row</div></div>' +
                "</div>" +
                "<p>Composition: magnesium citrate, microcrystalline cellulose (E460), gelatin, silicon dioxide (E551), magnesium or calcium stearate, vitamin B6. Shelf life 3 years, store at or below +25 °C. Contraindications: intolerance, pregnancy, breastfeeding. Registration AM.01.11.01.003.R.000155.03.24 of 4 March 2024.</p>" +
                '<p class="article-note">A food supplement, not a medicine.</p>',
            },
            {
              h: "480 mg next to other ceilings",
              html:
                "<p><a href=\"https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2015.4186\" target=\"_blank\" rel=\"noopener\">EFSA</a> adequate intake from food is about 350 mg for men and 300 mg for women. The SCF/EFSA supplemental ceiling is <strong>250 mg/day</strong> for readily dissociable salts, because of mild diarrhoea. <a href=\"https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH</a> lists 350 mg/day from supplements and medicines. 480 mg of elemental magnesium is above both. The Russian asterisk says that label’s own upper level is not exceeded.</p>" +
                "<p>Citrate is one of the salts that conversation is about. People with loose stools, and people with kidney disease, should talk to a doctor first. Vitamin B6 is the same 6 mg as in the chelate, under the 2023 EFSA adult level of 12 mg/day.</p>",
            },
            {
              h: "Do not mix it up with the chelate",
              html:
                "<p>The <a href=\"article.html?id=capsule-magnesium-chelate\">chelate</a> provides 402 mg of magnesium in three 800 mg capsules. Citrate provides 480 mg in four heavier capsules and includes cellulose E460. This note does not pick a winner.</p>" +
                moreEn("capsule-magnesium-citrate") +
                shop("https://www.wildberries.ru/catalog/1443005218/detail.aspx", "en"),
            },
          ],
          callouts: [
            { title: "480 mg", text: "Elemental magnesium in four capsules." },
            { title: "800 mg", text: "In the product name, not in the magnesium row." },
            { title: "6 mg B6", text: "Under the European 12 mg level for vitamin B6." },
            { title: "Stools", text: "The EU 250 mg figure is about loose stools from magnesium salts." },
          ],
        },
        de: {
          title: "Magnesiumcitrat: im Namen 800 mg, in der Tabelle 480 mg",
          kicker: "Journal · Kapseln · Magnesium",
          lead:
            "800 mg steht im Produktnamen. Die Tabelle nennt 480 mg Magnesium und 6 mg Vitamin B6 in vier Kapseln. Dieser Text folgt der Tabelle.",
          readMin: "5 Min.",
          sections: [
            {
              h: "Salzgewicht und elementares Magnesium",
              html:
                "<p>Magnesiumcitrat ist ein Salz. Die 800 mg im Namen sind nicht die Zeile „Magnesium“. Die Tagesmenge Magnesium ist 480 mg in vier Kapseln à 1120 mg. Erwachsene: 2 Kapseln 2-mal täglich zum Essen, Kur 1 Monat. Marktgrafiken mit mehreren Gramm Citrat benutzt dieser Text nicht.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesium</div><div class="v">480 mg</div><div class="s">4 Kapseln · 120%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin B6</div><div class="v">6 mg</div><div class="s">dieselbe Menge wie beim Chelat</div></div>' +
                '<div class="dose-item"><div class="k">Im Namen</div><div class="v">800 mg</div><div class="s">Formelname, nicht die Magnesiumzeile</div></div>' +
                "</div>" +
                "<p>Zusammensetzung mit Citrat und mikrokristalliner Cellulose (E460). Haltbarkeit 3 Jahre. Kontraindikationen: Unverträglichkeit, Schwangerschaft, Stillzeit. Registrierung AM.01.11.01.003.R.000155.03.24 vom 04.03.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-citrate/00.jpg" alt="HÖRBI Magnesiumcitrat" width="1045" height="1400" loading="lazy" /><figcaption>Packshot. Maßgeblich sind 480 mg Magnesium, nicht die Grammzahl eines Werbeslides.</figcaption></figure>',
            },
            {
              h: "480 mg neben 250 mg",
              html:
                "<p>Die angemessene Zufuhr aus Lebensmitteln liegt bei EFSA um 350 mg für Männer und 300 mg für Frauen. Für Ergänzungen gilt 250 mg/Tag bei leicht löslichen Salzen, wegen milder Diarrhö. NIH nennt 350 mg/Tag aus Ergänzungen und Arzneimitteln. 480 mg liegen darüber. Die russische Fußnote verweist auf eine andere Skala. Bei weichem Stuhl oder Nierenkrankheit zuerst ärztlich klären. Vitamin B6: 6 mg, unter der EFSA-Grenze von 12 mg (2023).</p>" +
                '<p class="article-note">Nahrungsergänzungsmittel, kein Arzneimittel.</p>',
            },
            {
              h: "Nicht mit dem Chelat verwechseln",
              html:
                "<p>Das <a href=\"article.html?id=capsule-magnesium-chelate\">Chelat</a> liefert 402 mg Magnesium in drei Kapseln. Eine Rangliste gibt es hier nicht.</p>" +
                shop("https://www.wildberries.ru/catalog/1443005218/detail.aspx", "de"),
            },
          ],
          callouts: [
            { title: "480 mg", text: "Elementares Magnesium in vier Kapseln." },
            { title: "800 mg", text: "Steht im Namen, nicht in der Magnesiumzeile." },
            { title: "6 mg B6", text: "Unter 12 mg nach EFSA 2023." },
            { title: "Stuhl", text: "Die europäischen 250 mg betreffen weichen Stuhl." },
          ],
        },
        it: {
          title: "Citrato di magnesio: nel nome 800 mg, in tabella 480 mg",
          kicker: "Journal · Capsule · Magnesio",
          lead:
            "800 mg è nel nome del prodotto. La tabella indica 480 mg di magnesio e 6 mg di vitamina B6 in quattro capsule. Questo testo segue la tabella.",
          readMin: "5 min",
          sections: [
            {
              h: "Peso del sale e magnesio elementare",
              html:
                "<p>Il citrato di magnesio è un sale. Gli 800 mg del nome non sono la riga «magnesio». Il magnesio giornaliero è 480 mg in quattro capsule da 1120 mg. Adulti: 2 capsule 2 volte al giorno con i pasti, ciclo di 1 mese. Questo testo non usa i grammi di citrato stampati su alcune grafiche.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Magnesio</div><div class="v">480 mg</div><div class="s">4 capsule · 120%*</div></div>' +
                '<div class="dose-item"><div class="k">Vitamina B6</div><div class="v">6 mg</div><div class="s">come nel chelato</div></div>' +
                '<div class="dose-item"><div class="k">Nel nome</div><div class="v">800 mg</div><div class="s">nome della formula, non la riga magnesio</div></div>' +
                "</div>" +
                "<p>Composizione con citrato e cellulosa microcristallina (E460). Scadenza 3 anni. Controindicazioni: intolleranza, gravidanza, allattamento. Registrazione AM.01.11.01.003.R.000155.03.24 del 04.03.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-magnesium-citrate/00.jpg" alt="HÖRBI citrato di magnesio" width="1045" height="1400" loading="lazy" /><figcaption>Foto del barattolo. Conta 480 mg di magnesio, non i grammi di una slide.</figcaption></figure>',
            },
            {
              h: "480 mg accanto a 250 mg",
              html:
                "<p>L’assunzione adeguata dalla dieta, per EFSA, è circa 350 mg per gli uomini e 300 mg per le donne. Per gli integratori il tetto è 250 mg/giorno per i sali facilmente dissociabili, per la lieve diarrea. NIH indica 350 mg/giorno da integratori e farmaci. 480 mg stanno sopra. La nota russa usa un’altra scala. Con feci molli o malattia renale, prima il medico. Vitamina B6: 6 mg, sotto i 12 mg EFSA del 2023.</p>" +
                '<p class="article-note">Integratore alimentare, non un medicinale.</p>',
            },
            {
              h: "Non confonderlo con il chelato",
              html:
                "<p>Il <a href=\"article.html?id=capsule-magnesium-chelate\">chelato</a> apporta 402 mg di magnesio in tre capsule. Qui non c’è una classifica.</p>" +
                shop("https://www.wildberries.ru/catalog/1443005218/detail.aspx", "it"),
            },
          ],
          callouts: [
            { title: "480 mg", text: "Magnesio elementare in quattro capsule." },
            { title: "800 mg", text: "Nel nome, non nella riga del magnesio." },
            { title: "6 mg di B6", text: "Sotto i 12 mg EFSA del 2023." },
            { title: "Feci", text: "I 250 mg europei riguardano la diarrea lieve." },
          ],
        },
      },
    },
    {
      id: "capsule-inositol",
      categoryId: "capsules",
      cover: "media/web/soon-inositol/00.jpg",
      images: { hero: "media/web/soon-inositol/00.jpg" },
      published: "2026-10-06",
      sources: [SRC.pcos, SRC.nihFolate],
      i18n: {
        ru: {
          title: "Инозитол и фолиевая кислота: 1000 мг и 400 мкг, не «витамин для цикла»",
          kicker: "Журнал · Капсулы · Инозитол",
          lead:
            "На банке HÖRBI — мио-инозитол 1000 мг и фолиевая кислота 400 мкг в двух капсулах. «Витамин B8» в маркировке — старое имя, не официальный витамин. Беременность и кормление грудью у этого продукта в противопоказаниях, несмотря на фолат в составе.",
          readMin: "8 мин",
          sections: [
            {
              h: "Мио-инозитол — не витамин из букваря",
              html:
                "<p>Мио-инозитол организм умеет синтезировать сам, он есть и в пище. Когда-то его записывали в ряд «витаминов группы B» под номером B8. Сегодня это историческое название. На этикетке HÖRBI оно сохранено: «инозитол (витамин B8)». Рядом — настоящий витамин B9, фолиевая кислота.</p>" +
                "<p>Интерес к мио-инозитолу в последние годы связан в основном с синдромом поликистозных яичников: обменом, овуляцией, самочувствием. Это исследовательский сюжет, а не разрешение писать на банке «лечит цикл».</p>" +
                '<figure class="article-figure"><img src="media/web/soon-inositol/01.jpg" alt="Банка HÖRBI Инозитол и фолиевая кислота" width="1045" height="1400" loading="lazy" /><figcaption>Фото банки. На части слайдов встречается 1400 мг. В таблице состава — 1000 мг инозитола.</figcaption></figure>',
            },
            {
              h: "Суточная доза с банки",
              html:
                "<p>Взрослым — 2 капсулы в день во время еды. Курс — 1 месяц. Масса капсулы — 620 мг. В банке 120 капсул, при двух в день это примерно 60 дней приёма. Курс на этикетке короче: один месяц.</p>" +
                '<div class="dose" aria-label="Суточная доза инозитола">' +
                '<div class="dose-item"><div class="k">Инозитол</div><div class="v">1000 мг</div><div class="s">2 капсулы · 200%* АУП</div></div>' +
                '<div class="dose-item"><div class="k">Фолиевая кислота</div><div class="v">400 мкг</div><div class="s">витамин B9 · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Курс</div><div class="v">1 месяц</div><div class="s">не при беременности и ГВ</div></div>' +
                "</div>" +
                "<p>Состав: мио-инозит, желатин оболочки, диоксид кремния, магниевая соль стеариновой кислоты, фолиевая кислота. Срок годности — 3 года, хранить до +25 °C. Противопоказания: индивидуальная непереносимость, <strong>беременность, кормление грудью</strong>. СГР AM.01.11.01.003.R.000073.02.24 от 07.02.2024, ТУ 10.89.19-001-26264713-2023.</p>" +
                "<p>Фолиевую кислоту часто обсуждают как раз при планировании беременности. У этой конкретной банки беременность и кормление вынесены в противопоказания. Вопрос фолатов в эти периоды решается с врачом и другим назначением, не этой этикеткой. 400 мкг на банке отмечены как 200% адекватного уровня, который использует маркировка.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство. Материал не для лечения СПКЯ, бесплодия или нарушений цикла.</p>',
            },
            {
              h: "Что говорит руководство по СПКЯ 2023 года",
              html:
                "<p><a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/\" target=\"_blank\" rel=\"noopener\">Международное руководство по СПКЯ 2023 года</a> (Teede и соавторы) говорит об инозитоле осторожно. В любой форме его можно рассматривать, если женщина сама этого хочет: вред в имеющихся данных выглядит ограниченным, по обменным показателям есть возможное улучшение, а клиническая польза для овуляции, гирсутизма и веса — ограниченная. Конкретный тип, дозу или сочетание руководство рекомендовать не стало: качественных данных не хватает.</p>" +
                "<p>Отдельная строка — про бесплодие. Там инозитол в любой форме, один или вместе с другой терапией, предлагают считать экспериментальным подходом. Польза и риск слишком неопределённы, чтобы рекомендовать его как лечение бесплодия.</p>" +
                "<p>В исследованиях суточные количества мио-инозитола часто выше 1000 мг и нередко идут вместе с фолиевой кислотой. Руководство всё равно не выбирает «правильную» дозу. 1000 мг на банке HÖRBI — доза этого продукта, а не протокол из руководства. Переносить на эту банку выводы чужих схем нельзя. Метаболические иконки и слово fertility на макетах полки остаются макетами.</p>",
            },
            {
              h: "Как это читать",
              html:
                "<p>Банка — источник мио-инозитола и фолиевой кислоты в указанных миллиграммах и микрограммах. Она не назначается при беременности и кормлении. Она не заменяет метформин, контрацепцию или помощь репродуктолога. Если тема СПКЯ уже есть, её ведут с врачом; про добавку ему тоже говорят — так прямо советует и руководство.</p>" +
                moreRu("capsule-inositol") +
                shop("https://www.wildberries.ru/catalog/1443066606/detail.aspx", "ru"),
            },
          ],
          callouts: [
            { title: "1000 мг", text: "Инозитол в двух капсулах. Не 1400 мг со слайда." },
            { title: "400 мкг", text: "Фолиевая кислота. 200% от уровня на этой маркировке." },
            { title: "Не витамин B8", text: "Так написано по старой привычке. Официального витамина B8 нет." },
            { title: "Не при беременности", text: "Даже с фолатом в составе: противопоказание на банке." },
          ],
        },
        en: {
          title: "Inositol and folic acid: 1000 mg and 400 µg, not a cycle vitamin",
          kicker: "Journal · Capsules · Inositol",
          lead:
            "The HÖRBI jar provides 1000 mg of myo-inositol and 400 µg of folic acid in two capsules. “Vitamin B8” on the label is an old name, not an official vitamin. Pregnancy and breastfeeding are contraindications, even though folate is in the capsule.",
          readMin: "7 min read",
          sections: [
            {
              h: "Myo-inositol is not a textbook vitamin",
              html:
                "<p>The body makes myo-inositol, and it is also in food. It was once filed as “vitamin B8”. That name is historical. The HÖRBI label still prints “inositol (vitamin B8)” next to real vitamin B9, folic acid.</p>" +
                "<p>Recent interest is mostly about polycystic ovary syndrome. That is a research topic, not permission to claim the jar treats a cycle.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-inositol/01.jpg" alt="HÖRBI inositol and folic acid bottle" width="1045" height="1400" loading="lazy" /><figcaption>Pack shot. Some slides say 1400 mg. The specification table says 1000 mg of inositol.</figcaption></figure>',
            },
            {
              h: "The labelled daily serving",
              html:
                "<p>Adults: 2 capsules a day with food, for 1 month. One capsule weighs 620 mg. A 120-capsule jar at two a day lasts about 60 days. The labelled course is one month.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Inositol</div><div class="v">1000 mg</div><div class="s">2 capsules · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Folic acid</div><div class="v">400 µg</div><div class="s">vitamin B9 · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Course</div><div class="v">1 month</div><div class="s">not in pregnancy or breastfeeding</div></div>' +
                "</div>" +
                "<p>Composition: myo-inositol, gelatin, silicon dioxide, magnesium stearate, folic acid. Shelf life 3 years. Contraindications: intolerance, <strong>pregnancy, breastfeeding</strong>. Registration AM.01.11.01.003.R.000073.02.24 of 7 February 2024.</p>" +
                "<p>Folate is often discussed when planning a pregnancy. This jar lists pregnancy and breastfeeding as contraindications. Folate in those periods is a separate medical question. The 400 µg is marked as 200% of the adequate level this label uses.</p>" +
                '<p class="article-note">A food supplement, not a medicine, and not a treatment for PCOS, infertility, or cycle disorders.</p>',
            },
            {
              h: "What the 2023 PCOS guideline actually says",
              html:
                "<p>The <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/\" target=\"_blank\" rel=\"noopener\">2023 international PCOS guideline</a> is cautious. Inositol in any form could be considered if a woman wants it: harm in the available data looks limited, metabolic measures might improve, and clinical benefit for ovulation, hirsutism and weight is limited. The guideline does not recommend a specific type, dose or combination.</p>" +
                "<p>For infertility, inositol alone or with other treatment is described as experimental. Benefit and risk are too uncertain to recommend it as fertility therapy.</p>" +
                "<p>Trials often use more than 1000 mg of myo-inositol a day, frequently with folic acid. The guideline still does not crown a dose. 1000 mg is the dose of this product, not a protocol from the guideline. Fertility icons on marketplace art stay marketplace art.</p>",
            },
            {
              h: "How to read the jar",
              html:
                "<p>It is a source of myo-inositol and folic acid at the amounts above. It is not for pregnancy or breastfeeding. It does not replace metformin, contraception, or a fertility clinic. If PCOS is already part of someone’s care, the guideline itself says to tell the clinician about inositol.</p>" +
                moreEn("capsule-inositol") +
                shop("https://www.wildberries.ru/catalog/1443066606/detail.aspx", "en"),
            },
          ],
          callouts: [
            { title: "1000 mg", text: "Inositol in two capsules. Not the 1400 mg on a slide." },
            { title: "400 µg", text: "Folic acid, 200% of the level this label uses." },
            { title: "Not vitamin B8", text: "An old nickname. There is no official vitamin B8." },
            { title: "Not in pregnancy", text: "A contraindication on this jar, folate included." },
          ],
        },
        de: {
          title: "Inositol und Folsäure: 1000 mg und 400 µg",
          kicker: "Journal · Kapseln · Inositol",
          lead:
            "Zwei Kapseln liefern 1000 mg Myo-Inositol und 400 µg Folsäure. „Vitamin B8“ ist ein alter Name. Schwangerschaft und Stillzeit stehen trotzdem in den Kontraindikationen.",
          readMin: "5 Min.",
          sections: [
            {
              h: "Dosis laut Etikett",
              html:
                "<p>Myo-Inositol stellt der Körper selbst her. Die Bezeichnung B8 ist historisch. Erwachsene nehmen 2 Kapseln täglich zum Essen, Kur 1 Monat. Eine Kapsel wiegt 620 mg. Manche Werbeslides nennen 1400 mg. Die Tabelle nennt 1000 mg.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Inositol</div><div class="v">1000 mg</div><div class="s">2 Kapseln · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Folsäure</div><div class="v">400 µg</div><div class="s">Vitamin B9 · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Kur</div><div class="v">1 Monat</div><div class="s">nicht in Schwangerschaft und Stillzeit</div></div>' +
                "</div>" +
                "<p>Kontraindikationen: Unverträglichkeit, Schwangerschaft, Stillzeit. Registrierung AM.01.11.01.003.R.000073.02.24 vom 07.02.2024. Folsäure wird oft rund um eine Schwangerschaft besprochen. Diese Packung schließt Schwangerschaft und Stillzeit aus.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-inositol/00.jpg" alt="HÖRBI Inositol" width="1045" height="1400" loading="lazy" /><figcaption>Packshot. Maßgeblich sind 1000 mg Inositol und 400 µg Folsäure.</figcaption></figure>' +
                '<p class="article-note">Nahrungsergänzungsmittel, kein Arzneimittel und keine PCOS-Therapie.</p>',
            },
            {
              h: "Die PCOS-Leitlinie von 2023",
              html:
                "<p>Die <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/\" target=\"_blank\" rel=\"noopener\">internationale Leitlinie</a> erlaubt, Inositol nach Wunsch zu erwägen: begrenzter Schaden in den Daten, möglicher Stoffwechseleffekt, begrenzter klinischer Nutzen für Eisprung, Hirsutismus und Gewicht. Eine konkrete Dosis wird nicht empfohlen. Bei Infertilität gilt Inositol als experimentell und wird nicht als Fruchtbarkeitstherapie empfohlen. Studien nutzen oft mehr als 1000 mg. Das ist nicht automatisch die Dosis dieser Packung.</p>",
            },
            {
              h: "Lesen, nicht übersetzen",
              html:
                "<p>Die Kapsel ist eine Quelle von Myo-Inositol und Folsäure in den genannten Mengen. Sie ersetzt weder Metformin noch eine Fertilitätssprechstunde.</p>" +
                shop("https://www.wildberries.ru/catalog/1443066606/detail.aspx", "de"),
            },
          ],
          callouts: [
            { title: "1000 mg", text: "Inositol in zwei Kapseln, nicht 1400 mg." },
            { title: "400 µg", text: "Folsäure, 200% der Angabe auf diesem Etikett." },
            { title: "Kein Vitamin B8", text: "Ein alter Name, kein offizielles Vitamin." },
            { title: "Nicht in der Schwangerschaft", text: "Steht ausdrücklich auf der Packung." },
          ],
        },
        it: {
          title: "Inositolo e acido folico: 1000 mg e 400 µg",
          kicker: "Journal · Capsule · Inositolo",
          lead:
            "Due capsule apportano 1000 mg di mio-inositolo e 400 µg di acido folico. «Vitamina B8» è un nome storico. Gravidanza e allattamento restano controindicazioni.",
          readMin: "5 min",
          sections: [
            {
              h: "Dose in etichetta",
              html:
                "<p>Il corpo produce mio-inositolo. Il nome B8 è storico. Adulti: 2 capsule al giorno con i pasti, ciclo di 1 mese. Una capsula pesa 620 mg. Alcune grafiche indicano 1400 mg. La tabella indica 1000 mg.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Inositolo</div><div class="v">1000 mg</div><div class="s">2 capsule · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Acido folico</div><div class="v">400 µg</div><div class="s">vitamina B9 · 200%*</div></div>' +
                '<div class="dose-item"><div class="k">Ciclo</div><div class="v">1 mese</div><div class="s">non in gravidanza né in allattamento</div></div>' +
                "</div>" +
                "<p>Controindicazioni: intolleranza, gravidanza, allattamento. Registrazione AM.01.11.01.003.R.000073.02.24 del 07.02.2024. L’acido folico si discute spesso in vista di una gravidanza. Questo barattolo esclude gravidanza e allattamento.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-inositol/00.jpg" alt="HÖRBI inositolo" width="1045" height="1400" loading="lazy" /><figcaption>Foto del barattolo. Contano 1000 mg di inositolo e 400 µg di acido folico.</figcaption></figure>' +
                '<p class="article-note">Integratore alimentare, non un medicinale e non una terapia per la PCOS.</p>',
            },
            {
              h: "La linea guida PCOS del 2023",
              html:
                "<p>La <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/\" target=\"_blank\" rel=\"noopener\">linea guida internazionale</a> consente di valutare l’inositolo se la donna lo desidera: danno limitato nei dati disponibili, possibile effetto metabolico, beneficio clinico limitato su ovulazione, irsutismo e peso. Non raccomanda una dose. Nell’infertilità l’inositolo è sperimentale e non è raccomandato come terapia di fertilità. Gli studi usano spesso più di 1000 mg. Quella non diventa automaticamente la dose di questo barattolo.</p>",
            },
            {
              h: "Come leggerlo",
              html:
                "<p>La capsula è una fonte di mio-inositolo e acido folico nelle quantità indicate. Non sostituisce la metformina né un centro di fertilità.</p>" +
                shop("https://www.wildberries.ru/catalog/1443066606/detail.aspx", "it"),
            },
          ],
          callouts: [
            { title: "1000 mg", text: "Inositolo in due capsule, non 1400 mg." },
            { title: "400 µg", text: "Acido folico, 200% del livello di questa etichetta." },
            { title: "Non è la B8", text: "Un nome vecchio, non una vitamina ufficiale." },
            { title: "Non in gravidanza", text: "Controindicazione esplicita sul barattolo." },
          ],
        },
      },
    },
    {
      id: "capsule-collagen",
      categoryId: "capsules",
      cover: "media/web/soon-collagen/00.jpg",
      images: { hero: "media/web/soon-collagen/00.jpg" },
      published: "2026-10-06",
      sources: [SRC.ajm, SRC.nihC],
      i18n: {
        ru: {
          title: "Морской коллаген, гиалуроновая кислота и витамин C: доза и границы доказательств",
          kicker: "Журнал · Капсулы · Коллаген",
          lead:
            "Три капсулы в сутки: 1050 мг гидролизованного рыбного коллагена, 100,5 мг витамина C и 45 мг гиалуроновой кислоты. Курс на этикетке — 3 месяца. Сводки испытаний про кожу выглядят оптимистично, пока из них не убирают работы с финансированием индустрии.",
          readMin: "8 мин",
          sections: [
            {
              h: "Пептиды, а не «коллаген прямо в кожу»",
              html:
                "<p>Коллаген — белок соединительной ткани. В капсуле он гидролизован: рыбные пептиды, которые пищеварение разбирает дальше. Выпитый коллаген не приезжает в дерму готовой сеткой. Этикетка говорит «гидролизованный рыбный коллаген (пептиды коллагена)» и не указывает тип I или III. Если на макете написано type I & III, это строка макета, не строка спецификации.</p>" +
                "<p>Витамин C нужен ферментам, которые сшивают и стабилизируют собственный коллаген. Это биохимический факт из <a href=\"https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">справочника NIH</a>, а не результат испытания этой банки на морщинах. Гиалуроновая кислота в составе — отдельные 45 мг. Публичная база по питьевой гиалуроновой кислоте уже, чем спор о коллагеновых пептидах, и ниже она не раздувается.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-collagen/02.jpg" alt="Инфографика морского коллагена HÖRBI: 1050 мг, 100,5 мг витамина C, 45 мг гиалуроновой кислоты" width="1045" height="1400" loading="lazy" /><figcaption>На золотой плашке те же три числа, что в таблице состава: 1050 мг, 100,5 мг и 45 мг. Строки про типы I и III и anti-aging на макете спецификация не раскрывает.</figcaption></figure>',
            },
            {
              h: "Суточная доза с банки",
              html:
                "<p>Взрослым — по 1 капсуле 3 раза в день во время еды. Курс — 3 месяца. Масса капсулы — 530 мг. В банке 120 капсул: при трёх в день одной банки хватает примерно на 40 дней, это короче курса. Источник белка — рыба, это важно при непереносимости рыбы.</p>" +
                '<div class="dose" aria-label="Суточная доза морского коллагена">' +
                '<div class="dose-item"><div class="k">Коллаген</div><div class="v">1050 мг</div><div class="s">рыбные пептиды · без %</div></div>' +
                '<div class="dose-item"><div class="k">Витамин C</div><div class="v">100,5 мг</div><div class="s">168%* · аскорбиновая кислота</div></div>' +
                '<div class="dose-item"><div class="k">Гиалуроновая</div><div class="v">45 мг</div><div class="s">90% от уровня на этикетке</div></div>' +
                "</div>" +
                "<p>Состав: коллаген гидролизованный рыбный, желатин оболочки, витамин C, гиалуроновая кислота, диоксид кремния, стеарат магния или кальция. Срок годности — 3 года, хранить до +25 °C. Противопоказания: индивидуальная непереносимость, беременность, кормление грудью. СГР AM.01.11.01.003.R.000042.01.24 от 26.01.2024, ТУ 10.89.19-004-26264713-2023. Звёздочка у витамина C — «не превышает верхний допустимый уровень потребления» в российской маркировке.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не средство от старения, не лечение суставов и не обещание плотности волос.</p>',
            },
            {
              h: "Что осталось от «коллаген помогает коже» в обзоре 2025 года",
              html:
                "<p>Myung и Park разобрали рандомизированные испытания добавок коллагена и кожу в <a href=\"https://www.amjmed.com/article/S0002-9343(25)00283-9/fulltext\" target=\"_blank\" rel=\"noopener\">American Journal of Medicine (2025)</a>: 23 испытания, 1474 человека. Если сложить все работы, увлажнённость, упругость и морщины выглядели лучше. Дальше авторы разрезали выборку.</p>" +
                "<p>В работах без финансирования фармкомпаний эффекта по этим трём исходам не было. В исследованиях более высокого качества значимого эффекта тоже не было. Вывод авторов жёсткий: клинических доказательств, что добавки коллагена предупреждают или лечат старение кожи, сейчас нет.</p>" +
                "<p>Отсюда спокойная формулировка для банки HÖRBI. Она содержит заявленные 1050 мг пептидов, витамин C и гиалуроновую кислоту. Она не является доказанным способом «убрать возраст». Более ранние сводки, где все испытания сложены в одну кучу, как раз и дают ту оптимистичную картинку, которую обзор 2025 года раскладывает по финансированию и качеству.</p>",
            },
            {
              h: "Как пользоваться карточкой",
              html:
                "<p>На сайте у товара лежит серия слайдов про кожу, волосы и суставы. Они оформляют полку. Этот текст держится за таблицу состава и за обзор 2025 года. Курс на этикетке длиннее одной банки. Рыбный источник стоит учесть при аллергии.</p>" +
                moreRu("capsule-collagen") +
                shop("https://www.wildberries.ru/catalog/1443093674/detail.aspx", "ru"),
            },
          ],
          callouts: [
            { title: "1050 мг", text: "Гидролизованный рыбный коллаген в трёх капсулах." },
            { title: "100,5 и 45", text: "Витамин C и гиалуроновая кислота. Цифры совпадают со слайдом." },
            { title: "3 месяца", text: "Курс на этикетке. Одной банки на 120 капсул мало." },
            { title: "Обзор 2025", text: "Без финансирования индустрии эффект по коже не подтвердился." },
          ],
        },
        en: {
          title: "Marine collagen, hyaluronic acid and vitamin C: the dose and the limit of the evidence",
          kicker: "Journal · Capsules · Collagen",
          lead:
            "Three capsules a day: 1050 mg of hydrolysed fish collagen, 100.5 mg of vitamin C and 45 mg of hyaluronic acid. The labelled course is 3 months. Pooled skin trials look cheerful until the industry-funded ones are set aside.",
          readMin: "7 min read",
          sections: [
            {
              h: "Peptides, not collagen delivered intact to the skin",
              html:
                "<p>Collagen is a connective-tissue protein. In the capsule it is hydrolysed fish peptide, and digestion breaks it down further. Swallowed collagen does not arrive in the dermis as a ready-made scaffold. The label says “hydrolysed fish collagen (collagen peptides)” and does not state type I or III. “Type I & III” on a slide is slide copy.</p>" +
                "<p>Vitamin C is a cofactor for the enzymes that stabilise the body’s own collagen. That is biochemistry from the <a href=\"https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH fact sheet</a>, not a wrinkle trial of this jar. The 45 mg of hyaluronic acid has a thinner public trial base than the collagen-peptide debate.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-collagen/02.jpg" alt="HÖRBI marine collagen card: 1050 mg, 100.5 mg vitamin C, 45 mg hyaluronic acid" width="1045" height="1400" loading="lazy" /><figcaption>The gold panel matches the specification table: 1050 mg, 100.5 mg and 45 mg. Type I and III and the anti-aging line are not in that table.</figcaption></figure>',
            },
            {
              h: "The labelled daily serving",
              html:
                "<p>Adults: 1 capsule 3 times a day with food, for 3 months. One capsule weighs 530 mg. A 120-capsule jar at three a day lasts about 40 days, shorter than the course. The protein source is fish.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Collagen</div><div class="v">1050 mg</div><div class="s">fish peptides · no %</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin C</div><div class="v">100.5 mg</div><div class="s">168%* · ascorbic acid</div></div>' +
                '<div class="dose-item"><div class="k">Hyaluronic acid</div><div class="v">45 mg</div><div class="s">90% of the label reference</div></div>' +
                "</div>" +
                "<p>Composition: hydrolysed fish collagen, gelatin, vitamin C, hyaluronic acid, silicon dioxide, magnesium or calcium stearate. Shelf life 3 years. Contraindications: intolerance, pregnancy, breastfeeding. Registration AM.01.11.01.003.R.000042.01.24 of 26 January 2024. The asterisk on vitamin C is the Russian note that the intake upper level used on the label is not exceeded.</p>" +
                '<p class="article-note">A food supplement. Not an anti-aging medicine, not a joint treatment, not a promise about hair.</p>',
            },
            {
              h: "What the 2025 review left of “collagen helps skin”",
              html:
                "<p>Myung and Park pooled randomised trials in the <a href=\"https://www.amjmed.com/article/S0002-9343(25)00283-9/fulltext\" target=\"_blank\" rel=\"noopener\">American Journal of Medicine (2025)</a>: 23 trials, 1474 people. Across every trial, hydration, elasticity and wrinkles looked better. Then they split the set.</p>" +
                "<p>Trials without pharmaceutical-company funding showed no effect on those three outcomes. Higher-quality trials showed no significant effect either. The authors’ conclusion: there is currently no clinical evidence that collagen supplements prevent or treat skin aging.</p>" +
                "<p>So the HÖRBI jar contains the stated 1050 mg of peptides, vitamin C and hyaluronic acid. It is not a demonstrated way to remove age. Earlier pooled reviews are the cheerful picture that the 2025 paper takes apart by funding and quality.</p>",
            },
            {
              h: "How to use the product card",
              html:
                "<p>The product page also carries slides about skin, hair and joints. They dress the shelf. This note follows the specification table and the 2025 review. One jar is shorter than the labelled course. The fish source matters for allergy.</p>" +
                moreEn("capsule-collagen") +
                shop("https://www.wildberries.ru/catalog/1443093674/detail.aspx", "en"),
            },
          ],
          callouts: [
            { title: "1050 mg", text: "Hydrolysed fish collagen in three capsules." },
            { title: "100.5 and 45", text: "Vitamin C and hyaluronic acid. Same numbers as the slide." },
            { title: "3 months", text: "The labelled course. One 120-capsule jar is shorter." },
            { title: "2025 review", text: "Without industry funding, the skin effect did not hold." },
          ],
        },
        de: {
          title: "Meereskollagen, Hyaluronsäure und Vitamin C",
          kicker: "Journal · Kapseln · Kollagen",
          lead:
            "Drei Kapseln: 1050 mg hydrolysiertes Fischkollagen, 100,5 mg Vitamin C, 45 mg Hyaluronsäure. Die Kur auf dem Etikett dauert 3 Monate. Hautstudien wirken freundlicher, solange industriefinanzierte Arbeiten im Topf bleiben.",
          readMin: "5 Min.",
          sections: [
            {
              h: "Peptide und die drei Zahlen",
              html:
                "<p>Hydrolysiertes Kollagen wird verdaut. Es kommt nicht als fertiges Gerüst in der Haut an. Das Etikett nennt Fischpeptide und keinen Typ I oder III. Vitamin C ist ein Kofaktor der körpereigenen Kollagenenzyme. Das ist Biochemie, kein Faltenversuch mit dieser Dose. Eine Packung mit 120 Kapseln reicht bei 3 Stück täglich ungefähr 40 Tage, die Kur ist länger. Quelle ist Fisch.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Kollagen</div><div class="v">1050 mg</div><div class="s">Fischpeptide</div></div>' +
                '<div class="dose-item"><div class="k">Vitamin C</div><div class="v">100,5 mg</div><div class="s">168%*</div></div>' +
                '<div class="dose-item"><div class="k">Hyaluron</div><div class="v">45 mg</div><div class="s">90% der Etikettangabe</div></div>' +
                "</div>" +
                "<p>Erwachsene: 1 Kapsel 3-mal täglich zum Essen, Kur 3 Monate. Kapselmasse 530 mg. Kontraindikationen: Unverträglichkeit, Schwangerschaft, Stillzeit. Registrierung AM.01.11.01.003.R.000042.01.24 vom 26.01.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-collagen/02.jpg" alt="HÖRBI Meereskollagen, Dosisgrafik" width="1045" height="1400" loading="lazy" /><figcaption>Die drei Zahlen auf der Grafik stimmen mit der Tabelle überein. Typ I/III und Anti-Aging stehen nicht in der Spezifikation.</figcaption></figure>' +
                '<p class="article-note">Nahrungsergänzungsmittel, kein Anti-Aging-Arzneimittel.</p>',
            },
            {
              h: "Der Review von 2025",
              html:
                "<p>Myung und Park, <a href=\"https://www.amjmed.com/article/S0002-9343(25)00283-9/fulltext\" target=\"_blank\" rel=\"noopener\">American Journal of Medicine 2025</a>: 23 randomisierte Studien, 1474 Personen. Alle Studien zusammen sahen bei Feuchtigkeit, Elastizität und Falten besser aus. Ohne Pharmafinanzierung und in Studien höherer Qualität blieb kein belastbarer Effekt. Die Autoren sehen derzeit keine klinische Evidenz, dass Kollagenpräparate Hautalterung verhindern oder behandeln.</p>",
            },
            {
              h: "Die Karte und der Text",
              html:
                "<p>Slides zu Haut, Haar und Gelenken gestalten das Regal. Dieser Text bleibt bei der Tabelle und bei 2025.</p>" +
                shop("https://www.wildberries.ru/catalog/1443093674/detail.aspx", "de"),
            },
          ],
          callouts: [
            { title: "1050 mg", text: "Fischkollagen in drei Kapseln." },
            { title: "100,5 und 45", text: "Vitamin C und Hyaluronsäure, wie auf der Grafik." },
            { title: "3 Monate", text: "Die Kur. Eine Dose ist kürzer." },
            { title: "Review 2025", text: "Ohne Industriegeld hielt der Hauteffekt nicht." },
          ],
        },
        it: {
          title: "Collagene marino, acido ialuronico e vitamina C",
          kicker: "Journal · Capsule · Collagene",
          lead:
            "Tre capsule: 1050 mg di collagene di pesce idrolizzato, 100,5 mg di vitamina C e 45 mg di acido ialuronico. Il ciclo in etichetta è di 3 mesi. Le sintesi sulla pelle sembrano più ottimiste finché restano dentro anche gli studi finanziati dall’industria.",
          readMin: "5 min",
          sections: [
            {
              h: "Peptidi e le tre cifre",
              html:
                "<p>Il collagene idrolizzato viene digerito. Non arriva nella pelle come un’impalcatura già pronta. L’etichetta parla di peptidi di pesce e non indica il tipo I o III. La vitamina C è un cofattore degli enzimi del collagene del corpo: biochimica, non una prova sulle rughe di questo barattolo. Un barattolo da 120 capsule, a 3 al giorno, copre circa 40 giorni. Il ciclo è più lungo. La fonte è il pesce.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Collagene</div><div class="v">1050 mg</div><div class="s">peptidi di pesce</div></div>' +
                '<div class="dose-item"><div class="k">Vitamina C</div><div class="v">100,5 mg</div><div class="s">168%*</div></div>' +
                '<div class="dose-item"><div class="k">Ialuronico</div><div class="v">45 mg</div><div class="s">90% del riferimento in etichetta</div></div>' +
                "</div>" +
                "<p>Adulti: 1 capsula 3 volte al giorno con i pasti, ciclo di 3 mesi. Capsula da 530 mg. Controindicazioni: intolleranza, gravidanza, allattamento. Registrazione AM.01.11.01.003.R.000042.01.24 del 26.01.2024.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-collagen/02.jpg" alt="Grafica HÖRBI del collagene marino" width="1045" height="1400" loading="lazy" /><figcaption>Le tre cifre della grafica coincidono con la tabella. Tipo I/III e anti-aging non sono nella specifica.</figcaption></figure>' +
                '<p class="article-note">Integratore alimentare, non un medicinale anti-età.</p>',
            },
            {
              h: "La revisione del 2025",
              html:
                "<p>Myung e Park, <a href=\"https://www.amjmed.com/article/S0002-9343(25)00283-9/fulltext\" target=\"_blank\" rel=\"noopener\">American Journal of Medicine 2025</a>: 23 studi randomizzati, 1474 persone. Mettendo insieme tutti gli studi, idratazione, elasticità e rughe sembravano migliorare. Senza finanziamento farmaceutico, e negli studi di qualità più alta, l’effetto non reggeva. Gli autori scrivono che oggi non c’è evidenza clinica che gli integratori di collagene prevengano o trattino l’invecchiamento della pelle.</p>",
            },
            {
              h: "Scheda e testo",
              html:
                "<p>Le slide su pelle, capelli e articolazioni vestono lo scaffale. Questo testo resta sulla tabella e sul 2025.</p>" +
                shop("https://www.wildberries.ru/catalog/1443093674/detail.aspx", "it"),
            },
          ],
          callouts: [
            { title: "1050 mg", text: "Collagene di pesce in tre capsule." },
            { title: "100,5 e 45", text: "Vitamina C e acido ialuronico, come nella grafica." },
            { title: "3 mesi", text: "Il ciclo. Un barattolo è più corto." },
            { title: "Revisione 2025", text: "Senza fondi dell’industria l’effetto sulla pelle non regge." },
          ],
        },
      },
    },
    {
      id: "capsule-testobooster",
      categoryId: "capsules",
      cover: "media/web/soon-testobooster/00.jpg",
      images: { hero: "media/web/soon-testobooster/00.jpg" },
      published: "2026-10-06",
      sources: [SRC.daaReview, SRC.melville, SRC.kuchakulla, SRC.smithHerbs, SRC.nihZn, SRC.scfZn],
      i18n: {
        ru: {
          title: "Тестобустер: что в трёх капсулах и чего испытания не показали",
          kicker: "Журнал · Капсулы · Тестобустер",
          lead:
            "В порции — 1000 мг D-аспарагиновой кислоты, по 500 мг экстрактов маки и пажитника, 25 мг цинка и экстракт чёрного перца. Название продукта — «Тестобустер». Готовую смесь HÖRBI в рандомизированном испытании не публиковали. По отдельным ингредиентам данные неоднородные. Рост тестостерона эта статья не обещает.",
          readMin: "9 мин",
          sections: [
            {
              h: "Пять позиций, не три",
              html:
                "<p>На крупной плашке обычно три числа: аспарагиновая кислота, мака, цинк. В таблице состава позиций больше. Экстракт пажитника — те же 500 мг, что и у маки. Экстракт чёрного перца в таблице без миллиграммов, но в составе он есть. Оба легко теряются, если смотреть только на обложку.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-testobooster/02.jpg" alt="Инфографика HÖRBI Тестобустер: 1000 мг аспарагиновой кислоты, 500 мг маки, 25 мг цинка" width="1045" height="1400" loading="lazy" /><figcaption>Крупные цифры совпадают с таблицей по кислоте, маке и цинку. Пажитника на плашке нет отдельной строкой, хотя в порции его 500 мг. Экстракт чёрного перца на слайде не указан, в составе банки он есть. Иконки про гормоны — оформление, не результат испытания.</figcaption></figure>' +
                "<p>D-аспарагиновая кислота — форма аминокислоты, которую обсуждали как возможный стимул синтеза тестостерона. Мака перуанская — корень, пищевое растение Анд. Пажитник — семя, в добавках обычно экстракт. Цинк — минерал. Перец в таких формулах кладут из-за пиперина, который в других работах менял всасывание отдельных веществ. Это не доказательство, что вся капсула «усваивается быстрее».</p>",
            },
            {
              h: "Порция с банки",
              html:
                "<p>Взрослым — по 1 капсуле 3 раза в день во время еды. Курс — 1 месяц. Масса капсулы — 820 мг. Хранить при +5…+25 °C, срок годности 2 года. Перед применением рекомендуется консультация врача.</p>" +
                '<div class="dose" aria-label="Порция тестобустера">' +
                '<div class="dose-item"><div class="k">D-аспарагиновая</div><div class="v">1000 мг</div><div class="s">8,2% от уровня на этикетке</div></div>' +
                '<div class="dose-item"><div class="k">Мака</div><div class="v">500 мг</div><div class="s">экстракт корня</div></div>' +
                '<div class="dose-item"><div class="k">Пажитник</div><div class="v">500 мг</div><div class="s">экстракт, на обложке легко пропустить</div></div>' +
                '<div class="dose-item"><div class="k">Цинк</div><div class="v">25 мг</div><div class="s">166,6%* · европейский потолок взрослого</div></div>' +
                "</div>" +
                "<p>Состав: D-аспарагиновая кислота, экстракт корня маки перуанской, экстракт пажитника, желатин оболочки, цитрат цинка, экстракт чёрного перца. Противопоказания: индивидуальная непереносимость, беременность, кормление грудью. СГР AM.01.11.01.003.R.000355.06.24 от 03.06.2024, ТУ 10.89.19-026-26264713-2024. Звёздочка у цинка — российская сноска, что верхний допустимый уровень не превышен.</p>" +
                "<p>25 мг цинка — это ещё и европейский верхний уровень для взрослых. В американском справочнике NIH потолок выше, 40 мг в сутки, и там же написано: лишний цинк мешает меди, а подъём тестостерона от цинка касается в первую очередь дефицита, не людей с нормальным статусом. В дни, когда принимается эта банка, вторую высокодозную цинковую добавку лучше не ставить рядом.</p>" +
                '<p class="article-note">Биологически активная добавка к пище, не лекарство от гипогонадизма и не замена разговора с врачом о гормонах.</p>',
            },
            {
              h: "Что показали чужие испытания, не эта банка",
              html:
                "<p>Готового комплекса HÖRBI в опубликованном рандомизированном испытании нет. Это нормальная дыра для таких продуктов: <a href=\"https://pubmed.ncbi.nlm.nih.gov/32358510/\" target=\"_blank\" rel=\"noopener\">Kuchakulla и коллеги в 2020 году</a> разобрали популярные безрецептурные составы «для тестостерона» и эрекции. Ни у одного целого продукта из их выборки не было своего РКИ. У большинства ингредиентов доказательства были противоречивыми или тонкими.</p>" +
                "<p>По D-аспарагиновой кислоте обзор <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC5340133/\" target=\"_blank\" rel=\"noopener\">Roshanzamir и Safavi (2017)</a> такой: у животных тестостерон часто рос, у людей результаты разошлись. Самая прямая работа на тренирующихся мужчинах — <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182630\" target=\"_blank\" rel=\"noopener\">Melville, Siegler и Marshall, PLOS One, 2017</a>. Три месяца, 6 г D-аспарагиновой кислоты в сутки плюс силовые. Общий и свободный тестостерон не изменились. Авторы назвали добавку неэффективной для тестостерона и для результатов тренировок в этой группе. На банке HÖRBI доза кислоты — 1 г, не 6 г. Меньшая доза не делает вывод сильнее: как раз большая доза роста не дала.</p>" +
                "<p>Пажитник в чужих работах иногда давал сигнал. Обзор <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8166567/\" target=\"_blank\" rel=\"noopener\">Smith и коллег (Advances in Nutrition, 2021)</a> включил экстракты пажитника в короткий список трав, где часть испытаний видела изменение тестостерона. Там были конкретные экстракты и конкретные дозы, часто около брендированных 600 мг, у конкретных групп мужчин. 500 мг «экстракта пажитника» без указанной стандартизации — не тот же самый протокол. Переносить чужой плюс на эту банку нельзя.</p>" +
                "<p>Мака в небольших работах обсуждается скорее вокруг желания, чем вокруг устойчивого роста гормона. Отдельного испытания 500 мг экстракта из этой банки нет. Цинк, ещё раз: <a href=\"https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH</a> связывает низкий тестостерон с дефицитом цинка. Восполнение дефицита — другая история, чем 25 мг поверх нормального рациона.</p>",
            },
            {
              h: "Как читать имя на крышке",
              html:
                "<p>«Тестобустер» — торговое имя категории. Оно не является измеренным исходом. Честное содержание банки: аминокислота, два растительных экстракта, цинк на европейском верхнем уровне взрослого и экстракт перца. Курс — месяц, с едой. Беременность и кормление грудью исключены. Если вопрос именно в уровне тестостерона, его смотрят анализами и с врачом, а не по названию добавки.</p>" +
                moreRu("capsule-testobooster") +
                shop("https://www.wildberries.ru/catalog/1443168147/detail.aspx", "ru"),
            },
          ],
          callouts: [
            { title: "1000 / 500 / 500", text: "Кислота, мака и пажитник. Пажитник на обложке тише, в таблице он есть." },
            { title: "25 мг цинка", text: "Европейский верхний уровень взрослого. Вторую цинковую банку не добавлять." },
            { title: "Нет РКИ смеси", text: "Испытания готового комплекса HÖRBI не опубликованы." },
            { title: "6 г не сработали", text: "У тренирующихся мужчин большая доза кислоты не подняла тестостерон." },
          ],
        },
        en: {
          title: "Testobooster: what is in three capsules, and what trials did not show",
          kicker: "Journal · Capsules · Testobooster",
          lead:
            "A serving is 1000 mg of D-aspartic acid, 500 mg each of maca and fenugreek extracts, 25 mg of zinc, and black-pepper extract. The product is named Testobooster. No randomised trial of the finished HÖRBI blend has been published. Ingredient evidence is mixed. This note does not promise a testosterone increase.",
          readMin: "8 min read",
          sections: [
            {
              h: "Five items, not three",
              html:
                "<p>The big panel usually prints three numbers: aspartic acid, maca, zinc. The specification table has more. Fenugreek extract is another 500 mg. Black-pepper extract is in the composition without a milligram figure. Both disappear if you only read the cover.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-testobooster/02.jpg" alt="HÖRBI Testobooster card: 1000 mg aspartic acid, 500 mg maca, 25 mg zinc" width="1045" height="1400" loading="lazy" /><figcaption>The large figures match the table for the acid, maca and zinc. Fenugreek is 500 mg in the serving and is easy to miss on the panel. Black-pepper extract is in the jar and not on this slide. Hormone icons are design, not a trial result.</figcaption></figure>' +
                "<p>D-aspartic acid is the form discussed as a possible spur to testosterone synthesis. Maca is an Andean root. Fenugreek here is an extract of the seed. Zinc is a mineral. Pepper is often added because piperine changed the absorption of some other substances in other studies. That is not evidence that the whole capsule “works faster”.</p>",
            },
            {
              h: "The labelled serving",
              html:
                "<p>Adults: 1 capsule 3 times a day with food, for 1 month. One capsule weighs 820 mg. Store at +5 to +25 °C. Shelf life 2 years. Ask a doctor before use.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">D-aspartic acid</div><div class="v">1000 mg</div><div class="s">8.2% of the label reference</div></div>' +
                '<div class="dose-item"><div class="k">Maca</div><div class="v">500 mg</div><div class="s">root extract</div></div>' +
                '<div class="dose-item"><div class="k">Fenugreek</div><div class="v">500 mg</div><div class="s">extract, easy to miss on the cover</div></div>' +
                '<div class="dose-item"><div class="k">Zinc</div><div class="v">25 mg</div><div class="s">166.6%* · the EU adult ceiling</div></div>' +
                "</div>" +
                "<p>Composition: D-aspartic acid, Peruvian maca root extract, fenugreek extract, gelatin, zinc citrate, black-pepper extract. Contraindications: intolerance, pregnancy, breastfeeding. Registration AM.01.11.01.003.R.000355.06.24 of 3 June 2024. The asterisk on zinc is the Russian note that the upper level used on the label is not exceeded.</p>" +
                "<p>25 mg of zinc is also the European adult upper level. The NIH adult ceiling is higher, 40 mg/day, and the same sheet says extra zinc can interfere with copper, while a testosterone effect of zinc is mainly a story about deficiency. On days with this jar, skip a second high-zinc product.</p>" +
                '<p class="article-note">A food supplement, not a treatment for hypogonadism, and not a substitute for a clinician if hormones are the actual question.</p>',
            },
            {
              h: "Trials of other products, not of this jar",
              html:
                "<p>There is no published randomised trial of the finished HÖRBI blend. <a href=\"https://pubmed.ncbi.nlm.nih.gov/32358510/\" target=\"_blank\" rel=\"noopener\">Kuchakulla and colleagues (2020)</a> reviewed popular over-the-counter testosterone and ED products and found the same hole: no finished product in their set had its own trial, and most ingredients had contradictory or thin evidence.</p>" +
                "<p>For D-aspartic acid, <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC5340133/\" target=\"_blank\" rel=\"noopener\">Roshanzamir and Safavi (2017)</a> found frequent increases in animal studies and inconsistent human results. The clearest trial in resistance-trained men is <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182630\" target=\"_blank\" rel=\"noopener\">Melville, Siegler and Marshall, PLOS One, 2017</a>: three months of 6 g/day plus lifting. Total and free testosterone did not change. The authors called it ineffective for testosterone and for training outcomes in that group. The HÖRBI label dose is 1 g, not 6 g. A smaller dose does not strengthen the claim. The larger dose did not raise testosterone.</p>" +
                "<p>Fenugreek has a signal in some other trials. <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8166567/\" target=\"_blank\" rel=\"noopener\">Smith and colleagues (2021)</a> put certain fenugreek extracts on a short list of herbs where some trials saw a testosterone change. Those were defined extracts and defined doses, often around 600 mg of a branded extract, in defined groups of men. “Fenugreek extract 500 mg” without a stated standard is not that protocol.</p>" +
                "<p>Maca’s small trials are discussed more around desire than around a reliable hormone increase. There is no trial of the 500 mg extract in this jar. Zinc, again: <a href=\"https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/\" target=\"_blank\" rel=\"noopener\">NIH</a> links low testosterone with zinc deficiency. Repletion is a different story from 25 mg on top of an adequate diet.</p>",
            },
            {
              h: "How to read the name on the cap",
              html:
                "<p>Testobooster is a trade name for a category. It is not a measured outcome. The jar holds an amino acid, two plant extracts, zinc at the European adult ceiling, and pepper extract. The course is a month, with food. Pregnancy and breastfeeding are excluded. If the question is someone’s testosterone, that is a lab result and a clinician, not the name of a supplement.</p>" +
                moreEn("capsule-testobooster") +
                shop("https://www.wildberries.ru/catalog/1443168147/detail.aspx", "en"),
            },
          ],
          callouts: [
            { title: "1000 / 500 / 500", text: "Acid, maca and fenugreek. Fenugreek is quieter on the cover." },
            { title: "25 mg zinc", text: "The EU adult ceiling. Do not add a second zinc product." },
            { title: "No blend trial", text: "No published randomised trial of this HÖRBI mix." },
            { title: "6 g did not lift it", text: "In trained men, the larger acid dose did not raise testosterone." },
          ],
        },
        de: {
          title: "Testobooster: drei Kapseln, und was Studien nicht gezeigt haben",
          kicker: "Journal · Kapseln · Testobooster",
          lead:
            "Eine Portion: 1000 mg D-Asparaginsäure, je 500 mg Maca- und Bockshornklee-Extrakt, 25 mg Zink, dazu Schwarzpfefferextrakt. Eine randomisierte Studie zur fertigen HÖRBI-Mischung ist nicht veröffentlicht. Einen Testosteronanstieg verspricht dieser Text nicht.",
          readMin: "6 Min.",
          sections: [
            {
              h: "Fünf Stoffe, nicht drei",
              html:
                "<p>Die große Grafik nennt oft Säure, Maca und Zink. In der Tabelle stehen zusätzlich 500 mg Bockshornklee-Extrakt. Schwarzpfefferextrakt ist in der Zusammensetzung, ohne Milligrammangabe. Erwachsene: 1 Kapsel 3-mal täglich zum Essen, Kur 1 Monat. Kapselmasse 820 mg. Lagerung +5 bis +25 °C, 2 Jahre.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">D-Asparaginsäure</div><div class="v">1000 mg</div><div class="s">8,2% der Etikettangabe</div></div>' +
                '<div class="dose-item"><div class="k">Maca</div><div class="v">500 mg</div><div class="s">Wurzelextrakt</div></div>' +
                '<div class="dose-item"><div class="k">Bockshornklee</div><div class="v">500 mg</div><div class="s">Extrakt, auf dem Cover leicht zu übersehen</div></div>' +
                '<div class="dose-item"><div class="k">Zink</div><div class="v">25 mg</div><div class="s">europäische Höchstmenge für Erwachsene</div></div>' +
                "</div>" +
                "<p>Kontraindikationen: Unverträglichkeit, Schwangerschaft, Stillzeit. Registrierung AM.01.11.01.003.R.000355.06.24 vom 03.06.2024. 25 mg Zink ist die europäische Höchstmenge für Erwachsene. Das NIH nennt 40 mg/Tag und warnt: zu viel Zink stört Kupfer, ein Testosteroneffekt betrifft vor allem Mangel. Kein zweites hochdosiertes Zinkpräparat am selben Tag.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-testobooster/02.jpg" alt="HÖRBI Testobooster Grafik" width="1045" height="1400" loading="lazy" /><figcaption>Säure, Maca und Zink auf der Grafik passen zur Tabelle. Bockshornklee (500 mg) und Pfeffer stehen in der Zusammensetzung und fehlen als eigene große Zeile.</figcaption></figure>' +
                '<p class="article-note">Nahrungsergänzungsmittel, kein Mittel gegen Hypogonadismus.</p>',
            },
            {
              h: "Studien zu anderen Produkten",
              html:
                "<p><a href=\"https://pubmed.ncbi.nlm.nih.gov/32358510/\" target=\"_blank\" rel=\"noopener\">Kuchakulla 2020</a>: kein Fertigprodukt der untersuchten Testosteron-Präparate hatte eine eigene randomisierte Studie. <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC5340133/\" target=\"_blank\" rel=\"noopener\">Roshanzamir 2017</a>: bei Tieren stieg Testosteron oft, beim Menschen waren die Ergebnisse uneinheitlich. <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182630\" target=\"_blank\" rel=\"noopener\">Melville 2017</a>: 6 g/Tag über drei Monate bei krafttrainierten Männern, Gesamt- und freies Testosteron unverändert. Die Etikettendosis hier ist 1 g. Die kleinere Menge macht die Behauptung nicht stärker.</p>" +
                "<p>Einzelne Bockshornklee-Extrakte zeigten in anderen Studien ein Signal (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8166567/\" target=\"_blank\" rel=\"noopener\">Smith 2021</a>). Das waren definierte Extrakte, nicht diese Kapsel. Zink hebt Testosteron laut NIH vor allem bei Mangel.</p>",
            },
            {
              h: "Der Name auf dem Deckel",
              html:
                "<p>Testobooster ist ein Handelsname, kein Messergebnis. Wer den eigenen Hormonwert wissen will, braucht Labor und Ärztin oder Arzt.</p>" +
                shop("https://www.wildberries.ru/catalog/1443168147/detail.aspx", "de"),
            },
          ],
          callouts: [
            { title: "1000 / 500 / 500", text: "Säure, Maca, Bockshornklee. Letzterer steht leiser auf dem Cover." },
            { title: "25 mg Zink", text: "Europäische Höchstmenge. Kein zweites Zinkpräparat." },
            { title: "Keine Mischungsstudie", text: "Zur fertigen HÖRBI-Mischung gibt es kein veröffentlichtes RCT." },
            { title: "6 g ohne Anstieg", text: "Bei Trainierten hob die höhere Säure-Dosis Testosteron nicht." },
          ],
        },
        it: {
          title: "Testobooster: tre capsule, e cosa gli studi non hanno mostrato",
          kicker: "Journal · Capsule · Testobooster",
          lead:
            "Una porzione: 1000 mg di acido D-aspartico, 500 mg di estratto di maca, 500 mg di estratto di fieno greco, 25 mg di zinco ed estratto di pepe nero. Non esiste uno studio randomizzato pubblicato sulla miscela finita HÖRBI. Questo testo non promette un aumento del testosterone.",
          readMin: "6 min",
          sections: [
            {
              h: "Cinque voci, non tre",
              html:
                "<p>La grafica grande cita spesso acido, maca e zinco. In tabella c’è anche 500 mg di estratto di fieno greco. L’estratto di pepe nero è in composizione, senza milligrammi. Adulti: 1 capsula 3 volte al giorno con i pasti, ciclo di 1 mese. Capsula da 820 mg. Conservare tra +5 e +25 °C, scadenza 2 anni.</p>" +
                '<div class="dose">' +
                '<div class="dose-item"><div class="k">Acido D-aspartico</div><div class="v">1000 mg</div><div class="s">8,2% del riferimento in etichetta</div></div>' +
                '<div class="dose-item"><div class="k">Maca</div><div class="v">500 mg</div><div class="s">estratto di radice</div></div>' +
                '<div class="dose-item"><div class="k">Fieno greco</div><div class="v">500 mg</div><div class="s">estratto, facile da perdere in copertina</div></div>' +
                '<div class="dose-item"><div class="k">Zinco</div><div class="v">25 mg</div><div class="s">livello massimo europeo per gli adulti</div></div>' +
                "</div>" +
                "<p>Controindicazioni: intolleranza, gravidanza, allattamento. Registrazione AM.01.11.01.003.R.000355.06.24 del 03.06.2024. 25 mg di zinco è il livello massimo europeo per gli adulti. NIH indica 40 mg/giorno e ricorda che lo zinco in eccesso interferisce con il rame, mentre l’effetto sul testosterone riguarda soprattutto la carenza. Niente secondo prodotto ricco di zinco nello stesso giorno.</p>" +
                '<figure class="article-figure"><img src="media/web/soon-testobooster/02.jpg" alt="Grafica HÖRBI Testobooster" width="1045" height="1400" loading="lazy" /><figcaption>Acido, maca e zinco sulla grafica coincidono con la tabella. Il fieno greco (500 mg) e il pepe sono nella composizione e non hanno una riga grande propria.</figcaption></figure>' +
                '<p class="article-note">Integratore alimentare, non una cura per l’ipogonadismo.</p>',
            },
            {
              h: "Studi su altri prodotti",
              html:
                "<p><a href=\"https://pubmed.ncbi.nlm.nih.gov/32358510/\" target=\"_blank\" rel=\"noopener\">Kuchakulla 2020</a>: nessun prodotto finito del campione aveva uno studio randomizzato proprio. <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC5340133/\" target=\"_blank\" rel=\"noopener\">Roshanzamir 2017</a>: negli animali il testosterone spesso aumentava, negli umani i risultati erano incoerenti. <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182630\" target=\"_blank\" rel=\"noopener\">Melville 2017</a>: 6 g/giorno per tre mesi in uomini allenati, testosterone totale e libero invariati. Qui la dose in etichetta è 1 g. La dose più bassa non rende l’affermazione più forte.</p>" +
                "<p>Alcuni estratti di fieno greco hanno dato un segnale in altri studi (<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8166567/\" target=\"_blank\" rel=\"noopener\">Smith 2021</a>). Erano estratti definiti, non questa capsula. Lo zinco, secondo NIH, conta soprattutto se c’è carenza.</p>",
            },
            {
              h: "Il nome sul tappo",
              html:
                "<p>Testobooster è un nome commerciale, non un esito misurato. Per conoscere il proprio testosterone servono le analisi e un medico.</p>" +
                shop("https://www.wildberries.ru/catalog/1443168147/detail.aspx", "it"),
            },
          ],
          callouts: [
            { title: "1000 / 500 / 500", text: "Acido, maca, fieno greco. Quest’ultimo è più discreto in copertina." },
            { title: "25 mg di zinco", text: "Livello massimo europeo. Niente secondo prodotto di zinco." },
            { title: "Nessuno studio della miscela", text: "Non c’è un RCT pubblicato sulla miscela HÖRBI." },
            { title: "6 g senza aumento", text: "Negli allenati la dose più alta di acido non ha alzato il testosterone." },
          ],
        },
      },
    }
  );
})();
