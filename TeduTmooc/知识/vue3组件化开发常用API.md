持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第5天，[点击查看活动详情](https://juejin.cn/post/7099702781094674468 "https://juejin.cn/post/7099702781094674468")

# 组件化思想

> 为什么使用组件化开发？

当前前端比较流行的 **Vue** **React** 等框架，都会通过编写组件来完成业务需求，也就是组件化开发。包括小程序开发也会用到组件化开发的思想。

分析组件化思想开发应用程序：

-   将一个完整页面拆分成很多个小组件
-   每个组件用于完成页面的一个功能模块
-   每一个组件还可以细分 （父子组件）
-   通用的组件可以复用到不同的页面

一个 **Vue** 的页面，应该像是棵嵌套的组件树的形式来组织：

![components.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f2a4a9e24624b16b15b6db1090a1f63~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

**vue3** 入口文件：

```js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

`createApp()`函数传入了一个`App`，`App` 就是一个组件，是项目的根组件。

下面将分析 **Vue3** 中组件化开发的常用方法。

# 组件通讯

## $props

-   `$props` 用于向子组件传递数据

```vue
<p> $props: {{$props}} </p>
```

-   `<script setup>` 语法糖中需要使用 `defineProps`Api获取props

```js
const props = defineProps({
  num: Number,
})
```

## $emits

-   `$emit` 用于调用父级组件的方法

```vue
<button @click="$emit('add')">
  add
</button>
```

-   `<script setup>` 语法糖中需要使用 `defineEmits`Api声明emits

```vue
<button @click="add">{{ num }}</button>

const emits = defineEmits(['add'])
function add() {
  emits('add')
}
```

## $parent

-   `$parent`用于获取父组件实例对象。

`<script setup>` 中组件实例不会暴露出来，直接在模板中使用`$parent`会返回一个空对象。

为了在 `<script setup>` 组件中明确要暴露出去的属性，使用 `defineExpose` 编译器宏：

```js
const parData = ref("父组件数据");
defineExpose({
  parData,
})
```

子组件：

```vue
<p>父组件 parData: {{$parent.parData}}</p>
```

## $attrs

-   包含了父作用域中不作为组件 `props` 或自定义事件的 attribute 绑定和事件。

子组件：

```js
<Foo a="a" b="b" :num="num" @add="add" />
```

在父组件中，`$attrs` 的值就是 `{ "a": "a", "b": "b" }`。

-   当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定，并且可以通过 `v-bind="$attrs"` 传入内部组件——这在创建高阶的组件时会非常有用，举个例子：

父组件：

```js
<Bar :age=18 sex="boy" />
```

子组件 `Bar.vue`

```js
<p v-bind="$attrs">将$attrs对象绑定到当前标签</p>
```

在浏览器查看DOM，`age 和 sex`作为属性被绑定到了这个`p`标签上面。

-   `<script setup>`中，需要使用`useAttrs`

```js
import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs.sex); // boy
```

## proviede & inject

-   用于跨层级/多层级的组件通信
-   父组件有一个 `provide` 选项来提供数据，子组件有一个 `inject` 选项来开始使用这些数据。

父级组件:

```js
provide("user", "kong");
provide("pass", 123456);
```

子孙级组件:

```js
const user = inject("user");
const pass = inject("pass");
```

# 插槽 slot

用于内容分发，将 `<slot>` 元素作为承载分发内容的出口。

`SlotComp` 组件

```js
<template>
  <div :style="s1">
    <slot name="head"></slot>
  </div>
  <div :style="s2">
    <slot name="foot"></slot>
  </div>
</template>
```

使用上面的组件

```js
          <SlotComp>
            <template v-slot:head>
              <p>head插槽</p>
            </template>
            <template v-slot:foot>
              <p>foot插槽</p>
            </template>
          </SlotComp>
```

`SlotComp` 组件中带 `name`属性的 `slot`插槽内容，会被替换。被替换的内容 需要在父组件中使用 `v-slot`指令为插槽提供想要显示的内容。

## 渲染作用域

```js
            <template v-slot:foot>
              <p>foot插槽</p>
              {{msg}}
              {{items}}
            </template>
```

上面的例子，`{{items}}` 不会显示数据。

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

## 作用域插槽

让插槽的内容访问子组件才有的数据：

```js
<slot name="head" :item="items"></slot>
```

插槽内容：

```js
            <template v-slot:head = "slotProps">
              <p v-for="i in slotProps.item">{{i}}</p>
            </template>
```

绑定在 `<slot>` 元素上的 attribute 被称为**插槽 prop**。现在，在父级作用域中，我们可以使用带值的 `v-slot` 来定义我们提供的插槽 prop 的名字，本例中就是`slotProps`。

# v-model

## 表单组件

-   将 `v-model` 应用在表单上面，实现双向绑定：

```js
<input v-model="text" />
```

## 自定义组件

-   将 `v-model` 应用在自定义组件上面：

父组件中使用自定义组件：

```js
const msg = ref('hello world!');

<ModelComp v-model="msg"></ModelComp>
```

相当于：

```js
          <ModelComp 
            :modelValue="msg"
             @update:modelValue="msg = $event"
          >
          </ModelComp>
```

自定义组件`ModelComp.vue`中：

```js
const props = defineProps({
  modelValue: String
})
const emits = defineEmits([
  "update:modelValue"
])

const text = ref("请输入..");

// text改变时执行
watch(text,()=>{
  emits("update:modelValue",text.value);
})
```

## 改变默认参数

-   未设置参数时如上，默认绑定的参数是 `modelValue` `update:modelValue` 设置`v-model`参数：

```js
<ModelComp v-model:show="show"></ModelComp>
```

相当于：

```js
          <ModelComp 
            :show="showFlag"
             @update:show="showFlag = $event"
          >
          </ModelComp>
```

自定义组件`ModelComp.vue`中：

```js
const props = defineProps({
  show: Boolean
})
const emits = defineEmits([
  "update:show",
])
```

# 样式绑定相关

## class

class绑定：根据需求动态绑定class样式时可以使用一下几种方法

写法1：对象语法

```js
<button @click="changeColor" :class="{ active: isActive }">
    点击切换我的文体颜色样式
</button>

const isActive = ref(false);
const changeColor = () => {
  isActive.value = !isActive.value;
}
```

写法2：对象语法

```js
<button @click="changeColor2" :class="classObj">
          点击切换颜色，根据计算属性
</button>

const isActive2 = reactive({
active: false,
})
const classObj = computed(() => {
return {
  active: isActive2.active,
  'font-30': true,
}
})
const changeColor2 = () => {
isActive2.active = !isActive2.active
}
```

写法3：数组语法

```html
<div :class="[activeClass, errorClass]"></div>
```

三目运算符写法

```html
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

数组语法中结合对象语法使用

```html
<div :class="[{ active: isActive }, errorClass]"></div>
```

## style

动态绑定行内style样式

三种方式：html代码

```js
      <p :style="{ color: colorRed }">style绑定</p>
```

```js
      <p :style="styleObj">style对象绑定(直接绑定到一个对象，代码更清新)</p>
```

```js
     <p :style="[styleObj, styleObjRed]">style数组绑定</p>
```

js 代码

```js
const colorRed = ref('#f00')
const styleObj = reactive({
  fontSize: '30px',
})
const styleObjRed = reactive({
  color: '#f00',
})
```

> 代码demo地址 [github.com/kongcodes/v…](https://github.com/kongcodes/vue3study "https://github.com/kongcodes/vue3study")

> [从0开始vue3项目搭建](https://juejin.cn/post/7010212118779674637 "https://juejin.cn/post/7010212118779674637")