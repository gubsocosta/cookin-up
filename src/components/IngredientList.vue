<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita
    </p>
    <ul class="categorias">
      <li v-for="(item, index) in categories" :key="index">
        <CategoryCard
          :category="item"
          @add-ingredient="$emit('addIngredient', $event)"
          @remove-ingredient="$emit('removeIngredient', $event)"
        />
      </li>
    </ul>
    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa, sal, pimenta e água.
    </p>
    <MainButton :text="'Buscar Receitas'" @click="$emit('showRecipes')"/>
  </section>
</template>

<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue';
import MainButton from '@/components/MainButton.vue';
import type { ICategory } from '@/interfaces/ICategory';
import { getCategories } from '@/services/http';
import { onMounted, ref } from 'vue';

defineEmits(['addIngredient', 'removeIngredient', 'showRecipes']);

const categories = ref<ICategory[]>([]);

onMounted(async () => {
  categories.value = await getCategories();
});
</script>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
