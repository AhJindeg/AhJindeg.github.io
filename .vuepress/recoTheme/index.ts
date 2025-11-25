import recoTheme from 'vuepress-theme-reco';
import navbar from './navbar';

export const theme = recoTheme({
  style: '@vuepress-reco/style-default',
  author: 'AhJindeg AJ. W.',
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
