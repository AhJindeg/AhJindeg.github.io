> 记录、分享IT相关知识和见闻！
> 
> 想要了解更多软件相关知识的朋友！
> 
> 记得右上角添加【关注】，支持一下！

* * *

[原文链接：24个强大的HTML属性，每个资深Web工程师都应该掌握！](https://www.toutiao.com/article/7219684570890011140/?log_from=f6fef2fed5acf8_1682672364012 "https://www.toutiao.com/article/7219684570890011140/?log_from=f6fef2fed5acf8_1682672364012")

HTML 属性非常多，除了基本的一些属性外，还有很多很有用的功能性特别强大的属性；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb2b554ef9a44d58fe296294fb3045b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

本文将介绍24个强大的HTML属性，这些属性可以让你的网站更加动态和交互，让用户感到更加舒适和愉悦。

让我们一起来探索这24个强大的HTML属性吧！

# 1\. Accept

Accept属性是用于指定浏览器可以处理的MIME类型的列表。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fea4203dbeef44819da43fc6b3d7c246~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> MIME类型是一种标识文档类型的标准，
> 
> 例如text/html表示HTML文档，image/jpeg表示JPEG图像等等。

通过在HTTP请求头中包含Accept属性，浏览器可以告诉服务器它可以接受哪些MIME类型的响应。服务器可以根据这个信息来选择最合适的响应类型并返回给浏览器。Accept属性的值是一个逗号分隔的MIME类型列表，可以使用通配符来表示一类MIME类型，例如text/\*表示所有文本类型。

# 2\. Autofocus

Autofocus属性是用于在页面加载时自动将焦点设置到指定的元素上。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e896a486b05e4650aa8af5f387ffb52a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> Autofocus属性可以应用于多种HTML元素，例如文本框、按钮、下拉列表等等。
> 
> 在HTML5中，Autofocus属性可以省略属性值，表示将焦点设置到第一个具有Autofocus属性的元素上。

当页面加载完成后，如果存在Autofocus属性的元素，浏览器会自动将光标聚焦在该元素上，使用户可以直接与该元素进行交互，而无需手动点击或使用Tab键切换焦点。

# 3\. Inputmode

Inputmode属性是用于指定文本框中输入的内容类型的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56d89f6d0e91450c8637f000a434c908~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

它可以帮助浏览器更好地优化输入体验，例如在移动设备上自动弹出合适的虚拟键盘。

> Tips：
> 
> Inputmode属性的值可以是以下几种类型：
> 
> -   text：默认值，表示输入任意文本。
>     
> -   none：表示不需要输入任何内容。
>     
> -   tel：表示输入电话号码。
>     
> -   url：表示输入URL地址。
>     
> -   email：表示输入电子邮件地址。
>     
> -   numeric：表示输入数字。
>     
> -   decimal：表示输入带小数点的数字。
>     
> -   search：表示输入搜索关键字。
>     

在不同的浏览器中，Inputmode属性的支持程度可能会有所不同。

因此，在使用Inputmode属性时，需要进行兼容性测试。

# 4\. Pattern

Pattern属性是用于指定文本框中输入内容的正则表达式模式。它可以帮助浏览器验证用户输入的内容是否符合指定的格式要求。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28a1caffe86e462a8f1e47d875573a0b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果用户输入的内容不符合Pattern属性指定的正则表达式模式，浏览器会显示一个默认的错误提示信息。

> Tips：
> 
> -   Pattern属性的值必须是一个有效的正则表达式。
>     
> -   Pattern属性只能应用于文本框、文本域和密码框等可输入文本的元素。
>     
> -   Pattern属性不会阻止用户输入非法字符，但会在提交表单时验证输入内容是否符合指定的格式要求。
>     
> -   Pattern属性的错误提示信息可以使用title属性自定义。
>     

Pattern属性通常与required属性一起使用，以确保用户输入的内容符合指定的格式要求且不为空。例如，可以使用Pattern属性来验证用户输入的邮政编码、电话号码、电子邮件地址等等。

# 5\. Required

Required属性是用于指定表单元素是否必填的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c5bba01f4304ed7bda019fbba5dd354~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果一个表单元素设置了Required属性，那么在提交表单时，如果该元素的值为空，浏览器会阻止表单的提交，并提示用户必须填写该字段。

> Tips：
> 
> -   Required属性只能应用于表单元素，不能应用于其他HTML元素。
>     
> -   Required属性不会验证用户输入的内容是否符合指定的格式要求，只会验证该元素是否为空。
>     
> -   Required属性不会阻止用户提交空格或空白字符，因此需要使用其他方式来验证用户输入的内容是否有效。
>     
> -   Required属性可以与Pattern属性一起使用，以验证用户输入的内容是否符合指定的格式要求。
>     
> -   Required属性可以与Autofocus属性一起使用，以确保用户在进入表单页面时，焦点自动聚焦在必填字段上。
>     

Required属性通常与表单元素的type属性一起使用，例如文本框、下拉列表、单选框、复选框等等。

# 6\. Autocomplete

 Autocomplete属性是用于指定表单元素是否启用自动完成功能的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5beedb32bec4e3a91bc9102887e0455~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

自动完成功能可以帮助用户更快地填写表单，减少输入错误的可能性。 

> Tips：
> 
> -   on：默认值，表示启用自动完成功能。
>     
> -   off：表示禁用自动完成功能。
>     
> -   name：表示使用表单元素的name属性作为自动完成的关键字。
>     
> -   email：表示使用用户最近输入的电子邮件地址作为自动完成的关键字。
>     
> -   username：表示使用用户最近输入的用户名作为自动完成的关键字。
>     
> -   current-password：表示使用用户最近输入的密码作为自动完成的关键字。
>     
> -   new-password：表示使用用户最近输入的新密码作为自动完成的关键字。
>     
> -   tel：表示使用用户最近输入的电话号码作为自动完成的关键字。
>     
> -   address-level1：表示使用用户最近输入的国家或地区名称作为自动完成的关键字。
>     
> -   address-level2：表示使用用户最近输入的省份或州名称作为自动完成的关键字。
>     
> -   address-level3：表示使用用户最近输入的城市或地区名称作为自动完成的关键字。
>     
> -   address-level4：表示使用用户最近输入的街道名称作为自动完成的关键字。
>     
> -   country：表示使用用户最近输入的国家名称作为自动完成的关键字。
>     

在不同的浏览器中，Autocomplete属性的支持程度可能会有所不同。因此，在使用Autocomplete属性时，需要进行兼容性测试。

# 7\. Multiple

Multiple属性是用于指定表单元素是否允许多选的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69e12d5d44ec498fa2555602363d4b29~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

Multiple属性通常应用于下拉列表、文件上传和复选框等表单元素。

> Tips：
> 
> -   Multiple属性只能应用于下拉列表、文件上传和复选框等表单元素，不能应用于单选框和文本框等表单元素。
>     
> -   Multiple属性的值必须是布尔值，即true或false。
>     
> -   Multiple属性的默认值为false，表示不允许多选。
>     
> -   Multiple属性的值为true时，下拉列表会显示为可多选的列表框，复选框会显示为可多选的复选框列表，文件上传会允许用户选择多个文件。
>     
> -   在使用Multiple属性时，需要在后台程序中对多选的值进行处理，例如使用数组来存储多选的值。
>     

如果一个表单元素设置了Multiple属性，那么用户可以选择多个选项，而不仅仅是单选。 

# 8\. Download

Download属性是用于指定链接下载文件时的文件名的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5bf26da60664c1ca053990087c47010~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果一个链接设置了Download属性，那么当用户点击该链接下载文件时，浏览器会将文件保存到本地，并使用Download属性指定的文件名来命名文件。

> Tips：
> 
> -   Download属性的值可以是任意字符串，表示下载文件时使用的文件名。
>     
> -   Download属性只能应用于标签中，不能应用于其他HTML元素。
>     
> -   Download属性不会改变文件的实际名称，只会在下载时使用指定的文件名。
>     
> -   Download属性的值可以是动态生成的，例如使用JavaScript来生成文件名。
>     
> -   在使用Download属性时，需要确保下载的文件是合法的，不侵犯他人的版权和隐私。
>     

Download属性通常应用于标签中，用于下载PDF、图片、音频、视频等文件。

# 9\. Contenteditable

HTML中的Contenteditable属性是用于指定元素是否可编辑的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dbb9a51b72645929c07e1cc8a687beb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> -   Contenteditable属性的值可以是true、false或inherit。
>     
> -   Contenteditable属性的默认值为false，表示元素不可编辑。
>     
> -   Contenteditable属性的值为true时，元素可编辑。
>     
> -   Contenteditable属性的值为inherit时，元素的可编辑性继承自父元素。
>     
> -   Contenteditable属性不会改变元素的默认行为，例如标签仍然可以跳转到其他页面。
>     
> -   在使用Contenteditable属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。
>     

如果一个元素设置了Contenteditable属性，那么用户可以在该元素中输入文本、插入图片、修改样式等等。Contenteditable属性通常应用于

、

、等元素，用于实现富文本编辑器、可编辑的表格等功能。

# 10\. Readonly

HTML中的Readonly属性是用于指定表单元素是否只读的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b26a986410704c2ebbfd1b25518a8531~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> -   Readonly属性的值必须是布尔值，即true或false。
>     
> -   Readonly属性的默认值为false，表示表单元素可编辑。
>     
> -   Readonly属性的值为true时，表单元素只读。
>     
> -   Readonly属性不会阻止用户通过JavaScript修改表单元素的值。
>     
> -   Readonly属性不同于Disabled属性，Disabled属性会禁用表单元素，使其无法提交数据。
>     
> -   在使用Readonly属性时，需要在后台程序中对只读的值进行处理，例如使用隐藏域来存储只读的值。
>     

如果一个表单元素设置了Readonly属性，那么用户可以看到该元素的值，但无法修改该元素的值。Readonly属性通常应用于文本框、下拉列表、日期选择器等表单元素，用于展示数据或防止用户修改数据。

# 11\. Hidden

Hidden属性是用于指定元素是否隐藏的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/619e4f2215224fd492d8315cb8f516a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> -   Hidden属性的值必须是布尔值，即true或false。
>     
> -   Hidden属性的默认值为false，表示元素不隐藏。
>     
> -   Hidden属性的值为true时，元素隐藏。
>     
> -   Hidden属性不同于CSS的display:none属性，display:none属性会将元素从页面中完全移除，无法通过JavaScript等方式访问该元素。
>     
> -   在使用Hidden属性时，需要在后台程序中对隐藏的值进行处理，例如使用隐藏域来存储隐藏的值。
>     

如果一个元素设置了Hidden属性，那么该元素将不会在页面中显示，但仍然存在于页面中，可以通过JavaScript等方式访问该元素。Hidden属性通常应用于表单元素、按钮、图像等元素，用于在不影响页面布局的情况下，传递数据或控制页面行为。

# 12\. Spellcheck

HTML中的Spellcheck属性是用于指定元素是否启用拼写检查的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb0ad744beec4c4e8960089da3d3dbcb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> -   Spellcheck属性的值必须是布尔值，即true或false。
>     
> -   Spellcheck属性的默认值为false，表示元素不启用拼写检查。
>     
> -   Spellcheck属性的值为true时，元素启用拼写检查。
>     
> -   Spellcheck属性的支持程度因浏览器而异，不同浏览器可能会有不同的拼写检查算法和字典。
>     
> -   在使用Spellcheck属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。
>     

如果一个元素设置了Spellcheck属性，那么用户在该元素中输入文本时，浏览器会自动检查拼写错误，并在错误单词下方显示红色波浪线。Spellcheck属性通常应用于文本框、文本域等元素，用于提高用户输入的准确性。

# 13\. Translate

HTML中的Translate属性是用于指定元素是否应该被翻译的属性。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91d252cca0e94c8ca52d25d24f366f8b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> -   Translate属性的值必须是布尔值，即yes或no。
>     
> -   Translate属性的默认值为yes，表示元素需要翻译。
>     
> -   Translate属性的值为no时，元素不需要翻译。
>     
> -   Translate属性的支持程度因浏览器而异，不同浏览器可能会有不同的翻译算法和字典。
>     
> -   在使用Translate属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。
>     

如果一个元素设置了Translate属性，那么浏览器会根据该属性的值来决定是否翻译该元素的内容。Translate属性通常应用于网站的多语言版本中，用于控制哪些元素需要翻译，哪些元素不需要翻译。 

# 14\. Loading

HTML中的`loading`属性是一个新的属性，它可以用于指定浏览器在加载资源时的优先级。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fae2a03021a54812b74a57ad39f0f0a3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

该属性可以应用于`<img>`、`<iframe>`、`<script>`、`<link>`和`<audio>`等标签上。

> Tips：
> 
> -   `lazy`：表示资源应该在页面加载后延迟加载。这是默认值。
>     
> -   `eager`：表示资源应该在页面加载时立即加载。
>     
> -   `auto`：表示浏览器应该自行决定何时加载资源。
>     

`loading`属性并不是所有浏览器都支持的，因此在使用时需要进行兼容性检查。

# 15\. Onerror

`onerror`是一个JavaScript事件处理程序， JavaScript错误时触发。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/debe540ed1ba4b8b8cedd871374646a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

可以将`onerror`事件处理程序添加到`window`对象上，以便在全局范围内捕获JavaScript错误。

> Tips：
> 
> -   `message`：错误消息。
>     
> -   `source`：发生错误的脚本URL。
>     
> -   `lineno`：发生错误的行号。
>     
> -   `colno`：发生错误的列号。
>     
> -   `error`：包含有关错误的详细信息的Error对象。
>     

 `onerror`事件处理程序只能捕获未被其他错误处理程序捕获的JavaScript错误。

最好在代码中使用try-catch语句来捕获和处理JavaScript错误。

# 16\. Poster

`poster`是HTML5中`<video>`标签的一个属性，用于指定在视频加载之前和播放之前显示的图像。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3abaffe9761f4a1b936a48568876c58c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> Tips：
> 
> `poster`属性只适用于`<video>`标签，而不适用于`<audio>`标签。

它通常用于提供视频的预览图像或缩略图。

# 17\. Controls

`controls`是HTML5中`<video>`和`<audio>`标签的一个属性，用于指定是否显示媒体播放器的控件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c35b556560fd49a2896124d4d79afa6c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果将`controls`属性设置为`controls`，则会在媒体播放器上显示控件，例如播放/暂停按钮、音量控制、进度条等。

xml

复制代码

`` <!DOCTYPE html> <html> <head> <title>Controls Example</title> </head> <body> <video width="320" height="240" controls> <source src="video.mp4" type="video/mp4"> <source src="video.ogg" type="video/ogg"> Your browser does not support the video tag. </video> </body> </html>` ``

`controls`属性只适用于支持HTML5的浏览器。如果浏览器不支持HTML5，则不会显示控件。

# 18\. Autoplay

`autoplay`是HTML5中`<video>`和`<audio>`标签的一个属性，用于指定媒体是否应在页面加载时自动播放。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee49571dc7454f7a85c640b119929eca~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果将`autoplay`属性设置为`autoplay`，则媒体将在页面加载时自动播放。

xml

复制代码

`` <!DOCTYPE html> <html> <head> <title>Autoplay Example</title> </head> <body> <video width="320" height="240" autoplay> <source src="video.mp4" type="video/mp4"> <source src="video.ogg" type="video/ogg"> Your browser does not support the video tag. </video> </body> </html>` ``

自动播放可能会对用户体验产生负面影响，因此在使用`autoplay`属性时需要慎重考虑。在某些情况下，浏览器可能会阻止自动播放，例如在移动设备上，用户必须首先与页面进行交互，才能允许自动播放。

# 19\. Loop

`loop`是HTML5中`<video>`和`<audio>`标签的一个属性，用于指定媒体是否应在播放结束后循环播放。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68f31ad7fd9541fe95268038b23c5e28~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果将`loop`属性设置为`loop`，则媒体将在播放结束后循环播放。

xml

复制代码

`` <!DOCTYPE html> <html> <head> <title>Loop Example</title> </head> <body> <video width="320" height="240" loop> <source src="video.mp4" type="video/mp4"> <source src="video.ogg" type="video/ogg"> Your browser does not support the video tag. </video> </body> </html>` ``

循环播放可能会对用户体验产生负面影响，因此在使用`loop`属性时需要慎重考虑。

# 20\. Cite

`cite`是HTML中的一个全局属性，可以用于指定引用的来源。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c8c01413c5d45de97e4d8bd2f8a32ec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

`cite`属性的值应该是一个URL，指向引用的来源。

> Tips：
> 
> `cite`属性可以应用于`<blockquote>`、`<q>`、`<del>`、`<ins>`等标签上。

如果引用的来源不是一个URL，可以将`cite`属性的值设置为一个描述引用的字符串。

xml

复制代码

`<!DOCTYPE html> <html> <head> <title>Cite Example</title> </head> <body> <blockquote cite="https://www.example.com/quote"> This is a quote from an external source. </blockquote> <q cite="https://www.example.com/quote"> This is a short quote from an external source. </q> <del cite="https://www.example.com/deleted"> This text has been deleted from an external source. </del> <ins cite="https://www.example.com/inserted"> This text has been inserted from an external source. </ins> </body> </html>`

`cite`属性并不会自动创建链接，因此如果需要创建链接，需要使用`<a>`标签，并将`href`属性设置为`cite`属性的值。

# 21\. Datetime

`datetime`是HTML中`<time>`标签的一个属性，用于指定日期和时间。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0a0993bcf0e4d18bfa0c886bae7d4bf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

`datetime`属性的值应该是一个有效的日期和时间格式，例如`YYYY-MM-DDThh:mm:ss`。

`datetime`属性并不会自动格式化日期和时间，因此需要使用JavaScript或其他工具来格式化日期和时间。

# 22\. Async

`async`是HTML中`<script>`标签的一个属性，用于指定脚本是否应该异步加载。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8601c74e280e4f0fa971b8c9aac89c58~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果将`async`属性设置为`async`，则脚本将异步加载，不会阻止页面的解析和渲染。

异步加载的脚本可能会在页面的其他部分加载之前执行，因此需要谨慎使用。如果脚本依赖于页面的其他部分，可能会导致错误。

# 23\. Defer

`defer`是HTML中`<script>`标签的一个属性，用于指定脚本是否应该延迟加载。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4567803b9164b79ad6a73283ec83724~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果将`defer`属性设置为`defer`，则脚本将延迟加载，直到页面解析完成后再执行。

xml

复制代码

`<!DOCTYPE html> <html> <head> <title>Defer Example</title> <script defer src="script.js"></script> </head> <body> <p>This is a paragraph.</p> </body> </html>`

在上面的示例中，我们将`defer`属性设置为`defer`，这将使脚本延迟加载。在这种情况下，脚本将在页面解析完成后执行，不会阻止页面的加载。

# 24\. Draggable

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32fd9436dbbc45a7887fb505da0f74ce~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

`Draggable` 是 HTML5 中的一个属性，它允许用户通过拖动元素来移动它们。当一个元素被设置为 `draggable` 时，用户可以通过鼠标或触摸屏幕来拖动该元素。在拖动元素时，会触发一系列事件，如 `dragstart`、`drag` 和 `dragend`，这些事件可以用来实现拖放功能。

如果你是一位专业的前端工程师，想必很多属性你都用过！

以上分享的24个强大的属性，你是否都在项目中使用过呢？

* * *

⛱ **以上就是今天为大家带来的分享！**

⛱ **如果文章对你有益；**

⛱ **请记得【评论、收藏、转发、点赞】！**

⛱ **创作不易，且读且珍惜，喜欢我的文章；**

⛱ **喜欢我的文章，记得添加【关注】哦！**

⛱ **再次感谢您的阅读。**

#### 软件技术交流群，可以添加我的V：erya\_1024

* * *

**❀ 长按【点赞】会有惊喜哦！❀**

~End~