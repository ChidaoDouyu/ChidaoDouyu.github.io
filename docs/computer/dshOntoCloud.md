---
article: true
title: 利用 dsh-pocket 的 DeepSeek Harness 上云方法
---

> [!important]
> DeepSeek Harness仍处于前期开发阶段，每个版本都可能推出破坏性更新，请注意本文使用的版本
> 且不建议对dsh或dsh-pocket进行升级

本文介绍了将DeepSeek Harness部署到云服务器上，通过浏览器访问，实现实时同步聊天内容、聊天记录的方法

<!-- more -->

## 安全提醒
> [!warning]
> 本文使用root用户启动systemd服务，有安全风险，请注意
> 本文将LLM语言大模型的调用开放到了公网，有安全风险，请注意保护服务器数据安全
> 本文使用http明文传输，有窃听风险，请注意改用https方式

> [!caution]
> 请定期更换并重置API

## 核心原理

- 将DSH部署到云服务器上
- `dsh-web`默认只放行本地浏览器对`127.0.0.1:3080`的访问，利用`dsh-pocket`插件转发，以实现公网访问
- DSH通过API-key访问DeepSeek API，自用的云服务器只访问API并转发对话

## 硬件需求
- 1C1G
- 公网IP或穿透技术(如NAT端口转发)

## 准备工作
- 部署`swap`
    ```bash
    # 安装命令: 略
    # 部署命令:
    fallocate -l 1G /swapfile 
    chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    ```
- `Node.js(>=24.0 or LTS 24)`

## 安装要点
- npm安装慢可以换镜像`npm config set registry https://registry.npmmirror.com`
- 首次启动`dsh web`会二次安装，在 `~/.dsh/profiles/web` 里用安装profile依赖，耐心等待

## 开始操作
1. 安装`DeepSeek Harness v0.1.5-rc2`及`dsh-pocket`插件`v2.10.6`
    ```bash
    npm install -g @deepseek-ai/dsh@0.1.5-rc2
    dsh plugin --profile web add dsh-pocket@2.10.6
    ```
    考虑到兼容性，本文指定了目前最新的可用版本。若要安装最新版，删除`@0.1.5-rc2`和`@2.10.6`即可
2. 配置`DeepSeek Harness`及`dsh-pocket`插件
    - API-key: 修改`~/.dsh/.credentials.yaml`
        ```yaml
        version: 1
        records:
          client-connection/browser-session:
            kind: grant
            payload:
              version: 1
              secret: ***
        refs:
          DEEPSEEK_API_KEY: sk-***
        ```
    - dsh-pocket
        修改`~/.dsh/dsh-pocket/settings.json`
        ```json
        {
        "lanAuthEnabled": false,
        "publicPinCustom": true
        }
        ```
        修改`~/.dsh/dsh-pocket/token`
        ```
        12345678 # 填写八位数字密码，不建议太简单！！！
        ```
3. 配置防火墙
    Debian的`ufw`默认会丢弃`dsh-pocket`的转发，所以需要进行配置
    ```bash
    ufw allow from 172.16.0.0/16 to any port 3080 proto tcp
    ```
    > [!warning]
    > 该部分涉及数据安全，请自行斟酌，充分搜索理解后再操作！
4. 远程访问
    - 若机器有公网ip，则直接访问`3081`端口
    - 若为NAT云服务器，在面板将公网`13081`映射到`3081`，公网通过`your.servers.global.ip:13081`访问即可
5. 启动测试
    运行`dsh web`测试通过公网能否访问即可

## 常驻运行（systemd）
1. 停止前台进程
    ```bash
    pkill -f 'dsh web'
    ```
2. 写服务
    其中ExecStart填入dsh安装的绝对路径，不知道的话运行`where dsh`
    ```bash
    cat > /etc/systemd/system/dsh.service <<'EOF'
    [Unit]
    Description=DeepSeek Harness web UI
    After=network.target

    [Service]
    Type=simple
    User=root
    WorkingDirectory=/root/.dsh
    ExecStart=.../dsh web --no-open
    Restart=on-failure
    RestartSec=5

    [Install]
    WantedBy=multi-user.target
    EOF
    ```
3. 加载并启动
    ```bash
    systemctl daemon-reload
    systemctl enable --now dsh
    ```
4. 验证
    ```bash
    systemctl status dsh --no-pager     # active (running) 即可
    ss -tlnp | grep 3080
    journalctl -u dsh -f                # 看日志（token 也在这）
    ```

## 命令速查

| 场景 | 命令 |
|---|---|
| 看服务状态 | `systemctl status dsh` |
| 实时日志 | `journalctl -u dsh -f` |
| 端口占用 | `ss -tlnp` |
| 内存/swap | `free -m` |

> [!important]
> 由于dsh仍处于前期开发阶段，有破坏性更新。在完成部署后，不建议对dsh或dsh-pocket进行升级
```bash
npm install -g @deepseek-ai/dsh && systemctl restart dsh # 升级dsh
dsh plugin --profile web update dsh-pocket && systemctl restart dsh # 升级 dsh-pocket
```

## 鸣谢
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
[shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket)

## 常见问题
### dsh-pocket不适配
编写本文时，`dsh=0.1.5-rc6`，`dsh-pocket=2.10.6`
查阅[项目页](https://github.com/shaobeichen/dsh-pocket)以获取最新版本的时间
可以通过issue页检索测试各个dsh版本
或通过时间对应测试dsh版本
### 会话能迁移吗
跨操作系统：不能
同操作系统：保证工作目录完全一致，将`~\.dsh\sessions`和`~\.dsh\storages`迁移即可