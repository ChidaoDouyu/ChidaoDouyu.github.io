---
article: true
order: 1
---

# 验机教程


本文章重点讲述新机到手如何进行查验。
<!-- more -->

# 提前准备U盘
0. 准备U盘
[软件包下载](http://xz.puremcs.top/chfs/shared/CheckNewApps.zip)
[图吧工具箱2025下载](http://xz.puremcs.top/chfs/shared/%E5%9B%BE%E5%90%A7%E5%B7%A5%E5%85%B7%E7%AE%B12025.rar)
[memtest86安装部署教程](memtest86.md)

# 启动时跳过联网
1. 在提示你选择wifi的界面按下 Shift + F10, 调出命令提示符
2. 输入`taskmgr`, 回车, 打开任务管理器
3. 在详细信息中找到`OOBENetworkConnectionFlow.exe`并杀掉进程

# 运行软件
4. 运行图吧工具箱
重点软件: AIDA64(全能),CPUZ,GPUZ,ASSSDBenchmark(硬盘),Memtest(内存测试，运行后才能获得信息)
[AIDA64的进阶教程](https://post.smzdm.com/p/a785w8vg/)
[如何使用memtest86+测试电脑内存是否稳定？](https://www.bilibili.com/opus/823321479496073315)
5. 检查硬件参数 使用AIDA64和HWINFO64
重点检测内存、屏幕、网卡和硬盘。严格检查所有的硬件品牌、型号和编号。
出现对不上的情况一定要敢于对质，因为对不上代表着这个机子甚至是翻新机。
6. 检测硬盘 使用ASSSDBenchmark
检查硬盘的通电时间是否超出100小时,读写数据量是否超出6T,电源的损耗程度是否超出5%,这些内容代表是否为新机,可以作为证据保留.
7. 烤机 使用AIDA64进行CPU与内存的压力测试,使用Furmark进行显卡压力测试
同时使用CoreTemp检测cpu温度,使用GPUZ检测显卡温度.
目的：检测散热是否有硬伤与媒体机不符，检测散热风扇是否损坏空转或不转，检测是否有过热脱焊等稳定性问题，出厂硅脂是否过关。
虽然有点伤机子，但只会有这一次，而且比之后通过游戏表现来测定机器有效且有意义的多。
> [!tip]
> CPUZ中没有温度记录,因此需要CoreTemp,而GPUZ的温度检测记录在"Advanced"选项卡中,仔细一点就能找到.
> 打开烤机软件后把它们放到前台可以时刻紧盯着.
> GPUZ的窗口不知什么时候就会因bug消失.

8. 全部完成这些东西,确定电脑是你满意的新机以后,可以确认收货
9. 重启后即可重新进行激活
