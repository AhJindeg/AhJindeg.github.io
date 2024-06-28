import{_ as e,o as i,c as l,a as n}from"./app-a8d-X_GH.js";const t={},d=n(`<h4 id="blob" tabindex="-1"><a class="header-anchor" href="#blob" aria-hidden="true">#</a> <code>Blob</code></h4><p><code>Blob</code> 全名是(<code>Binary Large Object</code>) 翻译过来就是 <em>二进制类型的大对象</em> <code>Blob</code> 对象表示一个不可变、原始数据的类文件对象，一个 <code>Blob</code> 对象就是一个包含有只读原始数据的类文件对象。 <code>Blob</code> 对象中的数据并不一定得是 <code>js</code> 中的原生形式。 <code>File</code> 接口基于 <code>Blob</code> ，继承了 <code>Blob</code> 的功能,并且扩展支持了用户计算机上的本地文件。它的存在，允许我们可以通过 <code>JS</code> 直接操作二进制数据。还可以通过 <code>Blob</code> 设置二进制数据的 <code>MIME</code> 类型。</p><h5 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h5><p><code>Blob</code> 对象含有两个属性：<code>size</code> 和 <code>type</code> 。</p><ul><li><p><code>size</code> 表示数据的大小(单位是字节)</p></li><li><p><code>type</code> 表明该 <code>Blob</code> 对象所包含数据的 <code>MIME</code> 类型。如果类型未知，则该值为空字符串 <img src="https://mmbiz.qpic.cn/sz_mmbiz_jpg/yRIqhMamWtTPobRicoyXsjYXOUcnPPeYVnc5iaxpT5yl7GPx28yUHxibic0D7jibWbh9EmasdkTWexDQSPk9vQTC9pQ/640?wx_fmt=other&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片"></p></li></ul><h5 id="创建-blob" tabindex="-1"><a class="header-anchor" href="#创建-blob" aria-hidden="true">#</a> 创建 <code>Blob</code></h5><ul><li><p>通过构造函数 <code>var aBlob = new Blob( array, options );</code></p><p>创建一个装填DOMString对象的Blob对象</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let domStr = &#39;&lt;div&gt; my name is constRen &lt;/div&gt;&#39;; // 一个包含 DOMString 的数组
let blob = new Blob([domStr], { type: &#39;text/html&#39; });  // 得到 blob
console.log(&#39;blob&#39;,blob);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个装填ArrayBuffer对象的Blob对象</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let abf = new ArrayBuffer(6);
let blob = new Blob([abf], { type: &#39;text/plain&#39; });
console.log(&#39;blob&#39;, blob);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个装填ArrayBufferView对象的Blob对象</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let typedArray = new Int8Array(8);
let blob = new Blob([typedArray], { type: &#39;text/plain&#39; });
console.log(&#39;blob&#39;, blob);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>type</code>:默认值为 <code>&quot;&quot;</code>，它代表了将会被放入到 <code>blob</code> 中的数组内容的 <code>MIME</code> 类型。</p></li><li><p><code>endings</code> —— 默认值为 <code>&quot;transparent&quot;</code>，用于指定包含行结束符 <code>\\n</code> 的字符串如何被写入。 它是以下两个值中的一个：</p></li><li><p><code>array</code>：是一个由 <code>ArrayBuffer</code>，<code>ArrayBufferView</code>，<code>Blob</code>，<code>DOMString(DOMStrings会被编码为UTF-8)</code>等对象构成的 <strong>数组</strong>。</p></li><li><p><code>options</code> ：一个可选的对象（用于设置Blob对象的属性（如：MIME类型）），包含以下两个属性</p></li></ul><ol><li><p><code>native</code>：代表行结束符会被更改为适合宿主操作系统文件系统的换行符</p></li><li><p><code>transparent</code>，代表会保持 <code>blob</code> 中保存的结束符不变</p></li></ol><ul><li><p>通过<code>Blob.slice()</code> 此方法返回一个新的Blob对象，包含了原Blob对象中指定范围内的数据</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>Blob.slice(start:number, end:number, contentType:string)\`;
如：let newData = blob.slice(0, 5, &#39;text/plain&#39;);  // 注意 这儿的text/plain 不再是 一个对象了哦！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>start</code> ：开始索引，默认为0，如果传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说，<code>-10</code> 将会是 <code>Blob</code> 的倒数第十个字节。如果传入的 <code>start</code> 的长度大于源 <code>Blob</code> 的长度，那么返回的将会是一个长度为 <code>0</code> 并且不包含任何数据的一个 <code>Blob</code> 对象。</p></li><li><p><code>end</code> ：截取结束索引（不包括end），默认值就是它的原始长度。如果传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说， <code>-10</code> 将会是 <code>Blob</code> 的倒数第十个字节</p></li><li><p><code>contentType</code> ：新 <code>Blob</code> 的 <code>MIME</code> 类型，默认为空字符串 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p></li><li><p>通过<code>canvas.toBlob()</code></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>语法：
canvas.toBlob(callback, type, encoderOptions);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li><li><p><code>callback</code>：回调函数，可获得一个单独的 <code>Blob</code> 对象参数。</p></li><li><p><code>type(可选)</code>：<code>DOMString</code> 类型，指定图片格式，默认格式为<code>image/png</code></p></li><li><p><code>encoderOptions(可选)</code>：<code>Number</code> 类型，值在<code>0与1</code>之间，当请求图片格式为<code>image/jpeg</code>或者<code>image/webp</code>时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。 代码太多不好贴 贴个图片吧 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p></li></ul><p>上面介绍了那么多，其实用得少，下面说说平常开发经常用到的</p><h5 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h5><ul><li><p>分片上传 通过<code>Blob.slice</code>方法，可以将大文件分片，轮循向后台提交各文件片段，即可实现文件的分片上传。代码就不贴了，说下逻辑</p><p>将要上传的 <code>File</code> 对象，根据每片大小对文件进行分片，通过循环上传每片文件</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>  const file = new File([&quot;a&quot;.repeat(1000000)], &quot;test.txt&quot;);

  const chunkSize = 40000;
  const url = &quot;https://xxxxxxx&quot;;

  async function chunkedUpload() {
      for (let start = 0; start &lt; file.size; start += chunkSize) {
          console.log(&#39;start&#39;, start);
          const chunk = file.slice(start, start + chunkSize + 1);
          const fd = new FormData();
          fd.append(&quot;data&quot;, chunk);

          // await fetch(url, { method: &quot;post&quot;, body: fd }).then((res) =&gt;
          //     res.text()
          // );
      }
  }
  chunkedUpload();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><ul><li><p>通过 <code>url</code> 下载文件</p><p>这个相信大家基本都用过吧，通过 <code>window.URL</code> 为 <code>Blob</code> 对象生成一个网络地址，结合 <code>a标签</code> 的 <code>download</code> 属性，可以实现点击 <code>url</code> 下载文件实现如下：</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;/head&gt;
&lt;body&gt;
  &lt;script&gt;
      function imgView(url) {
          const xhr = new XMLHttpRequest();
          xhr.open(&#39;GET&#39;, url);
          xhr.responseType = &#39;blob&#39;;
          xhr.send();
          xhr.onload = function () {
              const fileBlob = xhr.response;
              downLoad(&#39;blob下载&#39;, fileBlob, { type: &#39;image/jpeg&#39; })
          };
      }
      let imgUrl = &#39;https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92f092261bc14e2b90e96035e05656f0~tplv-k3u1fbpfcp-watermark.image?&#39;;
      imgView(imgUrl);

        function downLoad(name, file, type = { type: &#39;application/vnd.ms-excel&#39; }) {
        const blob = new Blob([file], type);
        const link = document.createElement(&#39;a&#39;);
        link.style.display = &#39;none&#39;;
        link.href = URL.createObjectURL(blob);
        link.download = name;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href);
    };
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li><li><p>通过 <code>url</code> 显示图片 <code>img</code> 的 <code>src</code> 属性及 <code>background</code> 的 <code>url</code> 属性，都可以接收图片地址或 <code>base64</code> 来显示图片，那就可以把图片转化为 <code>Blob</code> 对象，生成 <code>URL（URL.createObjectURL(blob)）</code>来显示</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;/head&gt;
&lt;body&gt;
    &lt;img src=&quot;&quot; alt=&quot;&quot;&gt;
    &lt;script&gt;
        function imgView(url) {
            const xhr = new XMLHttpRequest();
            xhr.open(&#39;GET&#39;, url);
            xhr.responseType = &#39;blob&#39;;
            xhr.send();
            xhr.onload = function () {
                const fileBlob = xhr.response;
                console.log(&#39;fileBlob&#39;,fileBlob);
                //将blob转成url地址
                const fileUrl = URL.createObjectURL(fileBlob);
                console.log(&#39;fileUrl&#39;,fileUrl);
                document.querySelector(&#39;img&#39;).setAttribute(&#39;src&#39;, fileUrl)
            };
        }
        let imgUrl = &#39;https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92f092261bc14e2b90e96035e05656f0~tplv-k3u1fbpfcp-watermark.image?&#39;;
        imgView(imgUrl);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li></ul><p>方法</p><ul><li><p><code>slice()</code>：这个上面讲过</p></li><li><p><code>stream()</code>：返回一个能读取 <code>blob</code> 内容的 <code>ReadableStream(可读的字节数据流)</code></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let domStr = &#39;&lt;div&gt; my name is constRen &lt;/div&gt;&#39;;
let blob = new Blob([domStr], { type: &#39;text/html&#39; });
console.log(&#39;blob&#39;, blob);

var buffer = blob.stream();
console.log(&#39;buffer&#39;, buffer);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li><li><p><code>text()</code>：返回一个 <code>Promise</code> 对象且包含 <code>blob</code> 所有内容的 <code>UTF-8</code> 格式的 <code>USVString</code></p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>let domStr = &#39;&lt;div&gt; my name is constRen &lt;/div&gt;&#39;;
let blob = new Blob([domStr], { type: &#39;text/html&#39; });
console.log(&#39;blob&#39;, blob);

var bufferPromise = blob.text();
console.log(&#39;bufferPromise&#39;, bufferPromise);
blob.text().then(text =&gt; {
    console.log(&#39;text&#39;, text);
})


async function fn() {
    var text = await blob.text();
    console.log(&#39;text-async&#39;, text);
};
fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>1683865830988.png</p></li><li><p><code>arrayBuffer()</code>：返回一个 <code>Promise</code> 对象，且包含 <code>blob</code> 所有内容，并在 <code>ArrayBuffer</code> 中以二进制数据的形式呈现</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>  let domStr = &#39;&lt;div&gt; my name is constRen &lt;/div&gt;&#39;;
    let blob = new Blob([domStr], { type: &#39;text/html&#39; });
    console.log(&#39;blob&#39;, blob);

    var bufferPromise = blob.arrayBuffer();

    console.log(&#39;bufferPromise&#39;, bufferPromise);
    
    blob.arrayBuffer().then(buffer =&gt; {
        console.log(&#39;buffer&#39;, buffer);
    })


    async function fn() {
        var buffer = await blob.arrayBuffer();
        console.log(&#39;buffer-async&#39;, buffer);
    };
    fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li></ul><h6 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h6><p><code>Blob</code> 对象是不可改变的。我们不能直接在一个 <code>Blob</code> 中更改数据，都是对一个 <code>Blob</code> 进行分割，从其中创建新的 <code>Blob</code> 对象。这就有点像 <code>js</code> 的字符串，无法更改字符串中的字符，但可以创建新的修改后的字符串</p><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> <code>File</code></h4><p><code>File</code> 基于 <code>Blo</code> ，继承了 <code>Blob</code> 功能并将其扩展为支持用户系统上的文件。说白了就是 <code>File</code> 对象是特殊类型的 <code>Blob</code> 在 <code>js</code> 中，主要有两种方法来获取 <code>File</code> 对象:</p><ol><li><p><code>&lt;input&gt;</code> 元素上选择文件后返回的 <code>FileList</code> 对象;</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;!DOCTYPE html&gt;
 &lt;html lang=&quot;en&quot;&gt;
 &lt;head&gt;
     &lt;meta charset=&quot;UTF-8&quot;&gt;
     &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
     &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
     &lt;title&gt;Document&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
     &lt;input type=&quot;file&quot;&gt;
     &lt;script&gt;
         const myInput = document.querySelector(&#39;input&#39;);
         myInput.onchange = function (e) {
             console.log(&#39; e.target.files&#39;, e.target.files);
         }
     &lt;/script&gt;
 &lt;/body&gt;
 &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>文件拖放操作生成的 <code>DataTransfer</code> 对象;</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code> &lt;!DOCTYPE html&gt;
  &lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
      &lt;meta charset=&quot;UTF-8&quot;&gt;
      &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
      &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;p draggable=&quot;true&quot;&gt;拖动&lt;/p&gt;
      &lt;script&gt;
          const myP = document.querySelector(&#39;p&#39;);
          myP.ondrag = function (e) {
            e.preventDefault();
            console.log(&#39;e&#39;, e.dataTransfer.files);
          }
      &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li></ol><h6 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h6><ol><li><p><code>lastModified(只读)</code>：返回当前 <code>File</code> 对象所引用文件最后修改时间，自 <code>UNIX</code> 时间起始值（1970 年 1 月 1 日 00:00:00 UTC）以来的毫秒数。</p></li><li><p><code>lastModifiedDate(只读)</code>：返回当前 <code>File</code> 对象所引用文件最后修改时间的 <code>Date</code> 对象。</p></li><li><p><code>name(只读)</code>：返回当前 <code>File</code> 对象所引用文件的名字。</p></li><li><p><code>size(只读)</code>：返回文件的大小。</p></li><li><p><code>webkitRelativePath(只读)</code>：返回 <code>File</code> 相关的 <code>path</code> 或 <code>URL</code>(该特性是非标准的，请尽量不要在生产环境中使用它！)</p></li><li><p><code>type(只读)</code>：返回文件的 <code>MIME</code> 类型</p></li></ol><h6 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h6><p><code>File</code> 接口没有定义任何方法，但是它从 <code>Blob</code> 接口继承了以下方法 <code>File.slice(start:number, end:number, contentType:string)</code></p><h4 id="filereader" tabindex="-1"><a class="header-anchor" href="#filereader" aria-hidden="true">#</a> <code>FileReader</code></h4><p><code>FileReader</code> 说直白点就是一个可以读取 <code>Blob</code> 内容的工具</p><h6 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h6><ul><li><p><code>onload</code> ：处理 <code>load</code> 事件。该事件在读取操作完成时触发</p></li><li><p><code>readAsArrayBuffer</code>∶读取指定 <code>Blob</code> 中的内容，完成之后，<code>result</code> 属性中保存的将是被读取文件的 <code>ArrayBuffer</code> 数据对象;</p></li><li><p><code>readAsBinaryString</code>︰读取指定 <code>Blob</code> 中的内容，完成之后，<code>result</code> 属性中将包含所读取文件的原始二进制数据;</p></li><li><p><code>readAsDataURL</code>︰读取指定 <code>Blob</code> 中的内容，完成之后，<code>result</code> 属性中将包含一个<code>data: URL</code> 格式的 <code>Base64</code> 字符串以表示所读取文件的内容。</p></li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>  &lt;!DOCTYPE html&gt;
   &lt;html lang=&quot;en&quot;&gt;
   &lt;head&gt;
       &lt;meta charset=&quot;UTF-8&quot;&gt;
       &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
       &lt;title&gt;Document&lt;/title&gt;
   &lt;/head&gt;
   &lt;body&gt;
       &lt;input type=&quot;file&quot;&gt;
       &lt;script&gt;
           const myInput = document.querySelector(&#39;input&#39;);
           myInput.onchange = function (e) {
             console.log(&#39; e.target.files&#39;, e.target.files);
             const file = e.target.files[0];
             var fileRead = new FileReader();
             // Base64
             fileRead.readAsDataURL(file);
             fileRead.onload = function () {
                console.log(&#39;fileRead.result&#39;, fileRead.result);
             }
           }
       &lt;/script&gt;
   &lt;/body&gt;
   &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><ul><li><code>readAsText</code>∶读取指定 <code>Blob</code> 中的内容，完成之后，<code>result</code> 属性中将包含一个字符串以表示所读取的文件内容。</li></ul><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code> let blob = new Blob([&#39;abcdefg&#39;], { type: &#39;text/plain&#39; });
 console.log(&#39;blob&#39;, blob);
 let blob2 = blob.slice(0, 5, &#39;text/plain&#39;);
 console.log(&#39;blob2&#39;, blob2);
 var fileRead = new FileReader();
 fileRead.readAsText(blob2);
 fileRead.onload = function () {
     let res = fileRead.result;
     console.log(&#39;res&#39;, res);
 };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><p>上面的方法除了各自的作用不同之外，其他都差不多，也就没有没有一一举例。</p><h4 id="arraybuffer" tabindex="-1"><a class="header-anchor" href="#arraybuffer" aria-hidden="true">#</a> <code>ArrayBuffer</code></h4><p><code>ArrayBuffer</code> 用来表示通用的、固定长度的原始二进制数据缓冲区，我们不能直接操作 <code>ArrayBuffer</code> 的内容，而是要通过 <code>TypedArray(类型数组对象)</code>或 <code>DataView</code> 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。 他们直接的关系是这样的 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p><code>TypedArray</code> 视图和 <code>DataView</code> 视图的区别主要是<strong>字节序</strong>，前者的数组成员都是 _同一个数据类型_，后者的数组成员可以是 _不同的数据类型_。</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><h6 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h6><p><code>new ArrayBuffer(bytelength)</code> 参数：只有一个参数，即 <code>bytelength</code> 表示要创建数组缓冲区的大小(以字节为单位)</p><h6 id="typedarray-读写-buffer" tabindex="-1"><a class="header-anchor" href="#typedarray-读写-buffer" aria-hidden="true">#</a> <code>TypedArray</code> 读写 <code>buffer</code></h6><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>1684042965200.png</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><h6 id="dataview-读写-buffer" tabindex="-1"><a class="header-anchor" href="#dataview-读写-buffer" aria-hidden="true">#</a> <code>DataView</code> 读写 <code>buffer</code></h6><p><code>DataView</code> 实例提供了以下方法来写入内存，它们都接受两个参数，第一个参数表示开始写入数据的字节序号，第二个参数为写入的数据:</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><h4 id="createobjecturl" tabindex="-1"><a class="header-anchor" href="#createobjecturl" aria-hidden="true">#</a> <code>createObjectURL</code></h4><p>简单来说就是一个用来表示 <code>File Object</code> 或 <code>Blob Object</code> 的 <code>URL</code></p><h6 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h6><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>URL.createObjectURL(file)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就长这样 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>有生就有灭 <code>URL.revokeObjectURL(objectURL)</code> 方法用来释放一个之前已经存在的、通过调用 <code>URL.createObjectURL()</code> 创建的 <code>URL</code> 对象 参数：即 <code>objectURL</code> ，<code>URL.createObjectURL()</code> 创建的 <code>URL</code> 对象</p><p>这儿写一个使用 <code>createObjectURL</code> 和 <code>FileReader</code> 分别实现同步和异步生成图片的例子</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>  &lt;!DOCTYPE html&gt;
   &lt;html lang=&quot;en&quot;&gt;
   &lt;head&gt;
       &lt;meta charset=&quot;UTF-8&quot;&gt;
       &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
       &lt;title&gt;Document&lt;/title&gt;
   &lt;/head&gt;
   &lt;body&gt;
       &lt;input type=&quot;file&quot;&gt;
       &lt;script&gt;
           const myInput = document.querySelector(&#39;input&#39;);
           myInput.onchange = function (e) {
             const file = e.target.files[0];
             var img = new Image();
             // 这是同步
             // img.src=URL.createObjectURL(file);
            // 异步
             var fileRead = new FileReader();
             fileRead.readAsDataURL(file);
             fileRead.onload = function () {
                img.src = fileRead.result
             };
             document.body.appendChild(img)
           }
       &lt;/script&gt;
   &lt;/body&gt;
   &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> <code>Base64</code></h4><p><code>Base64</code>是一组相似的二进制到文本<code>（binary-to-text）</code>的编码规则，使得二进制数据在解释成 <code>radix-64</code> 的表现形式后能够用 <code>ASCII</code> 字符串的格式表示出来。</p><p>在 <code>js</code> 中，有两个函数被分别用来处理 <em>解码和编码</em> <code>base64</code> 字符串:</p><ul><li><p><code>atob()</code>:解码，解码一个 <code>Base64</code> 字符串;</p></li><li><p><code>btoa()</code>:编码，从一个字符串或者二进制数据编码一个 <code>Base64</code> 字符串。 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p></li></ul><h6 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h6><ul><li><p>将 <code>canvas</code> 画布内容通过 <code>Base64</code> 生成图片</p><div class="language-auto line-numbers-mode" data-ext="auto"><pre class="language-auto"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;canvas width=&quot;200&quot; height=&quot;200&quot;&gt;&lt;/canvas&gt;
    &lt;script&gt;
        const canvas = document.querySelector(&#39;canvas&#39;);
        let context = canvas.getContext(&#39;2d&#39;);
        context.fillStyle = &#39;red&#39;;
        context.fillRect(0, 0, 200, 200);
        const dataUrl = canvas.toDataURL();
        console.log(&#39;dataUrl&#39;, dataUrl);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p><p>![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)</p><p>image.png</p></li><li><p>将获取的图片文件，通过 <code>Base64</code> 生成图片 <code>fileRead.readAsDataURL(file) // 是不是很眼熟啊？</code></p></li></ul><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>我把这些关系 理了一下 ![图片](data:image/svg+xml,%3C%3Fxml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;%3F%3E%3Csvg width=&#39;1px&#39; height=&#39;1px&#39; viewBox=&#39;0 0 1 1&#39; version=&#39;1.1&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; xmlns:xlink=&#39;http://www.w3.org/1999/xlink&#39;%3E%3Ctitle%3E%3C/title%3E%3Cg stroke=&#39;none&#39; stroke-width=&#39;1&#39; fill=&#39;none&#39; fill-rule=&#39;evenodd&#39; fill-opacity=&#39;0&#39;%3E%3Cg transform=&#39;translate(-249.000000, -126.000000)&#39; fill=&#39;%23FFFFFF&#39;%3E%3Crect x=&#39;249&#39; y=&#39;126&#39; width=&#39;1&#39; height=&#39;1&#39;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E);</p><blockquote><p>作者:constRen</p><p>原文地址:https://juejin.cn/post/7233067863500996665</p></blockquote><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4>`,76),o=[d];function a(s,c){return i(),l("div",null,o)}const v=e(t,[["render",a],["__file","yicixinggaoqingchuBlob、File、FileReader、ArrayBuffer、Base64.html.vue"]]);export{v as default};
