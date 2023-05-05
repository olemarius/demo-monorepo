/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    ...require('../../packages/config/eslint-vue.js'),
    root: true,
    settings: {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
