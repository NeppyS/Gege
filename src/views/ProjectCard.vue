<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="block p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl border border-gray-700"
  >
    <h3 class="text-3xl font-extrabold mb-3 text-indigo-400">{{ title }}</h3>
    <p class="text-gray-300 leading-relaxed text-lg">{{ description }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  url: String
})
</script>
