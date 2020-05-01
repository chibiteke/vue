module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // eslintの推奨ルール
    // 'airbnb-base', // airbnbルール(厳しめ)
    'plugin:prettier/recommended', // 1.eslint-plugin-prettierをenable
    // 2.eslint-config-prettierをenable
    // 3.prettierの整形に問題がある場合にerrorを出す設定
    'plugin:vue/recommended', // eslint-plugin-vueを推奨設定でenable
    'prettier/vue', // eslint-config-prettierのvue用ルールを適用(2019/1/16修正)
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-webpack-loader-syntax': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
