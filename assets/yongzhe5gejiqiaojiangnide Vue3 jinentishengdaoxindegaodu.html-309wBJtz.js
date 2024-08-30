import{_ as a,r as p,o as s,c as d,b as e,d as t,e as o,t as u,a as i}from"./app-2S74OMdH.js";const c={},l={href:"https://github.com/qq449245884/xiaozhi",target:"_blank",rel:"noopener noreferrer"},h={href:"https://chat.waixingyun.cn",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cube.waixingyun.cn/home",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"在这篇文章中，我们将探讨五个实用的 Vue 技巧，这些技巧可以使你日常使用 Vue 编程更高效、更富有成效。无论你是Vue的初学者还是经验丰富的开发者，这些技巧都能帮助你编写更清晰、更简洁、更有效的代码。那么，让我们开始吧。",-1),v=e("h2",{id:"_1-在不失去反应性的情况下解构属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-在不失去反应性的情况下解构属性","aria-hidden":"true"},"#"),t(" 1. 在不失去反应性的情况下解构属性")],-1),f=e("p",null,[t("在 Vue 中，"),e("code",null,"Props"),t(" 是父子组件之间传递数据的强大方式。Prop 数据是响应性的，这意味着在父组件中对道具值的更改将反映在接收 Prop 的子组件中。然而，子组件不能直接修改 Prop 的值。相反，它应该发出一个事件来通知父组件更新 Prop。")],-1),q=e("p",null,"在解构 Vue 的props时，prop数据在过程中会失去反应性。然而，有一种方法可以在解构props时保持反应性。你可以使用toRefs指令来包装props对象，并在解构过程中保持反应性。有了这个指令，你可以在不担心失去反应性的情况下解构prop数据。",-1),_=i(`<h2 id="_2-创建自定义指令" tabindex="-1"><a class="header-anchor" href="#_2-创建自定义指令" aria-hidden="true">#</a> 2. 创建自定义指令</h2><p>Vue 指令是可以添加到HTML元素的特殊属性，它们让你能够将动态数据和行为绑定到元素上。在Vue.js中，指令通过属性名上的 <code>v-</code> 前缀来识别，并用于为HTML元素提供额外的功能。</p><p>一些最常用的 vue 指令包括：<code>v-if</code>，<code>v-html</code>，<code>v-on</code>，<code>v-bind</code>，<code>v-pre</code>，<code>v-once</code> 等等。在vuejs中，你可以创建自定义指令来执行特定的任务。我们将创建一个自定义的v-model指令，用于将输入标签中输入的文本转化为大写。</p><pre><code>&lt;script setup&gt;
  import { ref, vModelText } from &#39;vue&#39;

  const value = ref(&quot;&quot;)

  // 为&#39; v-model &#39;指令定义一个名为&#39;capitalize &#39;的自定义修饰符
  vModelText.beforeUpdate = function (el, { value, modifiers }) {
    // 检查&#39; v-model &#39;指令中是否存在&#39; capitalize &#39;修饰符
    if (value &amp;&amp; modifiers.capitalize) {
      el.value = el.value.toUpperCase()
    }
  }
&lt;/script&gt;

&lt;template&gt;
  &lt;input type=&quot;text&quot; v-model.capitalize=&quot;value&quot; /&gt;
&lt;/template&gt;
</code></pre><p>指令是 Vue 中的一个强大功能，它允许你为应用程序的用户界面添加动态功能。通过利用指令，我们可以创建更具交互性和响应性的应用程序，这些应用程序更易于维护和更新。</p><h2 id="_3-针对vue的性能标记" tabindex="-1"><a class="header-anchor" href="#_3-针对vue的性能标记" aria-hidden="true">#</a> 3. 针对Vue的性能标记</h2><p>在应用程序中追踪性能瓶颈非常重要，尤其是当你想要构建高性能的应用程序时。Vue 有一个特定的功能，可以在Chrome DevTools中启用性能标记。</p><p>要在开发模式中启用性能标记，可以将 <code>performance</code> 选项设置为 true。这样我们能够在浏览器开发工具的性能/时间线面板中追踪组件的初始化、编译、渲染和性能追踪。</p><pre><code>import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;
import router from &quot;./router&quot;;
import { createPinia } from &quot;pinia&quot;;
import piniaPluginPersistedstate from &quot;pinia-plugin-persistedstate&quot;;
import { createHead } from &quot;unhead&quot;;

import &quot;./style.css&quot;;

const pinia = createPinia();
createHead();

pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

if (process.env.NODE_ENV === &quot;development&quot;) {
  app.config.performance = true;
}

app.use(router);
app.use(pinia);
app.mount(&quot;#app&quot;);
</code></pre>`,9),b={href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark",target:"_blank",rel:"noopener noreferrer"},x=i(`<h2 id="_4-从组件外部调用方法" tabindex="-1"><a class="header-anchor" href="#_4-从组件外部调用方法" aria-hidden="true">#</a> 4. 从组件外部调用方法</h2><p>在Vue 中，我们可以借助 <code>defineExpose</code> 宏从特定组件外部调用方法。这在处理某种方式上相互依赖的多个组件时特别有用。</p><p><code>defineExpose</code> 宏可以暴露出组件属性，这些属性可以在其他组件中通过<code>refs</code>进行访问，从而允许你在特定组件中调用方法。这也可以让你访问变量声明，props 等等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;script setup lang=&quot;ts&quot;&gt;
  function doSomething(){
    // do smething
  }
  defineExpose({ doSomething });
&lt;/script&gt;

&lt;div&gt;
  &lt;h1&gt;Child component&lt;/h1&gt; 
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们可以在任何地方导入该组件，并按照下面的示例调用其中的各种方法。</p><pre><code>&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, onMounted} from &#39;vue&#39;;
import ChildComponent from &#39;./ChildComponent&#39;;
const childComponent = ref();

onMounted(() =&gt; {
  childComponent.value.doSomething();
});
&lt;/script&gt;

&lt;div id=&quot;app&quot;&gt;
  &lt;ChildComponent ref=&quot;childComponent&quot; /&gt;
&lt;/div&gt;
</code></pre><h2 id="_5-持久化pinia-存储" tabindex="-1"><a class="header-anchor" href="#_5-持久化pinia-存储" aria-hidden="true">#</a> 5. 持久化Pinia 存储</h2><p>Pinia，是 Vue3 推荐的 store ，Pinia 简化了 store实现，并且轻量级且具有性能优势。使用 Pinia 管理 store时，持久化 store 数据非常重要。</p><p><strong>pinia-plugin-persistedstate</strong> 是一个高度可定制的包，为这项任务提供自定义存储、序列化器和路径选择选项。</p><p>请使用您喜欢的包管理器按照下面的方式安装 <code>pinia-plugin-persistedstate</code>:</p><pre><code>pnpm : pnpm i pinia-plugin-persistedstate
npm : npm i pinia-plugin-persistedstate
yarn : yarn add pinia-plugin-persistedstate
</code></pre><p>需要在 <code>main.js</code> 或 <code>main.ts</code> 文件中进行配置，如下所示。</p><pre><code>import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;
import router from &quot;./router&quot;;
import { createPinia } from &quot;pinia&quot;;
import piniaPluginPersistedstate from &quot;pinia-plugin-persistedstate&quot;;
import { createHead } from &quot;unhead&quot;;

import &quot;./style.css&quot;;

const pinia = createPinia();
createHead();

// inject piniaPluginPersistedstate to pinia
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount(&quot;#app&quot;);
</code></pre><p>通过在您的 store 中将 <code>persist</code> 属性设置为 <code>true</code>，启用Pinia存储持久性:</p><pre><code>import { defineStore } from &quot;pinia&quot;;

export const uselistingStore = defineStore(\`listingStore\`, {
  state: () =&gt; {
    return {
      data: [],
    };
  },
  persist: true,
  actions: {
  },
  getters: {

  },
});
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>总的来说，这五个Vue.js的技巧可以极大地提升你的开发流程，使你的代码更高效、更有效。从不失去反应性地解构属性，到在Pinia中持久化存储状态，再到在组件外部访问组件方法，这些技巧可以帮助你提升你的Vue. 技能。</p><h3 id="交流" tabindex="-1"><a class="header-anchor" href="#交流" aria-hidden="true">#</a> 交流</h3>`,18),P=e("p",null,[t("有梦想，有干货，微信搜索 "),e("strong",null,"【大迁世界】"),t(" 关注这个在凌晨还在刷碗的刷碗智。")],-1),V={href:"https://github.com/qq449245884/xiaozhi",target:"_blank",rel:"noopener noreferrer"};function y(r,C){const n=p("ExternalLinkIcon");return s(),d("div",null,[e("blockquote",null,[e("p",null,[t("微信搜索 【大迁世界】, 我会第一时间和你分享前端行业趋势，学习途径等等。 本文 GitHub "),e("a",l,[t("https://github.com/qq449245884/xiaozhi"),o(n)]),t(" 已收录，有一线大厂面试完整考点、资料以及我的系列文章。")])]),e("p",null,[t("快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:"),e("a",h,[t("https://chat.waixingyun.cn"),o(n)]),t(" 可以加入网站底部技术群，一起找bug，另外新版作图神器，ChatGPT4 已上线 "),e("a",m,[t("https://cube.waixingyun.cn/home"),o(n)])]),g,v,f,q,e("pre",null,[e("code",null,`<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    event: object;
    address: string;
  }>(),
  {}
);

const { address } = toRefs(props)
<\/script>

<template>
  <div class="font-medium bg-gray-100 text-gray-700 py-3 px-3 rounded">
      `+u(r.address)+`
  </div>
</template>
`,1)]),_,e("p",null,[t("唯一的注意事项是，它只能在开发模式下以及支持"),e("a",b,[t("性能标记API"),o(n)]),t("的浏览器中运行")]),x,e("blockquote",null,[P,e("p",null,[t("本文 GitHub "),e("a",V,[t("https://github.com/qq449245884/xiaozhi"),o(n)]),t(" 已收录，有一线大厂面试完整考点、资料以及我的系列文章。")])])])}const k=a(c,[["render",y],["__file","yongzhe5gejiqiaojiangnide Vue3 jinentishengdaoxindegaodu.html.vue"]]);export{k as default};
