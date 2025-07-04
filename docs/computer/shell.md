---
article: true
title: Linux指令教程
---
> [!caution]
> 本教程仅供具有一定代码基础的爱好者学习借鉴
> 对于执行任何操作所造成的后果, 作者不予负责

> [!info]
> 测试系统版本为Debian12

## 基本教程
`apt install <command>` 安装相应指令，可以让debian使用ubuntu指令
如遇到command not found可尝试安装再使用
-help 或 --help参数可以查看指令参数
> 例: `apt --help`

## 具体指令教程

### 查看架构
`arch`
`uname -m`


### 文件管理
**转到目录**
`cd /opt/xx`

**新建目录**
`mkdir [options] <name>` 新建目录
> -m手动配置权限 -p递归创建(/opt/user/username/abc)

**列出文件**
`ls -a` 显示所有文件和目录
`ls -d` 显示所有目录
`ls -l` 显示所有文件和目录及其信息
`ls -t` 按照修改时间排序
`ls -A` 不列出.和..的-a 
`ls -F` 在列出的文件名后加一个符号(可执行档加*,目录加/)
`ls -r` 递归显示目录及其子目录所有文件和目录

**移动文件**
`mv /opt/xx /opt` 将本目录下的xx移动到opt中
`mv ./xx yy` 将本目录下的xx改名为yy

**删除文件**
`rm xx.txt` 删除指定文件
`rm -f *xx*` 无需确认并删除所有文件名中带有xx的文件
`rm -f -r xx` 无需确认并删除xx

**输出文件**
`cat file` 输出文件到控制台
`cat file0 >> file1` 将file0内容追加到file1末尾


**压缩**
`zip -v output.zip file1 file2 ...` 压缩文件
`zip -r -v output.zip directory` 压缩目录

**查看压缩包内容**
`unzip * -l`

**解压**
`unzip -d <directory> * -v`
> 教程：[菜鸟教程](https://www.runoob.com/linux/linux-comm-unzip.html)

### 搜索
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
`cd <path>` 进入ts3目录
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
`docker run <image> -d` 使用指定镜像创建并**后台**运行容器
> `-p 30081:80` 将容器的80端口映射到宿主机的30081端口
> `-v <宿主机目录>:<容器内目录>` 绑定挂载：将宿主机指定目录挂载到容器中
> `-v <存储空间卷名>:<容器内目录>` 命名卷挂载：将指定存储空间挂载到容器中
> 命名卷挂载初次使用时会自动初始化；而绑定挂载须手动初始化。
> `-e <变量>` 附加环境变量
> `--name <name>` 自定义容器名称
`docker ps` 列出所有正在运行的容器
`docker rm <Docker>` 删除容器
> `-f` 强制删除运行中的容器  
`docker exec -it <Dockername> /bin/sh` 进入容器Dockername (在Dockername新建终端并执行/bin/sh)

#### 命名卷管理
`docker volume create <Name>` 创建卷
`docker volume inspect <Name>` 查看卷信息
`docker volume list` 列出所有卷
`docker volume remove <Name>` 删除指定卷
`docker volume prune -a` 删除所有正未被使用的卷

### MySQL
`mysql -u <username> -p` 作为username使用密码登录
`use <pro>` 设置本次默认使用的数据库为pro
> 若输入指令回车后出现->并无法跳出的情况，请输入`;`并回车
> 原因：部分mysql指令须以;结尾，指令无法闭合

### 正则表达式
#### 表达式
`^` 行首
`$` 行尾

#### 删除空行
匹配`(\n)^\s*$`
替换为空格

#### 保留原内容
匹配字段中通过`()`捕获表达式
替换字段中通过`\i`指定捕获的第i个表达式