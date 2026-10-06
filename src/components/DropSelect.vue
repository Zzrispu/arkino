<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, Transition, useTemplateRef } from 'vue'

interface Props {
  list: string[]
}

const props = defineProps<Props>()

const activeValue = ref<string>(props.list[0] ?? 'Sem lista')
const dropselectElement = useTemplateRef<HTMLDivElement>('dropselectElement')
const isOpen = ref<boolean>(false)

const handleClickOutside = (e: MouseEvent) => {
  if (!isOpen.value || !dropselectElement.value) return

  const target = e.target as Node
  if (!dropselectElement.value.contains(target)) isOpen.value = false
}

const handleClickSelect = (value: string) => {
  activeValue.value = value
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div id="dropselect-container" ref="dropselectElement">
    <button @click="isOpen = !isOpen">{{ activeValue }}</button>
    <Transition name="slide">
      <ul v-if="isOpen">
        <li v-for="(item, i) in list" :key="i" @click="handleClickSelect(item)">{{ item }}</li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
div#dropselect-container {
  position: relative;

  button {
    border: none;
    border-radius: 0.5rem;
    background-color: var(--fern);
    padding: 0.5rem 1rem;
    color: var(--dust-gray);
  }

  ul {
    position: absolute;
    background-color: var(--fern);
    top: calc(100% + 0.5rem);
    min-width: 100%;
    border-radius: 0.5rem;
    padding: 0.25rem;
    gap: 0.1rem;
    right: 0;
    interpolate-size: allow-keywords;
    overflow: hidden;

    li {
      color: var(--dust-gray);
      padding: 0.25rem 0.5rem;
      white-space: nowrap;
      border-radius: 0.3rem;

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
