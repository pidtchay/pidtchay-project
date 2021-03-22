module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
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
        project: './tsconfig.json'
    },
    env: {
        browser: true,
        es6: true,
        es2017: true,
        node: true
    },
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-vars": "off",
        "import/prefer-default-export": "off",
    }
};