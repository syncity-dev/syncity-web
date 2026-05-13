import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      '.output/**',
      'node_modules/**',
      'src/styled-system/**',
      'src/routeTree.gen.ts',
      'eslint.config.js',
    ],
  },
  tseslint.configs.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      react: react,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React hooks
      ...reactHooks.configs.recommended.rules,

      // React
      'react/jsx-key': 'error',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Unused imports/vars (replaces @typescript-eslint/no-unused-vars)
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // General
      'prefer-const': 'error',
      'no-throw-literal': 'error',
      'newline-before-return': 'error',
      'no-implicit-coercion': 'error',

      // Imports
      'import/first': 'error',
      'import/no-self-import': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  prettier,
);
