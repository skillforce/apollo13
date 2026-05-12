export const languages = {
  be: 'BY',
  ru: 'RU',
} as const;

export const defaultLang = 'ru' as const;

export type Lang = keyof typeof languages;

type Slot = { name: string; before: number; after: number };

type Plan = { title: string; price: string; badge?: string };

export type UI = {
  htmlLang: string;
  langName: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    benefits: string;
    tour: string;
    pricing: string;
    contact: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaBook: string;
    ctaCall: string;
    quickInfo: {
      address: string;
      hoursWeek: string;
      hoursWeekend: string;
      phone: string;
    };
    labels: {
      address: string;
      hours: string;
      phone: string;
    };
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    singleTitle: string;
    singleNote: string;
    table: {
      period: string;
      before: string;
      after: string;
      allDay: string;
      currency: string;
    };
    slots: Slot[];
    plansVisitsTitle: string;
    plansVisitsNote: string;
    plansVisits: Plan[];
    plansUnlimitedTitle: string;
    plansUnlimitedNote: string;
    plansUnlimited: Plan[];
  };
  tour: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    ctaBook: string;
    ctaCall: string;
    trust: string;
    address: string;
    hoursTitle: string;
    hoursWeek: string;
    hoursWeekend: string;
    phoneLabel: string;
    mapLabel: string;
  };
  footer: {
    rights: string;
    crafted: string;
  };
  switcher: {
    label: string;
  };
};

const slots = (weekday: string, weekend: string): Slot[] => [
  { name: weekday, before: 8, after: 10 },
  { name: weekend, before: 10, after: 10 },
];

export const ui: Record<Lang, UI> = {
  be: {
    htmlLang: 'by',
    langName: 'Беларуская',
    meta: {
      title: 'Apolon 13 — фітнес-клуб у Магілёве',
      description:
        'Apolon 13 — фітнес-клуб на Мінскім шашы, 8. Зручны графік, сумленныя цэны, моцная атмасфера. Запішыцеся ў адзін клік.',
    },
    nav: {
      benefits: 'Перавагі',
      tour: '360° тур',
      pricing: 'Кошты',
      contact: 'Кантакты',
    },
    brand: {
      name: 'Apolon 13',
      tagline: 'Фітнес-клуб · Магілёў',
    },
    hero: {
      badge: 'Твая арбіта пачынаецца тут',
      title: 'Трэніруйся',
      titleAccent: 'як касманаўт.',
      subtitle:
        'Моцны зал, чыстая прастора і графік, які зручны менавіта табе. Цэны без сюрпрызаў, абанементы без падвохаў.',
      ctaBook: 'Запісацца',
      ctaCall: 'Пазваніць',
      quickInfo: {
        address: 'г. Магілёў, вул. Мінскае шашэ, 8',
        hoursWeek: 'Пн–Пт · 9:00–21:00',
        hoursWeekend: 'Сб–Нд · 10:00–19:00',
        phone: '+375 (29) 613-94-11',
      },
      labels: {
        address: 'Адрас',
        hours: 'Графік',
        phone: 'Тэлефон',
      },
    },
    benefits: {
      eyebrow: 'Чаму Apolon 13',
      title: 'Усё для трэніроўкі — без лішняга',
      items: [
        {
          title: 'Зручны графік',
          text: 'Адкрыты з раніцы да позняга вечара, 7 дзён у тыдзень. Прыходзь, калі табе зручна.',
        },
        {
          title: 'Сумленны кошт',
          text: 'Празрыстыя тарыфы, выгадныя абанементы і парныя пакеты. Без хаваных платяжоў.',
        },
        {
          title: 'Моцная атмасфера',
          text: 'Прафесійнае абсталяванне, чыстыя залы, людзі, якія любяць спорт.',
        },
        {
          title: 'У цэнтры падзей',
          text: 'Мінскае шашэ, 8 — лёгка дабрацца і пешшу, і на машыне.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Цэны',
      title: 'Выбірай, як трэніравацца',
      subtitle: 'Адзінкавы візіт або абанемент — рашэнне за табой.',
      singleTitle: 'Адно занятак',
      singleNote: 'Цана за адзін візіт',
      table: {
        period: 'Дні',
        before: 'Да 15:00',
        after: 'З 15:00',
        allDay: 'Увесь дзень',
        currency: 'р',
      },
      slots: slots('Пн–Пт', 'Сб–Нд'),
      plansVisitsTitle: 'Пакеты заняткаў',
      plansVisitsNote: 'Запас візітаў без тэрміну згарання',
      plansVisits: [
        { title: '8 заняткаў', price: '55 р' },
        { title: '12 заняткаў', price: '70 р', badge: 'Хіт' },
      ],
      plansUnlimitedTitle: 'Безліміт',
      plansUnlimitedNote: 'Лепшая цана за візіт',
      plansUnlimited: [
        { title: '1 месяц', price: '80 р' },
        { title: '3 месяцы', price: '170 р', badge: 'Выгада' },
        { title: '1 месяц · пары', price: '140 р' },
      ],
    },
    tour: {
      eyebrow: 'Зазірні ўнутр',
      title: 'Віртуальны тур па зале',
      subtitle: 'Паглядзі на зал вачыма наведвальніка — сферычная панарама прама ў браузеры.',
    },
    contact: {
      eyebrow: 'Кантакты',
      title: 'Чакаем цябе на трэніроўцы',
      text: 'Патэлефануй або прыходзь — пакажам клуб, дапаможам з абанементам і пачнём трэніравацца сёння ж.',
      ctaBook: 'Запісацца',
      ctaCall: 'Пазваніць',
      trust: '300+ кліентаў ужо трэніруюцца з намі',
      address: 'г. Магілёў, вул. Мінскае шашэ, 8',
      hoursTitle: 'Графік працы',
      hoursWeek: 'Пн–Пт · 9:00–21:00',
      hoursWeekend: 'Сб–Нд · 10:00–19:00',
      phoneLabel: 'Тэлефон',
      mapLabel: 'Адкрыць на карце',
    },
    footer: {
      rights: 'Усе правы абаронены',
      crafted: 'Зроблена з энергіяй у Магілёве',
    },
    switcher: {
      label: 'Мова',
    },
  },
  ru: {
    htmlLang: 'ru',
    langName: 'Русский',
    meta: {
      title: 'Apolon 13 — фитнес-клуб в Могилёве',
      description:
        'Apolon 13 — фитнес-клуб на Минском шоссе, 8. Удобный график, честные цены, мощная атмосфера. Записывайся в один клик.',
    },
    nav: {
      benefits: 'Преимущества',
      tour: '360° тур',
      pricing: 'Цены',
      contact: 'Контакты',
    },
    brand: {
      name: 'Apolon 13',
      tagline: 'Фитнес-клуб · Могилёв',
    },
    hero: {
      badge: 'Твоя орбита начинается здесь',
      title: 'Тренируйся',
      titleAccent: 'как космонавт.',
      subtitle:
        'Мощный зал, чистое пространство и график, который удобен именно тебе. Цены без сюрпризов, абонементы без подвоха.',
      ctaBook: 'Записаться',
      ctaCall: 'Позвонить',
      quickInfo: {
        address: 'г. Могилёв, ул. Минское шоссе, 8',
        hoursWeek: 'Пн–Пт · 9:00–21:00',
        hoursWeekend: 'Сб–Вс · 10:00–19:00',
        phone: '+375 (29) 613-94-11',
      },
      labels: {
        address: 'Адрес',
        hours: 'График',
        phone: 'Телефон',
      },
    },
    benefits: {
      eyebrow: 'Почему Apolon 13',
      title: 'Всё для тренировки — без лишнего',
      items: [
        {
          title: 'Удобный график',
          text: 'Открыты с утра до позднего вечера, 7 дней в неделю. Приходи, когда удобно.',
        },
        {
          title: 'Честная цена',
          text: 'Прозрачные тарифы, выгодные абонементы и парные пакеты. Без скрытых платежей.',
        },
        {
          title: 'Мощная атмосфера',
          text: 'Профессиональное оборудование, чистые залы и люди, которые любят спорт.',
        },
        {
          title: 'В центре событий',
          text: 'Минское шоссе, 8 — легко добраться и пешком, и на машине.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Цены',
      title: 'Выбирай, как тренироваться',
      subtitle: 'Разовый визит или абонемент — решение за тобой.',
      singleTitle: 'Одно занятие',
      singleNote: 'Цена за один визит',
      table: {
        period: 'Дни',
        before: 'До 15:00',
        after: 'С 15:00',
        allDay: 'Весь день',
        currency: 'р',
      },
      slots: slots('Пн–Пт', 'Сб–Вс'),
      plansVisitsTitle: 'Пакеты занятий',
      plansVisitsNote: 'Запас визитов без срока сгорания',
      plansVisits: [
        { title: '8 занятий', price: '55 р' },
        { title: '12 занятий', price: '70 р', badge: 'Хит' },
      ],
      plansUnlimitedTitle: 'Безлимит',
      plansUnlimitedNote: 'Лучшая цена за визит',
      plansUnlimited: [
        { title: '1 месяц', price: '80 р' },
        { title: '3 месяца', price: '170 р', badge: 'Выгодно' },
        { title: '1 месяц · пары', price: '140 р' },
      ],
    },
    tour: {
      eyebrow: 'Загляни внутрь',
      title: 'Виртуальный тур по залу',
      subtitle: 'Посмотри на зал глазами посетителя — сферическая панорама прямо в браузере.',
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Ждём тебя на тренировке',
      text: 'Позвони или приходи — покажем клуб, поможем с абонементом и начнём тренироваться уже сегодня.',
      ctaBook: 'Записаться',
      ctaCall: 'Позвонить',
      trust: '300+ клиентов уже тренируются с нами',
      address: 'г. Могилёв, ул. Минское шоссе, 8',
      hoursTitle: 'График работы',
      hoursWeek: 'Пн–Пт · 9:00–21:00',
      hoursWeekend: 'Сб–Вс · 10:00–19:00',
      phoneLabel: 'Телефон',
      mapLabel: 'Открыть на карте',
    },
    footer: {
      rights: 'Все права защищены',
      crafted: 'Сделано с энергией в Могилёве',
    },
    switcher: {
      label: 'Язык',
    },
  },
};

export const PHONE_E164 = '+375296139411';
export const PHONE_DISPLAY = '+375 (29) 613-94-11';
export const MAP_URL =
  'https://yandex.com/maps/?text=%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2%2C%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%208';