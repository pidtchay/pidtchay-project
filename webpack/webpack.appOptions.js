const path = require('path');

// Корневые директории проекта
const srcPath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../out');

const appOptions = {
    entry: {
        app: path.resolve(srcPath, './index.tsx'),
    },
    webpack: {
        srcPath: srcPath,
        outputPath: outputPath,
    }
};

module.exports = appOptions;