module.exports = {
    plugins: ['stylelint-scss'], // stylelint-scss を使う
    extends: [
        'stylelint-config-standard', //ベースの設定ファイル
        'stylelint-config-rational-order',
        'stylelint-prettier/recommended',
      ],
    // .prettierrc.jsの内容を上書きしたい時は rules から可能
    rules:{
        'max-line-length': null, //max文字数を無視
        'function-url-quotes': 'never', //不必要なクォーテーションを禁止( 自動Fixできないので注意 )
        'no-descending-specificity': null, //セレクタの詳細度に関する警告を出さない
        'font-weight-notation': null, //font-weightの指定は自由に
        'font-family-no-missing-generic-family-keyword': null, //sans-serif / serifを必須にするか。object-fitでエラーださないようにする。
        'at-rule-no-unknown': null, //scssで使える @include などにエラーがでないように
        'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルールにはエラーを出す
    }
};