---
title: VScode 配置 常用log 代码片段
date: 2024/05/05
tags:
  - vscode/code-snippets
---

```json
{
  "Console Log": {
    "body": [
      "console.log(`%c$TM_FILENAME:%c$TM_LINE_NUMBER: `, `color: ${9:green};`,`color: ${10:red};`, {",
      " ${1} ",
      "})"
    ],
    "description": "Console Log",
    "prefix": "consolelog",
  },
  "Console Table": {
    "body": [
      "console.table(${1}, [${2}])"
    ],
    "description": "Console Table",
    "prefix": "consoletable",
  },
  "Console Dir": {
    "body": [
      "console.dir(${1}, { depth: ${2:2} })"
    ],
    "description": "Console Dir",
    "prefix": "consoledir",
  },
}
```
