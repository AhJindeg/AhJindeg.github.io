代码绝不止能跑就行，但是废话只说一句：码字不易求个👍，🙇‍🙇‍🙇‍。

> 演示代码使用 `Vue3` + `ts` +`Vite`编写，但是也会列出适用于 `Vue2` 的优化技巧，如果某个优化只适用于 `Vue3` 或者 `Vue2`，我会在标题中标出来。

## 1代码优化

### v-for 中使用 key

使用 `v-for` 更新已渲染的元素列表时，默认用就地复用策略；列表数据修改的时候，他会根据 key 值去判断某个值是否修改，如果修改，则重新渲染这一项，否则复用之前的元素；

使用key的注意事项：

-   不要使用可能重复的或者可能变化 key 值（控制台也会给出提醒）
    
-   如果数组中的数据有状态需要维持时（例如输入框），不要使用数组的 index 作为 key 值，因为如果在数组中插入或者移除一个元素时，其后面的元素 index 将会变化，这回让vue进行原地复用时错误的绑定状态。
    
-   如果数组中没有唯一的 key值可用，且数组更新时不是全量更新而是采用类似push，splice来插入或者移除数据时，可以考虑对其添加一个 key 字段，值为 Symbol() 即可保证唯一。
    

> 何时使用何种key？

这是一个非常有考究的问题，首先你要知道 vue 中的`原地复用`（大概就是`虚拟dom`变化时，两个 `虚拟dom节点` 的 `key` 如果一样就不会重新创建节点，而是修改原来的节点）

当我们渲染的数据不需要保持状态时，例如常见的单纯的表格分页渲染（不包含输入，只是展示）、下拉加载更多等场景，那么使用 `index` 作为 `key` 再好不过，因为进入下一页或者上一页时就会原地复用之前的节点，而不是重新创建，如果使用唯一的 `id` 作为`key`反而会重新创建dom，性能相对较低。

此外使用 `index` 作为`key`我还应该要尽量避免对数组的中间进行 增加/删除 等会影响后面元素key变化的操作。这会让 vue 认为后面所有元素都发生了变化，导致多余的对比和原地复用。

所以使用 index 作为 key 需要满足：

-   数据没有独立的状态
    
-   数据不会进行 增加/删除 等会影响后面元素key变化的操作
    

> 哪何时使用 id 作为 key 呢？

对于大多数数据的`id`都是唯一的，这无疑的一个`key`的优选答案。对于任何大多数情况使用 `id` 作为 `key` 都不会出现上面 `bug`。但是如果你需要考虑性能问题，那就就要思考是否应该使用原地复用了。

同样是上面的分页数据展示，如果使用`id`作为 `key` ，可想而知每一页的每一条数据 `id` 都是不一样的，所以当换页时两颗 虚拟DOM树 的节点的 `key` 完全不一致，vue 就会移除原来的节点然后创建新的节点。可想而知效率会更加低下。但是他也有它的优点。唯一的 key 可以帮助 diff 更加精确的为我们绑定状态，这尤其适合数据有独立的状态的场景，例如带输入框或者单选框的列表数据。

所以何时使用 id 作为 key？

只有一点：

-   无法使用 index 作为 key 的时候
    

### v-if/v-else-if/v-else 中使用 key

> 可能很多人都会忽略这个点

原因：默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现意料之外的副作用。

> 如果只有一个 v-if ，没有 v-else 或者 v-if-else的话，就没有必要加 key 了

相对于 v-for 的 key， v-if/v-else-if/v-else 中的 key 相对简单，我们可以直接写入固定的字符串或者数组即可

```auto
  <transition>
    <button 
      v-if="isEditing"
      v-on:click="isEditing = false"
    >
      Save
    </button>
    <button 
      v-else 
      v-on:click="isEditing = true"
    >
      Edit
    </button>
  </transition>
```

```auto
.v-enter-active, .v-leave-active {
  transition: all 1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-leave-active {
  position: absolute;
}
```

例如对于上面的代码， 你会发现虽然对 button 添加了 过渡效果， 但是如果不添加 key 切换时是无法触发过渡的

### v-for 和 v-if 不要一起使用（Vue2）

> 此优化技巧仅限于Vue2，Vue3 中对 v-for 和 v-if 的优先级做了调整

这个大家都知道

> 永远不要把 v-if 和 v-for 同时用在同一个元素上。 引至 Vue2.x风格指南

原因是 v-for 的 优先级高于 v-if，所以当它们使用再同一个标签上是，每一个渲染都会先循环再进行条件判断

> 注意： Vue3 中 v-if 优先级高于 v-for，所以当 v-for 和 v-if 一起使用时效果类似于 Vue2 中把 v-if 上提的效果

例如下面这段代码在 Vue2 中是不被推荐的，Vue 也会给出对应的警告

```auto
<ul>
  <li v-for="user in users" v-if="user.active">
    {{ user.name }}
  </li>
</ul>
```

我们应该尽量将 v-if 移动到上级 或者 使用 计算属性来处理数据

```auto
<ul v-if="active">
  <li v-for="user in users">
    {{ user.name }}
  </li>
</ul>
```

如果你不想让循环的内容多出一个无需有的上级容器，那么你可以选择使用 template 来作为其父元素，template 不会被浏览器渲染为 DOM 节点

如果我想要判断遍历对象里面每一项的内容来选择渲染的数据的话，可以使用 computed 来对遍历对象进行过滤

```auto
// js
let usersActive = computed(()=>users.filter(user => user.active))

// template
<ul>
    <li v-for="user in usersActive">
      {{ user.name }}
    </li>
</ul>
```

### 合理的选择 v-if 和 v-show

v-if 和 v-show 的区别相比大家都非常熟悉了； v-if 通过直接操作 DOM 的删除和添加来控制元素的显示和隐藏；v-show 是通过控制 DOM 的 display CSS熟悉来控制元素的显示和隐藏

由于对 DOM 的 添加/删除 操作性能远远低于操作 DOM 的 CSS 属性

所以当元素需要频繁的 显示/隐藏 变化时，我们使用 v-show 来提高性能。

当元素不需要频繁的 显示/隐藏 变化时，我们通过 v-if 来移除 DOM 可以节约掉浏览器渲染这个的一部分DOM需要的资源

### 使用简单的 计算属性

应该把复杂计算属性分割为尽可能多的更简单的 property。

#### 易于测试

当每个计算属性都包含一个非常简单且很少依赖的表达式时，撰写测试以确保其正确工作就会更加容易。

#### 易于阅读

简化计算属性要求你为每一个值都起一个描述性的名称，即便它不可复用。这使得其他开发者 (以及未来的你) 更容易专注在他们关心的代码上并搞清楚发生了什么。

#### 更好的“拥抱变化”

任何能够命名的值都可能用在视图上。举个例子，我们可能打算展示一个信息，告诉用户他们存了多少钱；也可能打算计算税费，但是可能会分开展现，而不是作为总价的一部分。

小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

#### 引至 Vue2风格指南

computed 大家后很熟悉， 它会在其表达式中依赖的响应式数据发送变化时重新计算。如果我们在一个计算属性中书写了比较复杂的表达式，那么其依赖的响应式数据也任意变得更多。 当其中任何一个依赖项变化时整个表达式都需要重新计算

```auto
let price = computed(()=>{
  let basePrice = manufactureCost / (1 - profitMargin)
  return (
      basePrice -
      basePrice * (discountPercent || 0)
  )
})
```

当 manufactureCost、profitMargin、discountPercent 中任何一个变化时都会重新计算整个 price。

但是如果我们改成下面这样

```auto
let basePrice = computed(() => manufactureCost / (1 - profitMargin))
let discount = computed(() => basePrice * (discountPercent || 0))
let finalPrice = computed(() => basePrice - discount)
```

如果当 discountPercent 变化时，只会 重新计算 discount 和 finalPrice，由于 computed 的缓存特性，不会重新计算 basePrice

### functional 函数式组件（Vue2）

注意，这仅仅在 Vue2 中被作为一种优化手段，在 3.x 中，有状态组件和函数式组件之间的性能差异已经大大减少，并且在大多数用例中是微不足道的。因此，在 SFCs 上使用 functional 的开发人员的迁移路径是删除该 attribute，并将 props 的所有引用重命名为 ，将重命名为attrs。

优化前

```auto
<template> 
    <div class="cell"> 
        <div v-if="value" class="on"></div> 
        <section v-else class="off"></section> 
    </div> 
</template> 

<script> 
export default { 
    props: ['value'], 
} 
</script>
```

优化后

```auto
<template functional> 
    <div class="cell"> 
        <div v-if="props.value" class="on"></div> 
        <section v-else class="off"></section> 
    </div> 
</template> 

<script> 
export default { 
    props: ['value'], 
} 
</script>
```

-   没有this（没有实例）
    
-   没有响应式数据
    

### 拆分组件

什么？你写的一个vue文件有一千多行代码？🤔 合理的拆分组件不仅仅可以优化性能，还能够让代码更清晰可读。单一功能原则嘛

优化前

```auto
<template>
  <div :style="{ opacity: number / 300 }">
    <div>{{ heavy() }}</div>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    heavy () { /* HEAVY TASK */ }
  }
}
</script>
```

优化后

```auto
<template>
  <div :style="{ opacity: number / 300 }">
    <ChildComp/>
  </div>
</template>

<script>
export default {
  props: ['number'],
  components: {
    ChildComp: {
      methods: {
        heavy () { /* HEAVY TASK */ }
      },
      render (h) {
        return h('div', this.heavy())
      }
    }
  }
}
</script>
```

由于 Vue 的更新是组件粒度的，虽然每一帧都通过数据修改导致了父组件的重新渲染，但是 ChildComp 却不会重新渲染，因为它的内部也没有任何响应式数据的变化。所以优化后的组件不会在每次渲染都执行耗时任务

### 使用局部变量

优化前

```auto
<template>
  <div :style="{ opacity: start / 300 }">{{ result }}</div>
</template>

<script>
import { heavy } from '@/utils'

export default {
  props: ['start'],
  computed: {
    base () { return 42 },
    result () {
      let result = this.start
      for (let i = 0; i < 1000; i++) {
        result += heavy(this.base)
      }
      return result
    }
  }
}
</script>
```

优化后

```auto
<template>
  <div :style="{ opacity: start / 300 }">
    {{ result }}</div>
</template>

<script>
import { heavy } from '@/utils'

export default {
  props: ['start'],
  computed: {
    base () { return 42 },
    result () {
      const base = this.base
      let result = this.start
      for (let i = 0; i < 1000; i++) {
        result += heavy(base)
      }
      return result
    }
  }
}
</script>
```

> 这里主要是优化前后的组件的计算属性 result 的实现差异，优化前的组件多次在计算过程中访问 this.base，而优化后的组件会在计算前先用局部变量 base，缓存 this.base，后面直接访问 base。
> 
> 那么为啥这个差异会造成性能上的差异呢，原因是你每次访问 this.base 的时候，由于 this.base 是一个响应式对象，所以会触发它的 getter，进而会执行依赖收集相关逻辑代码。类似的逻辑执行多了，像示例这样，几百次循环更新几百个组件，每个组件触发 computed 重新计算，然后又多次执行依赖收集相关逻辑，性能自然就下降了。
> 
> 从需求上来说，this.base 执行一次依赖收集就够了，把它的 getter 求值结果返回给局部变量 base，后续再次访问 base 的时候就不会触发 getter，也不会走依赖收集的逻辑了，性能自然就得到了提升。 引至 揭秘 Vue.js 九个性能优化技巧

### 使用 KeepAlive

在一些渲染成本比较高的组件需要被经常切换时，可以使用 keep-alive 来缓存这个组件 而在使用 keep-alive 后，被 keep-alive 包裹的组件在经过第一次渲染后，的 vnode 以及 DOM 都会被缓存起来，然后再下一次再次渲染该组件的时候，直接从缓存中拿到对应的 vnode 和 DOM，然后渲染，并不需要再走一次组件初始化，render 和 patch 等一系列流程，减少了 script 的执行时间，性能更好。

> 注意： 滥用 keep-alive 只会让你的应用变得更加卡顿，因为他会长期占用较大的内存

### 事件的销毁

当一个组件被销毁时，我们应该清除组件中添加的 全局事件 和 定时器 等来防止内存泄漏 Vue3 的 HOOK 可以让我们将事件的声明和销毁写在一起，更加可读

```auto
function scrollFun(){ /* ... */}
document.addEventListener("scroll", scrollFun)

onBeforeUnmount(()=>{
  document.removeEventListener("scroll", scrollFun)
})
```

Vue2 依然可以通过 $once 来做到这样的效果，当然你也可以在 optionsAPI beforeDestroy 中销毁事件，但是我更加推荐前者的写法，因为后者会让相同功能的代码更分散

```auto
function scrollFun(){ /* ... */}
document.addEventListener("scroll", scrollFun)

this.$once('hook:beforeDestroy', ()=>{
  document.removeEventListener("scroll", scrollFun)
})
```

```auto
function scrollFun(){ /* ... */}

export default {
  created() {
    document.addEventListener("scroll", scrollFun)
  },
  beforeDestroy(){
    document.removeEventListener("scroll", scrollFun)
  }
}
```

### 图片加载

图片懒加载：适用于页面上有较多图片且并不是所有图片都在一屏中展示的情况，vue-lazyload 插件给我们提供了一个很方便的图片懒加载指令 v-lazy

但是并不是所有图片都适合使用懒加载，例如 banner、相册等 更加推荐使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。

### 使用合适的图片类型

-   使用webp格式：这个没什么好说的，大家都知道WebP的优势体现在它具有更优的图像数据压缩算法,能带来更小的图片体积,而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性,在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。
    
-   使用交错GIF或者是渐进JPEG： 还有一种优化用户体验的方式，就是使用交错GIF或者是渐进（Progressive Encoding）JPEG的图片。渐进JPEG文件首先是模糊的，然后渐渐清晰起来。
    
-   Baseline JPEG和Progressive JPEG的区别：
    
    阳光彩虹小白马
    

-   JPEG文件格式有两种保存方式。他们是Baseline JPEG和Progressive JPEG。
    
-   两种格式有相同尺寸以及图像数据，他们的扩展名也是相同的，唯一的区别是二者显示的方式不同。
    

Baseline JPEG

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

Progressive JPEG

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

Progressive JPEG的优点：

-   用户体验：一个以progressive方式编码的jpeg文件，在浏览器上的渲染方式是由模糊到清晰的。用户能在渐变的图像当中获得所需信息的反馈。如果内容不是用户所期待的，用户就能提前前往新的页面。
    
-   文件大小：有实验证明，在JPEG文件小于10KB的时候，使用标准型编码（Huffman表已经被优化）的JPEG文件要小于使用渐变式编码的JPEG文件（发生概率为75%）。当文件大于10KB时，渐变式编码的JPEG文件有94%的概率拥有比标准编码的文件更小的体积。
    

### 减少不必要的响应式数据

大家都知道vue中响应式数据需要额外的对其绑定get、get处理函数，如果你的某些数据不会发生变化或者你不希望它的变化会导致任何副作用（更新视图或者其他）。一般我会这样定义他。

```auto
export default {
  data() {
    this.version = '10'; // 不会被做响应式处理
    return {
        /* ... */
    }
  }
}
```

> Tips: 其实这种方式并不是最好的，因为这会将数据直接绑定到vue实例上，而vue更希望数据能够统一在data中，然后通过代理到vue实例上的方式来访问。所以更好的方式应该是对data中的数据进行冻结。

> 在Vue3中无法通过以上方式来解决，因为Proxy代理的粒度是整个对象而不是某一个属性。

### 采用合理的数据处理算法

这个相对比较考验 数据结构和算法 的功底 例如一个将数组转化为多级结构的方法

```auto
/**
 * 数组转树形结构,时间复杂度O(n)
 * @param list 数组
 * @param idKey 元素id键
 * @param parIdKey 元素父id键
 * @param parId 第一级根节点的父id值
 * @return {[]}
 */
function listToTree (list,idKey,parIdKey,parId) {
    let map = {};
    let result = [];
    let len = list.length;

    // 构建map
    for (let i = 0; i < len; i++) {
        //将数组中数据转为键值对结构 (这里的数组和obj会相互引用，这是算法实现的重点)
        map[list[i][idKey]] = list[i];
    }

    // 构建树形数组
    for(let i=0; i < len; i++) {
        let itemParId = list[i][parIdKey];
        // 顶级节点
        if(itemParId === parId) {
            result.push(list[i]);
            continue;
        }
        // 孤儿节点，舍弃(不存在其父节点)
        if(!map[itemParId]){
            continue;
        }
        // 将当前节点插入到父节点的children中（由于是引用数据类型，obj中对于节点变化，result中对应节点会跟着变化）
        if(map[itemParId].children) {
            map[itemParId].children.push(list[i]);
        } else {
            map[itemParId].children = [list[i]];
        }
    }
    return result;
}
```

### 其他

除了上面说的方法以外还有很多优化技巧，只是我在项目并不是太常用🤣

-   冻结对象（避免不需要响应式的数据变成响应式）
    
-   长列表渲染-分批渲染
    
-   长列表渲染-动态渲染（vue-virtual-scroller） ...
    

### 首屏/体积优化

我在项目中关于首屏优化主要有以下几个优化方向

-   体积
    
-   代码分割
    
-   网络
    

### 体积优化

-   压缩打包代码: webpack 和 vite 的生产环境打包默认就会压缩你的代码，这个一般不需要特殊处理，webpack 也可以通过对应的压缩插件手动实现
    
-   取消 source-map: 可以查看你的打包产物中是否有 .map 文件，如果有你可以将 source-map 的值设置为false或者空来关闭代码映射（这个占用的体积是真的大）
    
-   打包启用 gizp 压缩: 这个需要服务器也开启允许 gizp 传输，不然启用了也没啥用（ webpack 有对应的 gzip 压缩插件，不太版本的 webpack 压缩插件可能不同，建议先到官网查询）
    

### 代码分割

代码分割的作用的将打包产物分割为一个一个的小产物，其依赖 esModule。所以当你使用 import() 函数来导入一个文件或者依赖，那么这个文件或者依赖就会被单独打包为一个小产物。 路由懒加载 和 异步组件 都是使用这个原理。

-   路由懒加载
    
-   异步组件
    

对于 UI库 我一般不会使用按需加载组件，而是比较喜欢 CDN 引入的方式来优化。

### 网络

-   CDN： 首先就是上面的说的 CDN 引入把，开发阶段使用本地库，通过配置 外部扩展(Externals) 打包时来排除这些依赖。然后在 html 文件中通过 CDN 的方式来引入它们
    
-   Server Push： HTTP2已经相对成熟了；经过上面的 CDN 引入，我们可以对网站使用 HTTP2 的 Server Push 功能来让浏览器提前加载 这些 CDN 和 其他文件。
    
-   开启 gzip： 这个上面已经说过了，其原理就是当客户端和服务端都支持 gzip 传输时，服务端会优先发送经过 gzip 压缩过的文件，然后客户端接收到在进行解压。
    
-   开启缓存： 一般我使用的是协商缓存，但是这并不适用于所有情况，例如对于使用了 Server Push 的文件，就不能随意的修改其文件名。所以我一般还会将生产的主要文件固定文件名
    

### 用户体验优化

我们可以在核心文件加载完成之前，通过展示loading或者骨架屏等方式来提升用户体验。即可缩短白屏时间。

但是需要注意的是，页面刚开始加载时有许多资源需要加载，如果将loading相关的资源放到dom后的话，有可能会导致loading的资源被其他资源阻塞。

所以推荐loading相关的css或者js代码最好是内联到html中的头部，这样即可保证展示loading时对应的css和js已经加载完成。并且不推荐loading中使用高性能或者高网络消化的逻辑，这样会延长后面其他资源的解析或者加载时间。

## 2写在最后

寒气来了，抱团取暖。

本文引自：https://juejin.cn/post/7005880217684148231