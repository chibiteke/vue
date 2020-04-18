Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>',
});

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツの一覧です</p>',
});

Vue.component('fruits-list-table', {
  template:
    '<table><tr><th>季節</th><th>フルーツ</th></tr><tr><td>春</td><td>いちご</td></tr><tr><td>夏</td><td>スイカ</td></tr><tr><td>秋</td><td>ぶどう</td></tr><tr><td>冬</td><td>みかん</td></tr></table>',
});

const fruitsList = new Vue();
fruitsList.$mount('#fruits-list');

// ---------------------------------------------------------
//
// ---------------------------------------------------------
Vue.component('fruits-item-name', {
  props: {
    fruitsItem: {
      type: Object,
      required: true,
    },
  },
  template: '<li>{{fruitsItem.name}}</li>',
});

const fruitsComponent = new Vue({
  data: {
    fruitsItems: [{ name: '梨' }, { name: 'イチゴ' }],
  },
});
fruitsComponent.$mount('#fruits-component');

// ---------------------------------------------------------
// ---------------------------------------------------------
// 子コンポーネントのカウンターボタン
const counterButton = Vue.extend({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addToCart() {
      this.counter += 1;
      this.$emit('increment'); // incrementカスタムイベントの発火
    },
  },
  template: '<span>{{counter}}個 <button v-on:click="addToCart">追加</button></span>',
});

// 親コンポーネントのカート
const fruitsCounter = new Vue({
  components: {
    'counter-button': counterButton,
  },
  data: {
    total: 0, // カートの合計商品数
    fruits: [{ name: '梨' }, { name: 'イチゴ' }],
  },
  methods: {
    incrementCartStatus() {
      this.total += 1;
    },
  },
});
fruitsCounter.$mount('#fruits-counter');
