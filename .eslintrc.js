const eslintRules = require('./tools/eslint/eslint');
const typescriptRules = require('./tools/eslint/typescript');
const reactRules = require('./tools/eslint/react');
const jsdocRules = require('./tools/eslint/jsdoc');
const jsxa11yRules = require('./tools/eslint/jsx-a11y');
const importsRules = require('./tools/eslint/imports');

module.exports = {
    env: {
      browser: true,
      es6: true,
      es2017: true,
      node: true,
    },
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:prettier/recommended',
      'prettier',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['tsconfig.json'],
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier',
      'jsdoc'
    ],
    rules: {
      // Правила eslint.
      ...eslintRules,
      // Правила typescriptRules.
      ...typescriptRules,
      // Правила react
      ...reactRules,
      // Правила  jsdoc
      ...jsdocRules,
      // Правила JSX a11y
      ...jsxa11yRules,
      // Правила импортов
      ...importsRules,
    },
    settings: {
      react: {
        version: 'detect'
      },
    }
  }
  