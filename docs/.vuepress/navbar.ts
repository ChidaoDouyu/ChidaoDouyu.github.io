import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "高中文化课",
        icon: "pen-to-square",
        prefix: "culture/",
        children:[
          "politics"
        ],
      },
    ],
  }
]);
