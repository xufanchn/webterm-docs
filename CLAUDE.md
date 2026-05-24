# CLAUDE.md

## Commands

```bash
npm run build    # vitepress build → dist/
npm run dev      # vitepress dev server
```

## Overview

WebTerm 产品文档站，VitePress 构建，部署到 `xufanchn.github.io/webterm-docs`。

## File Structure

```
index.md            # 产品首页（Hero + Features）
guide/              # 使用指南
  index.md          # 快速开始
  install.md        # 安装部署
  ssh.md            # SSH 终端
  sftp.md           # SFTP 文件管理
  database.md       # 数据库管理
changelog.md        # 更新日志（自动同步）
```

## Key Behaviors

- **Release Sync** — `.github/workflows/sync-release.yml` 每 6 小时检测 [webterm](https://github.com/xufanchn/webterm) 仓库的最新 release，自动更新 `changelog.md`
- **Deploy** — `deploy.yml` 在 push main / workflow_dispatch 时构建部署
- **Base path** — GitHub Pages 使用 `/webterm-docs/`，Vercel/CF 自动切 `/`
- **Changelog format** — 哨兵标记 `<!-- RELEASES_START/END -->` 包裹版本列表，sync 脚本插入新版本到标记下方

## Related Repos

- [webterm](https://github.com/xufanchn/webterm) — 主项目，docs 站点数据来源
