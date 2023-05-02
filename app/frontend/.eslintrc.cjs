// For common options across vue apps, edit /packages/config/eslint-vue.js
module.exports = {
  ...require('../../packages/config/eslint-nuxt.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  }
}
