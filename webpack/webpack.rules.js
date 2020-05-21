const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackModuleRules = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'happypack/loader?id=ts'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
            },
        ],
    },
};

module.exports = webpackModuleRules;
