<template>
  <template v-if="props.recipes.length">
    <p class="paragrafo-lg instrucoes">
      Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
    </p>
    <ul class="">
      <template v-if="props.recipes.length">
        <li v-for="(recipe, index) in props.recipes" :key="index">
          {{ recipe.name }}
        </li>
      </template>
      <template v-else></template>
    </ul>
  </template>
  <template v-else>
    <p class="paragrafo-lg instrucoes">
      Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
    </p>
    <img src="../assets/images/sem-receitas.png" alt="">
  </template>
</template>

<script setup lang="ts">
import type { IRecipe } from '@/interfaces/IRecipe.ts';

const props = defineProps<{
  recipes: IRecipe[]
}>()
</script>

<style scoped>

</style>
