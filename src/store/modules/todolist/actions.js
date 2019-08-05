export default {
  getTodos({ commit }) {
    fetch('http://localhost:8080/todos.json')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        commit('todos', json.todos)
      })
      .catch(error => console.error('Error:', error))
  },
  add({ commit, getters }, text) {
    const trimedText = text.trim()
    if (trimedText) {
      commit('add', {
        id: getters.nextId,
        text: trimedText,
      })
    }
  },
}
