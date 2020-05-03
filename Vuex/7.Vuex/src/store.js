import Vue from 'vue';
import Vuex from 'vuex';

// VueにVuexを登録
Vue.use(Vuex);

// ストアのモジュール分割
// 例示用に非同期処理を行う関数
// 実際のアプリではサーバーからデータを取得する
function getCountNum(type) {
  return new Promise((resolve) => {
    // 1秒後にtypeに応じたデータを返す
    setTimeout(() => {
      let amount;
      switch (type) {
        case 'one':
          amount = 1;
          break;
        case 'two':
          amount = 2;
          break;
        case 'ten':
          amount = 10;
          break;
        default:
          amount = 0;
          break;
      }
      resolve({ amount });
    }, 1000);
  });
}

// カウンタモジュールを定義
const counter = {
  // ステート
  state: {
    count: 10,
  },

  // ゲッター
  getters: {
    squared: (state) => state.count * state.count,
  },

  // ミューテーション
  mutations: {
    increment(state, amount) {
      state.count += amount;
    },
  },

  // アクション
  actions: {
    incrementAsync({ commit }, payload) {
      return getCountNum(payload.type).then((data) => {
        commit('increment', {
          amount: data.amount,
        });
      });
    },
  },
  // モジュールは入れ子に定義することができます
  modules: {
    childModule: {
      // 入れ子のモジュール定義
    },
  },
};

const task = {
  // アプリケーション全体で使用さえるデータ
  state: {
    // タスクの初期ステート
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false,
      },
      {
        id: 2,
        name: 'Vue の本を買う',
        labelIds: [1, 3],
        done: true,
      },
    ],

    // ラベルの初期ステート
    labels: [
      {
        id: 1,
        text: '買い物',
      },
      {
        id: 2,
        text: '食料',
      },
      {
        id: 3,
        text: '本',
      },
    ],

    // 次に追加するタスク、ラベルの ID
    // 実際のアプリではサーバーで生成したり、UUID を使ったりする
    nextTaskId: 3,
    nextLabelId: 4,

    // フィルターするラベルの ID
    filter: null,
  },

  // ステートから算出して値を返す
  // キャッシュされ依存しているステートが更新されない限り再評価されない
  getters: {
    // フィルター後のタスクを返す
    filteredTasks(state) {
      // ラベルが選択されていなければそのままの一覧を返す
      if (!state.filter) {
        return state.tasks;
      }

      // 選択されているラベルでフィルタリングする
      return state.tasks.filter((task) => {
        return task.labelIds.indexOf(state.filter) >= 0;
      });
    },
  },

  // ステートを更新する
  // commitで呼び出される
  mutations: {
    // タスクを追加する
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false,
      });

      // 次に追加されるタスクに付与する ID を更新する
      state.nextTaskId++;
    },

    // タスクの完了状態を変更する
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter((task) => {
        return task.id === id;
      });

      filtered.forEach((task) => {
        task.done = !task.done;
      });
    },

    // ラベルを追加する
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text,
      });

      // 次に追加されるラベルに付与する ID を更新する
      state.nextLabelId++;
    },

    // フィルタリング対象のラベルを変更する
    changeFilter(state, { filter }) {
      state.filter = filter;
    },

    // ステートを復元する
    restore(state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks;
      state.labels = labels;
      state.nextTaskId = nextTaskId;
      state.nextLabelId = nextLabelId;
    },
  },

  // アクションはミューテーションと似ていますが、下記の点で異なります:
  // ・アクションは、状態を変更するのではなく、ミューテーションをコミットします。
  // ・アクションは任意の非同期処理を含むことができます。
  actions: {
    // ローカルストレージにステートを保存する
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId,
      };
      localStorage.setItem('task-app-data', JSON.stringify(data));
    },

    // ローカルストレージからステートを復元する
    restore({ commit }) {
      const data = localStorage.getItem('task-app-data');
      if (data) {
        commit('restore', JSON.parse(data));
      }
    },
  },
};

// ストアの定義
const store = new Vuex.Store({
  modules: {
    counter,
    task,
  },
});

// ストアをエクスポート
export default store;
