const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "./src/scripts/index.js"),
  },
  output: {
    path: Path.join(__dirname, "./build"),
    filename: "js/[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: Path.resolve(__dirname, "./public"), to: "public" },
        {
          from: "node_modules/deviceful/public",
          to: "public",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: Path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
};
