import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog-vitepress/',

  title: 'WebTerm',
  description: '基于 Web 的 SSH/SFTP/数据库运维管理工具',

  lang: 'zh-CN',

  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/blog-vitepress/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/blog-vitepress/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '安装', link: '/install' },
      { text: '功能', link: '/features' },
      {
        text: '更多',
        items: [
          { text: 'GitHub', link: 'https://github.com/xufanchn/webterm' },
          { text: '发布记录', link: 'https://github.com/xufanchn/webterm/releases' },
        ],
      },
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '简介', link: '/' },
          { text: '安装指南', link: '/install' },
        ],
      },
      {
        text: '功能',
        items: [
          { text: '功能概览', link: '/features' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '未找到相关结果',
                displayDetails: '显示详情',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '返回',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
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
      pattern: 'https://github.com/xufanchn/blog-vitepress/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdatedText: '最后更新',

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
