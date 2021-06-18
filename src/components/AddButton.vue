<template>
  <button @click="$emit('click')">
    <v-icon>mdi-plus</v-icon>
    Add more currencies
  </button>
</template>

<script>
export default {
  name: "AddButton",
  emits: [
    "click"
  ]
}
</script>
<style lang="scss" scoped>
button {
  background-color: var(--clr-secondary);
  padding: 0.5em 0;
  width: 80%;
  border-radius: 8px;
  transition: 0.3s ease all;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>