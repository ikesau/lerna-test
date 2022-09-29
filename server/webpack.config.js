const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
