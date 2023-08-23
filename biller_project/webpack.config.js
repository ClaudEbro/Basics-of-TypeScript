var path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },

    devServer: {
        allowedHosts: "all",
        compress: true,
        port: 8080,
    },

    devtool :"inline-source-map",

    module: {
        rules: [ {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
    }
};