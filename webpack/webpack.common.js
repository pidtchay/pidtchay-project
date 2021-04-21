const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const pkg = require('../package.json');

// Корневые директории проекта
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../out')
};

module.exports = {
    entry: {
        app: path.resolve(PATHS.src, './index.tsx')
    },
    output: {
        path: PATHS.dist,
        filename: 'js/[name].[hash].js',
        chunkLoadingGlobal: `webpackJsonp${pkg.name.replace(/-/g, '_')}`,
        publicPath: '/'
    },
    // https://webpack.js.org/configuration/performance/#performancehints
    performance: {
        hints: 'warning',
        maxAssetSize: 300 * 1024, // 300 KiB
        maxEntrypointSize: 300 * 1024 // 300 KiB
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx']
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
};
