---
article: true
title: Linux指令教程
---
声明：测试系统版本为Debian12

## 基本教程：
apt install \<command> 安装相应指令，可以让debian使用ubuntu指令
如遇到command not found可尝试安装再使用
-h -help或--h --help参数可以查看指令参数 例如apt --help

## 具体指令教程

### 查看架构
arch
uname -m


### 文件管理
**转到目录**
cd /opt/xx

**新建目录**
mkdir [options] \<name> 新建目录 -m手动配置权限 -p递归创建/opt/user/username/abc

**列出文件**
ls -a 显示所有文件和目录
ls -d 显示所有目录
ls -l 显示所有文件和目录及其信息
ls -t 按照修改时间排序
ls -A 不列出.和..的-a 
ls -F 在列出的文件名后加一个符号(可执行档加*,目录加/)
ls -r 递归显示目录及其子目录所有文件和目录

**移动文件**
mv /opt/xx /opt 将本目录下的xx移动到opt中
mv ./xx yy 将本目录下的xx改名为yy

**删除文件**
rm xx.txt 删除指定文件
rm -f *xx* 无需确认并删除所有文件名中带有xx的文件
rm -f -r xx 无需确认并删除xx

**压缩**
zip -v output.zip file1 file2 ...

**查看压缩包内容**
unzip * -l

**解压**
unzip -d \<directory> * -v
https://www.runoob.com/linux/linux-comm-unzip.html

### 搜索
find \<directory> -name \<name>

### 网络传输
scp -r \<from> \<to> 将源地址的/opt/xx文件下载到目标地址的路径
例:scp -r C:\xx root@123.123.123.123:/opt 
例:scp -r root@123.123.123.123:/opt/xx C:\

wget \<url>

### 用户管理
useradd [options] \<username> 新建用户 -d \<directory>指定主目录 -d \<directory> -m \<directory>新建目录并指定为主目录
passwd [options] \<username> 设置密码 -l禁用账号 -u启用账号 -f下次登录时修改密码
su \<username> 切换用户
userdel [options] \<username> 删除用户 -r删除用户并删除主目录
usermod [options] \<username> 修改用户



### 脚本管理
**授权**
chmod u+x xx\.sh

**运行**
chmod +x ./xx.sh 将本目录下的xx.sh指令化
./xx.sh 运行xx\.sh


### 安装
apt update
apt install

apt-get update
apt-get install


### 编辑
vi ./xx.txt

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
netstat -anp| grep \<stat> 查看端口的占用状态
如果提示command not found，执行apt install net-tools
fuser -v -n \<tcp/udp> \<stat> 查看占用端口的进程
如果提示command not found，执行apt install psmisc
>输出结果：
               USER PID ACCESS COMMAND
\<stat>/\<tcp/udp>:zhu 1154 F... java

kill \<PID> 杀死特定进程(强制杀死用参数-9)
ps 查看所有进程 检查端口号即可发现进程已杀死

## 其他程序教程
### screen
screen -ls 列出所有会话
screen -R \<name> 接入会话
screen -S \<name> 新建会话
screen -S \<name> -X quit 关闭会话
screen -d \<name> 退出会话
在会话内Ctrl+A进入快捷键模式 A切换最近 D退出会话 K关闭窗口 :命令行


### ts3启动
useradd teamspeak 新建用户teamspeak
找到ts3目录
chmod +x ./teamspeak3_startscript.sh 
./teamspeak3_startscript.sh start 

### git
查看全局配置git config -l --global
#### 克隆Github仓库
如果提示输入Github账号密码请查看克隆链接形式
如果为https请停止使用并回到仓库页改用ssh形式链接
#### 使用ssh秘钥
git config --global user.signingkey ~/.ssh/id_ed25519.pub

### MCAManager
systemctl start mcsm-{daemon,web}.service
systemctl stop mcsm-{daemon,web}.service
systemctl restart mcsm-{daemon,web}.service

### Alist
```
局域网：http://example.com:5244/
公网： http://example.com:5244/
配置文件：/opt/alist/data/config.json
```

### 从零开始：Lsky图床配合Alist实现图片上云
参考文章：https://juejin.cn/post/7231740010986242104
作者：Yoga0815
来源：稀土掘金

作者保留一切权利。
Author reserves all rights.
#### 一、部署Alist
1. 人帅心善的主播给你们把下载命令搬过来了。(于2025/2/13编辑)
`curl -fsSL "https://alist.nn.ci/v3.sh" -o v3.sh && bash v3.sh`
2. 跟随脚本引导，进行部署
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
3. 部署结束后，将展示的信息记下(默认端口为5244)。建议直接将随机密码改为常用密码。
注：离开该页面后也可通过alist命令配置Alist
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
4. 在浏览器进入Alist网页。例如：https://example.com:5244
5. 初次进入会这样：
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
6. 这样这样那样那样开始添加新云盘
7. 选择云盘运营商
8. 挂载位置选择/image即可
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
9. 按照[**Alist文档指示**](https://alist.nn.ci/zh/guide/)进行配置，告诉你的运营商你是你
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
10. 这样那样后调整账号权限，勾选**WebDav的什么和什么**两项即可。
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图

#### 二、部署Lsky图床
本步骤无特殊要求。
有问题请自行搜索解答。

#### 三、修改Nginx配置项
0. 提前下载nginx
1. 打开/etc/nginx/nginx.json
2. 在http框内添加以下内容
```
    #Lsky Pro | Image Hub
    server {
        listen 80;
        # listen 443 ssl;

        # HTTPS 需要指定 SSL/TLS 证书路径
        # 证书自行准备
        # ssl_certificate 公钥;
        # ssl_certificate_key 私钥;
        # ssl_session_cache shared:SSL:1m;
        # ssl_session_timeout 5m;

        server_name 本机域名;

        # 转发图床服务请求
        # 转发端口替换为Lsky外部端口
        location / {
            proxy_pass http://本机域名:转发端口;
            proxy_read_timeout 600s;
        }

        # 转发 AList 图片直链访问请求
        # 直链端口替换为Alist端口
        location /img {
            proxy_pass http://本机域名:直链端口/dav/image;
            proxy_read_timeout 600s;
        }
    }
```

#### 四、配置图床存储策略
1. 新建存储策略
2. 修改策略配置

|配置项|内容|说明|
|---|---|---|
|名称|xx云盘||
|储存策略|WebDav||
|访问域名|example.com:转发端口/img||
|连接地址|example.com:直链端口||
|认证方式|Basic|不可以换其他的|
|路径前缀|/dav/image||
|用户名|admin|此处的用户必须有WebDav访问权限！跟着步骤做就不会漏。详见[一、部署Alist](#一-部署Alist)|
|密码|设定的密码|忘记了就用`alist`引导脚本重置一下|

图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
3. 选中全部用户组后保存
图图图图图图图图图图图图图图图图图图图图图图图图图图图图图图
4. 配置默认本地存储策略。取消选中所有用户组。(或删除本地存储策略)
5. 配置完成！