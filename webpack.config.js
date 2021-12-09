const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: (process.env.NODE_ENV = "production"),
  entry: {
    build_1: [
      "./public/js/index.js",
      "./public/js/jQuery.js",
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "compiled.js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  module: {
    // rules
    rules: [
      // javascript files rules
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // css loader rule
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }],
      },
      // saas loader rule
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // image loader rulls
      {
        test: /\.(svg|ico|png|jpg|jpeg|webp|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "compiled.css",
    }),
    new HtmlWebpackPlugin({
      title: "raybags.com",
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
    open: true,
    hot: true,
    watchContentBase: true,
  },
};
