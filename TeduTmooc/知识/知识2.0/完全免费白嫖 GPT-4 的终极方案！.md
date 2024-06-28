> 原文链接：[icloudnative.io/posts/compl…](https://icloudnative.io/posts/completely-free-to-use-gpt4/ "https://icloudnative.io/posts/completely-free-to-use-gpt4/")

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ea3c52838af4d3c9fb80b8efc1c5f74~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

GPT-4 目前是世界上最强的多模态大模型，能力甩 GPT-3.5 好几条街。

大家都希望早日用上 GPT-4，不过目前体验 GPT-4 的渠道非常有限，要么就是开通 ChatGPT 尊贵的 Plus 会员，即使你开了会员，也是有限制的，**每 3 小时只能发送 25 条消息。。。**

要么就去 OpenAI 官网申请 GPT-4 的 API，但是目前申请到 API 的小伙伴非常少，你以为申请到 API 就可以用了吗？GPT-4 的 API 价格超级无敌贵，**是 GPT-3.5 价格的 30 倍**，你敢用吗？😄

然而，但是，既然我写了这篇文章，肯定是要告诉那一个**惊天大幂幂**的！

现在完全免费白嫖 GPT-4 的机会来了，不仅可以白嫖，还可以直接作为 API 来调用！

不仅能够作为 API 调用，我还接入了公众号给大家白嫖，你说气人不气人？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39714008599646edb562805cc0a002c0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

下面言归正传，开始**手把手教大家如何免费白嫖 GPT-4**。

## gpt4free-ts 介绍

[GPT4Free](https://github.com/xtekky/gpt4free "https://github.com/xtekky/gpt4free") 大家应该都知道吧？它上线几周就在 GitHub 上揽收了接近 4w 的 Star。原因就在于其提供了对 GPT-4 及 GPT-3.5 免费且几乎无限制的访问。该项目通过对各种调用了 OpenAI API 网站的第三方 API 进行逆向工程，达到使任何人都可以免费访问该流行 AI 模型的目的。

这就相当于什么？**假设地主家有一个粮仓，你往他家的粮仓偷偷插了一根管子，不停地向外抽米，他全然不知，所以你也不用交钱，一切费用由地主承担**。

现在**接入 GPT-4 的第三方网站就相当于那个地主**，懂了吧？

但是这个项目并没有封装 API，而且目前也不太能用了。

作为开发者，我们想要的肯定是 API 啊！这就要提到今天的主角了：[gpt4free-ts](https://github.com/xiangsx/gpt4free-ts "https://github.com/xiangsx/gpt4free-ts")

这个项目是用 TypeScript 写的，相当于 GPT4Free 的 TypeScript 版本，但是更方便部署，而且封装了 API，简直就是开发者的福音，就他了！

这个项目向多个地主家的粮仓插了管子，其中最强大的地主就是 [forefront.ai](https://chat.forefront.ai/ "https://chat.forefront.ai/")，这个地主家的粮仓里就包含了 GPT-4 这个香饽饽，而且还有 Claude，就嫖他了！

除了 forefront 之外，它接的粮仓还挺多的。。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b832935102a146e39a377e0d0cf4c57b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 大批量注册临时邮箱

forefront 的 GPT-4 模型是有限制的，**每个账号每 3 小时内只能发送 5 条消息**。

所以接下来需要用到一个非常神奇的服务叫 [RapidAPI](https://rapidapi.com/calvinloveland335703-0p6BxLYIH8f/api/temp-mail44 "https://rapidapi.com/calvinloveland335703-0p6BxLYIH8f/api/temp-mail44")。**你可以通过这个 API 来获取无穷无尽的临时邮箱，然后再用这些无穷无尽的临时邮箱去注册无穷无尽的 forefront 账号。**

这么一说，你是不是就悟了？哈哈哈

首先你需要在这里注册一个账号并登录：**[rapidapi.com/calvinlovel…](https://rapidapi.com/calvinloveland335703-0p6BxLYIH8f/api/temp-mail44 "https://rapidapi.com/calvinloveland335703-0p6BxLYIH8f/api/temp-mail44")**

然后需要在 Pricing 页面开启订阅：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d132882bac94ba8b5ef87ab516e3652~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

一般情况下订阅免费套餐即可，一天可以调用 100 次。

如果你有更高的需求，可以考虑订阅更高级的套餐（比如你的用户数量特别多）。

订阅完了之后，你就能看到 API Key 了。这个 Key 我们后面会用到。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fb1011ab1294c4fafcaf110ae0a6005~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## Sealos 云操作系统介绍

单机操作系统大家应该都知道吧？Windows、macOS、Linux 这些都属于单机操作系统，为什么叫单机操作系统呢？因为他的内存啊，CPU 啊，都在一台机器上，你不可能用其他机器的内存和 CPU。

那么什么是云操作系统呢？就是**把一群机器的 CPU 和内存看成一个整体**，然后给用户提供一个交互界面，用户可以通过这个交互界面来操作所有的资源。

懂 K8s 的玩家可能要说了：这个我懂，K8s 就可以！

如果我们的目标愿景是一个云操作系统，**K8s 充其量只能是这个云操作系统的内核**，就像 Linux 内核一样。完整的云操作系统需要一个像 Windows 和 Ubuntu 操作系统那样的交互界面，也就是**操作系统发行版**。

**对于云操作系统来说，Sealos 就是那个发行版。**

> 链接：**[cloud.sealos.io](https://cloud.sealos.io "https://cloud.sealos.io")**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be0d83f70f4f45188bfd579e019fc3fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

有人可能会把云操作系统理解成“**Web 界面**”，但其实不是，Sealos 云操作系统完全是类似于 Windows 和 macOS 桌面的那种逻辑，并不是 Web 界面。我只需要点几下鼠标，一个应用就装好了，老夫并不知道什么容器什么 K8s。

数据库也一样，小鼠标一点，一个分布式数据库就装好了。

我知道，这时候云原生玩家要坐不住了，您别着急，看到桌面上的终端了没？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01ed93830774437b9965cf03f5f6ce4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

终端只是这个云操作系统中的一个 App 而已。同理，**容器管理界面仍然可以作为云操作系统的 App，我管你是 Kubernetes Dashboard、Rancher、KubeSphere 还是 Kuboard，都可以作为 App 装在这个云操作系统中**。这时候对于云原生专家而言，仍然可以命令行咔咔秀操作，也可以通过各种管理界面来管理容器。

云操作系统嘛，就是要什么人都能用才行，**不管你是什么角色，都能在这个操作系统里找到你想要的 App 去完成你的使命**。

## 安装 gpt4free-ts

接下来才是这篇文章的重头戏。

我要教大家如何**在 Sealos 中点几下鼠标就能安装一个 gpt4free-ts 集群**。

没错，就是 gpt4free-ts 集群。

什么叫集群？就是说我要运行一群 gpt4free-ts 实例，然后前面加一个负载均衡作为对外的 API 入口。

下面的步骤非常简单，**楼下的老奶奶都会，是真的，当时我就在楼下看她操作**。

首先进入 Sealos 云操作系统的界面：\*\*[cloud.sealos.io\*\*。](https://cloud.sealos.io**%E3%80%82 "https://cloud.sealos.io**%E3%80%82")

然后打开桌面上的应用管理 App：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4b57cbc90a94b8da4178221caf3bd61~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

点击「新建应用」：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acfc2a2371604e6f8a1eca5768cb75ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

在启动参数中，按照以下方式进行设置：

-   应用名称随便写，比如 gpt4free。
-   镜像名称是：**xiangsx/gpt4free-ts:latest**
-   CPU 和内存需要根据应用的实际情况来填写。这个应用运行之后默认会启动两个 Chrome 浏览器来模拟登录 forefront，每次对话会从里面取一个账号来使用，次数用完了会自动注册新账号（因为每个账号每 3 小时只能发送 5 条信息）。**我们可以通过环境变量来修改启动的浏览器数量，所以需要根据你的浏览器数量来确定 CPU 和内存。** 我自己把浏览器数量设置为 3，所以需要的内存和 CPU 比较多（后面会告诉你怎么设置环境变量）。
-   实例数根据自己的实际需求填写，我需要接入公众号，粉丝比较多，一个实例才 3 个账号（因为我一个实例跑了 3 个浏览器），根本不够用，所以我开了 3 个实例。
-   容器暴露端口指定为 3000。
-   打开外网访问。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3885b54af7e419bbd46a26ba8159415~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

继续往下，展开高级设置，点击「编辑环境变量」：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17389913d0ea413fa9041d2535527cf6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

填入以下环境变量：

bash

复制代码

`rapid_api_key=<rapid_api_key> DEBUG=0 POOL_SIZE=3`

> ⚠️注意：请将 <rapid\_api\_key> 替换为你自己的 key。

其中 POOL\_SIZE 就是浏览器数量，每个浏览器会登录一个 forefront 账号。你可以根据自己的需要调整浏览器数量，并根据浏览器数量调整 CPU 和内存。**如果你不知道怎么调整合适，建议无脑跟着本文操作。**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/480f09beeb33448a86b47de914f834d0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

继续，点击「新增存储卷」：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44bba47f5b7941d1927883423516f10e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

容量只需 1G，挂载路径设置为 `/usr/src/app/run`：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b383a96db526491b82e079e2bb60c1e3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> 这个存储的作用是为了保存已登录的账号。已经注册的账号 3 个小时以后还可以重新使用，不用再浪费邮箱去注册新账号。

最终点击右上角的「部署应用」，即可完成部署：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92383c08791f4a37b986087511a8e38c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

最终要等待所有的实例都处于 Running 状态，才算是启动成功了。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb6961a7fde413192571db3eefdb517~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

点击右边的复制按钮，便可复制 API 的外网地址：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09817bfaeef74d6dafb7e66b2a1595b7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

我们来测一下这个 API：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f9ab1d538094c82969e2287db54ca67~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

完美！打完收工！

## 接入微信公众号

什么？你想将这个 API 接入自己的公众号？换个形式吧！直接来看直播吧，我们会通过直播活动手把手教你如何将 GPT-4 免费接入公众号、网页等各种前端。

活动链接：**[forum.laf.run/d/684](https://forum.laf.run/d/684 "https://forum.laf.run/d/684")**

当然，直播过程不会直接教你如何接入公众号，而是“**授你🫵以渔**”，告诉你如何使用 [Laf](https://laf.run "https://laf.run") 来通过各种姿势调用这个 API，最终你也接入公众号也罢，网页前端也罢，那都不是事儿~