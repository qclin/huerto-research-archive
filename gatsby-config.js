require("dotenv").config()

const sourceS3 = {
  resolve: "gatsby-source-s3-image",
  options: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_REGION,
    protocol: process.env.S3_PROTOCOL,
  },
}

const sourceAirTable = {
  resolve: "gatsby-source-airtable",
  options: {
    apiKey: process.env.AIRTABLE_API_KEY,
    concurrency: 5,
    tables: [
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: 'BODY',
        tableLinks: ['MEDIA',  'RECIPE']
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: 'MEDIA',
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: 'RECIPE',
      },
    ]
  }
}

module.exports = {
  siteMetadata: {
    title: "huerto-research-archive",
    siteUrl: "https://keen-engelbart-f1d99e.netlify.app",
    description: "",
    author: "Studio Hold",
    authorLink: "https://theholding.page/",
    openGraph: {
      title: "",
      description:
        "",
      url: "",
      image: "",
    },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/files/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    sourceS3,
    sourceAirTable,
  ],
};