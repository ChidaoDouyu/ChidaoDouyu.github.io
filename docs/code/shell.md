---
article: true
title: Linux命令教程
cover: http://pic.puremcs.top:40027/i/2025/07/07/686ba75c03ad2.png
---

> [!warning]
> 本教程仅供具有一定代码基础的爱好者学习借鉴
> 对于执行任何操作所造成的后果, 作者不予负责

> [!info]
> 本文随作者使用而更新

作者使用系统版本：Debian 12

<!-- more -->

## 基本教程
`apt install <program>` 安装相应命令，可以让debian使用ubuntu命令
如遇到command not found可尝试安装再使用
-help 或 --help参数可以查看命令参数
> 例: `apt --help`

## 原生命令教程

### 查看架构
`arch`
`uname -m`


### 文件管理
**转到目录**
`cd /opt/xx`

**新建目录**
`mkdir [options] <name>` 新建目录
> `-m` 手动配置权限
> `-p` 递归创建

**列出文件**
`ls [options] <pattern>` 打印指定目录下的文件和目录
> `-A` 打印所有文件和目录(包括隐藏)
> `-l` 打印元信息
> `-d` 打印所有目录
> `-F` 在列出的文件名后加一个符号(可执行档加*,目录加/)
> `-r` 递归打印
> `-t` 按照修改时间排序

**移动文件**
`mv <from> <to>` 移动文件
`mv ./xyz0 xyz1` 实现改名

**删除文件**
`rm [options] <pattern>` 删除指定文件
> `-f` 强制
> `-r` 递归(删除目录须添加)

**输出文件**
`cat <file>` 输出文件到控制台
`cat file0 > file1` 使用 file0 覆盖 file1
`cat file0 >> file1` 将 file0 追加到 file1 末尾


**压缩**
`zip [options] <output.zip> <pattern>` 压缩文件或目录
> `-v` 显示详细信息
> `-r` 递归(压缩目录须添加)

**查看压缩包内容**
`unzip -l *`
> `-l` 列出内容，但不解压
> `-t` 测试文件完整性，但不解压

**解压**
`unzip -v <archive.zip>`
> 教程：[菜鸟教程](https://www.runoob.com/linux/linux-comm-unzip.html)
> `-v` 显示详细信息
> `-d <dictionary>` 将解压缩的文件放入指定的目录
> `-x <pattern>` 解压时排除指定的文件或目录

**搜索**
`find <directory> -name <name>`

### 网络传输
`scp -r <from> <to>` 将源地址的/opt/xx文件下载到目标地址的路径
> 例:
> `scp -r C:\xx root@123.123.123.123:/opt `
> `scp -r root@123.123.123.123:/opt/xx C:\`

`wget <url>`

### 用户管理
`useradd [options] <username>` 新建用户
> `-d <directory>`指定主目录 `-d <directory> -m <directory>`新建目录并指定为主目录

`passwd [options] <username>` 设置密码
> `-l` 禁用账号 `-u` 启用账号 `-f` 下次登录时修改密码

`su <username>` 切换用户
`userdel [options] <username>` 删除用户
> `-r` 删除用户并删除主目录

`usermod [options] <username>` 修改用户



### 脚本管理
**授权**
`chmod u+x xx.sh`赋予脚本运行权限

**运行**
`./xx.sh` 运行xx.sh


### 安装
`apt update`
`apt install`

`apt-get update`
`apt-get install`


### 编辑
`vi ./xx.txt`

> vi基本上可以分为三种模式，分别是一般模式、编辑模式和命令行模式，各模式的功能区分如下：
**一般模式**：
 当以vi打开一个文件就直接进入一般模式了(这是默认的模式)。在这个模式中，你可以使用 上下左右按键来移动光标，你可以使用删除字符或删除整行来处理文件内容，也可以使用复制、粘贴来处理你的文件数据。
**编辑模式**：
 在一般模式中可以进行删除、复制、粘贴等的操作，但是却无法编辑文件的内容，只有当到你按下【i, I, o,O, a, A, r, R】等任何一个字母之后才会进入编辑模式。这时候屏幕的左下方会出现【INSERT或 REPLACE】的字样，此时才可以进行编辑。而如果要回到一般模式时，则必须要按下【Esc】即可退出编辑模式。   
**命令行模式**：
 输入【 : / ? 】三个中的任何一个，就可以将光标移动到最底下那一行。在这个模式中，可以提供查找、读取、存盘、替换字符、离开vi、显示行号等的动作则是在此模式中完成的。
**常用命令(仅限命令行模式)**
 :w 保存
 :q 离开vi
 :q! 不保存并强制离开
 :x或:wq 保存后离开
 :ZZ 若更改则保存后离开，若未更改则无动作
 :w xx.txt 另存为

### 释放端口
`netstat -anp| grep <stat>` 查看端口的占用状态 如果提示command not found，执行`apt install net-tools`
`fuser -v -n <tcp/udp> <stat>` 查看占用端口的进程 如果提示command not found，执行`apt install psmisc`
>输出结果：
>```
>               USER PID ACCESS COMMAND
><stat>/<tcp/udp>:zhu 1154 F... java
>```

`kill <PID>` 杀死特定进程(强制杀死用参数-9)
`ps` 查看所有进程 检查端口号即可发现进程已杀死

## 其他程序教程
### screen
`screen -ls` 列出所有会话
`screen -R <name>` 接入会话
`screen -S <name>` 新建会话
`screen -S <name>` -X quit 关闭会话
`screen -d <name>` 退出会话
在会话内Ctrl+A进入快捷键模式 A切换最近 D退出会话 K关闭窗口 :命令行


### ts3启动
`useradd teamspeak` 新建用户teamspeak
`cd <directory>` 进入ts3目录
`chmod +x ./teamspeak3_startscript.sh `
`./teamspeak3_startscript.sh start `

### MCAManager
`systemctl start mcsm-{daemon,web}.service`
`systemctl stop mcsm-{daemon,web}.service`
`systemctl restart mcsm-{daemon,web}.service`

### Nginx
`nginx -t` 测试配置文件
`nginx -s reload` 重启

### Docker
注：大部分Docker命令都需要sudo权限
#### 镜像管理
`docker pull <registry>/<namespace>/<image>:<version>` 拉取镜像
> `--platform=arm64` 指定CPU架构

`docker images` 列出所有镜像
`docker rmi <image>` 删除指定镜像

#### 容器管理
`docker create <image>` 使用指定镜像创建容器但不运行
`docker run <image>` 使用指定镜像创建并启动容器
> `-d` 在后台启动容器
> `-p 30081:80` 将宿主机的30081端口映射到容器的80端口
> `-v <宿主机目录>:<容器内目录>` 绑定挂载：将宿主机指定目录挂载到容器中
> `-v <存储空间卷名>:<容器内目录>` 命名卷挂载：将指定存储空间挂载到容器中
> 命名卷挂载初次使用时会自动初始化；而绑定挂载须手动初始化。
> `-e <变量>` 附加环境变量
> `--name <name>` 自定义容器名称
> `-it` 允许进入容器控制台
> `--rm` 当容器停止时自动删除容器
> `--restart unless-stopped` 异常自动重启
> `--network <name>` 指定网络

`docker stop <docker>` 停止指定容器
`docker start <docker>` 启动指定容器 
`docker ps -a` 列出所有容器 (包括已停止和运行中)
`docker rm <docker>` 删除容器
> `-f` 强制删除运行中的容器  

`docker inspect <docker>` 查看容器信息
`docker logs -f <docker>` 查看容器日志(实时刷新)

#### 容器使用
`docker exec <docker> 命令` 在指定容器内执行命令
`docker exec -it <docker> /bin/sh` 进入指定容器控制台 (本质：在Dockername新建终端并执行/bin/sh)
`exit` 退出

#### 命名卷管理
`docker volume create <name>` 创建卷
`docker volume inspect <name>` 查看卷信息
`docker volume list` 列出所有卷
`docker volume remove <name>` 删除指定卷
`docker volume prune -a` 删除所有正未被使用的卷

#### 网络管理
`docker network list` 列出所有子网
`docker network create <name>` 创建子网
`docker network rm <name>` 删除指定子网

> [!note]
> - 桥接模式(默认)
> Docker容器默认网络均为桥接模式
> 容器网络空间与宿主机隔离
> - 桥接子网
> 创建容器时指定子网后，仅同一子网内的容器可以相互访问
> - Host模式
> 容器共享宿主机的网络环境，无需映射端口即可直接访问容器
> - none模式
> 不联网


### MySQL
`mysql -u <user> -p` 使用密码登录作为指定用户登录
`use <database>` 指定操作的数据库
> 若输入命令回车后出现->并无法跳出的情况，请输入`;`并回车
> 原因：部分mysql命令须以;结尾，命令无法闭合

### 正则表达式
#### 表达式
`^` 行首
`$` 行尾

#### 删除空行
匹配`(\n)^\s*$`
替换为空格

#### 保留原内容
匹配字段中通过`()`捕获表达式
替换字段中通过`\i`指定捕获的第`i`个表达式

### pnpm
`pnpm list` 列出包
`rm -rf ./node_modules` 删除node_modules