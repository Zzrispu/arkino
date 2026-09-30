<script setup lang="ts">
import DropSelect from './components/DropSelect.vue'
</script>

<template>
  <section id="topbar">
    <span id="logo">Arkino</span>
    <nav>
      <a href="">Modelos 3D</a>
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
      <input type="text" placeholder="Pesquise..." />
    </div>
  </section>
  <main>
    <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque, maxime ex
      voluptas iure fuga repellat soluta enim consequatur minima dicta odit unde sint sed illum
      labore, omnis molestiae. Omnis.
    </span>
    <section class="items-container">
      <h3>Populares</h3>
      <div class="items-row">
        <div v-for="value in 5" :key="'item-' + value" class="item">
          <div class="item-thumbnail">
            <img src="@/assets/imgs/place-holder.jpg" alt="place-holder-img" />
          </div>
          <h4>Nome do item</h4>
          <div class="item-details">
            <div class="author">
              <div><img src="@/assets/imgs/place-holder.jpg" alt="author-place-holder" /></div>
              {{ 'Autor-' + value }}
            </div>
            <span class="material-symbols-outlined">download</span>
          </div>
        </div>
      </div>
    </section>
    <section class="items-container">
      <h3>Novos</h3>
      <div class="items-row">
        <div v-for="value in 5" :key="'item-' + value" class="item">
          <div class="item-thumbnail">
            <img src="@/assets/imgs/place-holder.jpg" alt="place-holder-img" />
          </div>
          <h4>Nome do item</h4>
          <div class="item-details">
            <div class="author">
              <div><img src="@/assets/imgs/place-holder.jpg" alt="author-place-holder" /></div>
              {{ 'Autor-' + value }}
            </div>
            <span class="material-symbols-outlined">download</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>Rodapé</footer>
</template>

<style scoped>
#topbar {
  background-color: var(--hunter-green);
  width: 100%;
  height: 4rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto 1fr;
  padding: 0 4rem;
  align-items: center;
  gap: 1rem;
  color: var(--dust-gray);

  span#logo {
    color: var(--dust-gray);
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  div#searchbar {
    border: 1px solid var(--dust-gray);
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    background-color: var(--fern);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 25%;
    width: 100%;
    justify-self: end;

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

main {
  height: 100%;
  display: grid;
  gap: 4rem;
  padding: 4rem 6rem;

  span {
    max-width: 25%;
    font-size: larger;
  }

  section.items-container {
    background-color: var(--fern);
    padding: 1.5rem;
    border-radius: 1rem;

    h3 {
      font-size: larger;
      color: var(--dust-gray);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    div.items-row {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      gap: 0.25rem;

      .item {
        padding: 0.75rem;
        border-radius: 16px;
        transition: all 0.1s ease-in;

        .item-thumbnail {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        h4 {
          color: var(--dust-gray);
          margin: 0.5rem 0;
          font-size: large;
          font-weight: 600;
        }

        div.item-details {
          display: flex;
          justify-content: space-between;
          height: 1.5rem;
          color: var(--dust-gray);

          div.author {
            height: 100%;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: small;

            & > div {
              height: 100%;
              aspect-ratio: 1/1;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }

        &:hover {
          background-color: var(--hunter-green);
          cursor: pointer;
        }
      }
    }
  }
}

footer {
  background-color: var(--pine-teal);
  min-height: 10rem;
  padding: 2rem 4rem;
}
</style>
