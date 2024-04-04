module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/v-slot-style': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'semi': ['error', 'never'],
    'import/order': 'off',
    'no-console': 'off',
    'vue/attributes-order': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
