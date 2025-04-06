<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img :src="imageSrc" alt="" class="receita__imagem">
    </header>
    <section class="receita__corpo">
      <h2 class="paragrafo-lg receita__nome">{{ props.recipe.name }}</h2>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { IRecipe } from '@/interfaces/IRecipe.ts';
import { computed } from 'vue';

const props = defineProps<{
  recipe: IRecipe
}>();

const imageSrc = computed(() => `/imagens/receitas/${props.recipe.image}`);
</script>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
