<template>
  <div class="todolist">
    <h1>Todo</h1>
    <ul v-if="todos.length">
      <!-- TodoListItem コンポーネントを使います -->
      <!-- v-bind を使って動的に todo プロパティを渡します -->
      <!-- remove イベントをハンドリングして removeTodo メソッドをコールします -->
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>
      TODO 一覧はありません
    </p>
    <TodoInputText @addTodo="addTodo" />
  </div>
</template>

<script>
// TodoListItem コンポーネントを import します
import TodoListItem from "../components/TodoListItem";
import TodoInputText from "../components/TodoInputText";

export default {
  // 使用するコンポーネントを Vue に伝えます
  components: {
    TodoListItem,
    TodoInputText
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Learn Vue" },
        { id: 2, text: "Learn about single file components" },
        { id: 3, text: "Learn about conponents" }
      ]
    };
  },
  methods: {
    nextId() {
      if (this.todos.length) {
        return Math.max(...this.todos.map(todo => todo.id)) + 1;
      }
      return 1;
    },
    addTodo(text) {
      const trimedText = text.trim();
      if (trimedText) {
        this.todos.push({
          id: this.nextId(),
          text: trimedText
        });
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.todolist {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}
</style>

