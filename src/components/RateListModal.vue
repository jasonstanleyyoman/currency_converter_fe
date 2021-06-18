<template>
  <Modal @close="$emit('close')">
    <div class="modal">
      <div v-for="rate in rates" :key="rate.symbol" class="rate-list" @click="$emit('select', rate)">
        <p>{{ rate.long }}({{ rate.symbol }})</p>
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from "./Modal.vue"
export default {
  name: "RateListModal",
  emits: ["close", "select"],
  props: {
    rates: Array
  },
  components: {
    Modal
  }
}
</script>
<style lang="scss" scoped>
.modal {
  width: 100vw;
  max-width: 32em;
  background: white;
  border-radius: 8px;

  .rate-list {
    color: var(--clr-primary);
    padding: 1em 2em;
    cursor: pointer;
    font-size: 1.2em;
    transition: 0.3s ease all;

    &:hover {
      background-color: var(--clr-primary);
      color: white;
    }
  }
}
</style>