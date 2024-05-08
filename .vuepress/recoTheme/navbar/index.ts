import UserBlogs from "./user-blogs";
import Tools from "./tools";
import Technology from "./technology";
import Frame from "./frame";

export default [
  {
    text: '主页',
    icon: 'Home',
    children: [
      { text: '首页', link: '/' },
      { text: '博客列表', link: '/posts' },
    ],
  },
  UserBlogs,
  Tools,
  Technology,
  Frame,
  {
    text: '时间轴', icon: 'Roadmap', link: '/timeline'
  },
  { text: '友情链接', icon: 'At', link: '/friendship-link' },
]
