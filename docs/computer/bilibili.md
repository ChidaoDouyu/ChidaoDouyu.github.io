---
article: true
title: B站直播姬分区遮罩解决办法
order: -998
---

> [!warning]
> 本文有时效性，随时可能失效

本文章论述了B站直播姬分区遮罩的解决办法
<!-- more -->
路径livehime\4.58.1.6249\data\plugins\bililive-filters\effects
找到mask.effect
修改float region的内容
将if条件删除，调整为return 0.0