<template>
  <span :class="['tag', {active}]">
    {{ props.text }}
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string;
  active?: boolean;
}>(), {
  active: false
});
</script>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}

.tag.active {
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}
</style>
