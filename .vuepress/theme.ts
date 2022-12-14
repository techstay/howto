import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://howto.techstay.tech",

  author: {
    name: "techstay",
    url: "https://github.com/techstay",
  },
  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  iconAssets: "iconfont",

  logo: "",

  repo: "techstay/howto",

  docsDir: ".",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word",],

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,

      footer: "技能修炼",
      displayFooter: true,

      metaLocales: {
        editLink: "在Github上编辑此页",
      },
    },


  },

  plugins: {
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "techstay/howto",
      repoId: "R_kgDOIkbruA",
      category: "Announcements",
      categoryId: "DIC_kwDOIkbruM4CS8_7",
      mapping: "pathname",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      footnote: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
