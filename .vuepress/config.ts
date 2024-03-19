import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { navbar as recoThemeNavbar, series as recoThemeSeries } from './recoTheme/index.ts'

export default defineUserConfig({
  debug: true,
  port: 12138,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "AhJindeg's Blog",
  description: "AhJindeg's Blog, AhJindeg, Arthur, Arthur AJ. W., 阿烬°, 前端技术博客",
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    author: 'AhJindeg',
    authorAvatar: '/head.png',
    home: '/',
    logo: '/logo.png',
    docsRepo: 'https://github.com/AhJindeg/AhJindeg.github.io.git',
    docsBranch: 'master',
    docsDir: '',
    lastUpdatedText: '',
    editLink: false,
    navbar: [
      ...recoThemeNavbar
    ],
    series: {
      ...recoThemeSeries
    }
  }),
})
