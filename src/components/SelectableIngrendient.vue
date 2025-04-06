<template>
  <button class="ingrediente" @click="toggleSelect">
    <Tag
      :text="props.ingredient"
      :active="selected"
      :aria-pressed="selected"
    />
  </button>
</template>

<script setup lang="ts">
import Tag from '@/components/Tag.vue';
import { ref } from 'vue';

const props = defineProps<{
  ingredient: string;
}>();

const selected = ref(false);

function toggleSelect() {
  selected.value = !selected.value;
}
</script>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
