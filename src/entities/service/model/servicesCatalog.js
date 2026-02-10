export const servicesCatalog = [
  {
    id: "wirehaired",
    tabLabel: "Жесткошерстные",
    sectionLabel: "Процедуры для собак",
    subtitle: "Жесткошерстные породы",
    columns: [
      { id: "hygiene", label: "Гигиена*" },
      { id: "complexCut", label: "Комплекс (гигиена + стрижка)" },
      { id: "complexTrim", label: "Комплекс (гигиена + тримминг)" }
    ],
    rows: [
      {
        id: "west-highland-white-terrier",
        name: "Вест-хайленд-уайт-терьер",
        aliases: ["вести", "вести"],
        prices: { hygiene: "2000", complexCut: "2500", complexTrim: "2900" }
      },
      {
        id: "griffon-belgian",
        name: "Грифон бельгийский",
        aliases: ["гриффон"],
        prices: { hygiene: "1500", complexCut: "2100", complexTrim: "2500" }
      },
      {
        id: "jack-russell-wire",
        name: "Джек-рассел-терьер жесткошерстный",
        aliases: ["джек рассел", "рассел"],
        prices: { hygiene: "1500", complexCut: "2100", complexTrim: "2500" }
      },
      {
        id: "mini-schnauzer",
        name: "Миттельшнауцер",
        aliases: ["шнауцер"],
        prices: { hygiene: "3300", complexCut: "4500", complexTrim: "5000" }
      },
      {
        id: "scotch-terrier",
        name: "Скотч-терьер",
        aliases: ["скотч терьер"],
        prices: { hygiene: "1900", complexCut: "2300", complexTrim: "2700" }
      },
      {
        id: "wire-haired-dachshund",
        name: "Такса жесткошерстная",
        aliases: ["такса"],
        prices: { hygiene: "1300", complexCut: "2000", complexTrim: "2300" }
      },
      {
        id: "giant-schnauzer",
        name: "Цвергшнауцер",
        aliases: ["цверг"],
        prices: { hygiene: "1800", complexCut: "2250", complexTrim: "2750" }
      }
    ],
    notes: [
      "*Гигиена: купание, кондиционирование, сушка, чистка ушей и глаз, подстригание когтей, окантовка шерсти у глаз, лап и паховой области.",
      "-10% при повторном посещении в течение месяца."
    ]
  },
  {
    id: "decorative",
    tabLabel: "Декоративные",
    sectionLabel: "Процедуры для собак",
    subtitle: "Декоративные породы",
    columns: [
      { id: "hygiene", label: "Гигиена*" },
      { id: "complex", label: "Комплекс (гигиена + модельная стрижка/вычес)" }
    ],
    rows: [
      {
        id: "american-bulldog",
        name: "Американский бульдог",
        aliases: ["бульдог"],
        prices: { hygiene: null, complex: "2500" }
      },
      {
        id: "french-bulldog",
        name: "Французский бульдог",
        aliases: ["французский"],
        prices: { hygiene: null, complex: "1700" }
      },
      {
        id: "english-bulldog",
        name: "Английский бульдог",
        aliases: ["английский"],
        prices: { hygiene: null, complex: "2000" }
      },
      {
        id: "bichon-frise",
        name: "Бишон фризе",
        aliases: ["бишон"],
        prices: { hygiene: "2200", complex: "2800" }
      },
      {
        id: "welsh-corgi",
        name: "Вельш-корги",
        aliases: ["корги"],
        prices: { hygiene: null, complex: "2300" }
      },
      {
        id: "yorkshire-terrier",
        name: "Йоркширский терьер",
        aliases: ["йорк", "йоркшир"],
        prices: { hygiene: "1300", complex: "1700/1950" }
      },
      {
        id: "cavalier-king-charles-spaniel",
        name: "Кавалер кинг чарльз спаниель",
        aliases: ["кавалер", "спаниель"],
        prices: { hygiene: "2300", complex: null }
      },
      {
        id: "chinese-crested-hairless",
        name: "Китайская хохлатая голая",
        aliases: ["китайская хохлатая"],
        prices: { hygiene: null, complex: "1900" }
      },
      {
        id: "chinese-crested-powderpuff",
        name: "Китайская хохлатая пуховая",
        aliases: ["пуховая"],
        prices: { hygiene: "2000", complex: "2500" }
      },
      {
        id: "cocker-spaniel",
        name: "Кокер-спаниель",
        aliases: ["кокер"],
        prices: { hygiene: "2300", complex: "2900" }
      },
      {
        id: "russian-hunting-spaniel",
        name: "Русский охотничий спаниель",
        aliases: ["охотничий спаниель"],
        prices: { hygiene: null, complex: "2700" }
      },
      {
        id: "maltese-bolonka",
        name: "Мальтийская болонка",
        aliases: ["мальтезе", "мальтийская"],
        prices: { hygiene: "1500", complex: "1900/2150" }
      },
      {
        id: "bolonka",
        name: "Болонка",
        aliases: ["болонка собака"],
        prices: { hygiene: "1500", complex: "1900/2150" }
      },
      {
        id: "pug",
        name: "Мопс",
        aliases: ["мопсик"],
        prices: { hygiene: null, complex: "1700" }
      },
      {
        id: "papillon",
        name: "Папильон (континентальный той-спаниель)",
        aliases: ["папильон", "той-спаниель"],
        prices: { hygiene: null, complex: "2100" }
      },
      {
        id: "pekingese",
        name: "Пекинес",
        aliases: ["пекинес собака"],
        prices: { hygiene: "1800", complex: "2200" }
      },
      {
        id: "russian-toy-smooth",
        name: "Русский той-терьер гладкошерстный",
        aliases: ["русский той", "той-терьер"],
        prices: { hygiene: null, complex: "1400" }
      },
      {
        id: "chihuahua-smooth",
        name: "Чихуахуа гладкошерстная",
        aliases: ["чихуахуа", "чих"],
        prices: { hygiene: null, complex: "1400" }
      },
      {
        id: "chihuahua-long",
        name: "Чихуахуа длинношерстная",
        aliases: ["чихуахуа длинношерстная"],
        prices: { hygiene: null, complex: "1650" }
      },
      {
        id: "shih-tzu",
        name: "Ши-тцу",
        aliases: ["ши тцу"],
        prices: { hygiene: "1600", complex: "2000/2300" }
      },
      {
        id: "spitz-small",
        name: "Шпиц малый (до 3 кг)",
        aliases: ["шпиц малый"],
        prices: { hygiene: "1600", complex: "1900/2200" }
      },
      {
        id: "spitz-medium",
        name: "Шпиц средний (от 3 до 6 кг)",
        aliases: ["шпиц средний"],
        prices: { hygiene: "1700", complex: "2100/2400" }
      },
      {
        id: "spitz-large",
        name: "Шпиц крупный (от 6 до 10 кг)",
        aliases: ["шпиц крупный"],
        prices: { hygiene: "1900", complex: "2400/2700" }
      },
      {
        id: "spitz-over-10",
        name: "Шпиц (более 10 кг)",
        aliases: ["большой шпиц"],
        prices: { hygiene: "2100", complex: "2600/2900" }
      },
      {
        id: "wolf-spitz",
        name: "Вольф шпиц",
        aliases: ["кеесхонд"],
        prices: { hygiene: null, complex: "4200/4500" }
      },
      {
        id: "japanese-chin",
        name: "Японский хин",
        aliases: ["хин"],
        prices: { hygiene: null, complex: "2100" }
      }
    ],
    notes: [
      "*Гигиена: купание, кондиционирование, сушка, чистка ушей и глаз, подстригание когтей, окантовка шерсти у глаз, лап и паховой области.",
      "-10% при повторном посещении в течение месяца."
    ]
  },
  {
    id: "poodles",
    tabLabel: "Пудели",
    sectionLabel: "Процедуры для собак",
    subtitle: "Пудели и метисы",
    columns: [
      { id: "hygiene", label: "Гигиена*" },
      { id: "complex", label: "Комплекс (гигиена + модельная стрижка)" }
    ],
    rows: [
      {
        id: "labradoodle",
        name: "Лабрадудль",
        aliases: ["лабраду́дль"],
        prices: { hygiene: "3700", complex: "5800" }
      },
      {
        id: "maltipoo-up-to-28",
        name: "Мальтипу (до 28 см в холке)",
        aliases: ["мальтипу", "мальтипу мини"],
        prices: { hygiene: "1750", complex: "2250/2500" }
      },
      {
        id: "maltipoo-over-28",
        name: "Мальтипу (более 28 см в холке)",
        aliases: ["мальтипу большой"],
        prices: { hygiene: "1850", complex: "2450/2700" }
      },
      {
        id: "cavapoo",
        name: "Кавапу",
        aliases: ["кавапу собака"],
        prices: { hygiene: "1900", complex: "2500/2800" }
      },
      {
        id: "toy-poodle",
        name: "Пудель той (до 28 см в холке)",
        aliases: ["той пудель"],
        prices: { hygiene: "1750", complex: "2250/2500" }
      },
      {
        id: "mini-poodle",
        name: "Пудель карликовый (до 36 см в холке)",
        aliases: ["карликовый пудель"],
        prices: { hygiene: "1850", complex: "2450/2700" }
      },
      {
        id: "small-poodle",
        name: "Пудель малый",
        aliases: ["малый пудель"],
        prices: { hygiene: "2000", complex: "2500/2900" }
      },
      {
        id: "royal-poodle",
        name: "Пудель королевский",
        aliases: ["большой пудель", "королевский пудель"],
        prices: { hygiene: "4000", complex: "6000/6500" }
      }
    ],
    notes: [
      "*Гигиена: купание, кондиционирование, сушка, чистка ушей и глаз, подстригание когтей, окантовка шерсти у глаз, лап и паховой области.",
      "-10% при повторном посещении в течение месяца."
    ]
  },
  {
    id: "other-dogs",
    tabLabel: "Другие породы",
    sectionLabel: "Процедуры для собак",
    subtitle: "Другие породы",
    columns: [
      { id: "hygiene", label: "Гигиена*" },
      { id: "complex", label: "Комплекс (гигиена + модельная стрижка/вычес)" }
    ],
    rows: [
      {
        id: "akita",
        name: "Акита-ину",
        aliases: ["акита"],
        prices: { hygiene: "3900", complex: null }
      },
      {
        id: "akita-longhair",
        name: "Акита-ину длинношерстная",
        aliases: ["акита длинношерстная"],
        prices: { hygiene: "5000", complex: null }
      },
      {
        id: "american-akita",
        name: "Американская акита",
        aliases: ["акита американская"],
        prices: { hygiene: "5000", complex: null }
      },
      {
        id: "american-staffordshire-terrier",
        name: "Американский стаффордширский терьер",
        aliases: ["стафф", "амстафф"],
        prices: { hygiene: "2300", complex: null }
      },
      {
        id: "alaskan-malamute",
        name: "Аляскинский маламут",
        aliases: ["маламут"],
        prices: { hygiene: "5800", complex: null }
      },
      {
        id: "beagle",
        name: "Бигль",
        aliases: ["beagle"],
        prices: { hygiene: null, complex: "2000" }
      },
      {
        id: "golden-retriever",
        name: "Голден ретривер",
        aliases: ["ретривер", "голден"],
        prices: { hygiene: null, complex: "3500" }
      },
      {
        id: "petit-brabancon",
        name: "Грифон пти брабансон",
        aliases: ["брабансон"],
        prices: { hygiene: null, complex: "1900" }
      },
      {
        id: "jack-russell-smooth",
        name: "Джек рассел гладкий",
        aliases: ["джек рассел"],
        prices: { hygiene: null, complex: "1700" }
      },
      {
        id: "doberman",
        name: "Доберман",
        aliases: ["доберман собака"],
        prices: { hygiene: "3000", complex: null }
      },
      {
        id: "labrador",
        name: "Лабрадор",
        aliases: ["лабрадор ретривер"],
        prices: { hygiene: null, complex: "3000" }
      },
      {
        id: "laika",
        name: "Лайка",
        aliases: ["лайка собака"],
        prices: { hygiene: "3600", complex: null }
      },
      {
        id: "german-shepherd-short",
        name: "Немецкая овчарка (короткошерстная)",
        aliases: ["овчарка короткошерстная"],
        prices: { hygiene: "4900", complex: null }
      },
      {
        id: "german-shepherd-long",
        name: "Немецкая овчарка (длинношерстная)",
        aliases: ["овчарка длинношерстная"],
        prices: { hygiene: null, complex: "6000" }
      },
      {
        id: "samoyed",
        name: "Самоедская собака",
        aliases: ["самоед"],
        prices: { hygiene: "4900", complex: null }
      },
      {
        id: "shiba-inu",
        name: "Сиба-ину",
        aliases: ["шиба", "сиба"],
        prices: { hygiene: "2500", complex: null }
      },
      {
        id: "smooth-dachshund",
        name: "Такса гладкая",
        aliases: ["такса гладкая"],
        prices: { hygiene: null, complex: "1550" }
      },
      {
        id: "longhair-dachshund",
        name: "Такса длинношерстная",
        aliases: ["такса длинношерстная"],
        prices: { hygiene: null, complex: "1850" }
      },
      {
        id: "husky",
        name: "Хаски",
        aliases: ["husky"],
        prices: { hygiene: "4000", complex: null }
      },
      {
        id: "chow-chow",
        name: "Чау-чау",
        aliases: ["чау"],
        prices: { hygiene: null, complex: "3500" }
      }
    ],
    notes: [
      "*Гигиена: купание, кондиционирование, сушка, чистка ушей и глаз, подстригание когтей, окантовка шерсти у глаз, лап и паховой области.",
      "-10% при повторном посещении в течение месяца."
    ]
  },
  {
    id: "cats",
    tabLabel: "Кошки",
    sectionLabel: "Процедуры для кошек",
    subtitle: "Прайс для кошек",
    columns: [{ id: "price", label: "Цена" }],
    rows: [
      {
        id: "cat-shedding-up-to-6",
        name: "Экспресс линька (до 6 кг)",
        aliases: ["линька кошка", "экспресс линька"],
        prices: { price: "1500" }
      },
      {
        id: "cat-shedding-over-6",
        name: "Экспресс линька (от 6 кг)",
        aliases: ["линька от 6 кг"],
        prices: { price: "1700" }
      },
      {
        id: "cat-shedding-maine-coon",
        name: "Экспресс линька мейн кун",
        aliases: ["мейн кун линька"],
        prices: { price: "1900" }
      },
      {
        id: "cat-haircut-up-to-6",
        name: "Стрижка (до 6 кг)",
        aliases: ["стрижка кошки"],
        prices: { price: "1700" }
      },
      {
        id: "cat-haircut-over-6",
        name: "Стрижка (от 6 кг)",
        aliases: ["стрижка кошки от 6 кг"],
        prices: { price: "1900" }
      },
      {
        id: "cat-haircut-maine-coon",
        name: "Стрижка мейн кун",
        aliases: ["мейн кун стрижка"],
        prices: { price: "2100" }
      },
      {
        id: "cat-shedding-bath-up-to-6",
        name: "Экспресс линька с купанием (до 6 кг)",
        aliases: ["линька с купанием"],
        prices: { price: "2500" }
      },
      {
        id: "cat-shedding-bath-over-6",
        name: "Экспресс линька с купанием (от 6 кг)",
        aliases: ["линька с купанием от 6 кг"],
        prices: { price: "2700" }
      },
      {
        id: "cat-shedding-bath-maine-coon",
        name: "Экспресс линька с купанием мейн кун",
        aliases: ["мейн кун линька с купанием"],
        prices: { price: "2900" }
      },
      {
        id: "cat-haircut-bath-up-to-6",
        name: "Стрижка с купанием (до 6 кг)",
        aliases: ["стрижка с купанием"],
        prices: { price: "2600" }
      },
      {
        id: "cat-haircut-bath-over-6",
        name: "Стрижка с купанием (от 6 кг)",
        aliases: ["стрижка с купанием от 6 кг"],
        prices: { price: "2800" }
      },
      {
        id: "cat-haircut-bath-maine-coon",
        name: "Стрижка с купанием мейн кун",
        aliases: ["мейн кун стрижка с купанием"],
        prices: { price: "3000" }
      },
      {
        id: "cat-bath-special-breeds",
        name: "Купание сфинкс/корниш-рекс/девон-рекс",
        aliases: ["сфинкс", "корниш-рекс", "девон-рекс"],
        prices: { price: "1500" }
      },
      {
        id: "kitten-bath",
        name: "Купание котят (до 7 месяцев)",
        aliases: ["купание котят"],
        prices: { price: "1500" }
      },
      {
        id: "anti-scratch",
        name: "Антицарапки (10 шт. с наклеиванием)",
        aliases: ["антицарапки", "колпачки на когти"],
        prices: { price: "600" }
      }
    ],
    notes: ["*Колтуны более 30%: доплата 350 ₽ к услуге.", "-10% при повторном посещении в течение первого месяца."]
  },
  {
    id: "spa",
    tabLabel: "SPA",
    sectionLabel: "SPA процедуры",
    subtitle: "Оздоровительный уход",
    columns: [
      { id: "small", label: "Маленькие (до 5 кг)" },
      { id: "medium", label: "Средние (5–10 кг)" },
      { id: "large", label: "Большие (свыше 10 кг)" }
    ],
    rows: [
      {
        id: "spa-black-passion",
        name: "SPA комплекс по восстановлению шерсти «Черная страсть»",
        aliases: ["черная страсть", "восстановление шерсти"],
        prices: { small: "550", medium: "650", large: "от 800" }
      },
      {
        id: "spa-hydra-ozone",
        name: "Luxe SPA комплекс Hydra (с озоном)",
        aliases: ["hydra", "люкс spa"],
        prices: { small: "1000", medium: "1200", large: "от 1500" }
      },
      {
        id: "ozone-no-mask",
        name: "Озонотерапия (без маски)",
        aliases: ["озонотерапия"],
        prices: { small: "500", medium: "600", large: "от 700" }
      },
      {
        id: "ozone-with-mask",
        name: "Сеанс озонотерапии с маской по типу шерсти",
        aliases: ["озонотерапия с маской"],
        prices: { small: "700", medium: "850", large: "от 1100" }
      },
      {
        id: "mask-by-coat-type",
        name: "Маска по типу шерсти",
        aliases: ["маска для шерсти"],
        prices: { small: "300", medium: "400", large: "от 500" }
      },
      {
        id: "teeth-cleaning",
        name: "Чистка зубов пастой",
        aliases: ["чистка зубов"],
        prices: { small: "200", medium: "250", large: "от 350" }
      },
      {
        id: "paw-pad-care",
        name: "Обработка подушечек лап",
        aliases: ["обработка лап", "подушечки лап"],
        prices: { small: "300", medium: "400", large: "от 500" }
      },
      {
        id: "pawicure",
        name: "Лапакюр",
        aliases: ["лапикюр", "лапакюр"],
        prices: { small: "300", medium: "350", large: "от 450" }
      },
      {
        id: "ear-cleaning",
        name: "Чистка ушей",
        aliases: ["уши", "чистка ушей"],
        prices: { small: "150", medium: "200", large: "250" }
      },
      {
        id: "perfume",
        name: "Нанесение парфюма",
        aliases: ["парфюм"],
        prices: { small: "50", medium: "100", large: "150" }
      },
      {
        id: "medical-shampoo",
        name: "Лечебный шампунь",
        aliases: ["шампунь", "лечебный уход"],
        prices: { small: "250", medium: "350", large: "от 500" }
      },
      {
        id: "rhinestones",
        name: "Стразы",
        aliases: ["декор"],
        prices: { small: "150", medium: "150", large: "150" }
      },
      {
        id: "aggression-fee",
        name: "Доплата за агрессию",
        aliases: ["агрессия"],
        prices: { small: "300", medium: "450", large: "от 600" },
        highlight: true
      },
      {
        id: "mats-fee",
        name: "Доплата за колтуны (более 50%)",
        aliases: ["колтуны", "доплата за колтуны"],
        prices: { small: "300", medium: "400", large: "от 500" },
        highlight: true
      }
    ],
    notes: ["-10% при повторном посещении в течение месяца."]
  }
];
