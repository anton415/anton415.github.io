---
title: 'Привет, мир и блоки кода'
date: 2026-01-25
tags:
  - Код
  - Markdown
  - Стили
description: 'Тестовый пост для проверки подсветки синтаксиса и оформления блоков кода.'
readingTime: '2 мин чтения'
draft: false
---

Это короткий пост, чтобы проверить inline-стили `code` и рендеринг блоков кода.

## JavaScript

```js
function hello(name = 'world') {
  return `Hello, ${name}!`;
}

console.log(hello());
```

## TypeScript

```ts
type User = {
  id: string;
  name: string;
};

const user: User = { id: 'u_1', name: 'Anton' };
console.log(user);
```

## Bash

```bash
echo "hello world"
```

## JSON

```json
{
  "name": "serdyuchenko.com",
  "highlight": true
}
```

## HTML

```html
<section class="hero">
  <h1>Hello world</h1>
</section>
```

Этого достаточно, чтобы проверить подсветку и оформление для разных языков.
