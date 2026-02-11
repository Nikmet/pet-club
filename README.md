# Pet Club Frontend

Лендинг груминг-салона **Pet Club** на React + Vite с архитектурой **FSD** и деплоем на **GitHub Pages**.

## Стек

- React 19
- Vite 7
- SCSS Modules
- FSD (app / pages / widgets / entities / shared)
- `fuse.js` для поиска по услугам
- `lucide-react` для иконок

## Основной функционал

- Hero, About, Gallery, Services, Reviews, Booking, Footer
- Галерея с hover-video (превью + воспроизведение по наведению)
- Секция услуг с вкладками и поиском
- Слайдер отзывов
- Адаптивная верстка
- Оптимизация медиа перед production-сборкой

## Структура проекта

```text
src/
  app/        # глобальные стили, entry-level настройки
  pages/      # страницы
  widgets/    # крупные секции лендинга
  entities/   # доменные данные (услуги, отзывы, контакты)
  shared/     # переиспользуемые UI-компоненты и утилиты
```

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

## Скрипты

- `npm run dev` — локальная разработка
- `npm run build` — обычная production-сборка
- `npm run preview` — локальный просмотр собранного `dist`
- `npm run optimize:media` — оптимизация изображений/видео в `public/`
- `npm run build:prod` — оптимизация медиа + сборка
- `npm run deploy` — деплой на GitHub Pages (`gh-pages -d dist`)

## Деплой на GitHub Pages

Проект использует `base` для Pages в `vite.config.js`:

- production base: `/pet-club/`

Публикация:

```bash
npm run deploy
```

## Важно про оптимизацию медиа

Скрипт `scripts/optimize-media.mjs` использует `ffmpeg`.

Если `ffmpeg` не установлен:

- либо установите `ffmpeg` и используйте `npm run build:prod`
- либо выполняйте `npm run build` без шага оптимизации

## Прод URL

`https://nikmet.github.io/pet-club/`

