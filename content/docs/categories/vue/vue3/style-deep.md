---
title: 关于在 VUE3 中样式穿透的小建议
date: 2023/11/27
categories:
  - vue/vue3
---

#### 使用 VUE3 项目后会因为使用的 CSS 预处理 不同导致`/deep/ & v-deep & >>>` 无效或者报错

可以修改为使用 `:deep(.className)`

设置 ***全局样式*** 使用 `:global(.className)`

设置 ***插槽样式*** 使用 `:slotted(.className)`
