/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rule: {
    'no-useless-catch': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'on',
    '@typescript-eslint/no-unused-vars': 'on',
  },
};
