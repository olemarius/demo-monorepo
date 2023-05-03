module.exports = {

    extends: [
      'eslint:recommended', 
      'plugin:vue/vue3-recommended', 
      'plugin:@typescript-eslint/recommended', 
      '@vue/typescript/recommended', 
    ],
    
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue', 
        '@typescript-eslint'
    ],
    rules: {
      'no-empty-function': 'off',
      'max-len': 'off',
      // https://github.com/eslint/eslint/issues/13956
      'indent': 'off',
      '@typescript-eslint/indent': ['error'],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'vuejs-accessibility/no-onchange': 'off',
      // vue
      'vue/no-lone-template': ['error', {
          'ignoreAccessible': true
      }],
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/first-attribute-linebreak': ['error', {
          'singleline': 'ignore',
          'multiline': 'below'
      }],
      'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'never'
      }],
      'vue/html-indent': ['error', 4, {
          'attribute': 1,
          'baseIndent': 1,
          'closeBracket': 0,
          'alignAttributesVertically': true,
          'ignores': [
              'VElement[name="component"] VText',
              'VElement[name="component"] VElement[name="template"] VText',
              'VElement[name="component"] VExpressionContainer'
          ]
      }],
      // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/label-has-for.md
      'vuejs-accessibility/label-has-for': 0,
      // 'vuejs-accessibility/label-has-for': [
      //     'error',
      //     {
      //         'components': ['VLabel'],
      //         'controlComponents': ['Field', 'input'],
      //         'required': {
      //             'some': ['nesting', 'id']
      //         },
      //         'allowChildren': false
      //     },
      // ],
      // Turn off this rule becuase we would like to streamline batch work in admin. We could possibly
      // try to only allow this rule in admin.
      'vuejs-accessibility/no-autofocus': 'off',
      'no-undef': 'off',
      'linebreak-style': 0,
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
      
    },
    /**
     * Enable the rule specifically for TypeScript files
     *  docs @ https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
     */
    overrides: [{
      files: ['*.ts', '*.tsx'],
      rules: {
          'no-var': 'off',
          '@typescript-eslint/no-this-alias': 'off',
          '@typescript-eslint/ban-ts-comment': [
              'error',
              {
                  'ts-ignore': 'allow-with-description',
                  'ts-nocheck': 'allow-with-description',
              },
          ],
          '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
  }],
  ignorePatterns: [
    // '*.test.ts',
    '*.json',
    'auto-imports.d.ts', 
    'components.d.ts',
    'dist'
    ],
  }