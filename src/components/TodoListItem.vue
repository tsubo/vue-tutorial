<template>
  <li>
    {{ todo.text }}
    <!-- class の指定を追加 -->
    <button
      class="btn btn-light btn-sm"
      @click="$emit('remove', todo.id)"
    >x</button>
  </li>
</template>

<script>
export default {
  // 親コンポーネントから todo プロパティを受け取る
  props: {
    todo: {
      type: Object, // オブジェクト型であること
      required: true // 必須項目
    }
  }
};
</script>
