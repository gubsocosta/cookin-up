<template>
  <div v-if="props.recipes.length" class="receitas-wrapper">
    <p class="paragrafo-lg informacoes">
      Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
    </p>
    <ul class="receitas">
      <template v-if="props.recipes.length">
        <li v-for="(recipe, index) in props.recipes" :key="index">
          <RecipeCard :recipe="recipe" />
        </li>
      </template>
      <template v-else></template>
    </ul>
  </div>
  <div v-else class="receitas-nao-encontradas">
    <p class="paragrafo-lg receitas-nao-encontradas__info">
      Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
    </p>
    <img src="../assets/images/sem-receitas.png" alt="">
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
import type { IRecipe } from '@/interfaces/IRecipe.ts';

const props = defineProps<{
  recipes: IRecipe[]
}>()
</script>

<style scoped>
.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
