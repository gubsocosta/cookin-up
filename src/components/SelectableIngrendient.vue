<template>
  <button class="ingrediente" @click="toggleSelect(ingredient)">
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

const emit = defineEmits(['addIngredient', 'removeIngredient']);

const selected = ref(false);

function toggleSelect (ingredient: string): void {
  selected.value = !selected.value;

  if (selected.value) {
    emit('addIngredient', ingredient);
    return;
  }
  emit('removeIngredient', ingredient);
}
</script>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
