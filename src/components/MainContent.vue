<template>
  <main class="conteudo-principal">
    <PersonalList :ingredients="ingredients"/>
    <template v-if="optionContent === 'SelectIngredients'">
      <IngredientList
        @add-ingredient="addIngredient"
        @removeIngredient="removeIngredient"
        @show-recipes="setOptionContent('ShowRecipes')"
      />
    </template>
    <template v-else-if="optionContent === 'ShowRecipes'">
      <ShowRecipes/>
    </template>
  </main>
</template>

<script setup lang="ts">
import PersonalList from '@/components/PersonalList.vue';
import ShowRecipes from '@/components/ShowRecipes.vue';
import { ref } from 'vue';
import IngredientList from './IngredientList.vue';

type OptionContent = 'SelectIngredients' | 'ShowRecipes';

const ingredients = ref<string[]>([]);
const optionContent = ref<OptionContent>('SelectIngredients');

function addIngredient (ingredient: string) {
  ingredients.value.push(ingredient);
}

function removeIngredient (ingredient: string) {
  const index = ingredients.value.indexOf(ingredient);

  if (index !== -1) {
    ingredients.value.splice(index, 1);
  }
}

function setOptionContent (value: OptionContent) {
  optionContent.value = value;
}
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
