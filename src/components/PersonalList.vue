<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">Sua Lista</span>
    <ul v-if="props.ingredients.length" class="ingredientes-sua-lista">
      <li v-for="(item, index) in props.ingredients" :key="index">
        <Tag :text="item" active/>
      </li>
    </ul>
    <p v-else class="paragrafo lista-vazia">
      <img src="../assets/images/icones/lista-vazia.svg" alt="Icone de pesquisa">
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<script setup lang="ts">
import Tag from '@/components/Tag.vue';

const props = defineProps<{
  ingredients: string[];
}>();
</script>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>
