import dotenv from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Test Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-local-plugin-two`,
      options: { myId: process.env.MY_ID }
    },
    `gatsby-local-plugin-one`
  ]
}

export default config
