---
title: VScode 配置深拷贝代码片段
date: 2023/11/27
tags:
  - vscode/code-snippets
---

日常进行深拷贝时我们会使用`JSON.parse(JSON.stringify(data))`进行 copy
<br />
但是对象内有函数，或者是数据过于复杂非扁平化就会出现数据丢失的问题
<br />
使用下面这个可以应对绝大多数需要深拷贝的场景
<br />
可直接放入 VScode 用户代码片段使用

```json
{
  "deepClone": {
    "scope": "",
    "prefix": "cloneArt",
    "body": [
      "const DEEP_CLONE = (_obj, _map = new WeakMap()) => {",
      "  if (_obj instanceof Date) return new Date(_obj)",
      "  if (_obj instanceof RegExp) return new RegExp(_obj)",
      "  if (_map.has(_obj)) return _map.get(_obj)",
      "  const _ALL_DESC = Object.getOwnPropertyDescriptors(_obj)",
      "  let _cloneObj = Object.create(Object.getPrototypeOf(_obj), _ALL_DESC)",
      "  _map.set(_obj, _cloneObj)",
      "  for (const _key of Reflect.ownKeys(_obj)) {",
      "    const _VALUE = _obj[_key]",
      "    const _JUDGMENT = _VALUE instanceof Object && typeof _VALUE !== 'function'",
      "    _cloneObj[_key] = _JUDGMENT ? DEEP_CLONE(_VALUE, _map) : _VALUE",
      "  }",
      "  return _cloneObj",
      "}"
    ],
    "description": "The ultimate deep copy data content!"
  }
}
```
