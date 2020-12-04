const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
    alias: {
      '@Actions': path.resolve(__dirname, 'src/actions'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Reducers': path.resolve(__dirname, 'src/reducers'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Sagas': path.resolve(__dirname, 'src/sagas'),
      '@Store': path.resolve(__dirname, 'src/store'),
      '@Images': path.resolve(__dirname, 'src/images'),
      '@Uilib': path.resolve(__dirname, 'src/uilib'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Services': path.resolve(__dirname, 'src/services'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        loader: 'url-loader',
        options: {
          limit: 16384,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
};
