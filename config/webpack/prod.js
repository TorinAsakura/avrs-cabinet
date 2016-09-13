import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CssResolvePlugin from 'elementum/lib/webpack/css-resolve-plugin'

export const entry = [
  'babel-polyfill',
  './src/cabinet.js',
]

export const output = {
  path: path.join(__dirname, '..', '..', 'public'),
  filename: '[name].js',
}

export const postcss = [
  autoprefixer({
    browsers: [
      '>2%',
      'last 2 versions',
    ],
  }),
]

export const module = {
  loaders: [
    {
      test: /\.js?$/,
      loader: 'elementum/lib/webpack/loader',
      exclude: /node_modules/,
    },
    {
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        babelrc: false,
        presets: [
          'es2015',
          'stage-0',
          'react',
        ],
        plugins: [
          ['elementum/lib/babel/plugin', {
            rootPath: './src',
          }],
          'transform-runtime',
        ],
      },
    },
    {
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract({
        notExtractLoader: 'style-loader',
        loader: 'css-loader!postcss-loader',
      }),
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]',
    },
    {
      test: /\.po$/,
      loader: 'json!po?format=jed1.x',
    },
  ],
}

export const plugins = [
  new CssResolvePlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.ejs'),
  }),
  new ExtractTextPlugin('[name].css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  }),
  new webpack.optimize.UglifyJsPlugin(),
]
