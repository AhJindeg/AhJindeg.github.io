import recoTheme from 'vuepress-theme-reco'
import navbar from './navbar'
import series from './series'

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
