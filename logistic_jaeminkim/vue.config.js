// vue.config.js
module.exports = {
  lintOnSave: true,
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false
  }
}
