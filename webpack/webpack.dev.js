const commonConfig = require('./webpack.common');

module.exports = Object.assign({}, commonConfig, {
    mode: 'development',
    // https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
    },
    plugins: commonConfig.plugins || [],
});