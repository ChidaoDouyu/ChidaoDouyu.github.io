import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import ENnavbar from "./ennavbar.js";
import ENsidebar from "./ensidebar.js";

export default hopeTheme({

  // 多语言配置
  locales: {
    // 英语
    "/en/": {
      blog: {
        description: "A casual coding hobbyists"
      },
      navbar: ENnavbar,
      sidebar: ENsidebar,
    }
  },

  hostname: "http://blog.puremcs.top",

  author: {
    name: "ChidaoDouyu",
    url: "https://github.com/ChidaoDouyu",
    email: "chidaodouyu@qq.com",
  },

  favicon: "http://pic.puremcs.top/i/2025/07/06/686a97a34be90.jpg",

  logo: "logo.jpg",

  repo: "ChidaoDouyu/ChidaoDouyu.github.io",

  docsDir: "docs",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 主题 Markdown 选项
  markdown: {
    // 支持github风格的md格式 (GitHub Flavored Markdown)
    // GFM 需要 mathjax-full 来支持tex格式
    gfm: true,

    // 支持github风格的警告容器
    alert: true,

    // 支持荧光笔标记 ==xxx==
    mark: true,

    // 支持上下角标 ^xxx^ ~xxx~
    sup: true,
    sub: true,

    // 支持剧透 !!xxx!!
    spoiler: true,

    // 支持图片描述
    // figure: true,

    // 图片懒加载
    imgLazyload: true,

    // 图片标记 (用于支持黑色白色主题不同图片)
    imgMark: true,

    // 支持数学公式 默认使用katex/mathjax
    math: {
      type: "katex",
      copy: false
    },

    // 支持plantuml图表
    plantuml: true,
    
    // 支持代码案例
    demo: true,

    // 开启组件
    component: true,

    // 支持markdown导入文件功能
    include: true,

    // 支持选项卡功能
    tabs: true,
    codeTabs: true,

    // 代码块渲染器设定
    highlighter: {
      // 折叠的行
      collapsedLines: 8
    },
  },

  // 页脚
  footer: "",
  displayFooter: true,
  license: "<a href=\"https:\/\/creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1\" target=\"_blank\" rel=\"license noopener noreferrer\" style=\"display:inline-block;\">CC BY-NC-ND 4.0<img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1\" alt=\"\"><img style=\"height:22px!important;margin-left:3px;vertical-align:text-bottom;\" src=\"https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1\" alt=\"\">",

  pageInfo: ["Author", "Date", "Word", "Category", "Tag", "ReadingTime"],

  // 博客相关
  blog: {
    description: "一个代码轻度爱好者",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/ChidaoDouyu",
      BiliBili: "https://space.bilibili.com/471352250",
      Email: "mailto:ChidaoDouyu@qq.com",
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: {
      excerptLength: 0
    },
  
    // 文章结尾显示页面元信息
    git: true,

    // 复制自动添加CopyRight信息
    copyright: {
      global: true,
      triggerLength: 20,
      author: "ChidaoDouyu",
      license: "CC BY-NC-ND 4.0"
    },

    // 关闭图片预览
    photoSwipe: false,


    // 自动生成目录
    // catalog: {
    //   frontmatter: (path) => ({
    //     pageInfo: false,
    //     lastUpdated: false,
    //     comment: false
    //   })
    // },

    catalog: {
      frontmatter: (path) => {
        if (path.startsWith("/en/")) return { title: "Catalog", pageInfo: false, lastUpdated: false, comment: false };
        if (path.startsWith("/culture/physics/")) return { title:"物理", pageInfo: false, lastUpdated: false, comment: false };
        if (path.startsWith("/culture/maths/")) return { title:"数学", pageInfo: false, lastUpdated: false, comment: false };
        return { title: "目录", pageInfo: false, lastUpdated: false, comment: false }
      },
      
    },

    comment: {
      provider: "Giscus",
      repo: "ChidaoDouyu/ChidaoDouyu.github.io",
      repoId: "R_kgDOM90dcw",
      category: "Announcements",
      categoryId: "DIC_kwDOM90dc84CjY2L",
    },

    icon: {
      assets: [
        "fontawesome-with-brands", 
        "fontawesome"
      ]
    },

    components: {
      components: ["Badge", "BiliBili", "PDF", "Share", "SiteInfo", "VPCard", "VidStack"],
      componentOptions: {
        share: {
          services: ['qq', 'weibo', 'facebook', 'twitter', 'reddit', 'pinterest', 'snapchat', 'tumblr', 'telegram', 'whatsapp', 'line', 'linkedin', 'douban', 'buffer', 'wordpress', 'flipboard', 'evernote', 'qrcode', 'email', 'messenger', 'sms']
        }
      }
    },


    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      

      // 在启用之前安装 chart.js
      // chart: true,

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
);
