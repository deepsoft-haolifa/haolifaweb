module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.example.org',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: []
  }
}
