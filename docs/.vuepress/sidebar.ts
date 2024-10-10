import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: [
        { text: "高中文化课",link: "cultrue/", prefix: "cultrue/",children: [
          { text: "数学", link: "maths"},
          { text: "语文", link: "chinese"},
          { text: "英语", link: "english"},
          { text: "物理", link: "physics"},
          { text: "化学", link: "chemistry"},
          { text: "思想政治", link: "politics"}
        ]}
        
      ],
    },
    "intro"
  ],
});
