const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "/assets/scss/core/global.scss";`,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
