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
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    env: {
        browser: true,
        es6: true,
        es2017: true,
        node: true
    },
    rules: {
        // "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn",
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        // "no-unused-vars": "off",
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "import/no-mutable-exports": 0,
        'linebreak-style': 0,

        'jsx-a11y/label-has-associated-control': 'warn'
    }
};