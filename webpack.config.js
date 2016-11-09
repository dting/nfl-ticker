const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const webpackMerge = require('webpack-merge');

const paths = require('./config/paths');

const env = process.env.NODE_ENV || 'development';
const vendor = [
  'moment',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-api-middleware',
  'redux-thunk',
];

const common = {
  context: paths.clientDirectory,
  entry: {
    vendor,
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
  },
  postcss: () => [postcssImport, autoprefixer],
};

switch(process.env.NODE_ENV) {
  case 'production':
    module.exports = webpackMerge(common, require('./config/webpack.config.prod'));
    break;
  case 'development':
  default:
    module.exports = webpackMerge(common, require('./config/webpack.config.dev'));
}
