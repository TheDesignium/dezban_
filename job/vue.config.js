module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Design/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}