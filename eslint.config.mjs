import js from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

const ignores = [
  '.astro/**',
  'dist/**',
  'static/**',
  'public/**',
  'docs/**',
  'node_modules/**',
  'coverage/**',
  'build/**',
  'precache-manifest*.js',
  'service-worker.js',
  'asset-manifest.json',
  'index.html',
  '404.html',
];

export default [
  { ignores },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.{js,jsx,astro}'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.jsx'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
];
