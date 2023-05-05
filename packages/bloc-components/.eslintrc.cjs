/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    ...require('../../packages/config/eslint-vue.js'),
    root: true,
    // i18n rules for @bloc/frontend repo only
    extends:[
        'plugin:@intlify/vue-i18n/recommended',
    ],
    // Optional.
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
        'error',
        {
            extensions: ['.js', '.vue']
        }
    ],
    settings: {
        'vue-i18n': {
          localeDir: './locale/*.{json,json5,yaml,yml}', 
          messageSyntaxVersion: '^9.0.0'
        },
        "import/resolver": {
            "node": {
              "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
          }
      }
};
