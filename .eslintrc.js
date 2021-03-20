module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'react',
        "react-hooks",
        '@typescript-eslint',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.js'
    },
    env: {
        browser: true,
        es6: true,
        es2017: true,
        node: true
    },
};