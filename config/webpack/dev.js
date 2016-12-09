import path from 'path'
import webpack from 'webpack'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const entry = [
  'babel-polyfill',
  'webpack-hot-middleware/client',
  'react-hot-loader/patch',
  './src/cabinet.js',
]

export const output = {
  path: '/',
  filename: '[name].js',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules\/(?!avrs-ui)/,
      query: {
        babelrc: false,
        presets: [
          'es2015',
          'stage-0',
          'react',
        ],
        plugins: [
          ['elementum-tools/lib/babel/plugin', {
            alias: {
              AvrsCabinet: 'src',
              AvrsUI: 'node_modules/avrs-ui/src',
            },
            extract: true,
          }],
          'react-hot-loader/babel',
          'transform-runtime',
        ],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.jss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
    {
      test: /\.po$/,
      loader: 'json-loader!po-loader?format=jed1.x',
    },
  ],
}

export const plugins = [
  new CssResolvePlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.ejs'),
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
  new webpack.DefinePlugin({
    'process.env.API_URL': JSON.stringify('http://api.stage.aversis.net/'),
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          nested(),
          camelCase(),
        ],
      },
      postcss: {
        plugins: autoprefixer({
          browsers: [
            '>2%',
            'last 2 versions',
          ],
        }),
      },
    },
  }),
]
