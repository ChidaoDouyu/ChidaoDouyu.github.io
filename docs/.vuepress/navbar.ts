import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "高中文化课",
    icon: "pen-to-square",
    prefix: "culture/",
    children:[
      {text: "数学", link: "maths/"},
      {text: "物理", link: "physics/"},
      {text: "思想政治", link: "politics/"}
    ],
  },
  {
    text: "代码经验",
    link: "code/"
  },
  {
    text: "计算机经验",
    link: "computer/"
  },
  {
    text: "其他文章",
    link: "other/"
  }
]);
