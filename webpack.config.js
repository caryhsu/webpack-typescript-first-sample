var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [__dirname + '/src/app.ts'],
    output: {
        path: __dirname + "/build",
        filename: 'app.js'
    },
    module: {
        loaders:[{
            test: /\.ts$/,
            include: path.resolve(__dirname, "src"),
            loaders: 'ts-loader'
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    }
};
