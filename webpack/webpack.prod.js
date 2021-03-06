/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = Object.assign({}, commonConfig, {
    mode: 'production',
    devtool: false,
    plugins: commonConfig.plugins || [],
    optimization: Object.assign({}, commonConfig.optimization, {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                extractComments: false,
                parallel: 4,
                sourceMap: true
            })
        ]
    })
});
