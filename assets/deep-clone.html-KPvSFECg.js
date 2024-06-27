import{_ as n,o as s,c as a,e as t}from"./app-jV2LlyJZ.js";const e={},o=t(`<p>日常进行深拷贝时我们会使用 <em><strong>JSON.parse(JSON.stringify(data))</strong></em> 进行 copy <br> 但是对象内有函数，或者是数据过于复杂非扁平化就会出现数据丢失的问题 <br> 使用下面这个可以应对绝大多数需要深拷贝的场景</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;deepClone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cloneArt&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;const DEEP_CLONE = (_obj, _map = new WeakMap()) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (_obj instanceof Date) return new Date(_obj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (_obj instanceof RegExp) return new RegExp(_obj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (_map.has(_obj)) return _map.get(_obj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const _ALL_DESC = Object.getOwnPropertyDescriptors(_obj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let _cloneObj = Object.create(Object.getPrototypeOf(_obj), _ALL_DESC)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  _map.set(_obj, _cloneObj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for (const _key of Reflect.ownKeys(_obj)) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    const _VALUE = _obj[_key]&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    const _JUDGMENT = _VALUE instanceof Object &amp;&amp; typeof _VALUE !== &#39;function&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    _cloneObj[_key] = _JUDGMENT ? DEEP_CLONE(_VALUE, _map) : _VALUE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return _cloneObj&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The ultimate deep copy data content!&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(i,u){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","deep-clone.html.vue"]]);export{r as default};
