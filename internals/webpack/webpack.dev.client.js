const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = require('./webpack.base.config')({
    mode: 'development',
    entry: {
        app: path.resolve(process.cwd(), 'app/index.js')
    },
    output: {
        filename: 'assets/js/bundle.js'
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },

    plugins: []

})
;