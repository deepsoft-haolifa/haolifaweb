module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.105.36.56:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/haolifa'
        }
      }
    }
  },
  configureWebpack: {
    plugins: []
  }
}
