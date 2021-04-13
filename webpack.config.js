const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./assets/js/script.js", // oot of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
  output: {
    path: path.resolve(__dirname, "dist"), // put your bundled code into a folder named dist, which is short for distribution
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  mode: "development", // By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically. We want our code to run in development mode
};
