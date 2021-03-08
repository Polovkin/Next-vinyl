const { i18n } = require('./next-i18next.config')



module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "/assets/scss/core/global.scss";`,
  },
  i18n,

}
