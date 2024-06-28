### 背景

由于工作需要学习react框架；最开始看文档的时候感觉还挺难的。但当我看了半天文档以后才发现，原来react这样学才是最快的；前提是同学们会vue一类的框架哈。

该方法适用于会vue的同学们食用

我们在学习以前先去想一想，在vue中我们常用的方法是什么，我们遇到一些场景时在vue中是怎么做的。

当我们想到这儿的时候就会发现，对啊；既然vue是这样做的，那么react中是怎么做的呢？别急，我们一步一步对比着来。

这样岂不是更能理解哦！下面就让我们开始吧！

冲冲冲。。。

### Vue梳理

在开始之前，我们先来梳理一下我们在vue中常用的API或者场景有哪些。

以下这几种就是我们常见的一些功能，主要是列表渲染、表单输入和一些计算属性等等；我们只需要根据原有的需要的功能去学习即可。

-   组件传值
-   获取DOM
-   列表渲染
-   条件渲染
-   class
-   计算属性
-   监听器
-   表单输入
-   模板

### vue/react对比学习

#### 组件传值

vue

javascript

复制代码

`// 父组件 <GoodsList v-if="!isGoodsIdShow" :goodsList="goodsList"/> // 子组件 -- 通过props获取即可 props: {     goodsList:{       type:Array,       default:function(){         return []       }     }   }`

react

typescript

复制代码

`// 父组件 export default function tab(props:any) {     const [serverUrl, setServerUrl] = useState<string | undefined>('https://');     console.log(props); 	// 父组件接收子组件的值并修改     const changeMsg = (msg?:string) => {         setServerUrl(msg);      };     return(         <View className='tab'>             <View className='box'>                 <TabName msg={serverUrl} changeMsg={changeMsg} />             </View>         </View>     ) } // 子组件 function TabName(props){     console.log('props',props); 	// 子传父     const handleClick = (msg:string) => {       props.changeMsg(msg);     };     return (         <View>             <Text>{props.msg}</Text>             <Button onClick={()=>{handleClick('77777')}}>测试</Button>         </View>     ); };`

#### 获取DOM

**vue**

javascript

复制代码

`this.$refs['ref']`

react

typescript

复制代码

`// 声明ref     const domRef = useRef<HTMLInputElement>(null); // 通过点击事件选择input框 const handleBtnClick = ()=> {      domRef.current?.focus();      console.log(domRef,'domRef') } return(         <View className='home'>             <View className='box'>                 <Input ref={domRef} type="text" />                 <button onClick={handleBtnClick}>增加</button>             </View>         </View>     )`

#### 列表渲染

vue

html

复制代码

`<div v-for="(item, index) in mealList" :key="index"> 	{{item}} </div>`

react

typescript

复制代码

`//声明对象类型   type Coordinates = {     name:string,     age:number   }; 	// 对象   let [userState, setUserState] = useState<Coordinates>({ name: 'John', age: 30 }); 	// 数组   let [list, setList] = useState<Coordinates[]>([{ name: '李四', age: 30 }]); // 如果你的 => 后面跟了一对花括号 { ，那你必须使用 return 来指定返回值！ const listItem = list.map((oi)=>{     return <View key={oi.age}>{oi.name}</View>   }); return (       {         list.map((oi)=>{           return <Text className='main-list-title' key={oi.age}>{oi.name}</Text>         })       }       <View>{ listItem }</View>     </View>   )`

#### 条件渲染

#### 计算属性

vue

javascript

复制代码

`computed: {     userinfo() {       return this.$store.state.userinfo;     },   },`

react

typescript

复制代码

`const [serverUrl, setServerUrl] = useState('https://localhost:1234'); let [age, setAge] = useState(2); const name = useMemo(() => {         return serverUrl + " " + age; }, [serverUrl]); console.log(name) // https://localhost:1234 2`

#### 监听器

vue

javascript

复制代码

`watch: {     // 保证自定义菜单始终显示在页面中     customContextmenuTop(top) {       ...相关操作     }   },`

react

typescript

复制代码

`import { useEffect, useState } from 'react'; export default function home() {     const [serverUrl, setServerUrl] = useState('https://localhost:1234');     const [age, setAge] = useState(2);    /**      * useEffect第二个参数中所传递的值才会进行根据值的变化而出发;      * 如果没有穿值的话,就不会监听数据变化      */     useEffect(()=>{         if (age !== 5) {             setAge(++age)         }     },[age])     useEffect(()=>{         if(serverUrl !== 'w3c') {             setServerUrl('w3c');         }     },[serverUrl])     return(78) }`

### 总结

从上面的方法示例我们可以得出一个结论：在其他框架（自己会的）中常用到的方法或者场景进行针对性的学习即可。

这样的好处是你能快速的上手开发，然后在实际开发场景中遇到解决不了的问题再去查文档或者百度。

这只是我的一点小小的发现，哈哈哈。。。

如果对你有感触的话，可以尝试一下这个方法；我觉得还是很不错的

注意：react推荐函数式组件开发，不推荐类组件开发，我在上面没有说明，大家也可以去文档看看，类组件和函数组件还是有很大差别的，如：函数组件没有生命周期，一般使用监听来完成的，监听的使用方法还是有所不同，大家可以具体的去试试，我在这儿也是告诉大家一些方法；具体去学了才是你的。

为了方便自己学习记录，以及给大家提供思路，我下期给大家带来 **vite + ts + react的搭建**