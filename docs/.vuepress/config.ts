import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ChidaoDouyu's Blog",
  description: "ChidaoDouyu's Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
