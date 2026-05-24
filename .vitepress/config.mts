import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog-vitepress/',

  title: 'xf / blog',
  description: '代码 · 运维 · 思考 —— 记录技术路上的点滴',

  lang: 'zh-CN',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/blog-vitepress/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/WebTerm介绍' },
      { text: 'GitHub', link: 'https://github.com/xufanchn' },
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: 'WebTerm —— 基于 Web 的运维管理工具', link: '/posts/WebTerm介绍' },
          { text: '三个博客框架搭建记录', link: '/posts/博客搭建记录' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text, field) => {
              // Chinese: split into bigrams for meaningful search
              if (/[一-鿿]/.test(text)) {
                const chars = text.replace(/[^一-鿿\w]/g, '').split('')
                const tokens = []
                for (let i = 0; i < chars.length; i++) {
                  tokens.push(chars[i])
                  if (i < chars.length - 1) tokens.push(chars[i] + chars[i + 1])
                }
                return tokens
              }
              // English: default word split
              return text.split(/[\s,.\-!?]+/).filter(t => t.length > 1)
            },
          },
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
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
      { icon: 'github', link: 'https://github.com/xufanchn' },
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: `版权所有 © ${new Date().getFullYear()} xufanchn`,
    },

    editLink: {
      pattern: 'https://github.com/xufanchn/blog-vitepress/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdatedText: '最后更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '目录',
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题切换',
  },
})
