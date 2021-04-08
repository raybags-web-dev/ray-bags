const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    built: "./js/app.js",
    build2: "./js/jQuery.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "compiled.js",
  },
  uniqueName: "my website",

  module: {
    rules: [],
  },
};
