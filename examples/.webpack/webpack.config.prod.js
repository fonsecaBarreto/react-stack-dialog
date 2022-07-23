const path = require('path');
const {merge} = require('webpack-merge');
const config = require('./webpack.config');
const ROOT_DIRNAME = path.resolve(__dirname, '..');
module.exports = merge(config, {
    mode: 'production',
    devtool: "source-map",
    output: {
        filename: '[name].js',
        path: path.resolve(ROOT_DIRNAME, 'dist'),
        publicPath: './',
    },
})




