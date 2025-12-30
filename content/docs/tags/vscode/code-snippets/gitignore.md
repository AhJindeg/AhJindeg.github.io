---
title: VScode 配置 .gitignore 代码片段
date: 2024/05/05
tags:
  - vscode/code-snippets
---

```json
{
  "Gitignore": {
    "prefix": "gitignore",
    "body": [
      "*.DS_Store",
      ".idea/",
      "",
      "node_modules",
      "dist-ssr",
      "dist",
      "",
      "*.local",
      "*-lock.*",
      "!pnpm-lock.yaml",
      "*.lock",
      "*.log",
      "",
      "auto-*.d.ts",
    ],
    "description": "gitignore file"
  }
}
```
