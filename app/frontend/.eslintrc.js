// For common options across vue apps, edit /packages/config/eslint-vue.js
module.exports = {
    ...require('config/eslint-vue.js'),
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
}