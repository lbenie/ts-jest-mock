/**
 * @type {import('eslint').CLIEngine.Options}
 */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:functional/external-typescript-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json', './tsconfig.spec.json', './tsconfig.project.json'],
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'functional'],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, trailingComma: 'all' },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/prefer-readonly': ['error', { ignoreClass: true }],
    'functional/prefer-tacit': ['error'],
  },
  env: {
    browser: true,
    node: true,
  },
}
