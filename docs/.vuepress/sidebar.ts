import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: [
        { text: "高中文化课", prefix: "culture/", children: [
          { text: "数学", link: "maths/"},
          { text: "语文", link: "chinese/"},
          { text: "英语", link: "english/"},
          { text: "物理", link: "physics/"},
          { text: "化学", link: "chemistry/"},
          { text: "思想政治", link: "politics/"}
        ]}
        
      ],
    },
    "intro"
  ],
  "/posts/culture/politics/":[
    "/",
    {text: "高中文化课",link: "/posts/culture/"},
    "",
    {text: "必修二 经济与社会", link: "formal2"},
    {text: "必修三 政治与法治", link: "formal3"}
  ],
  "/posts/webbuild/":[
    "/",
    "",
    {text: "Vuepress-Theme-Hope", link:"vuepressthemehope"}
  ],
});
