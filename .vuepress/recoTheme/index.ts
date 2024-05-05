import recoTheme from 'vuepress-theme-reco'
import navbar from './navbar/index.ts'
import series from './series/index.ts'

export const theme = recoTheme({
  style: '@vuepress-reco/style-default',
  colorMode: 'dark',
  author: 'AhJindeg',
  authorAvatar: '/head.png',
  home: '/',
  logo: '/logo.png',
  docsRepo: 'https://github.com/AhJindeg/AhJindeg.github.io.git',
  docsBranch: 'master',
  docsDir: '',
  lastUpdatedText: '',
  editLink: false,
  navbar,
  series
})
