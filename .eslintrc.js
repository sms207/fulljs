module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    plugins: ['react-hooks', 'react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
      sourceType: 'module',
    },
    rules: {
      // You can do your customizations here...
      // For example, if you don't want to use the prop-types package,
      // you can turn off that recommended rule with: 'react/prop-types': ['off']
      indent: ['error', 2, {SwitchCase: 1}],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir','trace']}]
    },
  };