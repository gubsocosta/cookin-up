<template>
  <h1 class="cabecalho receita-ingredientes">Receitas</h1>
  <p>Resultados encontrados: {{ recipes.length }}</p>
  <RecipeList :recipes="recipes"/>
  <MainButton :text="'Editar Lista'" @click="$emit('showIngredients')"/>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
import RecipeList from '@/components/RecipeList.vue';
import { getRecipes } from '@/services/http.ts';
import { onMounted, ref } from 'vue';

defineEmits(['showIngredients']);

const recipes = ref<string[]>([]);

onMounted(async () => {
  recipes.value = await getRecipes();
});
</script>

<style scoped>
.receita-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

</style>
