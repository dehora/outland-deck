const path = require('path');
const webpack = require('webpack');

var jsPath  = 'app/assets/javascripts',
    srcPath = path.join(__dirname, 'app/assets/javascripts');

const settings = {

  target: 'web',

  entry:  {
    app: path.join(srcPath, 'app.jsx')
  },

  output: {
    filename: "[name].js",
    publicPath: "/",
    path:path.resolve(__dirname, jsPath, 'build')
  },

  resolve: {
    extensions: [".js", ".json", ".css"]
  },

  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ],
          plugins: [
            "transform-node-env-inline"
          ],
          env: {
            development: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ]
        }
      },
      {
        test: /\.scss$/,
        include: /\/app\/assets/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
};

module.exports = settings;