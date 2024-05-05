---
title: 关于 JSON 序列化与反序列化那些事
date: 2023/11/27
categories:
  - javascript
---

## 1. JSON.stringify：`格式化`

- `JSON.stringify` 内有 `格式化` 程序
- `JSON.stringify(user, null, 2)` JSON 格式为 2 个缩进空格 也可以通过 `第三个参数`定义缩进的 `内容`

## 2. JSON.stringify：`隐藏` 字符串化数据中的 `属性`

- JSON.stringify `第二个参数` 被称为 `replacer`
- 它是一个 `函数(不保留)` 或 `数组(保留)`，用于决定数据 `保留` 或 `不保留` 在输出中

```javascript
# 隐藏password用户
JSON.stringify(user, (key, value) = {
  if (key === 'password') return
  return value;
})

# 重构
function stripKeys(...keys) {
  return (key, value) = {
    if (keys.includes(key)) return
    return value;
  };
}
JSON.stringify(user, stripKeys('password', 'gender'))

# 还可以传递一个数组来仅获取某些键
JSON.stringify(user, ['name', 'age'])
```

## 3. JSON.stringify：使用 `toJSON` 创建自定义输出格式

- 如果一个对象实现了该 toJSON 函数，JSON.stringify 将使用它来对数据进行字符串化

```javascript
class Fraction {
  constructor(n, d) {
    this.numerator = n;
    this.denominator = d;
 }
}
JSON.stringify(new Fraction(1, 2))

# 如果我们想用一个字符串替换它1/2
class Fraction {
  constructor(n, d) {
    this.numerator = n;
    this.denominator = d;
  }
  toJSON() {
    return `${this.numerator}/${this.denominator}`
  }
}
JSON.stringify(new Fraction(1, 2))
```

## 4. JSON.parse： `恢复数据`

- 通过传递 `第二个参数JSON.parse` 来指定 `reviver` 函数
- 恢复器的工作是将字符串化数据 `恢复回其原始形式`
- 我们传递了一个 `reviver`，它是类的静态 fromJSON 属性 Fraction。
- reviver 检查该值是否是一个有效的分数，如果是，它会创建一个新 Fraction 对象并返回它。

```javascript
class Fraction {
  constructor(n, d) {
    this.numerator = n
    this.denominator = d
  }
  toJSON() {
    return `${this.numerator}/${this.denominator}`
  }
  static fromJSON(key, value) {
    if (typeof value === 'string') {
      const parts = value.split('/').map(Number)
      if (parts.length === 2) return new Fraction(parts)
    }
    return value
  }
}
const fraction = new Fraction(1, 2)
const stringified = JSON.stringify(fraction)
// "1/2"
const revived = JSON.parse(stringified, Fraction.fromJSON)
```

- 此功能用于内置的 `Date` 对象。尝试查找 `Date.prototype.toJSON`
- `JSON.stringify(new Date())`
- 恢复日期，我们可以使用 JSON.parse

```javascript
function reviveDate(key, value) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,}|)Z$/
  if (typeof value === 'string' && regex.test(value)) return new Date(value)
  return value
}
JSON.parse('"2022-03-01T06:28:41.308Z"', reviveDate)
```

## 5. JSON.parse：使用 `revivers` `隐藏` 数据

- 与解析器一样，恢复器也可用于隐藏数据。它以相同的方式工作。

```javascript
const user = JSON.stringify( ... );
JSON.parse(user, (key, value) = {
    if (key === 'password') return;
    return value;
})
```
