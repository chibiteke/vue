import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるよう定義する
const state = {
  auth: {
    token: null,
    userId: null,
  },
  board: {
    lists: [],
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {},
});
