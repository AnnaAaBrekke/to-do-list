// eslint.config.mjs

import { eslint } from 'eslint';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'], // Apply to JavaScript files
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error', // Mark Prettier issues as errors
      'no-unused-vars': 'warn', // Example rule: warn on unused variables
    },
  },
];
