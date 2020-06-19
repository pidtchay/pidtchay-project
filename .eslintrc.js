module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        // 'plugin:react/recommended'
    ],
    plugins: [
        // 'react',
        '@typescript-eslint',
        'prettier',
        'eslint-plugin-import-helpers',
        'jsdoc'
    ],
    env: {
        browser: true,
        es6: true,
        es2017: true,
        node: true
    },
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'never',
                groups: [
                    '/^[a-z].*$/',
                    '/^@.*$/',
                    'module',
                    ['parent', 'sibling', 'index']
                ],
                alphabetize: { order: 'asc' }
            }
        ],

        'jsdoc/check-alignment': 1,
        'jsdoc/check-param-names': 1,
        'jsdoc/check-property-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 1,
        'jsdoc/require-jsdoc': 1,
        'jsdoc/require-description': 1,
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-property': 1,
        'jsdoc/require-property-description': 1,
        'jsdoc/require-property-name': 1,
        'jsdoc/require-property-type': 1,
        'jsdoc/require-returns': 1,
        'jsdoc/require-returns-check': 1,
        'jsdoc/require-returns-description': 1,
        'jsdoc/require-returns-type': 1,
        'jsdoc/valid-types': 1
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: `./tsconfig.json`
    },
};
