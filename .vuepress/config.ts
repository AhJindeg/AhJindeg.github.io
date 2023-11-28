import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "AhJindeg's Blog",
  description: '',
  theme: recoTheme({
    home: '/',
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'AhJindeg',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/AhJindeg/AhJindeg.github.io.git',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    editLink: false,
    navbar: [
      { text: '主页', link: '/' },
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
      { text: '英文学习', link: '/docs/english-learning/' },
      { text: '拳击训练', link: '/docs/boxing-training/' },
      {
        text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/home' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
        ],
      },
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
  // debug: true,
})
