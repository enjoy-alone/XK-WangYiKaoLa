module.exports = {
  devServer: {
    proxy: {
      '/home': {
        target: 'https://m-element.kaola.com',
        changeOrigin: true
      },
      '/h5': {
        target: 'https://m.kaola.com',
        changeOrigin: true
      },
      '': {
        target: 'https://m.kaola.com',
        changeOrigin: true
      },
    }
  }
}