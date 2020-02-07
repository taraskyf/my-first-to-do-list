const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './script.js'),
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  watch: true
};
