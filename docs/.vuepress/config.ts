import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "迟到的博客",
      description: "迟到的博客"
    },
    "/en/" : {
      lang: "en-US",
      title: "Chidao_Douyu's Blog",
      description: "Chidao_Douyu's Blog"
    },
  },
  title: "Chidao_Douyu's Blog",
  description: "Chidao_Douyu's Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
