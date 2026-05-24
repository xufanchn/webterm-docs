# 快速开始

WebTerm 是一个基于 Web 的运维管理工具，通过浏览器即可管理 SSH 终端、SFTP 文件和 MySQL 数据库。

## 部署方式

### 二进制部署

```bash
# 下载最新版本
wget https://github.com/xufanchn/webterm/releases/latest/download/webterm_linux_amd64.tar.gz
tar -xzf webterm_linux_amd64.tar.gz

# 创建配置文件
cat > config.yaml << EOF
port: 8080
encryption_key: $(openssl rand -hex 16)
EOF
chmod 600 config.yaml

# 启动
./webterm -config config.yaml
```

### Docker 部署

```bash
docker run -d \
  --name webterm \
  -p 8080:8080 \
  -v $(pwd)/config.yaml:/app/config.yaml \
  -v $(pwd)/data:/app/data \
  ghcr.io/xufanchn/webterm:latest
```

## 登录

启动后访问 `http://localhost:8080`，默认账号 `admin` / `admin`，登录后请立即修改密码。

## 下一步

- [安装部署](/guide/install) — 详细安装指南和配置说明
- [SSH 终端](/guide/ssh) — 终端功能使用指南
- [SFTP 文件管理](/guide/sftp) — 文件管理操作指南
- [数据库管理](/guide/database) — 数据库查询与管理
