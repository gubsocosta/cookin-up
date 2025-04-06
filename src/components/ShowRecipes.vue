<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>
    <p class="paragrafo-lg resultados-encontrados">Resultados encontrados: {{ recipes.length }}</p>
    <RecipeList :recipes="recipes"/>
    <MainButton :text="'Editar Lista'" @click="$emit('showIngredients')"/>
  </section>
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
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}
</style>
