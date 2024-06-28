#### `Blob`

`Blob` 全名是(`Binary Large Object`) 翻译过来就是 _二进制类型的大对象_ `Blob` 对象表示一个不可变、原始数据的类文件对象，一个 `Blob` 对象就是一个包含有只读原始数据的类文件对象。 `Blob` 对象中的数据并不一定得是 `js` 中的原生形式。 `File` 接口基于 `Blob` ，继承了 `Blob` 的功能,并且扩展支持了用户计算机上的本地文件。它的存在，允许我们可以通过 `JS` 直接操作二进制数据。还可以通过 `Blob` 设置二进制数据的 `MIME` 类型。

##### 属性

`Blob` 对象含有两个属性：`size` 和 `type` 。

-   `size` 表示数据的大小(单位是字节)
    
-   `type` 表明该 `Blob` 对象所包含数据的 `MIME` 类型。如果类型未知，则该值为空字符串 ![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/yRIqhMamWtTPobRicoyXsjYXOUcnPPeYVnc5iaxpT5yl7GPx28yUHxibic0D7jibWbh9EmasdkTWexDQSPk9vQTC9pQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1)
    

##### 创建 `Blob`

-   通过构造函数 `var aBlob = new Blob( array, options );`
    
    创建一个装填DOMString对象的Blob对象
    
    ```auto
    let domStr = '<div> my name is constRen </div>'; // 一个包含 DOMString 的数组
    let blob = new Blob([domStr], { type: 'text/html' });  // 得到 blob
    console.log('blob',blob);
    ```
    
    创建一个装填ArrayBuffer对象的Blob对象
    
    ```auto
    let abf = new ArrayBuffer(6);
    let blob = new Blob([abf], { type: 'text/plain' });
    console.log('blob', blob);
    ```
    
    创建一个装填ArrayBufferView对象的Blob对象
    
    ```auto
    let typedArray = new Int8Array(8);
    let blob = new Blob([typedArray], { type: 'text/plain' });
    console.log('blob', blob);
    ```
    

-   `type`:默认值为 `""`，它代表了将会被放入到 `blob` 中的数组内容的 `MIME` 类型。
    
-   `endings` —— 默认值为 `"transparent"`，用于指定包含行结束符 `\n` 的字符串如何被写入。 它是以下两个值中的一个：
    
-   `array`：是一个由 `ArrayBuffer`，`ArrayBufferView`，`Blob`，`DOMString(DOMStrings会被编码为UTF-8)`等对象构成的 **数组**。
    
-   `options` ：一个可选的对象（用于设置Blob对象的属性（如：MIME类型）），包含以下两个属性
    

1.  `native`：代表行结束符会被更改为适合宿主操作系统文件系统的换行符
    
2.  `transparent`，代表会保持 `blob` 中保存的结束符不变
    

-   通过`Blob.slice()` 此方法返回一个新的Blob对象，包含了原Blob对象中指定范围内的数据
    
    ```auto
    Blob.slice(start:number, end:number, contentType:string)`;
    如：let newData = blob.slice(0, 5, 'text/plain');  // 注意 这儿的text/plain 不再是 一个对象了哦！！！
    ```
    

-   `start` ：开始索引，默认为0，如果传入的是一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说，`-10` 将会是 `Blob` 的倒数第十个字节。如果传入的 `start` 的长度大于源 `Blob` 的长度，那么返回的将会是一个长度为 `0` 并且不包含任何数据的一个 `Blob` 对象。
    
-   `end` ：截取结束索引（不包括end），默认值就是它的原始长度。如果传入了一个负数，那么这个偏移量将会从数据的末尾从后到前开始计算。举例来说， `-10` 将会是 `Blob` 的倒数第十个字节
    
-   `contentType` ：新 `Blob` 的 `MIME` 类型，默认为空字符串 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    

-   通过`canvas.toBlob()`
    
    ```auto
    语法：
    canvas.toBlob(callback, type, encoderOptions);
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    

-   `callback`：回调函数，可获得一个单独的 `Blob` 对象参数。
    
-   `type(可选)`：`DOMString` 类型，指定图片格式，默认格式为`image/png`
    
-   `encoderOptions(可选)`：`Number` 类型，值在`0与1`之间，当请求图片格式为`image/jpeg`或者`image/webp`时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。 代码太多不好贴 贴个图片吧 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    

上面介绍了那么多，其实用得少，下面说说平常开发经常用到的

##### 应用场景

-   分片上传 通过`Blob.slice`方法，可以将大文件分片，轮循向后台提交各文件片段，即可实现文件的分片上传。代码就不贴了，说下逻辑
    
    将要上传的 `File` 对象，根据每片大小对文件进行分片，通过循环上传每片文件
    
    ```auto
      const file = new File(["a".repeat(1000000)], "test.txt");
    
      const chunkSize = 40000;
      const url = "https://xxxxxxx";
    
      async function chunkedUpload() {
          for (let start = 0; start < file.size; start += chunkSize) {
              console.log('start', start);
              const chunk = file.slice(start, start + chunkSize + 1);
              const fd = new FormData();
              fd.append("data", chunk);
    
              // await fetch(url, { method: "post", body: fd }).then((res) =>
              //     res.text()
              // );
          }
      }
      chunkedUpload();
    ```
    

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

-   通过 `url` 下载文件
    
    这个相信大家基本都用过吧，通过 `window.URL` 为 `Blob` 对象生成一个网络地址，结合 `a标签` 的 `download` 属性，可以实现点击 `url` 下载文件实现如下：
    
    ```auto
    </head>
    <body>
      <script>
          function imgView(url) {
              const xhr = new XMLHttpRequest();
              xhr.open('GET', url);
              xhr.responseType = 'blob';
              xhr.send();
              xhr.onload = function () {
                  const fileBlob = xhr.response;
                  downLoad('blob下载', fileBlob, { type: 'image/jpeg' })
              };
          }
          let imgUrl = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92f092261bc14e2b90e96035e05656f0~tplv-k3u1fbpfcp-watermark.image?';
          imgView(imgUrl);
    
            function downLoad(name, file, type = { type: 'application/vnd.ms-excel' }) {
            const blob = new Blob([file], type);
            const link = document.createElement('a');
            link.style.display = 'none';
            link.href = URL.createObjectURL(blob);
            link.download = name;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(link.href);
        };
      </script>
    </body>
    </html>
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    
-   通过 `url` 显示图片 `img` 的 `src` 属性及 `background` 的 `url` 属性，都可以接收图片地址或 `base64` 来显示图片，那就可以把图片转化为 `Blob` 对象，生成 `URL（URL.createObjectURL(blob)）`来显示
    
    ```auto
    </head>
    <body>
        <img src="" alt="">
        <script>
            function imgView(url) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.responseType = 'blob';
                xhr.send();
                xhr.onload = function () {
                    const fileBlob = xhr.response;
                    console.log('fileBlob',fileBlob);
                    //将blob转成url地址
                    const fileUrl = URL.createObjectURL(fileBlob);
                    console.log('fileUrl',fileUrl);
                    document.querySelector('img').setAttribute('src', fileUrl)
                };
            }
            let imgUrl = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92f092261bc14e2b90e96035e05656f0~tplv-k3u1fbpfcp-watermark.image?';
            imgView(imgUrl);
        </script>
    </body>
    </html>
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    

方法

-   `slice()`：这个上面讲过
    
-   `stream()`：返回一个能读取 `blob` 内容的 `ReadableStream(可读的字节数据流)`
    
    ```auto
    let domStr = '<div> my name is constRen </div>';
    let blob = new Blob([domStr], { type: 'text/html' });
    console.log('blob', blob);
    
    var buffer = blob.stream();
    console.log('buffer', buffer);
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    
-   `text()`：返回一个 `Promise` 对象且包含 `blob` 所有内容的 `UTF-8` 格式的 `USVString`
    
    ```auto
    let domStr = '<div> my name is constRen </div>';
    let blob = new Blob([domStr], { type: 'text/html' });
    console.log('blob', blob);
    
    var bufferPromise = blob.text();
    console.log('bufferPromise', bufferPromise);
    blob.text().then(text => {
        console.log('text', text);
    })
    
    
    async function fn() {
        var text = await blob.text();
        console.log('text-async', text);
    };
    fn();
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    1683865830988.png
    
-   `arrayBuffer()`：返回一个 `Promise` 对象，且包含 `blob` 所有内容，并在 `ArrayBuffer` 中以二进制数据的形式呈现
    
    ```auto
      let domStr = '<div> my name is constRen </div>';
        let blob = new Blob([domStr], { type: 'text/html' });
        console.log('blob', blob);
    
        var bufferPromise = blob.arrayBuffer();
    
        console.log('bufferPromise', bufferPromise);
        
        blob.arrayBuffer().then(buffer => {
            console.log('buffer', buffer);
        })
    
    
        async function fn() {
            var buffer = await blob.arrayBuffer();
            console.log('buffer-async', buffer);
        };
        fn();
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    

###### 注意

`Blob` 对象是不可改变的。我们不能直接在一个 `Blob` 中更改数据，都是对一个 `Blob` 进行分割，从其中创建新的 `Blob` 对象。这就有点像 `js` 的字符串，无法更改字符串中的字符，但可以创建新的修改后的字符串

#### `File`

`File` 基于 `Blo` ，继承了 `Blob` 功能并将其扩展为支持用户系统上的文件。说白了就是 `File` 对象是特殊类型的 `Blob` 在 `js` 中，主要有两种方法来获取 `File` 对象:

1.  `<input>` 元素上选择文件后返回的 `FileList` 对象;
    
    ```auto
    <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
         <input type="file">
         <script>
             const myInput = document.querySelector('input');
             myInput.onchange = function (e) {
                 console.log(' e.target.files', e.target.files);
             }
         </script>
     </body>
     </html>
    ```
    
2.  文件拖放操作生成的 `DataTransfer` 对象;
    
    ```auto
     <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <p draggable="true">拖动</p>
          <script>
              const myP = document.querySelector('p');
              myP.ondrag = function (e) {
                e.preventDefault();
                console.log('e', e.dataTransfer.files);
              }
          </script>
      </body>
      </html>
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    

###### 属性

1.  `lastModified(只读)`：返回当前 `File` 对象所引用文件最后修改时间，自 `UNIX` 时间起始值（1970 年 1 月 1 日 00:00:00 UTC）以来的毫秒数。
    
2.  `lastModifiedDate(只读)`：返回当前 `File` 对象所引用文件最后修改时间的 `Date` 对象。
    
3.  `name(只读)`：返回当前 `File` 对象所引用文件的名字。
    
4.  `size(只读)`：返回文件的大小。
    
5.  `webkitRelativePath(只读)`：返回 `File` 相关的 `path` 或 `URL`(该特性是非标准的，请尽量不要在生产环境中使用它！)
    
6.  `type(只读)`：返回文件的 `MIME` 类型
    

###### 方法

`File` 接口没有定义任何方法，但是它从 `Blob` 接口继承了以下方法 `File.slice(start:number, end:number, contentType:string)`

#### `FileReader`

`FileReader` 说直白点就是一个可以读取 `Blob` 内容的工具

###### 常用方法

-   `onload` ：处理 `load` 事件。该事件在读取操作完成时触发
    
-   `readAsArrayBuffer`∶读取指定 `Blob` 中的内容，完成之后，`result` 属性中保存的将是被读取文件的 `ArrayBuffer` 数据对象;
    
-   `readAsBinaryString`︰读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含所读取文件的原始二进制数据;
    
-   `readAsDataURL`︰读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含一个`data: URL` 格式的 `Base64` 字符串以表示所读取文件的内容。
    

```auto
  <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <input type="file">
       <script>
           const myInput = document.querySelector('input');
           myInput.onchange = function (e) {
             console.log(' e.target.files', e.target.files);
             const file = e.target.files[0];
             var fileRead = new FileReader();
             // Base64
             fileRead.readAsDataURL(file);
             fileRead.onload = function () {
                console.log('fileRead.result', fileRead.result);
             }
           }
       </script>
   </body>
   </html>
```

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

-   `readAsText`∶读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含一个字符串以表示所读取的文件内容。
    

```auto
 let blob = new Blob(['abcdefg'], { type: 'text/plain' });
 console.log('blob', blob);
 let blob2 = blob.slice(0, 5, 'text/plain');
 console.log('blob2', blob2);
 var fileRead = new FileReader();
 fileRead.readAsText(blob2);
 fileRead.onload = function () {
     let res = fileRead.result;
     console.log('res', res);
 };

```

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

上面的方法除了各自的作用不同之外，其他都差不多，也就没有没有一一举例。

#### `ArrayBuffer`

`ArrayBuffer` 用来表示通用的、固定长度的原始二进制数据缓冲区，我们不能直接操作 `ArrayBuffer` 的内容，而是要通过 `TypedArray(类型数组对象)`或 `DataView` 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。 他们直接的关系是这样的 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

`TypedArray` 视图和 `DataView` 视图的区别主要是**字节序**，前者的数组成员都是 \_同一个数据类型\_，后者的数组成员可以是 \_不同的数据类型\_。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

###### 语法

`new ArrayBuffer(bytelength)` 参数：只有一个参数，即 `bytelength` 表示要创建数组缓冲区的大小(以字节为单位)

###### `TypedArray` 读写 `buffer`

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

1684042965200.png

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

###### `DataView` 读写 `buffer`

`DataView` 实例提供了以下方法来写入内存，它们都接受两个参数，第一个参数表示开始写入数据的字节序号，第二个参数为写入的数据:

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

image.png

#### `createObjectURL`

简单来说就是一个用来表示 `File Object` 或 `Blob Object` 的 `URL`

###### 用法

```auto
URL.createObjectURL(file)
```

就长这样 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

有生就有灭 `URL.revokeObjectURL(objectURL)` 方法用来释放一个之前已经存在的、通过调用 `URL.createObjectURL()` 创建的 `URL` 对象 参数：即 `objectURL` ，`URL.createObjectURL()` 创建的 `URL` 对象

这儿写一个使用 `createObjectURL` 和 `FileReader` 分别实现同步和异步生成图片的例子

```auto
  <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <input type="file">
       <script>
           const myInput = document.querySelector('input');
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
       </script>
   </body>
   </html>
```

#### `Base64`

`Base64`是一组相似的二进制到文本`（binary-to-text）`的编码规则，使得二进制数据在解释成 `radix-64` 的表现形式后能够用 `ASCII` 字符串的格式表示出来。

在 `js` 中，有两个函数被分别用来处理 _解码和编码_ `base64` 字符串:

-   `atob()`:解码，解码一个 `Base64` 字符串;
    
-   `btoa()`:编码，从一个字符串或者二进制数据编码一个 `Base64` 字符串。 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    

###### 使用场景

-   将 `canvas` 画布内容通过 `Base64` 生成图片
    
    ```auto
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <canvas width="200" height="200"></canvas>
        <script>
            const canvas = document.querySelector('canvas');
            let context = canvas.getContext('2d');
            context.fillStyle = 'red';
            context.fillRect(0, 0, 200, 200);
            const dataUrl = canvas.toDataURL();
            console.log('dataUrl', dataUrl);
        </script>
    </body>
    </html>
    ```
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    
    ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)
    
    image.png
    
-   将获取的图片文件，通过 `Base64` 生成图片 `fileRead.readAsDataURL(file) // 是不是很眼熟啊？`
    

#### 总结

我把这些关系 理了一下 ![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E);

> 作者:constRen
> 
> 原文地址:https://juejin.cn/post/7233067863500996665

####