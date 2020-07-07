/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const pkg = require('../package.json');

// Корневые директории проекта
const srcPath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../out');

const appOptions = {
    entry: {
        app: path.resolve(srcPath, './index.tsx'),
        home: path.resolve(srcPath, './Modules/Home/HomePage.tsx'),
        about: path.resolve(srcPath, './Modules/AboutPage.tsx'),
        repos: path.resolve(
            srcPath,
            './Modules/Repositories/RepositoriesPage.tsx'
        ),
        markdown: path.resolve(srcPath, './Modules/Markdown/MarkdownEditor.tsx')
    },
    output: {
        path: outputPath,
        filename: 'js/[name].js',
        //    libraryTarget: 'amd',
        jsonpFunction: 'webpackJsonp' + pkg.name.replace(/-/g, '_')
    }
};

module.exports = appOptions;
