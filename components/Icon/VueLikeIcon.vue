<template>
  <div
    class="vue-like-icon"
    @click="onClick"
    :class="{ 'vue-like-icon__active': props.isLiked }"
  >
    <img :src="icon" alt="like" />
  </div>
</template>
<script lang="ts" setup>
import { like, like_active } from "~/assets/icons";

const emits = defineEmits(["click"]);

const props = defineProps<{
  isLiked: boolean;
}>();

const icon = computed(() => {
  return props.isLiked ? like_active : like;
});

const onClick = () => emits("click");
</script>
<style lang="scss">
.vue-like-icon {
  padding: 8px;
  background-color: var(--white);
  border-radius: 6px;
  max-width: 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  & img {
    display: block;
  }
  &__active {
    background-color: #ffefee;
  }
  &:hover {
    background-color: #ffefee;
    transition: all 0.4s ease;
  }
}
</style>
