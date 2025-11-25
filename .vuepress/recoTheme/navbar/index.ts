import UserBlogs from "./user-blogs";
import Tools from "./tools";
import Technology from "./technology";

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
  { text: '友情链接', icon: 'At', link: '/friendship-link' },
];
