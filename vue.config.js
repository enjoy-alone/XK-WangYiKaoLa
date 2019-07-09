module.exports = {
  devServer: {
    proxy: {
      '/home': {
        target: 'https://m-element.kaola.com',
        changeOrigin: true
      }
    }
  }
}