import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "高中文化课",
    icon: "pen-to-square",
    prefix: "culture/",
    children:[
      {text:"物理", link:"physics/"},
      {text: "思想政治", link: "politics/"}
    ],
  },
  {
    text: "网站搭建经验",
    link: "webbuild/"
  },
  {
    text: "计算机经验",
    link: "computer/"
  }
]);
