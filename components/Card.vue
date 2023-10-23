
<template>
  <div class="card-container">
    <div class="card" v-for="src in cards">
      <img :src="src">
    </div>
  </div>
</template>

<style scoped>
.card-container {
  @apply max-w-5xl mx-auto my-4 px-3 grid gap-1.5 grid-cols-1 ss:grid-cols-2 md:grid-cols-3
}

.card {
  @apply aspect-square shadow-sm rounded-lg cursor-pointer
}

.card img {
  @apply w-full h-full object-cover rounded-lg
}

.card img:hover {
  filter: brightness(70%)
}
</style>

<script setup>
import { ref } from 'vue';

const link = 'https://api.unsplash.com';
const key = 'u9fK2wHosa-xHNkpqldYTnYZrDBiLObD3kCln1Vq7h8';
const cards = ref([])

async function unsplash() {
  const response = await fetch(`${link}/photos?per_page=3&client_id=${key}&order_by=popular`);
  const imgs = await response.json();
  for (let img of imgs) {
    cards.value.push(img.links.download)
  }
}
unsplash()

</script>