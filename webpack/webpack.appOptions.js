const path = require('path');
const pkg = require('../package.json');

// Корневые директории проекта
const srcPath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../out');

const appOptions = {
    entry: {
        app: path.resolve(srcPath, './index.tsx'),
    },
   output: {
       path: outputPath,
       filename: 'js/[name].js',
    //    libraryTarget: 'amd',
       jsonpFunction: 'webpackJsonp' + pkg.name.replace(/-/g, '_'),
   },
};

module.exports = appOptions;