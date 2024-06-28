在绝大多数情况下，Vue 推荐使用模板语法来创建应用。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时渲染函数就派上用场了。

基本用法

### 创建 Vnodes

Vue 提供了一个 `h()` 函数用于创建 vnodes：

```auto
import { h } from 'vue'const vnode = h(  'div', // type  { id: 'foo', class: 'bar' }, // props  [    /* children */  ])
```

`h()` 是 hyperscript 的简称——意思是“能生成 HTML (超文本标记语言) 的 JavaScript”。这个名字来源于许多虚拟 DOM 实现默认形成的约定。一个更准确的名称应该是 `createVnode()`，但当你需要多次使用渲染函数时，一个简短的名字会更省力。

`h()` 函数的使用方式非常的灵活：

```auto
// 除了类型必填以外，其他的参数都是可选的h('div')h('div', { id: 'foo' })// attribute 和 property 都能在 prop 中书写// Vue 会自动将它们分配到正确的位置
h('div', { class: 'bar', innerHTML: 'hello' })

// props modifiers such as .prop and .attr can be added
// with '.' and `^' prefixes respectively
h('div', { '.name': 'some-name', '^width': '100' })

// 类与样式可以像在模板中一样
// 用数组或对象的形式书写
h('div', { class: [foo, { bar }], style: { color: 'red' } })

// 事件监听器应以 onXxx 的形式书写
h('div', { onClick: () => {} })

// children 可以是一个字符串
h('div', { id: 'foo' }, 'hello')

// 没有 props 时可以省略不写
h('div', 'hello')
h('div', [h('span', 'hello')])

// children 数组可以同时包含 vnodes 与字符串
h('div', ['hello', h('span', 'hello')])
```

得到的 vnode 为如下形式：

```auto
const vnode = h('div', { id: 'foo' }, [])

vnode.type // 'div'
vnode.props // { id: 'foo' }
vnode.children // []
vnode.key // null
```

注意事项

完整的 `VNode` 接口包含其他内部属性，但是强烈建议避免使用这些没有在这里列举出的属性。这样能够避免因内部属性变更而导致的不兼容性问题。

### 声明渲染函数

我们可以使用 `render` 选项来声明渲染函数：

```auto
import { h } from 'vue'

export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  render() {
    return h('div', this.msg)
  }
}
```

`render()` 函数可以访问同一个 `this` 组件实例。

除了返回一个单独的 vnode 之外，你还可以返回字符串或是数组：

```auto
export default {
  render() {
    return 'hello world!'
  }
}
```

```auto
import { h } from 'vue'

export default {
  render() {
    // 用数组来返回多个根节点
    return [
      h('div'),
      h('div'),
      h('div')
    ]
  }
}
```

如果一个渲染函数组件不需要任何实例状态，为了简洁起见，它们也可以直接被声明为一个函数：

```auto
function Hello() {
  return 'hello world!'
}
```

没错，这就是一个合法的 Vue 组件！参阅函数式组件来了解更多语法细节。

### Vnodes 必须唯一

组件树中的 vnodes 必须是唯一的。下面是错误示范：

```auto
function render() {
  const p = h('p', 'hi')
  return h('div', [
    // 啊哦，重复的 vnodes 是无效的
    p,
    p
  ])
}
```

如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。比如下面的这个渲染函数就可以完美渲染出 20 个相同的段落：

```auto
function render() {
  return h(
    'div',
    Array.from({ length: 20 }).map(() => {
      return h('p', 'hi')
    })
  )
```

JSX 是 JavaScript 的一个类似 XML 的扩展，有了它，我们可以用以下的方式来书写代码：

```auto
const vnode = <div>hello</div>
```

在 JSX 表达式中，使用大括号来嵌入动态值：

```auto
const vnode = <div id={dynamicId}>hello, {userName}</div>
```

`create-vue` 和 Vue CLI 都有预置的 JSX 语法支持。如果你想手动配置 JSX，请参阅 `@vue/babel-plugin-jsx` 文档获取更多细节。

虽然最早是由 React 引入，但实际上 JSX 语法并没有定义运行时语义，并且能被编译成各种不同的输出形式。如果你之前使用过 JSX 语法，那么请注意 Vue 的 JSX 编译方式与 React 中 JSX 的编译方式不同，因此你不能在 Vue 应用中使用 React 的 JSX 编译。与 React JSX 语法的一些明显区别包括：

-   可以使用 HTML attributes 比如 `class` 和 `for` 作为 props - 不需要使用 `className` 或 `htmlFor`。
    
-   传递子元素给组件 (比如 slots) 的方式不同。
    

Vue 的类型定义也提供了 TSX 语法的类型推导支持。当使用 TSX 语法时，确保在 `tsconfig.json` 中配置了 `"jsx": "preserve"`，这样的 TypeScript 就能保证 Vue JSX 语法编译过程中的完整性。

渲染函数案例

下面我们提供了几个常见的用等价的渲染函数 / JSX 语法，实现模板功能的案例：

### `v-if`

模板：

```auto
<div>
  <div v-if="ok">yes</div>
  <span v-else>no</span>
</div>
```

等价于使用如下渲染函数 / JSX 语法：

```auto
h('div', [this.ok ? h('div', 'yes') : h('span', 'no')])
```

```auto
<div>{this.ok ? <div>yes</div> : <span>no</span>}</div>
```

### `v-for`

模板：

```auto
<ul>
  <li v-for="{ id, text } in items" :key="id">
    {{ text }}
  </li>
</ul>
```

等价于使用如下渲染函数 / JSX 语法：

```auto
h(
  'ul',
  this.items.map(({ id, text }) => {
    return h('li', { key: id }, text)
  })
)
```

```auto
<ul>
  {this.items.map(({ id, text }) => {
    return <li key={id}>{text}</li>
  })}
</ul>
```

### `v-on`

以 `on` 开头，并跟着大写字母的 props 会被当作事件监听器。比如，`onClick` 与模板中的 `@click` 等价。

```auto
h(
  'button',
  {
    onClick(event) {
      /* ... */
    }
  },
  'click me'
)
```

```auto
<button
  onClick={(event) => {
    /* ... */
  }}
>
  click me
</button>
```

### 事件修饰符

对于 `.passive`、`.capture` 和 `.once` 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面：

实例：

```auto
h('input', {
  onClickCapture() {
    /* 捕捉模式中的监听器 */
  },
  onKeyupOnce() {
    /* 只触发一次 */
  },
  onMouseoverOnceCapture() {
    /* 单次 + 捕捉 */
  }
})
```

```auto
<input
  onClickCapture={() => {}}
  onKeyupOnce={() => {}}
  onMouseoverOnceCapture={() => {}}
/>
```

对于事件和按键修饰符，可以使用 `withModifiers` 函数：

```auto
import { withModifiers } from 'vue'

h('div', {
  onClick: withModifiers(() => {}, ['self'])
})
```

```auto
<div onClick={withModifiers(() => {}, ['self'])} />
```

### 组件

在给组件创建 vnode 时，传递给 `h()` 函数的第一个参数应当是组件的定义。这意味着使用渲染函数时不再需要注册组件了 —— 可以直接使用导入的组件：

```auto
import Foo from './Foo.vue'
import Bar from './Bar.jsx'

function render() {
  return h('div', [h(Foo), h(Bar)])
}
```

```auto
function render() {
  return (
    <div>
      <Foo />
      <Bar />
    </div>
  )
}
```

不管是什么类型的文件，只要从中导入的是有效的 Vue 组件，`h` 就能正常运作。

动态组件在渲染函数中也可直接使用：

```auto
import Foo from './Foo.vue'
import Bar from './Bar.jsx'

function render() {
    return ok.value ? h(Foo) : h(Bar)
}
```

```auto
function render() {
  return ok.value ? <Foo /> : <Bar />
}
```

如果一个组件是用名字注册的，不能直接导入 (例如，由一个库全局注册)，可以使用 `resolveComponent()` 来解决这个问题。

### 渲染插槽

在渲染函数中，可以通过 this.$slots 来访问插槽：

```auto
export default {
  props: ['message'],
  render() {
    return [
      // <div><slot /></div>
      h('div', this.$slots.default()),

      // <div><slot name="footer" :text="message" /></div>
      h(
        'div',
        this.$slots.footer({
          text: this.message
        })
      )
    ]
  }
}
```

等价 JSX 语法：

```auto
// <div><slot /></div>
<div>{this.$slots.default()}</div>

// <div><slot name="footer" :text="message" /></div>
<div>{this.$slots.footer({ text: this.message })}</div>
```

### 传递插槽

向组件传递子元素的方式与向元素传递子元素的方式有些许不同。我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。

```auto
// 单个默认插槽
h(MyComponent, () => 'hello')

// 具名插槽
// 注意 `null` 是必需的
// 以避免 slot 对象被当成 prop 处理
h(MyComponent, null, {
    default: () => 'default slot',
    foo: () => h('div', 'foo'),
    bar: () => [h('span', 'one'), h('span', 'two')]
})
```

等价 JSX 语法：

```auto
// 默认插槽
<MyComponent>{() => 'hello'}</MyComponent>

// 具名插槽
<MyComponent>{{
  default: () => 'default slot',
  foo: () => <div>foo</div>,
  bar: () => [<span>one</span>, <span>two</span>]
}}</MyComponent>
```

插槽以函数的形式传递使得它们可以被子组件懒调用。这能确保它被注册为子组件的依赖关系，而不是父组件。这使得更新更加准确及有效。

### 内置组件

诸如 `<KeepAlive>`、`<Transition>`、`<TransitionGroup>`、`<Teleport>` 和 `<Suspense>` 等内置组件在渲染函数中必须导入才能使用：

```auto
import { h, KeepAlive, Teleport, Transition, TransitionGroup } from 'vue'

export default {
  render () {
    return h(Transition, { mode: 'out-in' }, /* ... */)
  }
}
```

### `v-model`

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 props：

```auto
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  render() {
    return h(SomeComponent, {
      modelValue: this.modelValue,
      'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value)
    })
  }
}
```

### 自定义指令

可以使用 `withDirectives` 将自定义指令应用于 vnode：

```auto
import { h, withDirectives } from 'vue'

// 自定义指令
const pin = {
  mounted() { /* ... */ },
  updated() { /* ... */ }
}

// <div v-pin:top.animate="200"></div>
const vnode = withDirectives(h('div'), [
  [pin, 200, 'top', { animate: true }]
])
```

当一个指令是以名称注册并且不能被直接导入时，可以使用 `resolveDirective` 函数来解决这个问题。

函数式组件

函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 `this`)，也不会触发常规的组件生命周期钩子。

我们用一个普通的函数而不是一个选项对象来创建函数式组件。该函数实际上就是该组件的渲染函数。

而因为函数式组件里没有 `this` 引用，Vue 会把 `props` 当作第一个参数传入：

```auto
function MyComponent(props, context) {
  // ...
}
```

第二个参数 `context` 包含三个属性：`attrs`、`emit` 和 `slots`。它们分别相当于组件实例的 `$attrs`、`$emit` 和 `$slots` 这几个属性。

大多数常规组件的配置选项在函数式组件中都不可用，除了 `props` 和 `emits`。我们可以给函数式组件添加对应的属性来声明它们：

```auto
MyComponent.props = ['value']
MyComponent.emits = ['click']
```

如果这个 `props` 选项没有被定义，那么被传入函数的 `props` 对象就会像 `attrs` 一样会包含所有 attribute。除非指定了 `props` 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。

对于有明确 `props` 的函数式组件，attribute 透传的原理与普通组件基本相同。然而，对于没有明确指定 `props` 的函数式组件，只有 `class`、`style` 和 `onXxx` 事件监听器将默认从 `attrs` 中继承。在这两种情况下，可以将 `inheritAttrs` 设置为 `false` 来禁用属性继承：

```auto
MyComponent.inheritAttrs = false
```

函数式组件可以像普通组件一样被注册和使用。如果你将一个函数作为第一个参数传入 `h`，它将会被当作一个函数式组件来对待。