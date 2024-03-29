module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['**/*.min.js'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-unused-vars': 'off',
    'no-shadow-restricted-names': 'off',
  },
};
