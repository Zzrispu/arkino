<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'

const defaultItem = {
  name: 'nome do item',
  author_name: 'autor do item',
  thumbnail_url: '/src/assets/imgs/place-holder.jpg',
  author_profile_url: '/src/assets/imgs/place-holder.jpg',
}
</script>

<template>
  <main>
    <h1>Catálogo</h1>
    <div id="container">
      <section id="filter-section"></section>
      <section id="itens-grid">
        <ItemCard :item="defaultItem" v-for="i in 15" />
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--topbar-h));
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    color: var(--pine-teal);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  div#container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    flex: 1;

    section#filter-section {
      min-width: 300px;
      min-height: 100px;
      background-color: var(--dry-sage);
      border-radius: 1rem;
    }

    section#itens-grid {
      display: grid;
      border: var(--dry-sage) 1px solid;
      border-radius: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

      &:deep(div.item:not(:hover) > *) {
        color: var(--pine-teal);
      }
    }
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  main {
    padding: 1rem 2rem;

    div#container {
      grid-template-columns: auto;
      grid-template-rows: auto 1fr;
    }
  }
}
</style>
