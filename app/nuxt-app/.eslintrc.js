module.exports = {
    ...require('config/eslint-nuxt.js'),
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
}