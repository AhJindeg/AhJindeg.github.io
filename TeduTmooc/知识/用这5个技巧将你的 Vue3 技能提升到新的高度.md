> 微信搜索 【大迁世界】, 我会第一时间和你分享前端行业趋势，学习途径等等。
> 本文 GitHub  <https://github.com/qq449245884/xiaozhi> 已收录，有一线大厂面试完整考点、资料以及我的系列文章。

快来免费体验ChatGpt plus版本的，我们出的钱 体验地址:<https://chat.waixingyun.cn> 可以加入网站底部技术群，一起找bug，另外新版作图神器，ChatGPT4 已上线 <https://cube.waixingyun.cn/home>

在这篇文章中，我们将探讨五个实用的 Vue 技巧，这些技巧可以使你日常使用 Vue 编程更高效、更富有成效。无论你是Vue的初学者还是经验丰富的开发者，这些技巧都能帮助你编写更清晰、更简洁、更有效的代码。那么，让我们开始吧。

## 1. 在不失去反应性的情况下解构属性

在 Vue 中，`Props`  是父子组件之间传递数据的强大方式。Prop 数据是响应性的，这意味着在父组件中对道具值的更改将反映在接收 Prop 的子组件中。然而，子组件不能直接修改 Prop 的值。相反，它应该发出一个事件来通知父组件更新 Prop。

在解构 Vue 的props时，prop数据在过程中会失去反应性。然而，有一种方法可以在解构props时保持反应性。你可以使用toRefs指令来包装props对象，并在解构过程中保持反应性。有了这个指令，你可以在不担心失去反应性的情况下解构prop数据。

    <script setup lang="ts">
    import { toRefs } from 'vue'

    const props = withDefaults(
      defineProps<{
        event: object;
        address: string;
      }>(),
      {}
    );

    const { address } = toRefs(props)
    </script>

    <template>
      <div class="font-medium bg-gray-100 text-gray-700 py-3 px-3 rounded">
          {{ address }}
      </div>
    </template>

## 2. 创建自定义指令

Vue 指令是可以添加到HTML元素的特殊属性，它们让你能够将动态数据和行为绑定到元素上。在Vue.js中，指令通过属性名上的 `v-` 前缀来识别，并用于为HTML元素提供额外的功能。

一些最常用的 vue 指令包括：`v-if`，`v-html`，`v-on`，`v-bind`，`v-pre`，`v-once` 等等。在vuejs中，你可以创建自定义指令来执行特定的任务。我们将创建一个自定义的v-model指令，用于将输入标签中输入的文本转化为大写。

    <script setup>
      import { ref, vModelText } from 'vue'

      const value = ref("")

      // 为' v-model '指令定义一个名为'capitalize '的自定义修饰符
      vModelText.beforeUpdate = function (el, { value, modifiers }) {
        // 检查' v-model '指令中是否存在' capitalize '修饰符
        if (value && modifiers.capitalize) {
          el.value = el.value.toUpperCase()
        }
      }
    </script>

    <template>
      <input type="text" v-model.capitalize="value" />
    </template>

指令是 Vue 中的一个强大功能，它允许你为应用程序的用户界面添加动态功能。通过利用指令，我们可以创建更具交互性和响应性的应用程序，这些应用程序更易于维护和更新。

## 3. 针对Vue的性能标记

在应用程序中追踪性能瓶颈非常重要，尤其是当你想要构建高性能的应用程序时。Vue 有一个特定的功能，可以在Chrome DevTools中启用性能标记。

要在开发模式中启用性能标记，可以将 `performance`  选项设置为 true。这样我们能够在浏览器开发工具的性能/时间线面板中追踪组件的初始化、编译、渲染和性能追踪。

    import { createApp } from "vue";
    import App from "./App.vue";
    import router from "./router";
    import { createPinia } from "pinia";
    import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
    import { createHead } from "unhead";

    import "./style.css";

    const pinia = createPinia();
    createHead();

    pinia.use(piniaPluginPersistedstate);

    const app = createApp(App);

    if (process.env.NODE_ENV === "development") {
      app.config.performance = true;
    }

    app.use(router);
    app.use(pinia);
    app.mount("#app");

唯一的注意事项是，它只能在开发模式下以及支持[性能标记API](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark)的浏览器中运行

## 4. 从组件外部调用方法

在Vue 中，我们可以借助 `defineExpose` 宏从特定组件外部调用方法。这在处理某种方式上相互依赖的多个组件时特别有用。

`defineExpose` 宏可以暴露出组件属性，这些属性可以在其他组件中通过`refs`进行访问，从而允许你在特定组件中调用方法。这也可以让你访问变量声明，props 等等。

```

<script setup lang="ts">
  function doSomething(){
    // do smething
  }
  defineExpose({ doSomething });
</script>

<div>
  <h1>Child component</h1> 
</div>
```

现在我们可以在任何地方导入该组件，并按照下面的示例调用其中的各种方法。

    <script setup lang="ts">
    import { ref, onMounted} from 'vue';
    import ChildComponent from './ChildComponent';
    const childComponent = ref();

    onMounted(() => {
      childComponent.value.doSomething();
    });
    </script>

    <div id="app">
      <ChildComponent ref="childComponent" />
    </div>

## 5. 持久化Pinia 存储

Pinia，是 Vue3 推荐的 store ，Pinia 简化了 store实现，并且轻量级且具有性能优势。使用 Pinia 管理 store时，持久化 store 数据非常重要。

**pinia-plugin-persistedstate** 是一个高度可定制的包，为这项任务提供自定义存储、序列化器和路径选择选项。

请使用您喜欢的包管理器按照下面的方式安装 `pinia-plugin-persistedstate`:

    pnpm : pnpm i pinia-plugin-persistedstate
    npm : npm i pinia-plugin-persistedstate
    yarn : yarn add pinia-plugin-persistedstate

需要在 `main.js` 或 `main.ts` 文件中进行配置，如下所示。

    import { createApp } from "vue";
    import App from "./App.vue";
    import router from "./router";
    import { createPinia } from "pinia";
    import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
    import { createHead } from "unhead";

    import "./style.css";

    const pinia = createPinia();
    createHead();

    // inject piniaPluginPersistedstate to pinia
    pinia.use(piniaPluginPersistedstate);

    const app = createApp(App);

    app.use(router);
    app.use(pinia);
    app.mount("#app");

通过在您的 store  中将 `persist` 属性设置为 `true`，启用Pinia存储持久性:

    import { defineStore } from "pinia";

    export const uselistingStore = defineStore(`listingStore`, {
      state: () => {
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

## 总结

总的来说，这五个Vue.js的技巧可以极大地提升你的开发流程，使你的代码更高效、更有效。从不失去反应性地解构属性，到在Pinia中持久化存储状态，再到在组件外部访问组件方法，这些技巧可以帮助你提升你的Vue. 技能。

### 交流

> 有梦想，有干货，微信搜索 **【大迁世界】** 关注这个在凌晨还在刷碗的刷碗智。
>
> 本文 GitHub  <https://github.com/qq449245884/xiaozhi> 已收录，有一线大厂面试完整考点、资料以及我的系列文章。


