const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const isLocal = !process.env.NODE_BUILD_ENV;

const chainWebpack = (config, isServer) => {
  const imagesUrlLoader = () => {
    if (isProduction) {
      if (isLocal) {
        return {
          // name: 'images/pageimgs/[name][hash:4].[ext]',
          name: 'images/[path][name].[ext]',
        };
      }

      return {
        publicPath: 'https://cdn.jsdelivr.net/gh/liddhappy/vuepress/',
        outputPath: undefined,
        emitFile: false,
      };
    }
    return {};
  };

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
      limit: 10000,
      name: '[path][name].[ext]',
      ...imagesUrlLoader(),
    });

  config.resolve.alias
    .set('@@', resolve(__dirname, process.cwd()))
    .set('@', resolve(__dirname, '../../'))
    .set('@img', resolve(__dirname, '../public/images'));
};

const configureWebpack = (config, isServer) => {
  if (isProduction) {
    let externals = {};
    if (!isServer) {
      externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
      };
    }
    // config.externals = externals;
    return {
      externals,
      // 如果没有部署到github page,不能使用下面的配置
      // output: {
      //   publicPath: 'https://cdn.jsdelivr.net/gh/catlair/catlair.github.io/',
      // },
    };
  }
};

module.exports = {
  chainWebpack,
  configureWebpack,
};
