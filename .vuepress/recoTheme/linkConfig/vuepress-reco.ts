export default {
  navbar: {
    text: 'vuepress-reco',
    link: '/docs/vuepress-reco/home',
  },
  series: {
    '/docs/vuepress-reco/': [
      {
        text: 'module one',
        children: ['home', 'theme'],
      },
      {
        text: 'module two',
        children: ['api', 'plugin'],
      },
    ]
  }
}
