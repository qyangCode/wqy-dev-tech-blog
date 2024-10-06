import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/md/resume",
  {
    text: "知识笔记",
    icon: "book",
    // link: "/md/",
    children: [
      {
        text: "linux学习",
        icon: "laptop-code",
        link: "/md/linux/",
      },
      {
        text: "Java扩展",
        icon: "coffee",
        link: "/md/java/",
      },
    ],
  },
  {
    text: "知识实践",
    icon: "laptop-code",
    children: [
      {
        text: "学校实验",
        icon: "laptop-code",
        link: "/md/school/",
      },
      {
        text: "SpringBoot",
        icon: "terminal",
        link: "/md/springboot/",
      },
      {
        text: "服务部署",
        icon: "network-wired",
        link: "/md/dev-ops/",
      },
      {
        text: "个人博客搭建",
        icon: "blog",
        link: "/md/blog/",
      },
    ],
  },
]);
