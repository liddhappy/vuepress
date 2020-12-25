const themeConfig = require('./config/themeConfig');
const { configureWebpack, chainWebpack } = require('./config/webpack');
const markdown = require('./config/markdown');
const head = require('./config/head');
const plugins = require('./config/plugins');

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'reco',
  //导入其他配置
  plugins,
  head,
  markdown,
  themeConfig,
  configureWebpack,
  chainWebpack,
};
