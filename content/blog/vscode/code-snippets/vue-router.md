---
title: VScode 配置 vue-router 代码片段
date: 2024/05/05
tags:
  - vscode/code-snippets
---

```json
{
  "Vue Routing Link": {
    "prefix": "vrlink",
    "body": [
      "<router-link to=\"/${1:path}\">${2:linkTitle}</router-link>"
    ],
    "description": "vue router link"
  },
  "Vue Routing Link with param": {
    "prefix": "vrlink-param",
    "body": [
      "<router-link :to=\"`/${1:path}/${${2:param}}`\">${3:linkTitle}</router-link>"
    ],
    "description": "vue router link with param"
  },
  "Vue Router": {
    "prefix": "vrouter",
    "body": [
      "import Vue from 'vue';",
      "import VueRouter from 'vue-router';",
      "",
      "Vue.use(VueRouter);",
      "",
      "export const router = new VueRouter({",
      "\tbase: '/',",
      "\tmode: 'history',",
      "\troutes: [",
      "\t\t{ path: '/path', component: component }",
      "\t]",
      "});"
    ],
    "description": "Base for Vue Router"
  },
  "Vue Router scrollBehavior": {
    "prefix": "vscrollbehavior",
    "body": [
      "scrollBehavior(to, from, savedPosition) {",
      "\tif(savedPosition) {",
      "\t\treturn savedPosition;",
      "\t} else {",
      "\t\treturn { x: 0, y: 0 };",
      "\t}",
      "},"
    ],
    "description": "Vue Router scrollBehavior"
  },
  "Vue Router beforeEach": {
    "prefix": "vbeforeeach",
    "body": [
      "router.beforeEach((to, from, next) => {",
      "\t${1:next();}",
      "});"
    ],
    "description": "Vue Router global guards beforeEach"
  },
  "Vue Router beforeResolve": {
    "prefix": "vbeforeresolve",
    "body": [
      "router.beforeResolve((to, from, next) => {",
      "\t${1:next();}",
      "});"
    ],
    "description": "Vue Router global guards beforeResolve"
  },
  "Vue Router afterEach": {
    "prefix": "vaftereach",
    "body": [
      "router.afterEach((to, from) => {",
      "\t",
      "});"
    ],
    "description": "Vue Router global guards afterEach"
  },
  "Vue Router beforeEnter": {
    "prefix": "vbeforeenter",
    "body": [
      "beforeEnter(to, from, next) {",
      "\t${1:next();}",
      "},"
    ],
    "description": "Vue Router per-route guard beforeEnter"
  },
  "Vue Router beforeRouteEnter": {
    "prefix": "vbeforerouteenter",
    "body": [
      "beforeRouteEnter(to, from, next) {",
      "\tnext(vm => {${1:}});",
      "},"
    ],
    "description": "Vue Router component guards beforeRouteEnter"
  },
  "Vue Router beforeRouteUpdate": {
    "prefix": "vbeforerouteupdate",
    "body": [
      "beforeRouteUpdate(to, from, next) {",
      "\t${1:next();}",
      "},"
    ],
    "description": "Vue Router component guards beforeRouteUpdate"
  },
  "Vue Router beforeRouteLeave": {
    "prefix": "vbeforerouteleave",
    "body": [
      "beforeRouteLeave(to, from, next) {",
      "\t${1:next();}",
      "},"
    ],
    "description": "Vue Router component guards beforeRouteLeave"
  },
  "Vue Router Route": {
    "prefix": "vroute-named",
    "body": [
      "{",
      "\tpath: '${1:pathName}',",
      "\tname: '${2:routeName}',",
      "\tcomponent: () => import('./${3:pathToComponent}'),",
      "},"
    ],
    "description": "Vue Router route with per route code-splitting"
  }
}
```
