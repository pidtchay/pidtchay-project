/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const TerserPlugin = require('terser-webpack-plugin');
const webpackCommon = require('./webpack.common');

const prodConfig = Object.assign(webpackCommon, {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'reactvendor'
                },
                utilityVendor: {
                    test: /[\\/]node_modules[\\/](lodash|moment)[\\/]/,
                    name: 'utilityVendor'
                },
                vendor: {
                    name: 'node_vendors',
                    test: /[\\/]node_modules[\\/](!lodash)(!moment)[\\/]/,
                    chunks: 'all'
                },
                common: {
                    test: /[\\/]src[\\/]Containers[\\/]/,
                    chunks: 'all',
                    minSize: 1000
                }
            }
        },
        minimize: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        minimizer: [new TerserPlugin()]
    },
    plugins: [...webpackCommon.plugins]
});

module.exports = prodConfig;
