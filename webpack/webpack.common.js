/* eslint-disable @typescript-eslint/no-var-requires */
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const applicationOptions = require('./webpack.appOptions');
const webpackPlugins = require('./webpack.plugins');
const webpackModuleRules = require('./webpack.rules');

const smp = new SpeedMeasurePlugin();

const common = {
    entry: applicationOptions.entry,
    output: applicationOptions.output,
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx', '.js']
    },
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
                    filename: 'js/[name].bundle.[hash].js'
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [webpackPlugins.plugins.cleanWebpack, webpackPlugins.plugins.forkTsChecker, webpackPlugins.plugins.happyPack, webpackPlugins.plugins.htmlWebpack, webpackPlugins.plugins.miniCssExtract],
    ...webpackModuleRules
};

module.exports = smp.wrap(common);
