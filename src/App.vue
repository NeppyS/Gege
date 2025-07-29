<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-gray-100"
  >
    <!-- Fixed Navbar -->
    <Navbar class="fixed top-0 left-0 w-full z-50" />

    <!-- Main Content -->
    <main class="pt-20 px-4 sm:px-6 md:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease forwards;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}
.animate-fade-in.delay-600 {
  animation-delay: 0.6s;
}

/* Focus style */
section:focus-visible {
  outline: 3px solid #6366F1;
  outline-offset: 6px;
}

/* ✅ Enable full scroll & mobile support */
html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
}
</style>
