module.exports = {
  theme: "onen",
  themeConfig: {
    navbar: [
      {
        type: "home",
        title: "Home",
        href: "/",
      },
      {
        type: "user",
        title: "About",
        href: "/about",
      },
      {
        type: "github",
        title: "Github",
        href: "https://github.com/torish14",
      },
    ],
    menu: [
      {
        text: "postA",
        link: "/post/postA",
        children: [
          { text: "postA1", link: "/postA-1" },
          { text: "postA2", link: "/postA-2" },
        ],
      },
      {
        text: "postB",
        link: "/post/postB",
        children: [
          { text: "postB1", link: "/postB-1" },
          { text: "postB2", link: "/postB-2" },
        ],
      },
    ],
  },
};
