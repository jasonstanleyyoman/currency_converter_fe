<template>
  <div class="modal-overlay" @click="$emit('close')"></div>
  <div v-bind="$attrs" class="modal-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ['close']
}
</script>
<style lang="scss" scoped>
.modal-overlay, .modal-content {
  position: fixed;
}
.modal-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
}
.modal-content {
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow-y: scroll;
}
</style>