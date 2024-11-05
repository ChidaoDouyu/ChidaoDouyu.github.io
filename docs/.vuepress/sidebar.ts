import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    {
      text: "高中文化课",
      icon: "fas fa-book-open",
      prefix: "culture/",
      link: "culture/",
      children: [
        { text: "数学", link: "maths/" },
        { text: "语文", link: "chinese/" },
        { text: "英语", link: "english/" },
        { text: "物理", link: "physics/" },
        { text: "化学", link: "chemistry/" },
        { text: "思想政治", link: "politics/" },
      ],
    },
    {
      text: "网页搭建经验",
      icon: "fas fa-globe",
      prefix: "webbuild/",
      link: "webbuild/",
      children: [{ text: "Vuepress-Theme-Hope", link: "vuepressthemehope" }],
    },
    {
      text: "计算机经验",
      icon: "fas fa-laptop",
      prefix: "computer/",
      link: "computer/",
      children: [{ text: "验机教程", link: "checknew" }],
    },
    { text: "个人介绍", icon: "fas fa-circle-info", link: "intro" },
  ],

  "/culture/politics/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    { text: "高中文化课", icon: "fas fa-book-open", link: "culture/" },
    { text: "必修一 中国特色社会主义", link: "formal1" },
    { text: "必修二 经济与社会", link: "formal2" },
    { text: "必修三 政治与法治", link: "formal3" },
    { text: "必修四 哲学与文化", link: "formal4" },
    { text: "选必一 当代国际政治与经济", link: "optional1" },
    { text: "选必二 法律与生活", link: "optional2" },
    { text: "选必三 逻辑与思维", link: "optional3" },
  ],
  // "webbuild/":[
  //   "/",
  //   "",
  //   {text: "Vuepress-Theme-Hope", link:"vuepressthemehope"}
  // ],
});
