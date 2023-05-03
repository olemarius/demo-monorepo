/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    ...require('../../packages/config/eslint-nuxt.js'),
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
    }
};
