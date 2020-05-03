require("dotenv").config({
  path: ".env.${process.env.NODE_ENV}",
})

module.exports = {
  siteMetadata: {
    title: `Gurdjieff foundation Toronto`,
    subTitle: "Society for Traditional Studies",
    description: `Gurdjieff foundation Toronto internet presence.`,
    keywords: [`gurdjieff`, `4thway`],
    author: `Gurdjieff foundation Toronto`,
    siteUrl: `https://changethis.later`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
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
        singleTypes: [`home-page`, "contact-us"],
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
    // "gatsby-plugin-offline", // TODO: uncomment this for production
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Aclonica`,
            variants: [`400`, `700`],
          },
          {
            family: `Merienda`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}