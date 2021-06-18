<template>
  <div class="header-container flex-between-center">
    <div class="info">
      <h2 @click="$emit('change')">{{ rate.long }}({{ rate.symbol }})</h2>
      <p class="text-minor last-update">Last updated at 17 Jun 2021</p>
    </div>
    <input :value="modelValue" @change="handleChange"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    modelValue: {
      type: Number
    },
    rate: {
      type: Object
    }
  },
  emits: ["change", "update:modelValue"],
  methods: {
    handleChange(e) {
      this.$emit("update:modelValue",parseInt(e.target.value))
    } 
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  overflow: hidden;
  background-color: var(--clr-secondary);
  padding: 1.5em 2em;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .info {
    min-width: 17em;

    h2 {
      cursor: pointer;
      padding: 0.2em;
      margin-right: 1em;
      border-radius: 8px;
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--clr-primary);
      }
    }
  }
  input {
    border: none;
    outline: none;
    text-align: right;
    width: 70%;
    color: white;
    font-size: 1.3em;
    border-bottom: 1px solid var(--clr-primary);
  }
  .last-update {
    font-size: 0.8em;
  }
}

</style>