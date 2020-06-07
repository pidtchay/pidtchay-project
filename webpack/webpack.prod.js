const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = Object.assign({}, commonConfig, {
    mode: 'production',
    devtool: false,
    plugins: commonConfig.plugins || [],
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
})
