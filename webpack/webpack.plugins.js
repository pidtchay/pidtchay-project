const HtmlWebpackPlugin = require('html-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HappyPack = require('happypack')

const os = require('os')

const threadPool = HappyPack.ThreadPool({size: os.cpus().length - 1})

const webpackPlugins = {
    plugins: {
        htmlWebpack: new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        bundleAnalyzer: new BundleAnalyzerPlugin({}),
        // miniCssExtract: new MiniCssExtractPlugin({
        //     filename: 'css/[name].[hash].css',
        //     chunkFilename: 'css/[name].[hash].css'
        // }),
        cleanWebpack: new CleanWebpackPlugin(),
        forkTsChecker: new ForkTsCheckerWebpackPlugin({
            checkSyntacErrors: true,
            silent: true,
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
}

module.exports = webpackPlugins
