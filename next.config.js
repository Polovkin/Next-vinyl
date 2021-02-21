require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "/assets/scss/core/global.scss";`,
    }
}
