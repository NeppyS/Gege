<template>
  <div class="app-container">
    <!-- Background Glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="bg-glow" />
    </div>

    <!-- Navbar -->
    <Navbar class="fixed top-0 left-0 w-full z-50 navbar-blur" />

    <!-- Main Content -->
    <main id="main-scroll" class="main-content">
      <Transition name="fade-slide" mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </main>

<footer class="relative z-10 bg-black/40 border-t border-white/10 text-sm text-center py-6 px-4 backdrop-blur-md">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
    <div>&copy; 2025 Nephten. All rights reserved.</div>
    <div class="flex gap-4">
      <a href="#" class="hover:text-white transition">GitHub</a>
      <a href="#" class="hover:text-white transition">LinkedIn</a>
    </div>
  </div>
</footer>


    <!-- Scroll to Top -->
    <transition name="fade">
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="scroll-top-btn"
        aria-label="Scroll to top"
      >
        ⬆
      </button>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Layout Utilities */
.app-container {
  @apply relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 overflow-x-hidden flex flex-col;
}
.navbar-blur {
  @apply backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg;
}
.main-content {
  @apply relative z-10 flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-8;
}
.footer {
  @apply relative z-10 bg-black/40 border-t border-white/10 text-sm text-center py-6 px-4 backdrop-blur-md;
}
.footer-container {
  @apply max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-white;
}
.footer-links {
  @apply flex gap-4 text-white/80 text-xs uppercase tracking-wide font-semibold;
}
.footer-link {
  @apply hover:text-indigo-400 transition no-underline;
}

/* Scroll Top Button */
.scroll-top-btn {
  @apply fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full 
         bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg 
         hover:shadow-indigo-500/50 transition duration-300 z-50 focus:outline-none;
}

/* Transitions */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Background Glow */
.bg-glow {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(99,102,241,0.08), transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(236,72,153,0.08), transparent 60%);
  animation: bgMove 20s linear infinite;
}
@keyframes bgMove {
  0% { transform: translate(0,0) rotate(0deg); }
  50% { transform: translate(-5%, 5%) rotate(180deg); }
  100% { transform: translate(0,0) rotate(360deg); }
}

/* Global Reset for App */
html, body, #app {
  margin: 0;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
           env(safe-area-inset-bottom) env(safe-area-inset-left);
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
  background-color: #000; /* fallback */
}
</style>
