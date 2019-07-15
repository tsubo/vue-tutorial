<template>
  <!-- todo プロパティのテキストを表示 -->
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">x</button>
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
