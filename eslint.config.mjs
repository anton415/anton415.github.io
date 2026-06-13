import js from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

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

export default tseslint.config(
  { ignores },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
  },
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
    files: ['**/*.{js,jsx,astro,ts}'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      // typescript-eslint owns unused-var detection for .ts; keep it as a
      // warning to match the leniency used for the rest of the project.
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
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
);
