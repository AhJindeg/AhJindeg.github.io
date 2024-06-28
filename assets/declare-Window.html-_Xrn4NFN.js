import{_ as n,o as s,c as a,a as e}from"./app-a8d-X_GH.js";const t={},p=e(`<h2 id="给-window-增加一个简单的类型声明" tabindex="-1"><a class="header-anchor" href="#给-window-增加一个简单的类型声明" aria-hidden="true">#</a> 给 Window 增加一个简单的类型声明</h2><p>创建一个 <code>xxx.d.ts</code> 文件，使用 <code>declare</code> 声明类型 &lt;注意：此文件中不可以具有 <code>import</code> 等导入方法&gt;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>env<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts<span class="token operator">&gt;</span>

<span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> component<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> component
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  canvas<span class="token operator">:</span> <span class="token punctuation">{</span>
    e<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给-window-增加一个复杂的类型声明" tabindex="-1"><a class="header-anchor" href="#给-window-增加一个复杂的类型声明" aria-hidden="true">#</a> 给 Window 增加一个复杂的类型声明</h2><p>因为在声明文件中使用 <code>import</code> 会导致被当作一个模块导致类型声明失效，如果我们要给 Window 增加一个已经声明好的类型就需要先创建一个文件用于定义全局命名空间，我们可以在命名空间中引入类型</p><p>创建 <code>xxx.d.ts</code> 文件 -&gt; 创建命名空间 -&gt; 在 Window 声明文件中使用命名空间定义的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>window<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts<span class="token operator">&gt;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasPlus<span class="token punctuation">,</span> Canvas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/declare&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> WindowCanvas <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">CanvasInterface</span> <span class="token keyword">extends</span> <span class="token class-name">Canvas</span> <span class="token punctuation">{</span>
    canvas<span class="token operator">:</span> CanvasPlus
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token operator">=</span> WindowCanvas
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> WindowCanvas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>env<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts<span class="token operator">&gt;</span>

<span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> component<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> component
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  windowCanvas<span class="token operator">:</span> WindowCanvas<span class="token punctuation">.</span>CanvasInterface
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","declare-Window.html.vue"]]);export{r as default};
