module.exports = {
  ...require('../../packages/config/eslint-nuxt.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  }
}
