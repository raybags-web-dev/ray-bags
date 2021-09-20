const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: (process.env.NODE_ENV = "production"),
  entry: {
    build_1: [
      "./public/js/index.js",
      "./public/js/jQuery.js",
      "./public/js/mentainance.js",
      "/public/js/data.js",
      "/public/js/particles/particles.min.js",
      "/public/js/particles/app.js",
      "/public/js/utils.js",
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "compiled.js",
  },
  module: {
    rules: [
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

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "compiled.css",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
  },
};
