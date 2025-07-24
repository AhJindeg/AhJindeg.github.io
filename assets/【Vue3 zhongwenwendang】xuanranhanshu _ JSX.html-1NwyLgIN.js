import{_ as e,o as i,c as n,a as d}from"./app-RQ4jbat0.js";const a={},s=d(`<p>在绝大多数情况下，Vue 推荐使用模板语法来创建应用。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时渲染函数就派上用场了。</p><p>基本用法</p><h3 id="创建-vnodes" tabindex="-1"><a class="header-anchor" href="#创建-vnodes" aria-hidden="true">#</a> 创建 Vnodes</h3><p>Vue 提供了一个 <code>h()</code> 函数用于创建 vnodes：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { h } from &#39;vue&#39;const vnode = h(  &#39;div&#39;, // type  { id: &#39;foo&#39;, class: &#39;bar&#39; }, // props  [    /* children */  ])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>h()</code> 是 hyperscript 的简称——意思是“能生成 HTML (超文本标记语言) 的 JavaScript”。这个名字来源于许多虚拟 DOM 实现默认形成的约定。一个更准确的名称应该是 <code>createVnode()</code>，但当你需要多次使用渲染函数时，一个简短的名字会更省力。</p><p><code>h()</code> 函数的使用方式非常的灵活：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 除了类型必填以外，其他的参数都是可选的h(&#39;div&#39;)h(&#39;div&#39;, { id: &#39;foo&#39; })// attribute 和 property 都能在 prop 中书写// Vue 会自动将它们分配到正确的位置
h(&#39;div&#39;, { class: &#39;bar&#39;, innerHTML: &#39;hello&#39; })

// props modifiers such as .prop and .attr can be added
// with &#39;.&#39; and \`^&#39; prefixes respectively
h(&#39;div&#39;, { &#39;.name&#39;: &#39;some-name&#39;, &#39;^width&#39;: &#39;100&#39; })

// 类与样式可以像在模板中一样
// 用数组或对象的形式书写
h(&#39;div&#39;, { class: [foo, { bar }], style: { color: &#39;red&#39; } })

// 事件监听器应以 onXxx 的形式书写
h(&#39;div&#39;, { onClick: () =&gt; {} })

// children 可以是一个字符串
h(&#39;div&#39;, { id: &#39;foo&#39; }, &#39;hello&#39;)

// 没有 props 时可以省略不写
h(&#39;div&#39;, &#39;hello&#39;)
h(&#39;div&#39;, [h(&#39;span&#39;, &#39;hello&#39;)])

// children 数组可以同时包含 vnodes 与字符串
h(&#39;div&#39;, [&#39;hello&#39;, h(&#39;span&#39;, &#39;hello&#39;)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的 vnode 为如下形式：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>const vnode = h(&#39;div&#39;, { id: &#39;foo&#39; }, [])

vnode.type // &#39;div&#39;
vnode.props // { id: &#39;foo&#39; }
vnode.children // []
vnode.key // null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项</p><p>完整的 <code>VNode</code> 接口包含其他内部属性，但是强烈建议避免使用这些没有在这里列举出的属性。这样能够避免因内部属性变更而导致的不兼容性问题。</p><h3 id="声明渲染函数" tabindex="-1"><a class="header-anchor" href="#声明渲染函数" aria-hidden="true">#</a> 声明渲染函数</h3><p>我们可以使用 <code>render</code> 选项来声明渲染函数：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { h } from &#39;vue&#39;

export default {
  data() {
    return {
      msg: &#39;hello&#39;
    }
  },
  render() {
    return h(&#39;div&#39;, this.msg)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>render()</code> 函数可以访问同一个 <code>this</code> 组件实例。</p><p>除了返回一个单独的 vnode 之外，你还可以返回字符串或是数组：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>export default {
  render() {
    return &#39;hello world!&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { h } from &#39;vue&#39;

export default {
  render() {
    // 用数组来返回多个根节点
    return [
      h(&#39;div&#39;),
      h(&#39;div&#39;),
      h(&#39;div&#39;)
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个渲染函数组件不需要任何实例状态，为了简洁起见，它们也可以直接被声明为一个函数：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function Hello() {
  return &#39;hello world!&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，这就是一个合法的 Vue 组件！参阅函数式组件来了解更多语法细节。</p><h3 id="vnodes-必须唯一" tabindex="-1"><a class="header-anchor" href="#vnodes-必须唯一" aria-hidden="true">#</a> Vnodes 必须唯一</h3><p>组件树中的 vnodes 必须是唯一的。下面是错误示范：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function render() {
  const p = h(&#39;p&#39;, &#39;hi&#39;)
  return h(&#39;div&#39;, [
    // 啊哦，重复的 vnodes 是无效的
    p,
    p
  ])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。比如下面的这个渲染函数就可以完美渲染出 20 个相同的段落：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function render() {
  return h(
    &#39;div&#39;,
    Array.from({ length: 20 }).map(() =&gt; {
      return h(&#39;p&#39;, &#39;hi&#39;)
    })
  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSX 是 JavaScript 的一个类似 XML 的扩展，有了它，我们可以用以下的方式来书写代码：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>const vnode = &lt;div&gt;hello&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 JSX 表达式中，使用大括号来嵌入动态值：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>const vnode = &lt;div id={dynamicId}&gt;hello, {userName}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>create-vue</code> 和 Vue CLI 都有预置的 JSX 语法支持。如果你想手动配置 JSX，请参阅 <code>@vue/babel-plugin-jsx</code> 文档获取更多细节。</p><p>虽然最早是由 React 引入，但实际上 JSX 语法并没有定义运行时语义，并且能被编译成各种不同的输出形式。如果你之前使用过 JSX 语法，那么请注意 Vue 的 JSX 编译方式与 React 中 JSX 的编译方式不同，因此你不能在 Vue 应用中使用 React 的 JSX 编译。与 React JSX 语法的一些明显区别包括：</p><ul><li><p>可以使用 HTML attributes 比如 <code>class</code> 和 <code>for</code> 作为 props - 不需要使用 <code>className</code> 或 <code>htmlFor</code>。</p></li><li><p>传递子元素给组件 (比如 slots) 的方式不同。</p></li></ul><p>Vue 的类型定义也提供了 TSX 语法的类型推导支持。当使用 TSX 语法时，确保在 <code>tsconfig.json</code> 中配置了 <code>&quot;jsx&quot;: &quot;preserve&quot;</code>，这样的 TypeScript 就能保证 Vue JSX 语法编译过程中的完整性。</p><p>渲染函数案例</p><p>下面我们提供了几个常见的用等价的渲染函数 / JSX 语法，实现模板功能的案例：</p><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> <code>v-if</code></h3><p>模板：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;div&gt;
  &lt;div v-if=&quot;ok&quot;&gt;yes&lt;/div&gt;
  &lt;span v-else&gt;no&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于使用如下渲染函数 / JSX 语法：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>h(&#39;div&#39;, [this.ok ? h(&#39;div&#39;, &#39;yes&#39;) : h(&#39;span&#39;, &#39;no&#39;)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;div&gt;{this.ok ? &lt;div&gt;yes&lt;/div&gt; : &lt;span&gt;no&lt;/span&gt;}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> <code>v-for</code></h3><p>模板：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;ul&gt;
  &lt;li v-for=&quot;{ id, text } in items&quot; :key=&quot;id&quot;&gt;
    {{ text }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于使用如下渲染函数 / JSX 语法：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>h(
  &#39;ul&#39;,
  this.items.map(({ id, text }) =&gt; {
    return h(&#39;li&#39;, { key: id }, text)
  })
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;ul&gt;
  {this.items.map(({ id, text }) =&gt; {
    return &lt;li key={id}&gt;{text}&lt;/li&gt;
  })}
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on" aria-hidden="true">#</a> <code>v-on</code></h3><p>以 <code>on</code> 开头，并跟着大写字母的 props 会被当作事件监听器。比如，<code>onClick</code> 与模板中的 <code>@click</code> 等价。</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>h(
  &#39;button&#39;,
  {
    onClick(event) {
      /* ... */
    }
  },
  &#39;click me&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;button
  onClick={(event) =&gt; {
    /* ... */
  }}
&gt;
  click me
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h3><p>对于 <code>.passive</code>、<code>.capture</code> 和 <code>.once</code> 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面：</p><p>实例：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>h(&#39;input&#39;, {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;input
  onClickCapture={() =&gt; {}}
  onKeyupOnce={() =&gt; {}}
  onMouseoverOnceCapture={() =&gt; {}}
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于事件和按键修饰符，可以使用 <code>withModifiers</code> 函数：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { withModifiers } from &#39;vue&#39;

h(&#39;div&#39;, {
  onClick: withModifiers(() =&gt; {}, [&#39;self&#39;])
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;div onClick={withModifiers(() =&gt; {}, [&#39;self&#39;])} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>在给组件创建 vnode 时，传递给 <code>h()</code> 函数的第一个参数应当是组件的定义。这意味着使用渲染函数时不再需要注册组件了 —— 可以直接使用导入的组件：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import Foo from &#39;./Foo.vue&#39;
import Bar from &#39;./Bar.jsx&#39;

function render() {
  return h(&#39;div&#39;, [h(Foo), h(Bar)])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function render() {
  return (
    &lt;div&gt;
      &lt;Foo /&gt;
      &lt;Bar /&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管是什么类型的文件，只要从中导入的是有效的 Vue 组件，<code>h</code> 就能正常运作。</p><p>动态组件在渲染函数中也可直接使用：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import Foo from &#39;./Foo.vue&#39;
import Bar from &#39;./Bar.jsx&#39;

function render() {
    return ok.value ? h(Foo) : h(Bar)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function render() {
  return ok.value ? &lt;Foo /&gt; : &lt;Bar /&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个组件是用名字注册的，不能直接导入 (例如，由一个库全局注册)，可以使用 <code>resolveComponent()</code> 来解决这个问题。</p><h3 id="渲染插槽" tabindex="-1"><a class="header-anchor" href="#渲染插槽" aria-hidden="true">#</a> 渲染插槽</h3><p>在渲染函数中，可以通过 this.$slots 来访问插槽：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>export default {
  props: [&#39;message&#39;],
  render() {
    return [
      // &lt;div&gt;&lt;slot /&gt;&lt;/div&gt;
      h(&#39;div&#39;, this.$slots.default()),

      // &lt;div&gt;&lt;slot name=&quot;footer&quot; :text=&quot;message&quot; /&gt;&lt;/div&gt;
      h(
        &#39;div&#39;,
        this.$slots.footer({
          text: this.message
        })
      )
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价 JSX 语法：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// &lt;div&gt;&lt;slot /&gt;&lt;/div&gt;
&lt;div&gt;{this.$slots.default()}&lt;/div&gt;

// &lt;div&gt;&lt;slot name=&quot;footer&quot; :text=&quot;message&quot; /&gt;&lt;/div&gt;
&lt;div&gt;{this.$slots.footer({ text: this.message })}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递插槽" tabindex="-1"><a class="header-anchor" href="#传递插槽" aria-hidden="true">#</a> 传递插槽</h3><p>向组件传递子元素的方式与向元素传递子元素的方式有些许不同。我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 单个默认插槽
h(MyComponent, () =&gt; &#39;hello&#39;)

// 具名插槽
// 注意 \`null\` 是必需的
// 以避免 slot 对象被当成 prop 处理
h(MyComponent, null, {
    default: () =&gt; &#39;default slot&#39;,
    foo: () =&gt; h(&#39;div&#39;, &#39;foo&#39;),
    bar: () =&gt; [h(&#39;span&#39;, &#39;one&#39;), h(&#39;span&#39;, &#39;two&#39;)]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价 JSX 语法：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>// 默认插槽
&lt;MyComponent&gt;{() =&gt; &#39;hello&#39;}&lt;/MyComponent&gt;

// 具名插槽
&lt;MyComponent&gt;{{
  default: () =&gt; &#39;default slot&#39;,
  foo: () =&gt; &lt;div&gt;foo&lt;/div&gt;,
  bar: () =&gt; [&lt;span&gt;one&lt;/span&gt;, &lt;span&gt;two&lt;/span&gt;]
}}&lt;/MyComponent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插槽以函数的形式传递使得它们可以被子组件懒调用。这能确保它被注册为子组件的依赖关系，而不是父组件。这使得更新更加准确及有效。</p><h3 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h3><p>诸如 <code>&lt;KeepAlive&gt;</code>、<code>&lt;Transition&gt;</code>、<code>&lt;TransitionGroup&gt;</code>、<code>&lt;Teleport&gt;</code> 和 <code>&lt;Suspense&gt;</code> 等内置组件在渲染函数中必须导入才能使用：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { h, KeepAlive, Teleport, Transition, TransitionGroup } from &#39;vue&#39;

export default {
  render () {
    return h(Transition, { mode: &#39;out-in&#39; }, /* ... */)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> <code>v-model</code></h3><p><code>v-model</code> 指令扩展为 <code>modelValue</code> 和 <code>onUpdate:modelValue</code> 在模板编译过程中，我们必须自己提供这些 props：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>export default {
  props: [&#39;modelValue&#39;],
  emits: [&#39;update:modelValue&#39;],
  render() {
    return h(SomeComponent, {
      modelValue: this.modelValue,
      &#39;onUpdate:modelValue&#39;: (value) =&gt; this.$emit(&#39;update:modelValue&#39;, value)
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h3><p>可以使用 <code>withDirectives</code> 将自定义指令应用于 vnode：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>import { h, withDirectives } from &#39;vue&#39;

// 自定义指令
const pin = {
  mounted() { /* ... */ },
  updated() { /* ... */ }
}

// &lt;div v-pin:top.animate=&quot;200&quot;&gt;&lt;/div&gt;
const vnode = withDirectives(h(&#39;div&#39;), [
  [pin, 200, &#39;top&#39;, { animate: true }]
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个指令是以名称注册并且不能被直接导入时，可以使用 <code>resolveDirective</code> 函数来解决这个问题。</p><p>函数式组件</p><p>函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 <code>this</code>)，也不会触发常规的组件生命周期钩子。</p><p>我们用一个普通的函数而不是一个选项对象来创建函数式组件。该函数实际上就是该组件的渲染函数。</p><p>而因为函数式组件里没有 <code>this</code> 引用，Vue 会把 <code>props</code> 当作第一个参数传入：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>function MyComponent(props, context) {
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个参数 <code>context</code> 包含三个属性：<code>attrs</code>、<code>emit</code> 和 <code>slots</code>。它们分别相当于组件实例的 <code>$attrs</code>、<code>$emit</code> 和 <code>$slots</code> 这几个属性。</p><p>大多数常规组件的配置选项在函数式组件中都不可用，除了 <code>props</code> 和 <code>emits</code>。我们可以给函数式组件添加对应的属性来声明它们：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>MyComponent.props = [&#39;value&#39;]
MyComponent.emits = [&#39;click&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这个 <code>props</code> 选项没有被定义，那么被传入函数的 <code>props</code> 对象就会像 <code>attrs</code> 一样会包含所有 attribute。除非指定了 <code>props</code> 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。</p><p>对于有明确 <code>props</code> 的函数式组件，attribute 透传的原理与普通组件基本相同。然而，对于没有明确指定 <code>props</code> 的函数式组件，只有 <code>class</code>、<code>style</code> 和 <code>onXxx</code> 事件监听器将默认从 <code>attrs</code> 中继承。在这两种情况下，可以将 <code>inheritAttrs</code> 设置为 <code>false</code> 来禁用属性继承：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>MyComponent.inheritAttrs = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>函数式组件可以像普通组件一样被注册和使用。如果你将一个函数作为第一个参数传入 <code>h</code>，它将会被当作一个函数式组件来对待。</p>`,103),l=[s];function v(r,u){return i(),n("div",null,l)}const t=e(a,[["render",v],["__file","【Vue3 zhongwenwendang】xuanranhanshu _ JSX.html.vue"]]);export{t as default};
