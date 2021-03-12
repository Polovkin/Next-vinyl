require('dotenv').config()
const { i18n } = require('./next-i18next.config')



module.exports = {
  env: {
    API_URL: process.env.API_URL,
    FORM_URL: process.env.FORM_URL
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "/assets/scss/core/global.scss";`,
  },
  i18n,
  images: {
    domains: ['localhost','admin.polova.fun']
  }
}
