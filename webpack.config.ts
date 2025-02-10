import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: {
    helper: "./src/helper/helper.ts",
    problem: "./src/boj/problem.ts",
    submit: "./src/boj/solve.ts",
    status: "./src/boj/status.ts",
    solve: "./src/boj/solve.ts",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      // { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
};

export default config;
