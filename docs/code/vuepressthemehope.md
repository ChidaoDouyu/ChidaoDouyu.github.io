---
article: true
title: Vuepress-Theme-Hope 搭建记录
order: 1
---

>[!info]
>本文仅供有一定代码基础的学习者！
>遇见不懂的指令请自行搜索

> [!warning]
> 本页面开发进度低，请优先查阅官方文档

<!-- more -->

## 项目初始化

### 创建项目
[VuepressThemeHope - 快速上手](https://theme-hope.vuejs.press/zh/get-started/)

### 添加自动构建部署文件

>[!info]
>以github github-pages为例

1. 设置正确的 [base](https://vuejs.press/zh/reference/config.html#base) 选项。
::: tabs#base

@tab 发布到`https://<USERNAME>.github.io/`

你可以省略这一步，因为 `base` 默认就是 `"/"` 。


@tab 发布到`https://<USERNAME>.github.io/<REPO>/`

假设你的仓库地址是 `https://github.com/<USERNAME>/<REPO>`
则将 `base` 设置为 `"/<REPO>/"`

:::


2. 使用 Github Actions 以实现自动部署
创建 `.github/workflows/docs.yml` 文件来配置工作流。


:::details 点击展开配置样例

``` yaml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          # 选择要使用的 pnpm 版本
          version: 8
          # 使用 pnpm 安装依赖
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # 选择要使用的 node 版本
          node-version: 20
          # 缓存 pnpm 依赖
          cache: pnpm

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v4
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

:::



>[!info]
>请参考 [Github Pages 官方指南](https://pages.github.com/) 以获取更多信息

### 默认配置文件

- 目录：`<docs>/.vuepress/*.ts`
- 结构：
  `config.ts`
  ``` ts
  import theme from "./theme.js"
  ```
  `theme.ts`
  ``` ts
  import navbar from "./navbar.js";
  import sidebar from "./sidebar.js"
  ```
- 配置方法：
在 `theme.ts` 中配置 **除navbar和sidebar外** 的主题配置
在 `navbar.ts` 中配置导航栏配置
在 `sidebar.ts` 中配置侧边栏配置

## 侧边栏开发

- 默认配置文件目录：\<docs>/.vuepress/sidebar.ts
- 结构：
``` ts
export default sidebar({
  "/": [ // "/"指在所有页面显示该侧边栏(可被其他配置覆盖)
    "", // 主页
    {
      text: "文章", // 配置显示文本
      icon: "", // 可选，配置图标
      prefix: "articles/" // 配置前缀，写目录名即可
      children: [
        {text: "文章1",link: "article1"} // 索引至article1.md
      ]
    },
    {text: "自我介绍",link: "intro/"} // 在link后加/将索引至该目录主页(index或readme)
  ]
  "culture/": [ // "culture/"指在culture目录下显示该侧边栏
    "", // 主页
    "/", // culture目录主页
    {...}
  ]
})
```
- 若要按目录结构自动生成侧边栏，将侧边栏数组替换为"structure"即可
``` ts
"/": "structure",
{text: "***", prefix: "fuck/", link: "fuck/", children: "structure"}
```

## 导航栏开发

- 默认配置文件目录：`<docs>/.vuepress/navbar.ts`

## 编写方法
### 折叠框
实现：vuepress-theme-hope 自带的提示容器
配置：`theme.markdown.hint: true`
示例：
:::details 点击展开配置样例
```
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  markdown: {
    // 禁用提示容器
    hint: false,
  },
});
```
:::
语法：
```
::: details 自定义标题
content
:::
```
详细信息见[Vuepress-theme-hope-指南-提示容器](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)

## 更新
`pnpm dlx vp-update`


## 更多信息
>[!warning]
>如何更改项目文件根目录：
>将所有配置文件中的 `src` 全部改为 `<docs>`
>配置文件包含 `package.json`, `tsconfig.json`, `.gitignore`, `<docs>/.vuepress/config.ts`, `<docs>/.vuepress/navbar.ts`, `<docs>/.vuepress/sidebar.ts`, `<docs>/.vuepress/theme.ts`, `.github/workflows/deploy-docs.yml`等