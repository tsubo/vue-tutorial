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
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    TodoListItem,
    TodoInputText
  },
  created() {
    this.getTodos();
  },
  computed: {
    ...mapGetters({
      todos: "todoList/todos"
    })
  },
  methods: {
    ...mapMutations({
      remove: "todoList/remove"
    }),
    ...mapActions({
      getTodos: "todoList/getTodos",
      add: "todoList/add"
    }),
    removeTodo(idToRemove) {
      this.remove(idToRemove);
    },
    addTodo(text) {
      this.add(text);
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

