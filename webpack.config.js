const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            inject: "body",
            template: path.resolve(__dirname, "src/index.html"),
            filename: path.resolve(__dirname, "dist/index.html"),

            title: "React boilerplate app"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    }
};
