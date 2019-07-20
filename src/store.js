import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状態
  state: {
    count: 0,
  },
  // ゲッター
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  // ストアの状態を変更するメソッド（同期処理のみ）
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  // ストアの状態を変更するメソッド（非同期処理も可、ミューテーションをコミットする）
  actions: {
    increment(context) {
      context.commit('increment')
    },
    // 引数に ES2015 の引数分割束縛を使った例（context を省略できる）
    decrement({ commit }) {
      commit('decrement')
    },
  },
})
