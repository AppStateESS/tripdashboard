/* global __dirname, exports */
exports.path = require('path')
exports.APP_DIR = exports.path.resolve(__dirname, 'javascript')

exports.entry = {
  Search: exports.APP_DIR + '/Search/index.jsx',
  Setting: exports.APP_DIR + '/Setting/index.jsx',
}
