<template>
  <div class="vue-icon">
    <slot></slot>
    <img :src="props.icon" alt="" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>
<style lang="scss">
.vue-icon {
  background-color: var(--white);
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-weight: 700;
  color: var(--gray);
  & img {
    display: block;
  }
}
</style>
