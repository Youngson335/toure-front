<template>
  <div class="vue-button" :class="`vue-button--${props.color}`">
    <button class="vue-button--btn">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  color: "red" | "white" | "gray";
}>();
</script>
<style lang="scss">
.vue-button {
  width: 100%;
  & button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: "Golos Text";
    padding: 13px;
    font-weight: 600;
    width: 100%;
    border-radius: var(--radius);
    font-size: 14px;
    &:active {
      scale: 1.05;
    }
  }

  &--red {
    & button {
      background-color: var(--red);
      color: var(--white);
      transition: all 0.4s ease;
      &:hover {
        background-color: #f16861;
        transition: all 0.4s ease;
      }
    }
  }
  &--white {
    & button {
      background-color: var(--white);
      color: var(--text-black);
      transition: all 0.4s ease;
      &:hover {
        background-color: #eeeeee;
        transition: all 0.4s ease;
      }
    }
  }
  &--gray {
    & button {
      background-color: var(--bg-gray);
      color: var(--text-black);
    }
  }
}
</style>
