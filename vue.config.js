module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/haolifa': {
        target: 'http://127.0.0.1/',
        // target: 'http://47.105.36.56:8080/',
        // target: 'http://localhost:8088/',
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [],
  },
};