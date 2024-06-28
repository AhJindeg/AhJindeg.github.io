// distributionNetwork.ts
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
import { WifiInfoData } from '@ts/types/distributionNetworkTypes'

let deviceHotspot: { prefix: 'KS_'; password: 'KS12345678' } = {
  prefix: '',
  password: '',
}
interface PageData {
  choiceWifiShow: boolean
  wifiList: WifiInfoData[]
  currentWifiIndex: number
  ssid: string
  bssid: string
  password: string
}
Page({
  data: {
    choiceWifiShow: false, // 是否显示选择wifi弹窗
    wifiList: [], // wifi列表
    currentWifiIndex: 0, // 当前选择的wifi索引
    ssid: '', // wifi名称
    bssid: '', // wifi mac地址
    password: '', // wifi密码
  } as PageData,
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
  /** ============
   * = 解析ArrayBuffer
  ============ */
  parseArrayBuffer(message: ArrayBuffer): { CmdType: number } {
    let messageUint8Array: Uint8Array = new Uint8Array(message)
    let str: string = ''
    for (let i: number = 0; i < messageUint8Array.length; i++) {
      str += String.fromCharCode(messageUint8Array[i])
    }
    return JSON.parse(str)
  },
  /** ============
   * = 操作wifi列表
  ============ */
  operationWifiList({
    target: {
      dataset: { type },
    },
  }: EventData<{ type: 'close' | 'open' }>): void {
    this.setData({ choiceWifiShow: 'open' === type })
  },
  /** ============
   * = 确认选择当前wifi
  ============ */
  confirmWifi({
    detail: {
      value: { ssid, bssid },
      index,
    },
  }: EventData<unknown, { value: WifiInfoData; index: number }>): void {
    this.setData({ ssid, bssid, password: '', currentWifiIndex: index, choiceWifiShow: false })
  },
  /** ============
   * = 获取wifi列表
  ============ */
  onGetWifiList(): void {
    wx.onGetWifiList(({ wifiList: list }: WechatMiniprogram.OnGetWifiListListenerResult): void => {
      let wifiList: WifiInfoData[] = list.reduce((prev: WifiInfoData[], { SSID, BSSID, frequency }: WechatMiniprogram.WifiInfo): WifiInfoData[] => {
        if (SSID?.trim().length > 0 && BSSID?.trim().length > 0) {
          prev.push({ text: SSID, ssid: SSID, bssid: BSSID, frequency })
        }
        return prev
      }, [])
      this.setData({
        wifiList,
        ssid: wifiList[0].ssid,
        bssid: wifiList[0].bssid,
        password: '',
        currentWifiIndex: 0,
      })
      Toast.clear()
    })
  },
  /** ============
   * = 请求wifi列表
  ============ */
  getWifiList(): void {
    Toast.loading({
      duration: 0,
      message: '',
      forbidClick: true,
    })
    wx.getWifiList({
      success: (): void => {
        this.onGetWifiList()
      },
      fail: (): void => {
        Toast.fail('Wi-Fi 获取失败')
      },
    })
  },
  /** ============
   * = 初始化 Wi-Fi
  ============ */
  startWifi(): void {
    Toast.loading({
      duration: 0,
      message: '',
      forbidClick: true,
    })
    wx.startWifi({
      success: (): void => {
        if (['ios', 'mac'].includes(wx.getSystemInfoSync().platform)) {
          Toast.clear()
          Dialog.confirm({
            title: '获取手机 Wi-Fi 列表',
            message: 'IOS系统获取 Wi-Fi 列表，需要用户手动进入「无线局域网」设置页，并在系统扫描到设备后返回小程序才可获得 Wi-Fi 数据',
          })
            .then((): void => {
              this.getWifiList()
            })
            .catch((): void => {
              Toast.fail('取消成功')
            })
        } else {
          this.getWifiList()
        }
      },
      fail: (): void => {
        Toast.fail('初始化失败')
      },
    })
  },
  /** ============
   * = 配网说明
  ============ */
  openDescription(): void {
    Dialog.alert({
      title: 'SoftAp 配网说明',
      message: `\n1. 确认设备已开启配网功能\n2. 确认系统已连接 设备热点\n名称为 ${deviceHotspot.prefix} + 设备ID\n（设备ID可通过扫描产品二维码获取）\n密码为 ${deviceHotspot.password}\n3. 选择 Wi-Fi 并输入密码\n请确认选择 Wi-Fi 为 2.4G频段\n4. 点击一键配网等待反馈\n\n- Wi-Fi或配网出现错误请下拉刷新重试 -`,
    })
  },
  onLoad(): void {
    this.startWifi()
  },
  onPullDownRefresh(): void {
    this.startWifi()
    wx.stopPullDownRefresh()
  },
})
