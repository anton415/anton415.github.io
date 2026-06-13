# Релонч serdyuchenko.com — план

Живой план перезапуска персонального сайта. Описывает цель, текущее состояние и
дорожную карту. Обновляется по мере развития проекта.

## Цель

Перевести сайт в **чистое одностраничное резюме** и держать архитектуру модульной,
чтобы позже без переписывания вернуть разделы «Проекты» и «Блог».

- **Вариант 2 (сейчас):** сайт = одностраничное резюме на `/`.
- **Вариант 1 (позже):** многораздельный сайт (Резюме + Проекты + Блог + Ссылки).

## Статус

### Этап 1 — Одностраничное резюме ✅ (завершён)

- Резюме живёт на `/`; `/cv` оставлен как редирект на `/`.
- Удалены разделы «Проекты» и «Блог» (вместе с RSS, тегами, контент-коллекциями
  и sample-контентом) — вернём заново, вероятно с новой схемой. История в git.
- Дизайн-система вынесена из инлайн-стилей в `src/styles/` (`tokens`, `global`,
  `print`, `cv`). Большие файлы (~350 стр.) разбиты на маленькие компоненты.
- Навигация сокращена до `Резюме` (`/`) и `Ссылки` (`/links`).
- Из конфигурации убраны неиспользуемые зависимости (`@astrojs/mdx`,
  `@astrojs/rss`, `gh-pages`) и орфанный Giscus-конфиг.

## Архитектура

```
src/
├── styles/          tokens.css · global.css · print.css · cv.css   ← единая точка правды для стилей
├── layouts/         BaseLayout.astro                                ← head/SEO + Header/slot/Footer
├── components/      SiteHeader.astro · SiteFooter.astro
│   └── cv/          CvIntro · CvExperience · CvEducation · CvSkills · CvProjects
├── data/            profile.ts · site.ts · links.ts · cv.ts         ← single source of truth
├── utils/           date.ts
└── pages/           index.astro (резюме) · links.astro
```

**Принципы:**

- Маленькие, читаемые файлы (≈20–115 строк) — удобно человеку и агенту.
- Контент и данные отделены от вёрстки (`src/data/*`).
- Дизайн-токены в `styles/tokens.css`; общие примитивы (`.card`, `.pill`,
  `.cv-*`) — без дублирования между компонентами.
- Минимум клиентского JS, статический хостинг (GitHub Pages).

## Дорожная карта

### Этап 2 — вернуть «Проекты»

- Добавить коллекцию `projects` в `src/content.config.ts` (схема: `title`, `role`,
  `stack`, `links`, `outcomes`, `screenshots`).
- Страницы `pages/projects/index.astro` и `pages/projects/[slug].astro`.
- Компоненты под карточку/детали проекта в `components/projects/`.
- Вернуть пункт «Проекты» в `navLinks` (`src/data/links.ts`).

### Этап 3 — вернуть «Блог»

- Коллекция `posts` (схема: `title`, `date`, `tags`, `description`, `draft`).
- Страницы `pages/blog/index.astro`, `pages/blog/[slug].astro`, теги.
- Восстановить `pages/rss.xml.ts` и хелпер слагов.
- Решить по комментариям (Giscus или внешние «обсуждения»).
- Вернуть пункт «Блог» в `navLinks`.

## Бэклог / технический долг

- [x] Обновить `README.md` и `docs/` (ia.md, conventions.md, content-workflow.md,
      скриншоты) — описывали удалённые разделы (#128).
- [ ] `public/CNAME`: содержит `https://serdyuchenko.com` — для GitHub Pages нужен
      только домен (`serdyuchenko.com`).
- [ ] Запинить версии `astro` и `typescript` в `package.json` (сейчас `latest`).
- [ ] Сжать `public/og-default.png` (~826 КБ).
- [ ] Привести eslint к одному конфигу (есть и `.eslintrc.cjs`, и `eslint.config.mjs`).
