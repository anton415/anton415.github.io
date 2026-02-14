---
title: "Привет, мир, и блоки кода"
date: 2026-01-25
tags:
  - Код
  - Markdown
  - Стили
description: "Тестовая запись для подсветки синтаксиса и стилей code block."
readingTime: "2 мин чтения"
draft: false
---

Это короткая запись для проверки inline-стилей `code` и рендера блоков.

## JavaScript

```js
function hello(name = "world") {
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

const user: User = { id: "u_1", name: "Anton" };
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

Этого достаточно, чтобы проверить подсветку для разных языков.
