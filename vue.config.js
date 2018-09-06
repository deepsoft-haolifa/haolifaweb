module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/haolifa': {
        target: 'http://47.105.36.56:8080/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: []
  }
}
