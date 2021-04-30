module.exports = {
    'react/no-did-update-set-state': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/state-in-constructor': [2, 'never'],
    'react/destructuring-assignment': 0,
    'react/no-danger': 2,
    'react/prefer-stateless-function': 1,
    'react/no-array-index-key': 1,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': ['warn', 'property assignment', { // Указывает, где должны быть размещены статические свойства компонента React
      'childContextTypes': 'static getter',
      'contextTypes': 'static public field',
      'contextType': 'static public field',
      'displayName': 'static public field',
    }],
    'react/require-default-props': 1,
    'react/sort-comp': [1, { order: ['static-methods', 'lifecycle', 'everything-else', 'render']}],

}