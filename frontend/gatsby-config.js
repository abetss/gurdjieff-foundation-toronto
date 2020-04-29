require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gurdjieff foundation Toronto`,
    subTitle: "Society for Traditional Studies",
    description: `Gurdjieff foundation Toronto internet presence.`,
    keywords: [`gurdjieff`, `4thway`],
    author: `Gurdjieff foundation Toronto`,
    siteUrl: `https://changethis.later`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            type: `internal`, //internal or anchor
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article"],
        singleTypes: [`home-page`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    // "gatsby-plugin-offline",
    "gatsby-plugin-theme-ui",
  ],
}
