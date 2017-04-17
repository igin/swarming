const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDirectory = path.resolve(__dirname);
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules');
const srcDirectory = path.resolve(__dirname, 'src');

const config = {
    context: srcDirectory,
    entry: {
        app: path.join(srcDirectory, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcDirectory, 'index.template.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: srcDirectory,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    srcDirectory,
                    fs.realpathSync(path.resolve(nodeModulesDirectory, 'swarming'))
                ],
                exclude: [
                    nodeModulesDirectory,
                    fs.realpathSync(path.resolve(nodeModulesDirectory, 'swarming', 'node_modules'))
                ],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react')
                    ] }
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
            }
        ],

    },
};

module.exports = config;