module.exports = {
  title: "Chao Zhang",
  description: "Welcome to My Blog",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "blackcat.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    mode: "dark", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    noFoundPageByTencent: false,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "About",
        link: "/about/",
        icon: "reco-account",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/chaozhangdev",
            icon: "reco-github",
          },
          {
            text: "Linkedin",
            link: "https://www.linkedin.com/in/chao-zhang-727b8b15b/",
            icon: "reco-linkedin",
          },
          {
            text: "Email",
            link: "mailto:chaozhangdev@gmail.com",
            icon: "reco-mail",
          },
        ],
      },
      // {
      //   text: "CodingFun",
      //   link: "https://www.codingfunedu.com/",
      //   icon: "reco-coding",
      // },
    ],
    // subSidebar: "auto",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    //   {
    //     title: "vuepress-theme-reco",
    //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
    //     avatar:
    //       "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: "https://vuepress-theme-reco.recoluan.com",
    //   },
    // ],
    // logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    // lastUpdated: "Last Updated",
    author: "Chao Zhang",
    authorAvatar: "/coding-cat.png",
    // record: "xxxx",
    startYear: "2018",
  },
  plugins: [
    // "@vuepress-reco/vuepress-plugin-kan-ban-niang"
  ],
  markdown: {
    lineNumbers: true,
  },
};
