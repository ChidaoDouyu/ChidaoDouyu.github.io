---
article: true
order: -999
---
# 从零开始：Lsky图床配合Alist实现图片上云
参考文章：https://juejin.cn/post/7231740010986242104
作者：Yoga0815
来源：稀土掘金

众所周知，大家都有属于自己的图床，但很少有人有足够的硬盘空间存放图床中的大量图片文件。而Alist就可以救各位于水火之中。
Alist是一款网盘列表软件。可用于代理网盘，建立本地与网盘的通路，将图片代理到网盘中，充分利用网盘空间。
本教程将以Lsky图床为例，逐步讲解部署过程，实现图片上云。

## 一、部署Alist
### 通过脚本自动安装Alist
1. 人帅心善的主播给你们把下载命令搬过来了。(于2025/2/13编辑)
`curl -fsSL "https://alist.nn.ci/v3.sh" -o v3.sh && bash v3.sh`
2. 跟随脚本引导，进行部署
![](https://alist.nn.ci/img/guide/v3-install.png)
3. 部署结束后，将展示的信息记下(默认端口为5244)。建议直接将随机密码改为常用密码。
注：离开该页面后也可通过alist命令配置Alist
![](http://pic.puremcs.top/img/2025/02/13/67ae070f124de.png)
图源: [憨憨博客](https://blog.hanhanz.top)
### 配置Alist挂载网盘
4. 在浏览器进入Alist网页。例如：https://example.com:5244
![](http://pic.puremcs.top/img/2025/02/13/67ae08467845c.png)
图源: [憨憨博客](https://blog.hanhanz.top)
5. 输入第2步记录的账号密码，进入系统。
![](http://pic.puremcs.top/img/2025/02/13/67ae14b7e8cb8.png)
6. 点击下方管理，左侧储存，开始添加新云盘
![](http://pic.puremcs.top/img/2025/02/13/67ae14f094647.jpg)
6. 选择云盘运营商 挂载位置选择/image即可
![](http://pic.puremcs.top/img/2025/02/13/67ae1576ab3ef.png)
8. 按照[**Alist文档指示**](https://alist.nn.ci/zh/guide/)进行剩余配置，告诉你的运营商你是你
![](http://pic.puremcs.top/img/2025/02/13/67ae15cac7487.png)
### 赋予WebDav权限
9. 调整账号权限，勾选**WebDav读取和管理**两项即可。
![](http://pic.puremcs.top/img/2025/02/13/67ae16326bf65.png)

## 二、部署Lsky图床
测试机通过1Panel面板应用商店自动部署。
鉴于图床不唯一，本教程不作解释，请自行选择你需要的图床。
有问题请自行搜索。

## 三、修改Nginx配置项
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

## 四、配置图床存储策略
### 创建云盘策略
1. 新建存储策略
2. 修改策略配置并选中用户组

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

![](http://pic.puremcs.top/img/2025/02/14/67ae177b60c23.png)
**图片仅作示例，请按实际情况填写。**
### 取消默认策略
3. 配置默认本地存储策略。取消选中所有用户组。(或删除本地存储策略)
![](http://pic.puremcs.top/img/2025/02/14/67ae1805182ec.png)
4. 配置完成！
