<template>
  <div class="vue-label">
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.vue-label {
  background-color: var(--black);
  color: var(--white);
  padding: 5px 8px;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
}
</style>
