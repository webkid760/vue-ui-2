const path = require('path')

module.exports = {
    // publicPath: '/', // 根域上下文目录
    // outputDir: 'dist', // 构建输出目录
    // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    // indexPath: 'index.html',
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (process.env.NODE_ENV !== 'production') { // 开发环境配置
            //config.devtool = 'cheap-module-eval-source-map'
        } else { // 生产环境配置

        }
         Object.assign(config, { // 开发生产共同配置，配置别名
             resolve: {
                 extensions: ['.js', '.vue', '.json'],
                 alias: {
                     'element-ui': path.resolve(__dirname),
                     //'element-ui/packages':path.resolve(__dirname,'./components'),
                }
            }
         })
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，
        if (process.env.NODE_ENV !== 'production') {
            // 本地开发配置
        } else {
            // 生产开发配置
        }

    config.module
      .rule('babel')
      .include
      .add(path.resolve(__dirname,'./components'))
      .end()


    }


}