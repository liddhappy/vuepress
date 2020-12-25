module.exports = {
  type: 'blog',
  author: 'liddhappy',
  // logo: '/head.png',
  // authorAvatar: '/avatar.png',
  subSidebar: 'auto',
  lastUpdated: '上次更新',
  nav: [
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    {
      text: 'Github',
      link: 'https://gitee.com/liddhappy/vuepress-blog',
      icon: 'reco-github',
    },
  ],
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类', // 默认文案 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签', // 默认文案 “标签”
    },
  },
  sidebar: {
    // {
    //   title: '组件',   // 必要的
    //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   children: [
    //     '/'
    //   ]
    // },
  },
  /**
    support for
    'default'
    'tomorrow',
    'funky',
    'okaidia',
    'solarizedlight',
    'coy',
    'dark',
    'twlight',
   */
  codeTheme: 'tomorrow', // 不填是 'tomorrow'
};
