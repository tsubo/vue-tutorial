<template>
  <input
    type="text"
    v-model="value"
    @change="onChange($event.target.value)"
    placeholder="Add Todo"
  >
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onChange(value) {
      const trimedText = value.trim();
      if (trimedText) {
        this.$emit("addTodo", trimedText);
      }
      this.value = "";
    }
  }
};
</script>

<style>
input {
  width: 100%;
}
</style>
