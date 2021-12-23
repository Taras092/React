const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { resolve } = require("path/posix");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "review_build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    port: 9000,
    hot: true,
  },
};
