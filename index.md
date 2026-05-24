---
layout: home

hero:
  name: "WebTerm"
  text: "基于 Web 的运维管理工具"
  tagline: SSH 终端 · SFTP 文件管理 · 数据库管理 —— 一切尽在浏览器
  image:
    src: /webterm-docs/logo.svg
    alt: WebTerm
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/xufanchn/webterm

features:
  - icon: 🖥️
    title: SSH 终端
    details: xterm.js 渲染，多标签页、无限分屏、广播模式、Zmodem 文件传输，媲美桌面终端体验。
    link: /guide/ssh
  - icon: 📂
    title: SFTP 文件管理
    details: WinSCP 双栏风格界面，拖拽上传下载，在线编辑，目录跟随终端路径自动同步。
    link: /guide/sftp
  - icon: 🗄️
    title: 数据库管理
    details: MySQL 查询编辑器，语法高亮、表结构浏览、内联编辑，一键导出 CSV。
    link: /guide/database
  - icon: 📦
    title: 单二进制部署
    details: 前端内置 Go 二进制，一个文件即可运行，无需 Node.js 或任何运行时依赖。
    link: /guide/install
  - icon: 🔒
    title: 安全可靠
    details: AES-256-GCM 凭据加密，JWT 认证，用户角色隔离，DDL 操作二次确认。
  - icon: 🐳
    title: Docker 支持
    details: 多架构 Docker 镜像（amd64/arm64），支持 Docker Compose 一键编排。
---
