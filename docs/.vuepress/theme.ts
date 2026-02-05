import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import ENnavbar from "./ennavbar.js";
import ENsidebar from "./ensidebar.js";

import getCatalogFrontmatter from "./catalogFrontmatter.js";

export default hopeTheme({

  // 多语言配置
  locales: {
    "/en/": {
      blog: {
        description: "a bad coder"
      },
      navbar: ENnavbar,
      sidebar: ENsidebar,
    }
  },

  // 站点配置
  hostname: "http://chidaodouyu.github.io", // 域名
  repo: "ChidaoDouyu/ChidaoDouyu.github.io", // 仓库
  docsDir: "docs", // 根目录
  favicon: 'logo.jpg', // 站点logo

  // 主页配置
  logo: "logo.jpg", // 主页logo
  blog: {
    description: "一个代码杂鱼", 
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/ChidaoDouyu",
      BiliBili: "https://space.bilibili.com/471352250",
      Email: "mailto:ChidaoDouyu@qq.com",
    },
  },

  // 文章默认作者配置
  author: {
    name: "ChidaoDouyu", 
    url: "https://github.com/ChidaoDouyu", 
    email: "chidaodouyu@qq.com"
  },

  // 页面元数据
  pageInfo: ["Author", "Date", "Word", "Category", "Tag", "ReadingTime"], // 页面元信息
  metaLocales: {editLink: "在 GitHub 上编辑此页"}, // "编辑此页"显示的字符串

  // 导航栏与侧边栏
  navbar,
  sidebar,

  // 页脚
  footer: "",
  displayFooter: true,
  license: "<a href=\"https:\/\/creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1\" target=\"_blank\" rel=\"license noopener noreferrer\" style=\"display:inline-block;\">CC BY-NC-ND 4.0<img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1\" alt=\"\">",


  // 主题 Markdown 选项
  markdown: {
    // Markdown扩展支持
    gfm: true, // GitHub Flavored Markdown, 需要 mathjax-full 来支持tex格式
    alert: true, // github风格的警告容器
    mark: true, // 荧光笔标记 ==xxx==
    sup: true, // 上角标 ^xxx^ 
    sub: true, // 下角标 ~xxx~
    spoiler: true, // 剧透 !!xxx!!
    include: true, // 导入文件

    // 图片支持
    figure: true, // 图片描述
    imgLazyload: true, // 懒加载
    imgMark: true, // 支持黑白主题不同图片
    imgSize: true, // 尺寸

    // 数学公式支持
    math: {
      type: "katex",
      copy: false
    },

    // 图表支持
    // chart: true,
    // echarts: true,
    // mermaid: true,
    plantuml: true, 
    // markmap: true,
    // flowchart: true,

    // 代码案例支持
    demo: true,

    // 代码块渲染器支持
    highlighter: {
      collapsedLines: 8 // 8行以上折叠
    },

    // 组件支持
    component: true,

    // 选项卡功能支持
    tabs: true,
    codeTabs: true,
  },

  // 主题插件配置
  plugins: {
    // 图标配置
    icon: {assets: ["fontawesome-with-brands", "fontawesome"]},

    // 博客配置
    blog: {excerptLength: 0}, // 不自动生成摘要

    // 评论配置
    comment: {
      provider: "Giscus",
      repo: "ChidaoDouyu/ChidaoDouyu.github.io",
      repoId: "R_kgDOM90dcw",
      category: "Announcements",
      categoryId: "DIC_kwDOM90dc84CjY2L",
    },

    // 复制自动添加CopyRight信息
    copyright: {
      global: true,
      triggerLength: 20,
      author: "ChidaoDouyu",
      license: "CC BY-NC-ND 4.0"
    },

    // 自动生成目录
    catalog: {frontmatter: getCatalogFrontmatter},

    // 组件配置
    components: {
      // 启用组件
      components: ["VPCard", "BiliBili", "Badge", "Share"],
      componentOptions: {
        // share组件配置
        share: {services: ['qq', 'weibo', 'facebook', 'twitter', 'reddit', 'pinterest', 'snapchat', 'tumblr', 'telegram', 'whatsapp', 'line', 'linkedin', 'douban', 'buffer', 'wordpress', 'flipboard', 'evernote', 'qrcode', 'email', 'messenger', 'sms']}
      }
    },

    photoSwipe: false, // 关闭图片浏览
  },
});