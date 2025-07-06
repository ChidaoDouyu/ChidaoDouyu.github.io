import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {lang: "zh-CN"},
    "/en/" : {
      lang: "en-US",
      title: "Chidao_Douyu's Blog",
      description: "Chidao_Douyu's Blog"
    }
  },
  title: "迟到的博客",
  description: "迟到的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
