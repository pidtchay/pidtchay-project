/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const pkg = require('../package.json');

// Корневые директории проекта
const srcPath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../out');

const appOptions = {
    entry: {
        app: path.resolve(srcPath, './index.tsx'),
        home: path.resolve(srcPath, './Container/Home/HomePage.tsx'),
        about: path.resolve(srcPath, './Container/AboutPage.tsx'),
        repos: path.resolve(
            srcPath,
            './Container/Repositories/RepositoriesPage.tsx'
        ),
        markdown: path.resolve(
            srcPath,
            './Container/Markdown/MarkdownNotes.tsx'
        )
    },
    output: {
        path: outputPath,
        filename: 'js/[name].js',
        //    libraryTarget: 'amd',
        jsonpFunction: 'webpackJsonp' + pkg.name.replace(/-/g, '_')
    }
};

module.exports = appOptions;
