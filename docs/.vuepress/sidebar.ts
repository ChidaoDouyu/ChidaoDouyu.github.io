import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/culture/politics/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    { text: "返回上级目录", link: "/culture/"},
    {
      text: "思想政治",
      link: "/culture/politics/",
      children: "structure",
    },
  ],

  // "/culture/politics/": [
  //   { text: "主页", icon: "fas fa-home", link: "/" },
  //   { text: "返回上级目录", link: "/culture/"},
  //   {
  //     text: "思想政治",
  //     link: "/culture/politics/",
  //     children: [
  //       { text: "必修三 政治与法治", link: "formal3" },
  //       { text: "必修四 哲学与文化", link: "formal4" },
  //       { text: "选必一 当代国际政治与经济", link: "optional1" },
  //       { text: "选必二 法律与生活", link: "optional2" },
  //       { text: " 选必三 逻辑与思维", link: "optional3" },
  //     ],
  //   },
  // ],
  
  "/culture/physics/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    { text: "返回上级目录", link: "/culture/"},
    {
      text: "物理",
      link: "/culture/physics/",
      children: "structure",
    },
  ],
  "/culture/maths/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    { text: "返回上级目录", link: "/culture/"},
    {
      text: "数学",
      link: "/culture/maths/",
      children: "structure",
    },
  ],
  "/": [
    { text: "主页", icon: "fas fa-home", link: "/" },
    {
      text: "高中文化课",
      icon: "fas fa-book-open",
      prefix: "culture/",
      link: "culture/",
      children: [
        { text: "数学", link: "maths/" },
        // { text: "英语", link: "english/" },
        { text: "物理", link: "physics/" },
        { text: "思想政治", link: "politics/" },
      ],
    },
    {
      text: "代码经验",
      icon: "fas fa-globe",
      prefix: "code/",
      link: "code/",
      children: "structure",
    },
    {
      text: "计算机经验",
      icon: "fas fa-laptop",
      prefix: "computer/",
      link: "computer/",
      children: "structure",
    },
    { 
      text: "其他文章", 
      icon: "fas fa-file-lines", 
      prefix: "other/", 
      link: "other/",
      children: "structure",
    },
    { text: "个人介绍", icon: "fas fa-circle-info", link: "intro" },
  ],
});
