module.exports = {
    'import/extensions': [2, 'ignorePackages', {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'}],
    // Разрешается использовать именованные экспорты (кроме асинхронных компонентов).
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': [2, {noUselessIndex: true}],
    // Разрешается импорт внешних модулей, которые не объявлены в package.json.
    'import/no-unresolved': 0,
    'import/order': [2, {alphabetize: {order: 'asc', caseInsensitive: true}}],
    'import/no-extraneous-dependencies': 0,
}