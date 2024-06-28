# 怎么创建 JavaScript 自定义事件

```
[web前端开发](javascript:void(0);) *2022-05-03 10:48* *发表于上海*
来源：https://blog.webdevsimplified.com/2022-04/js-custom-events/
```

你肯定处理过很多的事件监听，比如点击事件或者表单提交。事件监听对许多用例来说很有帮助，但是有时我们需要创建自己的自定义事件来处理复杂的交互。在这片短文中，我将告诉你有关创建自定义事件，侦听自定义事件以及创建双击自定义事件所要了解的内容。

# **怎么创建自定义事件**

创建自定义事件听起来很困难，但是只需要下面简单的一行代码即可。

```javascript
const myEvent = new Event('myCustomEvent')
```

你可以通过事件构造函数创建一个新的 Event 对象。在最基本的形式中，你只需要将一个字符串传递给构造函数，这个字符串就是你定义的事件名称。为了监听这个事件，你可以将该事件监听器添加到你要监听的元素上，如下：

```javascript
document.addEventListener('myCustomEvent', (e) => {
  console.log(e)
})
```

最后一步，你需要做的事，触发创建并正在监听的事件。

```javascript
document.dispatchEvent(myEvent)
```

这就需呀 dispatchEvent 函数了。每个元素都有这个方法，你要做的就是将你创建的对象传递给它。

如果我们将上面讲的组合在一起，我们就得到了一个基本的事件，这个事件在我们的 document 元素触发，相关的事件内容会被打印出来。

```javascript
{
  isTrusted: false,
  bubbles: false,
  cancelBubble: false,
  cancelable: false,
  composed: false,
  currentTarget: null,
  defaultPrevented: false,
  eventPhase: 0,
  path: [document, window],
  returnValue: true,
  srcElement: document,
  target: documrnt,
  timeStamp: 54.123231,
  type: "myCustomEvent"
}
```

图中是这个事件对象的最基本形式。它包含大量信息，最重要的部分我这里突出显示了。

isTrusted 属性仅指该事件是由用户交互触发，还是由自定义 JavaScript 代码触发的。例如，当用户单击按钮时，事件将 isTrusted 设置为 true，而我们自定义的事件会将其设置为 false，因为该事件是由 JavaScript 触发的。

target 指调用 dispatchEvent 函数的元素。

type 指事件的名称。

# **事件定制**

你可能注意到了，上面的详情中有属性 bubbles, cancelable 和 composed 属性。这些实际上，在我们创建自定义事件时可以配置的选项。

```javascript
const myEvent = new Event('myCustomEvent', {
  bubbles: true,
  cancelable: true,
  composed: true,
})
```

## **冒泡 bubbles**

当事件触发后，bubbles 属性决定这个事件是否可以通过 html 进行冒泡。这个值默认为 false，这意味着不可以进行冒泡行为，如果你想事件调用父 HTML 元素，你可以将其设置为 true。

```javascript
const bubbleEvent = new Event('bubbleEvent', { bubbles: true })
const defaultEvent = new Event('defaultEvent', { bubbles: false })

document.addEventListener('bubbleEvent', () => {
  // This will get called since the event will bubble up to the document from the button
  console.log('Bubble')
})

document.addEventListener('defaultEvent', () => {
  // This never gets called since the event cannot bubble up to the document from the button
  console.log('Default')
})

const button = document.querySelector('button')
button.dispatchEvent(bubbleEvent)
button.dispatchEvent(defaultEvent)
```

## **可取消 cancelable**

cancelable 属性决定事件是否可以通过调用 e.preventDefault() 取消。默认是 false 不可以。如果该属性是 true 值，你可以调用 e.preventDefault() 方法。e.preventDefault() 会将事件 defaultPrevented 属性设置为 true。

```javascript
const cancelableEvent = new Event('cancelableEvent', { cancelable: true })
const defaultEvent = new Event('defaultEvent', { cancelable: false })

document.addEventListener('cancelableEvent', (e) => {
  e.preventDefault()
  console.log(e.defaultPrevented) // True
})

document.addEventListener('defaultEvent', (e) => {
  e.preventDefault()
  console.log(e.defaultPrevented) // False
})

document.dispatchEvent(cancelableEvent)
document.dispatchEvent(defaultEvent)
```

## **组合 composed**

composed 属性决定事件是否可以通过影子 dom 向上传播。默认值是 false。该属性仅在你使用自定 HTML 元素和影子 DOM 的时候才适用，它所做的是允许事件在影子 DOM 外面传播。

如果你想在影子 DOM 中触发的事件可以在影子 DOM 外被捕捉到，就将其设置为 true。

**_没听懂没关系，后面学着学着就懂了_**

## **给事件传递自定义数据**

当你使用自定事件时，你希望自定义的数据传递给你的事件。使用 new Event 构造函数是不可能的，这也就是为什么会有第二种创建事件的方法。

```javascript
const myEvent = new CustomEvent('myEvent', { detail: { hello: 'World' } })
```

CustomEvent 构造函数取代 Event 构造函数。这与 new Event 的工作方式相同，但你可以将 detail 属性以及 bubbles，cancelable 和 composed 属性一起传递给第二个参数。detail 属性中你设置的内容都会传递给事件监听器。

```javascript
const mtEvent = new CustomEvent('myEvent', { detail: { hello: 'World' } })

document.addEventListener('myEvent', (e) => {
  console.log(e.detail) // { hello: "World" }
})

document.dispatchEvent(myEvent)
```

# **命名约定**

在我们讲自定义双击事件的例子前，我想先讲讲命名约定。你可以为自定义事件命名任何你想要的名字，但是还是遵循命名约定，以更方便使用自己的代码。最普遍的命名约定事件，是为事件添加 custom: 前缀。

custom: 以区分自定义事件和本身的事件，而且，如果 JavaScript 添加与你的事件同名的新事件，它还可以确保你的代码不会中断。

举个例子，如果 JavaScript 添加了一个名为 doubleclick 事件，然后你已经在时候 doubleclick 自定义事件了，那么你会遇到问题，因为你自定义代码将触发该事件，并且浏览器也会尝试触发它自己的副本。

```javascript
// Always use some form of naming convention
cionst myEvent = new Event("custom:doubleClick")
```

# **双击事件**

在这个例子中，我们将创建一个双击的事件，只要你在短时间内单击一个元素，就会触发该事件。该事件还会将按钮单击之间的总时间作为自定义数据传递。

首先，我们需要创建一个正常的单击事件监听器来确保是否有双击。

<pre><section class="code-snippet__fix code-snippet__js"><pre class="code-snippet__js" data-lang="typescript"><code><span class="code-snippet_outer"><span class="code-snippet__keyword">const</span> button = <span class="code-snippet__built_in">document</span>.querySelector(<span class="code-snippet__string">"button"</span>)</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">const</span> MAX_DOUBLE_CLICK_TIME = <span class="code-snippet__number">500</span></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">let</span> lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">button.addEventListener(<span class="code-snippet__string">"click"</span>, <span class="code-snippet__function"><span class="code-snippet__params">e</span> =></span> {</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">const</span> timeBetweenClicks = e.timeStamp - lastClick</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">if</span> (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME) {</span></code><code><span class="code-snippet_outer">    lastClick = e.timeStamp</span></code><code><span class="code-snippet_outer">    <span class="code-snippet__keyword">return</span></span></code><code><span class="code-snippet_outer">  }</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer">  <span class="code-snippet__comment">// <span class="code-snippet__doctag">TODO:</span> Double click happened. Trigger custom event.</span></span></code><code><span class="code-snippet_outer">  lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">})</span></code></pre></section></pre>

上面的代码使用 timeStamp 属性来确保按钮上单击事件之间的时间。如果点击之间的时间超过 500 毫秒。

则会立刻返回并更新 lastClick 的值。一旦我们在 500 毫秒内点击了两次，我们将通过 if 检查并触发我们的双击事件。为此，我们需要创建我们的事件并调用它。

<pre><section class="code-snippet__fix code-snippet__js"><pre class="code-snippet__js" data-lang="typescript"><code><span class="code-snippet_outer"><span class="code-snippet__keyword">const</span> button = <span class="code-snippet__built_in">document</span>.querySelector(<span class="code-snippet__string">"button"</span>)</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">const</span> MAX_DOUBLE_CLICK_TIME = <span class="code-snippet__number">500</span></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">let</span> lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">button.addEventListener(<span class="code-snippet__string">"click"</span>, <span class="code-snippet__function"><span class="code-snippet__params">e</span> =></span> {</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">const</span> timeBetweenClicks = e.timeStamp - lastClick</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">if</span> (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME) {</span></code><code><span class="code-snippet_outer">    lastClick = e.timeStamp</span></code><code><span class="code-snippet_outer">    <span class="code-snippet__keyword">return</span></span></code><code><span class="code-snippet_outer">  }</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer">  <span class="code-snippet__comment">// <span class="code-snippet__doctag">TODO:</span> Double click happened. Trigger custom event.</span></span></code><code><span class="code-snippet_outer">  lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">})</span></code></pre></section></pre>

对于我们自定义的事件，我们将所有选项都设置为 true，因为默认情况下，单击事件将所有这些属性设置为 true，而且我们希望双击的行为类似于正常的单击。

我们也将 timeBetweenClicks 传递到 detail 选项中。

最后，我们在事件的目标上调度事件，这里是按钮元素。我们剩下要做的最后一件事就是监听事件。

<pre><section class="code-snippet__fix code-snippet__js"><pre class="code-snippet__js" data-lang="typescript"><code><span class="code-snippet_outer">onst button = <span class="code-snippet__built_in">document</span>.querySelector(<span class="code-snippet__string">"button"</span>)</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">const</span> MAX_DOUBLE_CLICK_TIME = <span class="code-snippet__number">500</span></span></code><code><span class="code-snippet_outer"><span class="code-snippet__keyword">let</span> lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">button.addEventListener(<span class="code-snippet__string">"click"</span>, <span class="code-snippet__function"><span class="code-snippet__params">e</span> =></span> {</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">const</span> timeBetweenClicks = e.timeStamp - lastClick</span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">if</span> (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME) {</span></code><code><span class="code-snippet_outer">    lastClick = e.timeStamp</span></code><code><span class="code-snippet_outer">    <span class="code-snippet__keyword">return</span></span></code><code><span class="code-snippet_outer">  }</span></code><code><span class="code-snippet_outer"><br/></span></code><code><span class="code-snippet_outer">  <span class="code-snippet__keyword">const</span> doubleClickEvent = <span class="code-snippet__keyword">new</span> CustomEvent(<span class="code-snippet__string">"custom:doubleClick"</span>, {</span></code><code><span class="code-snippet_outer">    bubbles: <span class="code-snippet__literal">true</span>,</span></code><code><span class="code-snippet_outer">    cancelable: <span class="code-snippet__literal">true</span>,</span></code><code><span class="code-snippet_outer">    composed: <span class="code-snippet__literal">true</span>,</span></code><code><span class="code-snippet_outer">    detail: { timeBetweenClicks },</span></code><code><span class="code-snippet_outer">  })</span></code><code><span class="code-snippet_outer">  e.target.dispatchEvent(doubleClickEvent)</span></code><code><span class="code-snippet_outer">  lastClick = <span class="code-snippet__number">0</span></span></code><code><span class="code-snippet_outer">})</span></code></pre></section></pre>

我们刚刚向按钮田间了一个简单的事件监听器，它将打印出 Double Click 之间的时间。

# **总结**

自定义事件是 JavaScript 中处理手势和双击事件的好方案，最重要的是，他们非常容易实现和使用。
