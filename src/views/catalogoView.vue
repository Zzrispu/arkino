<template>
  <main>
    <section id="filter-section"></section>
    <section id="itens-grid"></section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - var(--topbar-h));
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem 3rem;

  section#filter-section {
    min-width: 300px;
    min-height: 100px;
    background-color: gray;
  }

  section#itens-grid {
    display: grid;
    background-color: lightgray;
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  main {
    padding: 0 2rem;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
}
</style>
