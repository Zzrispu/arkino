<script setup lang="ts"></script>

<template>
  <section id="topbar">
    <span>Arkino</span>
    <nav>
      <a href="">Modelos 3D</a>
      <dropdow>Materiais</dropdow>
      <dropdow>Processos</dropdow>
    </nav>
    <div id="searchbar">
      <label for="searchbar-input">Icone</label>
      <input type="text" placeholder="Pesquise..." />
    </div>
  </section>
  <main>
    <section>Populares</section>
    <section>Novos</section>
  </main>
  <footer>Rodapé</footer>
</template>

<style scoped>
#topbar {
  background-color: gray;
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 0 4rem;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;
  }
}

main {
  height: 100%;
}
</style>
