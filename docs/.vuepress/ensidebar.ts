import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/en/": [
    { text: "Home", icon: "fas fa-home", link: "/en/" },
    {
      text: "Coding Experience",
      icon: "fas fa-laptop",
      prefix: "computer/",
      link: "computer/",
      children: "structure",
    },
    { 
      text: "Profile", 
      icon: "fas fa-circle-info", 
      link: "intro/" 
    },
  ],
  // "webbuild/":[
  //   "/",
  //   "",
  //   {text: "Vuepress-Theme-Hope", link:"vuepressthemehope"}
  // ],
});
