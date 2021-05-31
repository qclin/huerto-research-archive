require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: "huerto-research-archive",
    siteUrl: `https://keen-engelbart-f1d99e.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5, 
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `BODY`,
            tableLinks: [`MEDIA`]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `MEDIA`,
          },
        ]
      }
    }, {

    }
  ],
};