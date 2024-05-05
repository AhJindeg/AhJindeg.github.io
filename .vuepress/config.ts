import { defineUserConfig } from 'vuepress'
import { theme as recoTheme } from './recoTheme/index.ts'

export default defineUserConfig({
  port: 12138,
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "AhJindeg's Blog",
  description: "AhJindeg's Blog, AhJindeg, Arthur, Arthur AJ. W., 阿烬°, 前端技术博客",
  theme: recoTheme
})
