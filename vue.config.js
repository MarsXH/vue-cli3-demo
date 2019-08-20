const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const isProd = process.env.NODE_ENV === 'production'
console.log('Is current mode production?', isProd)

module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  publicPath: './',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: './static',

  // 默认起始页文件
  indexPath: 'index.html',

  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))

    config.output.chunkFilename(`js/[name].[chunkhash:8].js`)
  },
  
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('生产环境')
    } else if (process.env.NODE_ENV === 'development') {
      // 为开发环境修改配置...
      console.log('开发环境')
    } else if (process.env.NODE_ENV === 'testing') {
      // 为测试环境修改配置...
      console.log('测试环境')
    }
  },

  // 配置 webpack-dev-server 行为。
  devServer: {
    // host: 'localhost',
    // port: 8020,
    https: false,
    hotOnly: false,
    open: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/apiv1': {
        target: 'http://139.196.124.164:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/apiv1': ''
        }
      },
      '/apiv2': {
        target: 'http://abc.pwdev.club',
        changeOrigin: true,
        pathRewrite: {
          '^/apiv2': '/'
        }
      }
    }
  },
}
