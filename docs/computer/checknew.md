---
article: true
---

# 验机教程

提前准备U盘 启动时跳过联网 运行软件检查硬件
<!-- more -->

> [!warning]
> 本页面尚未编辑完成

跳过联网步骤,在提示你选择wifi的界面按下Shift+F10,调出命令提示符,输入taskmgr,回车,打开任务管理器,在详细信息中找到OOBENetworkConnectionFlow.exe并杀掉进程,直接跳过这一步骤

此后验机,通过u盘等方式在电脑上运行图吧工具箱

重点运行软件:
AIDA64(全能),CPUZ,GPUZ,ASSSDBenchmark(硬盘),Memtest(内存测试，运行后才能获得信息)

AIDA64和HWINFO64都可以检查所有重要设备:内存,屏幕,网卡,硬盘,CPU,显卡,电源(用你的肉眼)的参数是否符合原厂标配
尤其是一定要重点检测前四项，最容易偷工减料
严格检查品牌，型号，编号是否对得上
还有屏幕抽奖的传统艺能
出现对不上的情况一定要敢于对质，因为对不上代表着这个机子甚至是翻新机。
除了这些还要用ASSSDBenchmark额外检查硬盘的通电时间是否超出100小时,读写数据量是否超出6T,电源的损耗程度是否超出5%,这些内容代表是否为新机,可以作为证据保留.

如果因为各种原因导致不放心,则可以进一步进行烤机,使用AIDA64进行CPU与内存的压力测试,使用Furmark进行显卡压力测试.
两个同时运行，开始双烤，压榨笔记本性能
在测试进行期间,使用CoreTemp检测cpu温度,使用GPUZ检测显卡温度.
这些测试不是为了测定性能释放，而是为了检测散热是否有硬伤与媒体机不符，检测散热风扇是否损坏空转或不转，检测是否有过热脱焊等稳定性问题，出厂硅脂是否过关。
虽然有点伤机子，但只会有这一次，而且比之后通过游戏表现来测定机器有效且有意义的多。

小贴士:CPUZ中没有温度记录,因此需要CoreTemp,而GPUZ的温度检测记录在"Advanced"选项卡中,仔细一点就能找到.
打开烤机软件后把它们放到前台可以时刻紧盯着.
GPUZ的窗口不知什么时候就会因bug消失.

AIDA64的进阶教程可以参考这一篇blog.
https://post.smzdm.com/p/a785w8vg/

全部完成这些东西,确定电脑是你满意的新机以后,可以确认收货