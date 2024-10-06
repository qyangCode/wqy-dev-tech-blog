import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Linux 学习笔记",
      collapsible: true,
      link: "md/linux/",
      icon: "laptop-code",
      prefix: "md/linux/",
      children: ["1.md","2.md","3.md","4.md","5.md","6.md","7.md"],
    },
    {
      text: "个人博客搭建",
      collapsible: true,
      link: "md/blog/",
      icon: "blog",
      prefix: "md/blog/",
      children: ["1.md","2.md"],
    },
    {
      text: "服务部署基本知识",
      collapsible: true,
      link: "md/dev-ops/",
      icon: "network-wired",
      prefix: "md/dev-ops/",
      children: ["1.md","2.md","3.md","4.md","5.md"],
    },
    {
      text: "java 基础",
      link: "md/java/",
      collapsible: true,
      icon: "coffee",
      prefix: "md/java/",
      children: ["1.md","2.md","3.md","4.md"],
    },
    {
      text: "SpringBoot",
      collapsible: true,
      link: "md/springboot/",
      icon: "terminal",
      prefix: "md/springboot/",
      children: ["1.md","2.md","3.md","4.md","5.md"],
    },
    {
      text: "随笔",
      collapsible: true,
      link: "md/school/",
      icon: "laptop-code",
      prefix: "md/school/",
      children: ["1.md"],
    },
  ],
});
