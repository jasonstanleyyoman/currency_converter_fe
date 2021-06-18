<template>
  <div class="card-container flex-between-center">
    <h2>{{ rate.to_long }}({{ rate.to }})</h2>
    <div class="info">
      <p>{{ rate.result }}</p>
      <p class="text-minor rate">200 / EUR</p>
    </div>
    <div class="overlay flex-end-center">
      <button class="overlay-button secondary" @click="$emit('delete', rate.to)">
        Delete
      </button>
      <button class="overlay-button" @click="handleCopy">
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from "../utils/copy"

export default {
  name: "Card",
  emits: ["delete"],
  props: {
    rate: {
      type: Object
    }
  },
  methods: {
    handleCopy() {
      copyToClipboard(this.rate.result);
    }
  }
}
</script>
<style lang="scss" scoped>
$green: #8ECBA2;
$red: #FF5B65;

.card-container {
  background-color: var(--clr-primary);
  padding: 1em 2em;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .info {
    text-align: right;
    font-size: 1.2em;
  }
  .rate {
    font-size: 0.8em;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(75, 91, 194, 0.95);
    padding: 0 2em;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease;

    .overlay-button {
      margin-left: 1em;
      background: $green;
      padding: 0.4em 1.7em;
      border-radius: 8px;
      color: black;
      border: 2px solid transparent;
      transition: 0.3s ease all;

      &:hover {
        transform: scale(1.03);
      }
      &:active {
        transform: scale(0.95);
      }

      &.secondary {
        border-color: $red;
        background-color: transparent;
        color: white;
      }
    }
  }

  &:hover {
    .overlay {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>