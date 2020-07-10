const webpack = require("webpack");
const pack = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  outpu: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true, //muestra los errores del navegador
    historyApiFallback: true, //Se guardan todos los llamados a la ruta principal
    disableHostCheck: true,
    headers: { "Acces-Control-Allow-Origin": "*" },
    https: false, //s ultimas tres lineas son necesarias para abrir las incidencias dentro del webpack
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    //Indica que archivos van al handle desde el webpack
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel_loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
