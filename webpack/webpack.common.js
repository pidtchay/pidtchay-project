const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HappyPack = require('happypack');
// const os = require('os');
const path = require('path');
const pkg = require('../package.json');

// const threadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

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
        maxAssetSize: 500 * 1024, // 300 KiB
        maxEntrypointSize: 500 * 1024 // 300 KiB
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx']
        }),
        new ForkTsCheckerWebpackPlugin({
            async: true,
        }),
        // new HappyPack({
        //     id: 'happyTsLoader',
        //     threadPool: threadPool,
        //     loaders: [{
        //         loader: 'ts-loader',
        //         options: {
        //             transpileOnly: true,
        //             happyPackMode: true,
        //         }
        //     }]
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: 'ts-loader'
                // use: 'happypack/loader?id=happyTsLoader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
};
