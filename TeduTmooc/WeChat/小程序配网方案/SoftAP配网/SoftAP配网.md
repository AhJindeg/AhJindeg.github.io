# Soft AP配网

- 通过与设备约定的协议进行udp通讯达到配网目的
- 协议规范：设备通过 softAP 方式创建一个 Wi-Fi 热点，手机连接该热点，再通过 UDP 通讯，将目标 Wi-Fi 路由器的 SSID/PSW 传递该设备，设备获取后，即可连接 Wi-Fi 路由器从而连接互联网。

## 配网流程

### 1. 设备开启热点等待手机接入

### 2. 手机连接设备热点，设备开启udp服务

- 手机连接设备 softAP 热点成功后，小程序作为 UDP 客户端会连接设备上面的 UDP 服务（默认 IP 为192.168.4.1，端口为8266）

### 3. 小程序开启udp服务，向约定的 ip+port 发送 Wi-Fi 信息

- JSON格式 <此处JSON格式请根据实际情况设定对应字段和标识>
- ```json
  {"ssid":"xxx-xxx","password":"********"}
  ```

### 4. 发送完成后，等待设备 UDP 回复信息

- udp发送可能会出现丢包情况，双方可自由设定规则，比如发送信息后如果无响应3s后重新发送，轮询5次

## 参考代码 完整流程代码文件夹 ./distributionNetwork/*

```javascript
/** ============
 * = 建立udp配网
============ */
onDistributionNetwork(): void {
  let { ssid, bssid, password } = this.data
  if (!ssid || !bssid) {
    Toast.fail('请先选择wifi')
    return
  }
  const UDP: WechatMiniprogram.UDPSocket = wx.createUDPSocket()
  if (!UDP) {
    Toast.fail('暂不支持连接')
    return
  }
  Toast.loading({
    duration: 0,
    message: '配网中...',
    forbidClick: true,
  })
  UDP.bind(8266)
  let timer: number | null = null
  UDP.onError((res: WechatMiniprogram.GeneralCallbackResult): void => {
    console.log(`res/onError:`, res)
  })
  UDP.onMessage(({ message }: { message: ArrayBuffer }): void => {
    clearInterval(timer as number)
    let { CmdType } = this.parseArrayBuffer(message)
    if (2 === CmdType) {
      Toast.clear()
      Dialog.alert({
        title: '配网信息发送成功',
        message: '配网信息已发送成功，请观察设备指示灯等待配网结果',
      })
    } else {
      Toast.fail('配网失败')
    }
    UDP.close()
  })
  let count: number = 0
  timer = setInterval((): void => {
    if (count < 5) {
      let message: string = JSON.stringify({ cmdType: 1, ssid, password })
      UDP.send({ address: '192.168.4.1', port: 8266, message })
      count++
    } else {
      clearInterval(timer as number)
      UDP.close()
      Toast.fail('配网失败')
    }
  }, 2000)
},
```
