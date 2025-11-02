/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "BLOG TODAY",
    description: "blog",
    siteUrl: "https://blogtoday2025.netlify.app",
    image: "/og-image.png"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: `${__dirname}/content/posts/` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "news", path: `${__dirname}/content/news/` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "projects", path: `${__dirname}/content/projects/` },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata { siteUrl }
            }
            allSitePage {
              nodes { path }
            }
          }
        `,
      },
    },
  ],
};
