const path = require("path");
const pathPrefix = "/hello-data-wiki/";
// Change me
const siteMetadata = {
  title: "Hello data!",
  shortName: "Hello data!",
  description:
    "TLDR notes for data science",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://rmgpanw.github.io/hello-data-wiki/",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["summary", "category", "latest", "tag"],
        nav: [
          {
            title: "github",
            url: "https://github.com/rmgpanw/hello-data-wiki",
          },
        ],
        editUrl:
          "https://github.com/rmgpanw/hello-data-wiki/tree/main/wiki/",
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
