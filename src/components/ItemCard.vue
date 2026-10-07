<script setup lang="ts">
type field = {
  name: string
  author_name: string
  thumbnail_url: string
  author_profile_url: string
}

interface Props {
  item: field
}

defineProps<Props>()
</script>

<template>
  <div class="item">
    <div class="item-thumbnail">
      <img :src="item.thumbnail_url" alt="item-thumbnail-img" />
    </div>
    <h4>{{ item.name }}</h4>
    <div class="item-details">
      <div class="author">
        <div><img :src="item.author_profile_url" alt="author-profile-img" /></div>
        {{ item.author_name }}
      </div>
      <span class="material-symbols-outlined">download</span>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 0.75rem;
  border-radius: 16px;
  transition: all 0.1s ease-in;

  .item-thumbnail {
    width: 100%;
    aspect-ratio: 5/3;
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

    * {
      color: var(--dust-gray);
    }
  }
}
</style>
