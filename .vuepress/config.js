module.exports = {
  title: "Chao Zhang",
  description: "A blog to record every single beautiful day",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/xxx.jpg",
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
    mode: "dark", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
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
        text: "Docs",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    subSidebar: "auto",
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
    logo: "/xxx.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Chao Zhang",
    authorAvatar: "/chao.jpg",
    record: "xxxx",
    startYear: "2021",
  },
  plugins: [
    // "@vuepress-reco/vuepress-plugin-kan-ban-niang"
  ],
  markdown: {
    lineNumbers: true,
  },
};
