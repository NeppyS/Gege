<template>
  <button @click="toggleTheme" class="fixed top-4 right-4 text-xl p-2 rounded bg-white/10 hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50 transition">
    <span v-if="isDark">🌞</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
