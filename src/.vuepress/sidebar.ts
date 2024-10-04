import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "Lottery 项目开发日志",
    //   icon: "laptop-code",
    //   prefix: "md/dev-log/",
    //   children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    // },
    {
      text: "Linux 学习笔记",
      icon: "laptop-code",
      prefix: "md/linux/",
      children: ["README.md"],
    },
    {
      text: "个人博客搭建",
      icon: "blog",
      prefix: "md/blog/",
      children: ["README.md"],
    },
    {
      text: "服务部署基本知识",
      icon: "network-wired",
      prefix: "md/dev-ops/",
      children: ["README.md"],
    },
    {
      text: "java 基础",
      icon: "coffee",
      prefix: "md/java/",
      children: ["README.md"],
    },
    {
      text: "SpringBoot",
      icon: "terminal",
      prefix: "md/springboot/",
      children: ["README.md"],
    },
    {
      text: "随笔",
      icon: "laptop-code",
      prefix: "md/other/",
      children: ["README.md"],
    },
  ],
});
