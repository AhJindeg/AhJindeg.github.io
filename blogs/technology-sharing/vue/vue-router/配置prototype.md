---
title: 配置 prototype 防止往同一地址跳转时会报错的情况
date: 2023/11/27
categories:
  - vue/vue-router
---

## 修改 VueRouter 配置 prototype 防止往同一地址跳转时会报错的情况

### router / index.js

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(Router)
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.receive
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch((err) => err)
}
```
