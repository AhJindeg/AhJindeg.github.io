import UserBlogs from "./user-blogs"
import Tools from "./tools"
import Technology from "./technology"
import Document from "./document"

export default [
  {
    text: '主页',
    icon: 'Home',
    children: [
      { text: '首页', link: '/' },
      { text: '博客列表', link: '/posts' },
      { text: '时间轴', link: '/timeline' },
    ],
  },
  UserBlogs,
  Tools,
  Technology,
  Document,
  { text: '友情链接', icon: 'At', link: '/friendship-link' },
]
