<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="imageSrc" alt="" class="categoria__imagem">
      <h2 class="paragrafo-lg categoria__nome">{{ category.name }}</h2>
      <ul class="categoria__ingredientes">
        <li v-for="(ingredient, index) in props.category.ingredients" :key="index">
          <SelectableIngrendient
            :ingredient="ingredient"
            @add-ingredient="$emit('addIngredient', $event)"
            @remove-ingredient="$emit('removeIngredient', $event)"
          />
        </li>
      </ul>
    </header>
  </article>
</template>

<script setup lang="ts">
import SelectableIngrendient from '@/components/SelectableIngrendient.vue';
import { type ICategory } from '@/interfaces/ICategory.ts';
import { computed } from 'vue';

const props = defineProps<{
  category: ICategory
}>();

defineEmits(['addIngredient', 'removeIngredient']);

const imageSrc = computed(() => `/imagens/icones/categorias_ingredientes/${props.category.image}`);
</script>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
