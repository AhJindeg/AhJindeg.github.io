# 使用顶层 await（top-level await）简化 async 函数

```javascript
let module = await import('/modules/my-module.js')
```

顶层 `<span>await</span>` 允许开发者在 `<span>async</span>` 函数外部使用 `<span>await</span>` 字段

```javascript
//以前
;(async function () {
  await Promise.resolve(console.log('🎉'))
  // → 🎉
})()

//简化后
await Promise.resolve(console.log('🎉'))
```

# 使用动态导入 import()实现按需加载（优化静态 import）

我们可以使用 `<span>import</span>` 语句初始化的加载依赖项

```javascript
import defaultExport from 'module-name'
import * as name from 'module-name'
```

但是静态引入的 `<span>import</span>` 语句需要依赖于 `<span>type="module"</span>` 的 `<span>script</span>`标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：

- 当静态导入的模块很明显的降低了代码的加载速度且被使用的可能性很低，或者并不需要马上使用它
- 当静态导入的模块很明显的占用了大量系统内存且被使用的可能性很低
- 当被导入的模块，在加载时并不存在，需要异步获取
- 当被导入的模块有副作用，这些副作用只有在触发了某些条件才被需要时

这个时候我们就可以使用动态引入 `<span>import()</span>`，它跟函数一样可以用于各种地方，返回的是一个 `<span>promise</span>`

基本使用如下两种形式

```javascript
//形式 1
import('/modules/my-module.js').then((module) => {
  // Do something with the module.
})

//形式2
let module = await import('/modules/my-module.js')
```

# **通过条件判断向对象添加属性**

```javascript
const isValid = false
const age = 18

// 我们可以通过展开运算符向对象添加属性
const person = {
  id: 'id',
  name: 'name',
  ...(isValid && { isActive: true }),
  ...((age > 18 || isValid) && { cart: 0 }),
}
console.log('person', person)
```

# **检查对象中是否存在某个属性**

```javascript
const person = {
  id: 'id',
  name: 'name',
}
console.log('name' in person) // true
console.log('isActive' in person) // false
```

# **解构赋值**

```javascript
const product = {
  id: 'id',
  name: 'nameAct',
}
const { name: weaponName } = product
console.log('weaponName:', weaponName) // weaponName: nameAct

// 通过动态key进行解构赋值
const extractKey = 'name'
const { [extractKey]: data } = product
console.log('data:', data) // data: nameAct
```

# **循环遍历一个对象的 key 和 value**

```javascript
const product = {
  id: 'idArt',
  name: 'nameArt',
  isSale: false,
}
Object.entries(product).forEach(([key, value]) => {
  if (['id', 'name'].includes(key)) {
    console.log('key:', key, 'value:', value)
  }
})
// key:id value:idArt
// key:name value:nameArt
```

# **使用可选链(Optionalchaining)避免访问对象属性报错**

```javascript
const product = {
  id: 'idArt',
  name: 'nameArt',
}
console.log(product.sale.isSale) // throw error
console.log(product?.sale?.isSale) // undefined
```

注意: 在实际使用场景中，有些场景对于我们要获取的属性是非必需的，我们可以通过上面这种方式去避免报错出现；但是有些场景下一些属性是必须的，不然就会影响我们的实际功能，这个时候还是尽量给出清晰的报错提示来解决这种错误的出现。

# **检查数组中 falsy 的值**

```javascript
const fruitList = ['apple', null, 'banana', undefined]
// 过滤掉falsy的值
const filterFruitList = fruitList.filter(Boolean)
console.log('filterFruitList:', filterFruitList) // filterFruitList:['apple', 'banana']
// 检查数组中是否有truthy的值
const isAnyFruit = fruitList.some(Boolean)
console.log('isAnyFruit:', isAnyFruit) // isAnyFruit: true
```

# **检查是否为数组类型**

```javascript
const fruitList = ['apple', 'mango']
console.log(typeof fruitList) // object
console.log(Array.isArray(fruiltList)) // true
```

# **数字&字符串类型转换**

```javascript
const personId = '007'
console.log('personId:', +personId, 'type:', typeof +personId)
// personId: 7 type:number

const personId = '007'
console.log('personId:', personId + '', 'type:', typeof (personId + ''))
// personId: 007 type:string
```

# **巧用空值合并(??)**

```javascript
let data = undefined ?? 'noData' // noData
data = null ?? 'noData' // noData
data = 0 ?? null ?? 'noData' // noData
// 当我们根据变量自身判断时
data ??= 'noData' // noData
```

> 和或（||） 运算符的区别？
> 或运算符针对的是 falsy 类的值 (0,’ ’, null, undefined, false, NaN)，而空值合并仅针对 null 和 undefined 生效

# 去除末尾空白数组

```javascript
for (let x = this.arr.length - 1; x >= 0; x--) {
  if (this.arr[x] == null || this.arr[x] == undefined) {
    this.arr.splice(x, 1)
  }
}
```

# 数组去重

```javascript
const removeDuplicates = (arr) => [...new Set(arr)]
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]))
```

# 校验数组为空

```javascript
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0
isNotEmpty([1, 2, 3])
```

# 求数字的平均值

- 使用 `reduce` 方法找到多个数字之间的平均值

```javascript
const average = (...args) => args.reduce((a, b) => a + b) / args.length
average(1, 2, 3, 4)
```

# 获取浏览器 `Cookie` 的值

- 通过 `document.cookie` 来 `查找` cookie 值

```javascript
const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift()
cookie('_ga')
```

# 清除全部 `Cookie`

- 通过使用 `document.cookie` `访问` cookie 并将其 `清除` ，可以轻松清除网页中存储的所有 cookie。

```javascript
const clearCookies = document.cookie.split(';').forEach((cookie) => (document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)))
```

# 从 `URL` `获取` 查询参数

- 可以通过传递 `window.location` 或原始 URL `goole.com?search=easy&page=3` 轻松地从 url 检索查询参数

```javascript
const getParameters = (URL) => {
  URL = JSON.parse('{"' + decodeURI(URL.split('?')[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  return JSON.stringify(URL)
}
getParameters(window.location)
```

```javascript
Object.fromEntries(new URLSearchParams(window.location.search))
```

# 检查用户的设备是否 `处于暗模式`

```javascript
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode)
```

# 时间处理

- 我们可以从给定日期以 `hour::minutes::seconds` 格式记录时间。

```javascript
const timeFromDate = (date) => date.toTimeString().slice(0, 8)
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)))
```

# `检查日期` 是否合法

- 使用以下代码段检查给定日期是否有效。

```javascript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
isDateValid('December 17, 1995 03:24:00')
```

# 查找日期 `位于`一年中的第几天

```javascript
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
dayOfYear(new Date())
```

# 计算 2 个日期之间 `相差` 多少天

```javascript
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date('2020-10-21'), new Date('2021-10-22'))
```

# 复制到剪贴板

- 借助 `navigator.clipboard.writeText` 可以很容易的讲文本复制到剪贴板
  > 规范要求在写入剪贴板之前使用 Permissions API 获取“剪贴板写入”权限。但是，不同浏览器的具体要求不同，因为这是一个新的 API。有关详细信息，请查看 compatibility table and Clipboard availability in Clipboard。

```javascript
const copyToClipboard = (text) => navigator.clipboard.writeText(text)
copyToClipboard('Hello World')
```

# 获取用户选择的文本

- 使用内置的 `getSelection` 属性获取用户选择的文本。

```javascript
const getSelectedText = () => window.getSelection().toString()
getSelectedText()
```
