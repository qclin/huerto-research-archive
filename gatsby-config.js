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
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `BODY`,
            tableLinks: [`MEDIA`]
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
            // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.
            // separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            // separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
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