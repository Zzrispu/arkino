<script setup lang="ts">
import DropSelect from '@/components/DropSelect.vue'
import ItemCard from '@/components/ItemCard.vue'
import { reactive } from 'vue'

const defaultItem = {
  name: 'nome do item',
  author_name: 'autor do item',
  thumbnail_url: '/src/assets/imgs/place-holder.jpg',
  author_profile_url: '/src/assets/imgs/place-holder.jpg',
}

const activeTags = reactive(new Set())

const toggleTagActive = (value: string) => {
  if (activeTags.has(value)) activeTags.delete(value)
  else activeTags.add(value)
}
</script>

<template>
  <main>
    <h1>Catálogo</h1>
    <div id="container">
      <section id="filter-section">
        <div id="orderby-container">
          <h2>Ordernar por</h2>
          <DropSelect :list="['teste 1', 'teste 2', 'Um teste maior']" label="Mais recente" />
        </div>
        <div id="tags-container">
          <h2>Tags</h2>
          <div id="tags-grid">
            <div
              v-for="i in 10"
              :key="`tag-${i}`"
              class="tag"
              :class="{ active: activeTags.has(`tag-${i}`) }"
              @click="toggleTagActive(`tag-${i}`)"
            >
              {{ 'tag ' + i }}
            </div>
          </div>
        </div>
      </section>
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
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    flex: 1;

    section#filter-section {
      height: fit-content;
      background-color: var(--dry-sage);
      border-radius: 1rem;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        color: var(--pine-teal);
        font-size: large;
        font-weight: bold;
      }

      div#orderby-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      div#tags-container {
        display: grid;
        gap: 1rem;

        div#tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          div.tag {
            background-color: var(--dust-gray);
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            color: var(--hunter-green);

            &:hover {
              background-color: var(--fern);
              cursor: pointer;
            }
          }

          div.active {
            background-color: var(--fern);
            color: var(--dust-gray);
          }
        }
      }
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

      section#filter-section {
        padding: 1rem;
      }
    }
  }
}
</style>
