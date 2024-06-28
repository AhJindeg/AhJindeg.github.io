以下来自 公众号 web 前端开发

# **作为加法器和累加器**

使用“reduce”，我们可以轻松实现多个数相加或累加的功能。

```javascript
// adder
const sum = (...nums) => {
  return nums.reduce((sum, num) => sum + num)
}
console.log(sum(1, 2, 3, 4, 10)) // 20
// accumulator
const accumulator = (...nums) => {
  return nums.reduce((acc, num) => acc * num)
}
console.log(accumulator(1, 2, 3)) // 6
```

# **计算一个数组的最大值和最小值**

有多少种方法可以得到数组的最大值或最小值？

**1）：使用 Math.max 和 Math.min**

我们不得不承认，使用 Math 的 API 是最简单的方法。

```javascript
const array = [-1, 10, 6, 5]
const max = Math.max(...array) // 10
const min = Math.min(...array) // -1
```

**2）：使用减少**

是的，只需一行代码，我们就可以实现与 Math 的 API 相同的效果。

```javascript
const array = [-1, 10, 6, 5]
const max = array.reduce((max, num) => (max > num ? max : num))
const min = array.reduce((min, num) => (min < num ? min : num))
```

# **格式化搜索参数**

获取链接上的搜索参数是我们经常要处理的事情。如何解析它们？

例如：

```javascript
// url https://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100#/home
// format the search parameters
{
  "name": "fatfish",
  "age": "100"
}
```

**1)、正常方式**

这是大多数人使用它的方式。

```javascript
const parseQuery = () => {
  const search = window.location.search
  let query = {}
  search
    .slice(1)
    .split('&')
    .forEach((it) => {
      const [key, value] = it.split('=')
      query[key] = decodeURIComponent(value)
    })
  return query
}
```

**2）、使用 reduce**

Reduce 实际上可以做到这一点，而且看起来更简单。

```javascript
const parseQuery = () => {
  const search = window.location.search
  return search
    .replace(/(^\?)|(&$)/g, '')
    .split('&')
    .reduce((query, it) => {
      const [key, value] = it.split('=')
      query[key] = decodeURIComponent(value)
      return query
    }, {})
}
```

它是如何工作的？

```javascript
/ url https://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100#/home
// 1. First get the search parameter
const search = window.location.search; // ?name=fatfish&age=100
// 2. Remove the beginning "?" or ending "&".
search.replace(/(^\?)|(&$)/g, "");
// ?name=fatfish&age=100 => name=fatfish&age=100
// 3. Use reduce to collect parameters
// ...
```

# **反序列化搜索参数**

当我们要跳转到某个链接并为其添加一些搜索参数时，手动拼接的方式不是很方便。

如果要串联的参数很多，那将是一场灾难。

```javascript
const searchObj = {
  name: 'fatfish',
  age: 100,
  // ...
}
const link = `https://medium.com/?name=${searchObj.name}&age=${searchObj.age}`
// https://medium.com/?name=fatfish&age=100
```

幸运的是，“reduce”可以帮助我们轻松解决这个问题。

```javascript
const stringifySearch = (search = {}) => {
  return Object.entries(search)
    .reduce((t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`, Object.keys(search).length ? '?' : '')
    .replace(/&$/, '')
}
const search = stringifySearch({
  name: 'fatfish',
  age: 100,
})
const link = `https://medium.com/${search}`
console.log(link) // https://medium.com/?name=fatfish&age=100
```

# **展平多层嵌套数组**

你知道如何展平多层嵌套数组吗？

```javascript
const array = [1, [2, [3, [4, [5]]]]]
// expected output [ 1, 2, 3, 4, 5 ]
const flatArray = array.flat(Infinity) // [1, 2, 3, 4, 5]
```

“flat”是一个非常强大的 API。

使用 reduce 实现和 flat 一样的功能。

```javascript
const flat = (array) => {
  return array.reduce((acc, it) => acc.concat(Array.isArray(it) ? flat(it) : it), [])
}
const array = [1, [2, [3, [4, [5]]]]]
const flatArray = flat(array) // [1, 2, 3, 4, 5]
```

# **模拟平面特征的功能**

虽然我们已经实现了扁平化深度嵌套数组的功能，但是如何才能完全实现扁平化的功能呢？

```javascript
// Expand one layer by default
Array.prototype.flat2 = function (n = 1) {
  const len = this.length
  let count = 0
  let current = this
  if (!len || n === 0) {
    return current
  }
  // Confirm whether there are array items in current
  const hasArray = () => current.some((it) => Array.isArray(it))
  // Expand one layer after each cycle
  while (count++ < n && hasArray()) {
    current = current.reduce((result, it) => {
      result = result.concat(it)
      return result
    }, [])
  }
  return current
}
const array = [1, [2, [3, [4, [5]]]]]
// Expand one layer
console.log(array.flat()) // [ 1, 2, [ 3, [ 4, [ 5 ] ] ] ]
console.log(array.flat2()) // [ 1, 2, [ 3, [ 4, [ 5 ] ] ] ]
// Expand all
console.log(array.flat(Infinity))
console.log(array.flat2(Infinity))
```

# **保持数组唯一**

reduce 也很容易保持数组的唯一性。

```javascript
const array = [1, 2, 1, 2, -1, 10, 11]
const uniqueArray1 = [...new Set(array)]
const uniqueArray2 = array.reduce((acc, it) => (acc.includes(it) ? acc : [...acc, it]), [])
```

# **统计数组成员的个数**

如何计算数组中每个成员的个数？

为什么使用地图而不是对象？

```javascript
const count = (array) => {
  return array.reduce((acc, it) => (acc.set(it, (acc.get(it) || 0) + 1), acc), new Map())
}
const array = [1, 2, 1, 2, -1, 0, '0', 10, '10']
console.log(count(array))
```

# **获取一个对象的多个属性**

朋友们，让我们来看看你在工作中会遇到的一个场景。

```javascript
// There is an object with many properties
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  // ...
}
// We just want to get some properties above it to create a new object
const newObj = {
  a: obj.a,
  b: obj.b,
  c: obj.c,
  d: obj.d,
  // ...
}
// Do you think this is too inefficient?
```

使用 reduce 来解决它

```javascript
const getObjectKeys = (obj = {}, keys = []) => {
  return Object.keys(obj).reduce((acc, key) => (keys.includes(key) && (acc[key] = obj[key]), acc), {})
}
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  // ...
}
const newObj = getObjectKeys(obj, ['a', 'b', 'c', 'd'])
console.log(newObj)
```

# **反转字符串**

```javascript
const reverseString = (string) => {
  return string.split('').reduceRight((acc, s) => acc + s)
}
const string = 'fatfish'
console.log(reverseString(string)) // hsiftaf
```

使用“reduce”，我们可以轻松实现多个数相加或累加的功能
