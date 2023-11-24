import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "AhJindeg's Blog",
  description: '',
  theme: recoTheme({
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
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/category1/1/' },
      { text: 'Tags', link: '/tags/tag1/1/' },
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
