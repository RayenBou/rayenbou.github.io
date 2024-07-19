// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RayenBou",
  tagline: "RayenBou's personal blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://rayenbou.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RayenBou", // Usually your GitHub org/user name.
  projectName: "rayenbou.github.io", // Usually your repo name.

  onBrokenAnchors: "throw",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   routeBasePath: "/", // Sert les documents à la racine du site
        //   sidebarPath: require.resolve("./sidebars.js"), // Assurez-vous d'avoir un fichier sidebars.js configuré
        //   slug: "/",
        //   homePageId: "home", // L'ID du document pour la page d'accueil, correspondant à l'ID dans le frontmatter de home.md
        // },
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          blogSidebarTitle: "Posts",
          blogSidebarCount: "ALL",
          showLastUpdateTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // routeBasePath: "/",
          //   editUrl:
          //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/blog/tags/**"],
          filename: "sitemap.xml",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "Rayen Boumaza (RayenBou)",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.linkedin.com/in/rayen-boumaza/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://github.com/RayenBou",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Lien",
            items: [
              {
                label: "Blog",
                to: "/blog/une-intro",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rayen Boumaza, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
