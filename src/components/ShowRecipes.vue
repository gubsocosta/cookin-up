<template>
<ul class="">
  <li v-for="(recipe, index) in recipeList" :key="index">
    {{ recipe.name }}
  </li>
</ul>
</template>

<script setup lang="ts">
import { getRecipes } from '@/services/http.ts';
import { onMounted, ref } from 'vue';

const recipeList = ref<string[]>();

onMounted(async() => {
  recipeList.value = await getRecipes();
});
</script>

<style scoped>

</style>
