const typescriptEslintEslintPlugin = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const prismaPlugin = require('eslint-plugin-prisma');
const importPlugin = require('eslint-plugin-import');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [{
  ignores: ['**/.eslintrc.js'],
}, ...compat.extends(
  'plugin:@typescript-eslint/recommended',
), {
  plugins: {
    '@typescript-eslint': typescriptEslintEslintPlugin,
    prisma: prismaPlugin,
    import: importPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest,
    },

    parser: tsParser,
    ecmaVersion: 5,
    sourceType: 'module',

    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },

  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'never',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'no-var': 'error',
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
}];
