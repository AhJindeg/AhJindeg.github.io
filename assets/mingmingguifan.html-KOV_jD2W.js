import{_ as o,r as p,o as l,c as i,b as s,d as n,e,a as t}from"./app-uvQf163b.js";const c={},r=t(`<h3 id="一、项目规范" tabindex="-1"><a class="header-anchor" href="#一、项目规范" aria-hidden="true">#</a> 一、项目规范</h3><ol><li><strong>项目命名</strong> - 采用小写方式，以中划线分隔</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
mall_management<span class="token operator">-</span>system <span class="token operator">/</span> mallManagementSystem
<span class="token comment">// good</span>
mall<span class="token operator">-</span>management<span class="token operator">-</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>目录命名</strong> - 全部采用<strong>小写</strong>方式，以中划线分割，有复数结构时采用复数命名法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
script <span class="token operator">/</span> style <span class="token operator">/</span> demo_scripts <span class="token operator">/</span> demoStyles <span class="token operator">/</span> imgs <span class="token operator">/</span> docs
<span class="token comment">// good</span>
scripts <span class="token operator">/</span> styles <span class="token operator">/</span> components <span class="token operator">/</span> images <span class="token operator">/</span> utils <span class="token operator">/</span> layouts <span class="token operator">/</span> demo<span class="token operator">-</span>styles <span class="token operator">/</span> demo<span class="token operator">-</span>scripts <span class="token operator">/</span> img <span class="token operator">/</span> doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>特殊：</strong> 项目中的 components 目录下的组件目录使用<strong>大写驼峰</strong>方式</p></blockquote><ol start="3"><li><strong>文件命名</strong> - 采用小写方式，以中划线分隔</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
renderDom<span class="token punctuation">.</span>js <span class="token operator">/</span> UserManagement<span class="token punctuation">.</span>html
<span class="token comment">// good</span>
render<span class="token operator">-</span>dom<span class="token punctuation">.</span>js <span class="token operator">/</span> signup<span class="token punctuation">.</span>css <span class="token operator">/</span> index<span class="token punctuation">.</span>html <span class="token operator">/</span> company<span class="token operator">-</span>logo<span class="token punctuation">.</span>png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>修改公共组件需提前在群中告知</strong> 如： <ol><li>@all 我需要修改 XXX 公用组件，大家请知晓；</li><li>条件允许：在该组件中写一个更新日志，写清楚改什么功能</li></ol></li></ol><hr><h3 id="二、代码规范" tabindex="-1"><a class="header-anchor" href="#二、代码规范" aria-hidden="true">#</a> 二、代码规范</h3><p><strong>1. CSS</strong></p><p>1.1  id 采用驼峰式命名 1.2 less中的变量、函数、混合、placeholder 采用驼峰式命名 1.3 选择器尽可能精准</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// bad
.content .title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// good
.content &gt; .title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 颜色值和属性值使用 rgba 或十六进制，有透明度的用 rgba，否则用十六进制，十六进制能简写必须简写，并全部大写</p><hr><p><strong>2. 引用</strong></p><p>2.1 使用 tabs (空格字符) 设置为 2 个空格 2.2 使用 <code>const</code> 定义常量，避免使用 <code>var</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 必须重新赋值的引用，用 <code>let</code> 代替 <code>var</code></p><hr><p><strong>3. 对象</strong></p><p>3.1 使用字面语法创建对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 创建动态属性名对象时用计算属性名 3.3 用对象方法的缩写 3.4 用属性值的缩写 3.5 只给无效标识符的属性加引号 3.6 用对象扩展操作符代替<code>Object.assign</code>浅拷贝，用 rest 操作符获得新对象</p><hr><p><strong>4. 数组</strong></p><p>4.1 使用字面语法创建数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),d={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"...",-1),k=s("code",null,"...",-1),v=s("code",null,"Array.from",-1),m={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"...",-1),g=t(`<hr><p><strong>5. 解构</strong></p><p>5.1 访问多个属性用对象解构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> user
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 使用数组解构 5.3 多返回值用对象解构</p><hr><p><strong>6. 字符</strong></p><p>6.1 用单引号 <code>&#39;&#39;</code> 定义字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;Capt. Janeway&quot;</span>

<span class="token comment">// bad - 模板字符串应含插值或换行</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Capt. Janeway</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Capt. Janeway&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2 编程模式构建字符串时用模板字符串 6.3 不要用 <code>eval()</code> 6.4 不要转义多余字符</p><hr><p><strong>7. 函数</strong></p><p>7.1 不要定义名为 <code>arguments</code> 的参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> arguments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.2 不要用 <code>arguments</code>，用 rest 语法 <code>...</code> 7.3 用默认参数语法，不改变参数 7.4 默认参数放最后</p><hr><p><strong>8. 模块</strong></p><p>8.1 用 import 导入模块（仅引入需要的）</p><ul><li>例子：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> airbnbGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
airbnbGuide<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isEqual <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.2 不要直接从导入导出 8.3 只从一个路径导入所有需要内容 8.4 把所有 import 放在非导入语句之前</p><hr><p><strong>9. 属性</strong></p><p>9.1 访问属性用点符号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">[</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">.</span>jedi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9.2 变量访问属性时用 <code>[]</code> 表示法</p><hr><p><strong>10. 变量</strong></p><p>10.1 把所有 <code>const</code> 声明放一起，把 <code>let</code> 放一起</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> i
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> len

<span class="token comment">// good</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">let</span> i
<span class="token keyword">let</span> length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>11. 比较运算符</strong></p><p>11.1 用 <code>===</code> 和 <code>!==</code>，不用 <code>==</code> 和 <code>!=</code> 11.2 布尔值用简写，字符串和数字显式比较</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.3 三目表达式不应嵌套，尽量单行 11.4 避免不必要三目表达式</p><hr><p><strong>12. 代码块</strong></p><p>12.1 多行代码块需用大括号包裹</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12.2 <code>if</code> 后只要 return，后续 else 可省略；else if 内含 return，前面有 if+return 也可拆成多个 if</p><hr><p><strong>13. 空格</strong></p><p>13.1 用空格分隔操作符</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x<span class="token operator">=</span>y<span class="token operator">+</span><span class="token number">5</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13.2 文件以单个换行符结束 13.3 方法链超过两层调用时缩进，并用“引导点” 13.4 不在块开头加空行 13.5 括号内不加空格 13.6 中括号内不加空格 13.7 花括号内加空格 13.8 逗号前不加空格，逗号后加空格 13.9 行末不加空格 13.10 避免多空行，文件末仅保留1个换行符</p><hr><p><strong>14. 逗号</strong></p><p>14.1 添加尾随逗号（trailing comma）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad - 无尾逗号</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Florence&#39;</span><span class="token punctuation">,</span>
<span class="token operator">-</span>    lastName<span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span>
<span class="token operator">+</span>    lastName<span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span><span class="token punctuation">,</span>
<span class="token operator">+</span>    inventorOf<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;coxcomb chart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modern nursing&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good - 有尾逗号</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Florence&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Nightingale&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inventorOf</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;coxcomb chart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modern nursing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="三、交互规范" tabindex="-1"><a class="header-anchor" href="#三、交互规范" aria-hidden="true">#</a> 三、交互规范</h3>`,51),h={href:"https://ant.design/components/modal-cn/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://ant.design/components/drawer-cn/",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>新增：/add 有操作按钮
编辑：/edit/:id 有操作按钮
查看：/detail/:id 无操作按钮，只查看<span class="token punctuation">(</span>待定<span class="token punctuation">)</span>
路由定义（关键字）/:action/:id
// action: <span class="token function">add</span> <span class="token operator">|</span> edit <span class="token operator">|</span> detail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={start:"2"},j={href:"https://ant.design/components/form-cn/",target:"_blank",rel:"noopener noreferrer"},_=t(`<ul><li>Modal 中 Form 布局用 horizontal，一行一个 FormItem</li><li>Drawer 中 Form 布局用 vertical，一行两个 FormItem</li><li>表格上方如高级搜索 Form 布局用 inline</li></ul><hr><h3 id="四、注释规范" tabindex="-1"><a class="header-anchor" href="#四、注释规范" aria-hidden="true">#</a> 四、注释规范</h3><ul><li><p><strong>变量注释</strong></p><ol><li>使用行内注释</li><li>对变量进行注释</li></ol></li><li><p><strong>函数注释</strong></p><ol><li>函数的描述</li><li>参数的类型和含义</li><li>返回值的类型和含义</li><li>函数内部逻辑用行内注释</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 两数求和
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> 数字a
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> 数字b
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 返回两数的和
 */</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="五、变量起名" tabindex="-1"><a class="header-anchor" href="#五、变量起名" aria-hidden="true">#</a> 五、变量起名</h3><ol><li><strong>常用动词</strong></li></ol><table><thead><tr><th>获取</th><th>设置</th><th>增加</th><th>删除</th><th>编辑</th><th>查看</th><th>打开</th><th>关闭</th></tr></thead><tbody><tr><td>get</td><td>set</td><td>add</td><td>delete</td><td>edit</td><td>view</td><td>open</td><td>close</td></tr><tr><td><strong>读取</strong></td><td><strong>写入</strong></td><td><strong>载入</strong></td><td><strong>保存</strong></td><td><strong>开始</strong></td><td><strong>结束</strong></td><td><strong>备份</strong></td><td><strong>恢复</strong></td></tr><tr><td>read</td><td>write</td><td>load</td><td>save</td><td>begin</td><td>end</td><td>backup</td><td>restore</td></tr><tr><td><strong>分割</strong></td><td><strong>合并</strong></td><td><strong>导入</strong></td><td><strong>导出</strong></td><td><strong>插入</strong></td><td><strong>清除</strong></td><td><strong>绑定</strong></td><td><strong>追加</strong></td></tr><tr><td>split</td><td>merge</td><td>import</td><td>export</td><td>insert</td><td>clear</td><td>bind</td><td>append</td></tr><tr><td><strong>清理</strong></td><td><strong>排序</strong></td><td><strong>选取</strong></td><td><strong>标记</strong></td><td><strong>复制</strong></td><td><strong>粘贴</strong></td><td><strong>撤销</strong></td><td><strong>重做</strong></td></tr><tr><td>clean</td><td>sort</td><td>select</td><td>mark</td><td>copy</td><td>paste</td><td>undo</td><td>redo</td></tr><tr><td><strong>暂停</strong></td><td><strong>启动</strong></td><td><strong>发布</strong></td><td><strong>解析</strong></td><td><strong>搜索</strong></td><td><strong>增加</strong></td><td><strong>减少</strong></td><td><strong>播放</strong></td></tr><tr><td>pause</td><td>launch</td><td>publish</td><td>parse</td><td>search</td><td>increase</td><td>decrease</td><td>play</td></tr><tr><td><strong>运行</strong></td><td><strong>编译</strong></td><td><strong>执行</strong></td><td><strong>提交</strong></td><td><strong>展开</strong></td><td><strong>折叠</strong></td><td><strong>监听</strong></td><td><strong>构建</strong></td></tr><tr><td>run</td><td>compile</td><td>execute</td><td>submit</td><td>expand</td><td>collapse</td><td>listen</td><td>build</td></tr><tr><td><strong>收集</strong></td><td><strong>编码</strong></td><td><strong>解码</strong></td><td><strong>加密</strong></td><td><strong>解密</strong></td><td><strong>压缩</strong></td><td><strong>解压缩</strong></td><td><strong>打包</strong></td></tr><tr><td>collect</td><td>encode</td><td>decode</td><td>encrypt</td><td>decrypt</td><td>compress</td><td>decompress</td><td>pack</td></tr><tr><td><strong>发出</strong></td><td><strong>连接</strong></td><td><strong>断开</strong></td><td><strong>发送</strong></td><td><strong>接收</strong></td><td><strong>下载</strong></td><td><strong>上传</strong></td><td><strong>刷新</strong></td></tr><tr><td>emit</td><td>connect</td><td>disconnect</td><td>send</td><td>receive</td><td>download</td><td>upload</td><td>refresh</td></tr></tbody></table><ol start="2"><li><strong>函数采用变量 + 名词的方式</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取模型列表</span>
getModelList
<span class="token comment">// 查看模型详情</span>
getModelDetail
<span class="token comment">// 新增模型</span>
addModel
<span class="token comment">// 编辑模型</span>
editModel
<span class="token comment">// 删除模型</span>
delModel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>避免单字母命名。命名需描述功能</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>命名对象、函数、实例时用驼峰命名法（数据库相关可用下划线）</p></li><li><p>不用前置或后置下划线</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>__firstName__ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName_ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// good</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),x={start:"6"},q=s("code",null,"this",-1),N={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="六、vue-项目规范" tabindex="-1"><a class="header-anchor" href="#六、vue-项目规范" aria-hidden="true">#</a> 六、Vue 项目规范</h3><ol><li><p>每个文件声明一个组件并只导出一个组件</p></li><li><p>组件名称和定义组件的文件名称建议一致</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> GlobalFotter <span class="token keyword">from</span> <span class="token string">&#39;./Footer&#39;</span>
<span class="token comment">// good</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./Footer&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>组件名称推荐用大写驼峰</p></li><li><p>没有子元素的标签用自闭合写法</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Component<span class="token operator">&gt;</span>
<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>多行属性标签，关闭标签另起一行</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Component
  bar<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span>
  baz<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Component
  bar<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span>
  baz<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>多行属性采用缩进对齐，属性少时保持一行</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo
  superLongParam<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span>
  anotherSuperLongParam<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Foo
  superLongParam<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span>
  anotherSuperLongParam<span class="token operator">=</span><span class="token string">&quot;baz&quot;</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Quux <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Foo<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>Template 属性用双引号，其他 JS 用单引号</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&#39;bar&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// good</span>
<span class="token operator">&lt;</span>Foo bar<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>列表循环中禁止用 index 作为 key，可用 item</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">&lt;</span>li <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in list&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
<span class="token comment">// good</span>
<span class="token operator">&lt;</span>li <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in list&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="七、vscode-设置" tabindex="-1"><a class="header-anchor" href="#七、vscode-设置" aria-hidden="true">#</a> 七、vscode 设置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 在vscode编辑器中增加如下设置（ctrl+,）</span>
<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function S(z,A){const a=p("ExternalLinkIcon");return l(),i("div",null,[r,s("p",null,[n("4.2 用 "),s("a",d,[n("Array#push"),e(a)]),n(" 取代直接赋值添加项 4.3 用数组展开方法 "),u,n(" 拷贝数组 4.4 用展开方法 "),k,n(" 代替 "),v,n(" 转换类数组对象 4.5 对迭代器映射，用 "),s("a",m,[n("Array.from"),e(a)]),n(" 替代 "),b,n("，防止中间数组 4.6 数组回调用 return，若函数体仅返回表达式可省略 4.7 多行数组，首尾需换行")]),g,s("ol",null,[s("li",null,[n("所有树节点的增改弹层使用 "),s("a",h,[n("Modal"),e(a)]),n(" 组件（对话框），所有的表格增改查弹层使用 "),s("a",y,[n("Drawer"),e(a)]),n(" 组件（抽屉）")])]),f,s("ol",w,[s("li",null,[s("a",j,[n("Form"),e(a)]),n(" 组件布局")])]),_,s("ol",x,[s("li",null,[n("不要保存 "),q,n(" 的引用。用箭头函数或 "),s("a",N,[n("Function#bind"),e(a)])])]),F])}const J=o(c,[["render",S],["__file","mingmingguifan.html.vue"]]);export{J as default};
