/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');
const webpackPlugins = require('./webpack.plugins');

module.exports = Object.assign({}, commonConfig, {
    mode: 'production',
    devtool: false,
    plugins: Object.assign([], commonConfig.plugins, [
        webpackPlugins.plugins.bundleAnalyzer
    ]),
    optimization: Object.assign({}, commonConfig.optimization, {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                sourceMap: true,
                uglifyOptions: {
                    parallel: 5,
                    extractComments: false,
                    exclude: /[\\/]node_modules[\\/]/
                }
            })
        ]
    })
});
