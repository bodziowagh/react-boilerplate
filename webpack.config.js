const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distPath = path.resolve(__dirname, "dist");

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,    // TODO: reconsider, without it you could use es modules
            loader: [
                "babel-loader",
                "tslint-loader"
            ],
        }, {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            inject: "body",
            template: path.resolve(__dirname, "src/index.html"),
            filename: distPath + "/index.html",

            title: "React boilerplate app"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        filename: "index.js",
        path: distPath
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 8081,
    },
    performance: {
        hints: false
    }
};
