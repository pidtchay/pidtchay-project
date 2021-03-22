const webpackCommon = require('./webpack.common');

const devConfig = Object.assign(webpackCommon, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 5454
    },
    plugins: [...webpackCommon.plugins]
});

module.exports = devConfig;
