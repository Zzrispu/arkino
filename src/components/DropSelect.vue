<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

interface Props {
  label: string
  list: string[]
}

const { list = [] } = defineProps<Props>()

const isOpen = ref<boolean>(false)
const dropdownElement = useTemplateRef<HTMLDivElement>('dropdownElement')

const handleClickOutside = (e: MouseEvent) => {
  if (!isOpen.value) return // se estriver fechado ele não faz nada
  if (!dropdownElement.value) return // se o dropdownElement não estiver atribuido, também não faz nada

  const target = e.target as Node
  if (!dropdownElement.value.contains(target)) isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="dropselect-container" ref="dropdownElement">
    <button @click="isOpen = !isOpen" :class="isOpen ? 'open' : ''">
      <span>{{ label }}</span>
      <i class="material-symbols-outlined" :class="isOpen ? 'open' : ''">arrow_drop_down</i>
    </button>

    <Transition name="slide">
      <ul v-if="isOpen">
        <span v-if="list.length < 1">Não há itens na lista</span>
        <li v-else v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
div.dropselect-container {
  position: relative;

  button {
    color: var(--dust-gray);
    background-color: transparent;
    display: flex;
    align-items: center;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: var(--fern);
      cursor: pointer;
    }

    &.open {
      background-color: var(--fern);

      i {
        transform: rotate(180deg);
      }
    }

    i {
      transform: rotate(0);
      transition: transform 0.1s ease-in-out;
    }
  }

  ul {
    position: absolute;
    background-color: var(--fern);
    padding: 0.5rem;
    border-radius: 0.5rem;
    top: calc(100% + 1rem);
    width: 100%;
    display: grid;
    gap: 0.1rem;
    interpolate-size: allow-keywords;
    overflow: hidden;

    li {
      padding: 0.5rem;
      border-radius: 0.4rem;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: var(--hunter-green);
        cursor: pointer;
      }
    }
  }
}

.slide-enter-active {
  animation: slide 0.25s;
}
.slide-leave-active {
  animation: slide 0.25s reverse;
}
@keyframes slide {
  0% {
    height: 0;
  }
  100% {
    height: auto;
  }
}
</style>
