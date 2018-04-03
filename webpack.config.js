/**
 * Created by lonelydawn on 2018-04-03.
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // 静态资源
    contentBase: './static',
    historyApiFallback: true,
    inline: true,
    compress: true,
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourcemap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourcemap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: 'url-loader?limit=8192&name=images/[hash].[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Generator',
      filename: './index.html',
      template: 'src/index.html',
      favicon: 'favicon.ico',
      inject: 'body',
      hash: true
    }),
    // 引入以作为其他插件的依赖
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // }),
    new ExtractTextPlugin('style.css')
  ]
}