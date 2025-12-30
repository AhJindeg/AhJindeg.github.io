---
title: 给 Window 增加自定义属性声明
date: 2023/11/27
categories:
  - typescript/declare
---

## 给 Window 增加一个简单的类型声明

创建一个 `xxx.d.ts` 文件，使用 `declare` 声明类型 <注意：此文件中不可以具有 `import` 等导入方法>

```typescript
<env.d.ts>

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  canvas: {
    e: boolean[],
    x: number,
    y: string
  }
}
```

## 给 Window 增加一个复杂的类型声明

因为在声明文件中使用 `import` 会导致被当作一个模块导致类型声明失效，如果我们要给 Window 增加一个已经声明好的类型就需要先创建一个文件用于定义全局命名空间，我们可以在命名空间中引入类型

创建 `xxx.d.ts` 文件 -> 创建命名空间 -> 在 Window 声明文件中使用命名空间定义的类型

```typescript
<window.d.ts>

import { CanvasPlus, Canvas } from '@/declare'

declare namespace WindowCanvas {
  interface CanvasInterface extends Canvas {
    canvas: CanvasPlus
  }
}

export = WindowCanvas
export as namespace WindowCanvas
```

```typescript
<env.d.ts>

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  windowCanvas: WindowCanvas.CanvasInterface
}
```
