import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/md/resume",
  {
    text: "学习笔记",
    icon: "book",
    link: "/md",
  },
]);
