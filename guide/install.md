# 安装部署

## 环境要求

- Linux / macOS / Windows
- 无需 Node.js、Python 等运行时依赖

## 配置文件

```yaml
# config.yaml
port: 8080                    # 服务端口
encryption_key: "your-32-byte-hex-key"  # AES-256 加密密钥（32字节 hex）
log_level: info               # 日志级别: debug / info / warn / error
```

生成随机密钥：

```bash
openssl rand -hex 16
```

配置文件权限建议设为 `600`：

```bash
chmod 600 config.yaml
```

## 二进制部署

从 [GitHub Releases](https://github.com/xufanchn/webterm/releases) 下载对应平台的二进制文件：

| 平台 | 文件 |
|---|---|
| Linux amd64 | `webterm_linux_amd64.tar.gz` |
| Linux arm64 | `webterm_linux_arm64.tar.gz` |
| macOS amd64 | `webterm_darwin_amd64.tar.gz` |
| macOS arm64 | `webterm_darwin_arm64.tar.gz` |

```bash
tar -xzf webterm_linux_amd64.tar.gz
./webterm -config config.yaml
```

## Docker 部署

### Docker Run

```bash
docker run -d \
  --name webterm \
  -p 8080:8080 \
  -v $(pwd)/config.yaml:/app/config.yaml \
  -v $(pwd)/data:/app/data \
  ghcr.io/xufanchn/webterm:latest
```

### Docker Compose

```yaml
version: '3'
services:
  webterm:
    image: ghcr.io/xufanchn/webterm:latest
    ports:
      - "8080:8080"
    volumes:
      - ./config.yaml:/app/config.yaml
      - ./data:/app/data
    restart: unless-stopped
```

## 数据存储

WebTerm 使用 SQLite 存储数据，包括用户、连接配置、分组信息。数据库文件 `webterm.db` 默认在二进制同目录下。

建议通过 Docker volume 持久化数据目录，或定期备份 `webterm.db` 和 `config.yaml`。

## 反向代理

### Nginx

```nginx
server {
    listen 80;
    server_name webterm.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

WebSocket 连接需要 Upgrade 头，上述配置已包含。
