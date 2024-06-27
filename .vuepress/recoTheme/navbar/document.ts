import LinkConfig from "../linkConfig"

export default {
  text: '学习文档',
  icon: 'Book',
  children: [
    {
      text: '英语练习',
      children: [
        LinkConfig.English.navbar,
      ]
    }
  ],
}
