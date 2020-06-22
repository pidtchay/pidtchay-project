const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const threadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

const webpackPlugins = {
    plugins: {
        htmlWebpack: new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        bundleAnalyzer: new BundleAnalyzerPlugin({}),
        miniCssExtract: new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        }),
        cleanWebpack: new CleanWebpackPlugin(),
        forkTsChecker: new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            },
            memoryLimit: 4096
        }),
        happyPack: new HappyPack({
            id: 'ts',
            threadPool: threadPool,
            loaders: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true,
                        compilerOptions: {
                            sourceMap: false
                        }
                    }
                }
            ]
        })
    }
};

module.exports = webpackPlugins;
