import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog-vitepress/',
  outDir: 'dist',

  title: 'WebTerm',
  description: '基于 Web 的 SSH/SFTP/数据库运维管理工具',

  lang: 'zh-CN',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/blog-vitepress/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      { text: '更新日志', link: '/changelog' },
      { text: 'GitHub', link: 'https://github.com/xufanchn/webterm' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '安装部署', link: '/guide/install' },
            { text: 'SSH 终端', link: '/guide/ssh' },
            { text: 'SFTP 文件管理', link: '/guide/sftp' },
            { text: '数据库管理', link: '/guide/database' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '未找到相关结果',
                displayDetails: '显示详情',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '返回',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xufanchn/webterm' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear()} xufanchn`,
    },

    editLink: {
      pattern: 'https://github.com/xufanchn/webterm/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdatedText: '最后更新',
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '目录' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题切换',
  },
})
