---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "WebTerm"
  text: "基于 Web 的运维管理工具"
  tagline: SSH 终端 · SFTP 文件管理 · 数据库管理 —— 一切尽在浏览器
  image:
    src: /blog-vitepress/logo.svg
    alt: WebTerm
  actions:
    - theme: brand
      text: 快速安装
      link: /install
    - theme: alt
      text: 功能概览
      link: /features

features:
  - icon: 🖥️
    title: SSH 终端
    details: xterm.js 渲染，多标签页、分屏布局、广播模式，媲美专业桌面终端。支持 Zmodem 文件传输和 OSC 7 路径同步。
  - icon: 📂
    title: SFTP 文件管理
    details: WinSCP 双栏风格界面，拖拽上传下载，文件浏览、编辑、重命名、删除一气呵成。切换目录自动跟随终端路径。
  - icon: 🗄️
    title: 数据库管理
    details: MySQL 查询编辑器，语法高亮、表结构浏览、数据表查看、内联编辑。快速执行 SQL 并查看结果。
  - icon: 🐧
    title: 跨平台
    details: Linux / macOS / Windows 全平台支持。无论你使用什么操作系统，都能获得一致的运维体验。
  - icon: 📦
    title: 单二进制
    details: 前端界面内嵌于 Go 二进制文件，只需一个文件即可部署运行。无需 Node.js 或任何运行时依赖。
  - icon: 🐳
    title: Docker 支持
    details: 提供多架构 Docker 镜像（amd64 / arm64），一条命令即可启动。支持 Docker Compose 编排。
---
