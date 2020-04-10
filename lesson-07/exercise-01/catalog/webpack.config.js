let path = require("path");

let conf = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        publicPath: "dist/"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        }]
    }
};

module.exports = conf;