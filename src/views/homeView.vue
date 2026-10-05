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
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque, maxime ex
      voluptas iure fuga repellat soluta enim consequatur minima dicta odit unde sint sed illum
      labore, omnis molestiae. Omnis.
    </span>
    <section class="items-container">
      <h3>Populares</h3>
      <div class="items-row">
        <ItemCard :item="defaultItem" v-for="i in 5" />
      </div>
    </section>
    <section class="items-container">
      <h3>Novos</h3>
      <div class="items-row">
        <ItemCard :item="defaultItem" v-for="i in 5" />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  display: grid;
  gap: 4rem;
  padding: 2rem 3rem;

  span {
    max-width: 25%;
    font-size: larger;
  }

  section.items-container {
    background-color: var(--fern);
    padding: 1rem;
    border-radius: 1rem;

    h3 {
      font-size: larger;
      color: var(--dust-gray);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    div.items-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
      gap: 0.25rem;
    }
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  main {
    padding: 1rem 2rem;

    span {
      max-width: 50%;
    }
  }
}
</style>
