export default {
  namespaced: true,

  state: {
    count: 0,
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
  },
}
