module.exports = {
  lineNumbers: true,
  plugins: {},
  extendMarkdown: (md) => {
    md.use(require('markdown-it-disable-url-encode'));
  },
};
