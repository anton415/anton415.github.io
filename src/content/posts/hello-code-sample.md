---
title: "Hello world, code blocks"
date: 2026-01-25
tags:
  - Code
  - Markdown
  - Styling
description: "Test post for syntax highlighting and code block styling."
readingTime: "2 min read"
draft: false
---

This is a quick post to validate inline `code` styles and block rendering.

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

That should be enough to verify highlighting across languages.
