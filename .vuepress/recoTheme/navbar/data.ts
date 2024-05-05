export const navbar = [
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
          { text: '设置', link: '/tags/vscode/settings/1/' },
          { text: '扩展', link: '/tags/vscode/extensions/1/' },
          { text: '代码片段', link: '/tags/vscode/code-snippets/1/' },
        ],
      },
    ],
  },
  {
    text: '技术分享',
    children: [
      {
        text: 'JavaScript', children: [
          {
            text: 'JSON', link: '/categories/javascript/json/1/'
          }
        ]
      },
      {
        text: 'TypeScript', children: [
          {
            text: 'declare', link: '/categories/typescript/declare/1/',
          }
        ]
      },
      {
        text: 'Vue', children: [
          {
            text: 'vue3', link: '/categories/vue/vue3/1/',
          },
          {
            text: 'vue-router', link: '/categories/vue/vue-router/1/',
          },
        ]
      },
    ],
  },
  { text: '框架文档', link: '/docs/frame-document/' },
  { text: '英文学习', link: '/docs/english-learning/' },
  { text: '拳击训练', link: '/docs/boxing-training/' },
]
