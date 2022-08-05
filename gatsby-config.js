module.exports = {
  siteMetadata: {
    title: `gatsby-prohealth`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "fsmkvrbp",
      "dataset": "dev"
    }
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`
]
};