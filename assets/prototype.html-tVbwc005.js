import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-zitU_q96.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="修改-vuerouter-配置-prototype-防止往同一地址跳转时会报错的情况" tabindex="-1"><a class="header-anchor" href="#修改-vuerouter-配置-prototype-防止往同一地址跳转时会报错的情况" aria-hidden="true">#</a> 修改 VueRouter 配置 prototype 防止往同一地址跳转时会报错的情况</h2><h3 id="router-index-js" tabindex="-1"><a class="header-anchor" href="#router-index-js" aria-hidden="true">#</a> router / index.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>\n<span class="token keyword">const</span> originalPush <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push\n<span class="token keyword">const</span> originalReplace <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>receive\n<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> onResolve<span class="token punctuation">,</span> onReject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>onResolve <span class="token operator">||</span> onReject<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">originalPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> onResolve<span class="token punctuation">,</span> onReject<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token function">originalPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">replace</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> onResolve<span class="token punctuation">,</span> onReject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>onResolve <span class="token operator">||</span> onReject<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">originalReplace</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> onResolve<span class="token punctuation">,</span> onReject<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token function">originalReplace</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_4 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_4);
}
const prototype_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "prototype.html.vue"]]);
export {
  prototype_html as default
};