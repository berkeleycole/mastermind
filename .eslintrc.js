module.exports = {
  env: {
      browser: true,
      es6: true,
      jest: true,
  },
  extends: [
      'airbnb',
      'prettier',
      'prettier/react',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the
                                               // @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from
                                     // @typescript-eslint/eslint-plugin that would conflict with
                                     // prettier
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier
                                     // errors as ESLint errors. Make sure this is always the
                                     // last configuration in the extends array.
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
      },
      ecmaVersion: 2018,
      project: './tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
      'jsx-a11y/anchor-is-valid': 'off', // ignore web accessibility rule
      'jsx-a11y/href-no-hash': 'off', // ignore web accessibility rule
      'jsx-a11y/click-events-have-key-events': 'off', // ignore web accessibility rule
      'member-access': [0],
      'no-empty-interface': 'off',
      'import/no-unresolved': 'off', // Need to turn off to use relative import paths
      'dot-notation': 'off', // Need to turn off to use window['google'] since it's not in the
                             // Window interface
      'interface-name': [0, 'never-prefix'],
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx', '.ts']}],
      'react/prefer-stateless-function': [1, {ignorePureComponents: true}],
      'import/extensions': "off", // Doesn't seem to work properly
  },
  settings: {
      react: {
          createClass: 'createReactClass', // Regex for Component Factory to use,
          // default to "createReactClass"
          pragma: 'React', // Pragma to use, default to "React"
          version: 'detect', // React version. "detect" automatically picks the version you have
                             // installed.
          // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
          // default to latest and warns if missing
          // It will default to "detect" in the future
          flowVersion: 'detect', // Flow version
      },
      propWrapperFunctions: [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this
          // isn't set, any propTypes wrapped in a function will be skipped.
          'forbidExtraProps',
          {property: 'freeze', object: 'Object'},
          {property: 'myFavoriteWrapper'},
      ],
      linkComponents: [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          'Hyperlink',
          {name: 'Link', linkAttribute: 'to'},
      ],
  },
};