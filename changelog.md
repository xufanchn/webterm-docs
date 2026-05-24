# 更新日志

## v0.1.0 (2026-05-23)

### 首个正式版本

**SSH 终端**
- xterm.js 终端渲染（256 色、TrueColor）
- 多标签页，支持拖拽排序和关闭
- 无限分屏（横向/纵向递归拆分）
- 广播模式（键盘输入同步多终端）
- 主题定制（Dracula、Solarized、One Dark、Monokai）
- 关键字高亮（ERROR/WARN/INFO/DEBUG 预设）
- Zmodem 文件传输（sz/rz）
- 终端内查找（Ctrl+F）
- 心跳重连（指数退避）

**SFTP 文件管理**
- 跟随模式（终端右侧自动展示文件列表）
- 独立双栏模式（WinSCP 风格）
- 拖拽上传、下载
- 在线编辑（CodeMirror 6 + 语法高亮）
- 文件操作（新建、重命名、删除、权限编辑）
- OSC 7 路径同步

**数据库管理**
- MySQL 连接管理
- 数据库/表/列树形浏览
- 查询编辑器（SQL 高亮 + 格式化）
- 结果内联编辑
- CSV 导出

**系统**
- 本地账号系统（admin/user 角色）
- JWT 认证
- AES-256-GCM 凭据加密
- 单二进制部署
- Docker 支持（amd64/arm64）
- SQLite 数据存储

---

更多版本即将发布。查看 [GitHub Releases](https://github.com/xufanchn/webterm/releases) 获取最新版本。
