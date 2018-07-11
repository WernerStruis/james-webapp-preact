const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.config')({
    mode: 'development',
    target: 'node',
    entry: {
        server: path.resolve(process.cwd(), 'server/index.js')
    },
    output: {
        filename: 'server.js'
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    plugins: []
});