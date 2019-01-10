const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let config = {
  entry: [
    '@babel/polyfill',
    './src/polyfill.ts',
    "./src/index.ts"
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".ts", ".js", ".vue", ".json"],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },

  devServer: {
    historyApiFallback: false,
    noInfo: false
  },
  performance: {
    hints: false
  },

  optimization: {
    minimize: false
  },

  externals: {
    vue: 'Vue',
    jquery: 'jQuery',
    'typed.js': 'Typed'
  },

  target: 'web',

  plugins: [

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css",

      filename: '[name].css',
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),

    new VueLoaderPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })

  ],

  module: {

    rules: [

      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["vue-hot-reload-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },


      {
        test: /\.vue$/,
        use: 'vue-loader'
        // include: path.resolve(__dirname, './src/')
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[path][name].[ext]',
        },
      },

      {
        test: /\.(ttf|otf|eot|svg|woff)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[path][name].[ext]',
        },
      }

    ]
  }
}

module.exports = config;