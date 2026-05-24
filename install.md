# 安装指南

WebTerm 提供多种安装方式，满足不同场景的需求。

## 二进制下载

从 [GitHub Releases](https://github.com/xufanchn/webterm/releases) 下载对应平台的二进制文件，解压后即可运行。

```bash
# 下载最新版本（以 Linux amd64 为例）
wget https://github.com/xufanchn/webterm/releases/latest/download/webterm-linux-amd64.tar.gz

# 解压
tar -xzf webterm-linux-amd64.tar.gz

# 运行
./webterm
```

启动后访问 `http://localhost:8443` 即可进入 WebTerm 管理界面。默认管理员账号 `admin`，密码可在配置文件中设置。

## Docker 部署

WebTerm 提供多架构 Docker 镜像，支持 `linux/amd64` 和 `linux/arm64`。

### 快速启动

```bash
docker run -d \
  --name webterm \
  -p 8443:8443 \
  -v ./config.yaml:/config.yaml \
  ghcr.io/xufanchn/webterm:latest
```

### Docker Compose

创建 `docker-compose.yml`：

```yaml
version: "3.8"

services:
  webterm:
    image: ghcr.io/xufanchn/webterm:latest
    container_name: webterm
    restart: unless-stopped
    ports:
      - "8443:8443"
    volumes:
      - ./config.yaml:/config.yaml
      - webterm-data:/data
    environment:
      - TZ=Asia/Shanghai

volumes:
  webterm-data:
```

启动：

```bash
docker compose up -d
```

## 源码编译

### 前置要求

- Go 1.21+
- Node.js 18+
- Make

### 编译步骤

```bash
# 克隆仓库
git clone https://github.com/xufanchn/webterm.git
cd webterm

# 一键编译（自动构建前端并嵌入二进制）
make build

# 运行
./webterm
```

### 开发模式

```bash
# 启动后端（热重载）
make dev

# 单独启动前端开发服务器（另一终端）
make dev-ui
```

前端开发服务器默认运行在 `http://localhost:5173`，API 请求会被代理到 Go 后端 `http://localhost:8443`。

## 配置

WebTerm 使用 YAML 格式的配置文件，示例如下：

```yaml
server:
  port: 8443
  host: "0.0.0.0"

auth:
  jwt_secret: "your-secret-key"
  admin_password: "your-admin-password"

database:
  path: "/data/webterm.db"
```

详细配置选项请参考 [项目文档](https://github.com/xufanchn/webterm)。
