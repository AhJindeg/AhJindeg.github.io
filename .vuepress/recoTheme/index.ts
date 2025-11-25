import recoTheme from 'vuepress-theme-reco';
import navbar from './navbar';

export const theme = recoTheme({
  colorMode: 'dark', // light dark
  style: '@vuepress-reco/style-default',
  primaryColor: '#ffffff', // #000000 #ffffff
  author: 'AhJindeg',
  authorAvatar: '/head.png',
  home: '/',
  logo: '/logo.png',
  docsRepo: 'https://github.com/AhJindeg/AhJindeg.github.io.git',
  docsBranch: 'main',
  docsDir: '',
  lastUpdatedText: '',
  editLink: false,
  navbar,
});
