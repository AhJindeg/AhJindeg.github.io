---
title: VScode 配置 pinia 代码片段
date: 2024/05/05
tags:
  - vscode/code-snippets
---

```json
{
	"Pinia Store Base": {
		"prefix": "pstore",
		"body": [
			"import { defineStore, acceptHMRUpdate } from \"pinia\"",
			"",
			"export const use${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}Store = defineStore(\"$TM_FILENAME_BASE\", {",
			"\tstate: () => ({",
			"\t\t$0",
			"\t}),",
			"\tgetters: {},",
			"\tactions: {},",
			"})",
			"",
			"if (import.meta.hot) {",
			"\timport.meta.hot.accept(acceptHMRUpdate(use${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}Store, import.meta.hot))",
			"}",
			""
		],
		"description": "Base code needed for a Pinia store file"
	},
	"Pinia Store Base - Composition API": {
		"prefix": "pstore-composition",
		"body": [
			"import { defineStore, acceptHMRUpdate } from \"pinia\"",
			"",
			"export const use${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}Store = defineStore(\"$TM_FILENAME_BASE\", () => {",
			"\t${0}",
			"})",
			"",
			"if (import.meta.hot) {",
			"\timport.meta.hot.accept(acceptHMRUpdate(use${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}Store, import.meta.hot))",
			"}",
			""
		],
		"description": "Base code needed for a Pinia store file with Composition API"
	}
}
```
