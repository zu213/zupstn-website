import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'writable',
        JSX: 'writable',
      },
    },
    plugins: {
      react: pluginReact,
      import: pluginImport,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always'
        }
      ],
      "indent": ["error", 2]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
