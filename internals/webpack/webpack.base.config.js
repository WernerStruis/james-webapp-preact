const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
    mode: options.mode,
    target: options.target || 'web',
    entry: options.entry,

    output: Object.assign({
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/'
    }, options.output),

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10 * 1024,
                            noquotes: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    resolve: {
        modules: ['node_modules', 'app', 'internals'],
        extensions: ['.js', '.jsx'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            'react-redux': 'preact-redux',
        }
    },

    plugins: options.plugins.concat([
        new MiniCssExtractPlugin({
            filename: "assets/css/app.css",
            chunkFilename: "assets/css/[id].css"
        }),
    ]),


    optimization: options.optimization,
});