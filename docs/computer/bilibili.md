---
article: true
title: B站直播姬分区遮罩解决办法
order: -998
---

路径livehime\4.58.1.6249\data\plugins\bililive-filters\effects
找到mask.effect
修改float region的内容
将if条件删除，调整为return 0.0