<script setup lang="ts">
import DropSelect from '@/components/DropSelect.vue'
import { onBeforeMount, onMounted, useTemplateRef } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const topbar = useTemplateRef('topbar')
let observer: ResizeObserver

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    if (entry === undefined) return
    const h = entry.borderBoxSize?.[0]?.blockSize
    document.documentElement.style.setProperty('--topbar-h', `${h}px`)
  })

  observer.observe(topbar.value as HTMLElement)
})

onBeforeMount(() => observer?.disconnect())
</script>

<template>
  <section id="topbar" ref="topbar">
    <RouterLink to="/">
      <span id="logo">Arkino</span>
    </RouterLink>
    <nav>
      <RouterLink to="/catalogo">Modelos</RouterLink>
      <DropSelect
        label="Materiais"
        :list="['Material 1', 'Material 2', 'Material 3', 'Material 4']"
      />
      <DropSelect
        label="Processos"
        :list="['Processo 1', 'Processo 2', 'Processo 3', 'Processo 4']"
      />
    </nav>
    <div id="searchbar">
      <span class="material-symbols-outlined">search</span>
      <input id="sb-input" type="text" placeholder="Pesquise..." />
    </div>
  </section>
  <RouterView></RouterView>
  <footer>Rodapé</footer>
</template>

<style scoped>
#topbar {
  background-color: var(--hunter-green);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0.5rem 4rem;
  align-items: center;
  gap: 1rem;
  color: var(--dust-gray);
  position: sticky;
  top: 0;

  span#logo {
    color: var(--dust-gray);
    font-size: 1.75rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      color: var(--dust-gray);
    }
  }

  div#searchbar {
    border: 1px solid var(--dust-gray);
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    background-color: var(--fern);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    input {
      background-color: transparent;
      outline: none;
      border: none;
      color: var(--dust-gray);

      &::placeholder {
        color: var(--dust-gray);
        opacity: 0.5;
        padding-left: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
}

footer {
  background-color: var(--pine-teal);
  min-height: 10rem;
  padding: 2rem 4rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  #topbar {
    padding: 0.25rem 1rem;
    grid-template-columns: auto auto;
    gap: 0.5rem;

    div#searchbar {
      grid-column: 1/3;
    }
  }
}
</style>
