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
      'default-case': 'off',
      'no-plusplus': 'off',
      'no-cond-assign': 'off',
      'no-return-assign': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',// Нижнее подчеркивание у переменных и тд
      'consistent-return': 'off',
      'global-require': 'off',

      'react/prop-types': 1,
      '@typescript-eslint/no-use-before-define': ['error'],

      '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true }],// для конструкций типа a && b()
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off', // Запрещает вызывать any
      '@typescript-eslint/no-unsafe-return':'off', // Запрещает возвращать any из функции
      '@typescript-eslint/naming-convention': 'off',// При сложении двух переменных операнды должны иметь тип number или тип string
      '@typescript-eslint/restrict-plus-operands':'off',
      '@typescript-eslint/no-floating-promises':'off',
      '@typescript-eslint/no-throw-literal':'off',
      '@typescript-eslint/restrict-template-expressions':'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      'react/no-did-update-set-state': 'off', // Использование setState в componentDidUpdate
      'react-hooks/exhaustive-deps': 'off', // Проверяем зависимости эффекта
      'react/state-in-constructor': 'off', // Инициализация состояния в конструкторе
      'react/destructuring-assignment': 'off', // Использование деструктуризации назначения свойств, состояния и контекста
      'react/no-array-index-key':'off', // Использование индекса массива в качестве ключа
      'react/jsx-props-no-spreading': 'off',
      'react/static-property-placement': ['warn', 'property assignment', { // Указывает, где должны быть размещены статические свойства компонента React
        'childContextTypes': 'static getter',
        'contextTypes': 'static public field',
        'contextType': 'static public field',
        'displayName': 'static public field',
      }],
      'react/require-default-props':'off', // обеспечение того, чтобы любые необязательные типы свойств компонента имели соответствующее defaultProps значение

      'jsx-a11y/no-static-element-interactions':'warn',
      'jsx-a11y/click-events-have-key-events':'warn',

      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',

      'jsdoc/require-jsdoc': 1,
      'jsdoc/check-alignment': 1,
      'jsdoc/require-description': 1,
      'jsdoc/require-description-complete-sentence': 1,
      'jsdoc/check-param-names': 1,
      'jsdoc/require-param': 1,
      'jsdoc/require-param-description': 1,
      'jsdoc/require-param-name': 1,
      'jsdoc/require-param-type': 1,
      'jsdoc/check-property-names': 1,
      'jsdoc/require-property': 1,
      'jsdoc/require-property-description': 1,
      'jsdoc/require-property-name': 1,
      'jsdoc/require-property-type': 1,
      'jsdoc/require-returns-check': 1,
      'jsdoc/require-returns-type': 1,
      'jsdoc/valid-types': 1
    },
    settings: {
      react: {
        version: 'detect'
      },
    }
  }
  