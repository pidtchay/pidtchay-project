const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const pkg = require('../package.json');

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
        // jsonpFunction: 'webpackJsonp' + pkg.name.replace(/-/g, '_'),
        // publicPath: '/'
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader'
            }
        ]
    }
};
