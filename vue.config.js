module.exports = {
  devServer: {
    // 设置主机地址
    host: 'www.hongshanit.cn',
    // 设置默认端口
    port: 80,
    // 设置代理
    proxy: {
      /*
      changeOrigin:true
      /api/test
      http://localhost:5000/test
      changeOrigin:false
      /api/test
      http://localhost:5000/api/test
       */
      '/api': {
        // 设置目标 API 代理
        target: 'http://localhost:3000',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点改为目标URL
        changeOrigin: false
      }
    }
  }
}