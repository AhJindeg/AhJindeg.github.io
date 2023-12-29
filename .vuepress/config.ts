import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  // debug: true,
  port: 8848,
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
      {
        text: '主页',
        children: [
          { text: '首页', link: '/' },
          { text: '时间轴', link: '/timeline' },
          { text: '博客列表', link: '/posts' },
          { text: '友情链接', link: '/friendship-link' },
          {
            text: 'reco-docs',
            children: [
              { text: 'vuepress-reco', link: '/docs/theme-reco/home' },
              { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
            ],
          },
        ],
      },
      { text: '零碎记录', link: '/blogs/user-blogs/' },
      {
        text: '工具推荐',
        children: [
          {
            text: 'VScode',
            children: [
              { text: '配置', link: '/tags/vscode/config/1/' },
              { text: '插件', link: '/tags/vscode/plugin/1/' },
            ],
          },
        ],
      },
      {
        text: '技术分享',
        children: [
          { text: 'JavaScript', link: '/categories/javascript/1/' },
          { text: 'TypeScript', link: '/categories/typescript/1/' },
          { text: 'Vue', link: '/categories/vue/vue3/1/' },
        ],
      },
      { text: '框架文档', link: '/docs/frame-document/' },
      // { text: '英文学习', link: '/docs/english-learning/' },
      // { text: '拳击训练', link: '/docs/boxing-training/' },
    ],
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
    },
  }),
})
