const path = require("path")

module.exports = (env = {}) => {
  return {
    entry: "./src/index.js",
    mode: env.production ? "production" : "development",
    devtool: "inline-source-maps",
    devServer: {
      contentBase: "./dist",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          use: "eslint-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=100000',
        },
        {
          test: /\.cow$/,
          use: [
            "file-loader",
            {
              loader: "string-replace-loader",
              options: {
                search: '"EOC"',
                replace: "EOC"
              },
            },
          ]
        },
      ],
    },
    resolve: {
      extensions: [".js", ".css"],
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
        ".cows": "cowsay/cows"
      },
    },
  }
}
