const applicationOptions = require('./webpack.appOptions');
const webpackPlugins = require('./webpack.plugins');
const webpackModuleRules = require('./webpack.rules');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const common = {
    entry: applicationOptions.entry,
    output: applicationOptions.webpack.output,
    resolve: {
        modules: [
            'node_modules',
            'src'
        ],
        extensions: ['.ts', '.tsx', '.js'],
    },
    // https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    // We’ve saved a whopping 56% in downloads, and this saving will continue until the end of time.
    // Split your application into sensible little files so your users download less code.
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 150000,
            minChunks: 3,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameMaxLength: 30,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    filename: 'js/[name].bundle.[hash].js',
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        // webpackPlugins.plugins.bundleAnalyzer,
        webpackPlugins.plugins.cleanWebpack,
        webpackPlugins.plugins.forkTsChecker,
        webpackPlugins.plugins.happyPack,
        webpackPlugins.plugins.htmlWebpack,
        // webpackPlugins.plugins.miniCssExtract,
    ],
    ...webpackModuleRules
}

module.exports = smp.wrap(common);