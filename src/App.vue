<template>
  <div
    class="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 overflow-x-hidden"
  >
    <!-- Animated Background Glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="bg-glow"></div>
    </div>

    <!-- Fixed Glassy Navbar -->
    <Navbar
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg"
    />

    <!-- Main Content with Smooth Transitions -->
    <main class="relative pt-24 pb-16 px-4 sm:px-6 md:px-8 z-10">
      <Transition name="fade-slide" mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </main>

    <!-- Floating Scroll-to-Top Button -->
    <transition name="fade">
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full 
               bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg 
               hover:shadow-indigo-500/50 transition duration-300 z-50 focus:outline-none"
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
/* Smooth page transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
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

/* Fade for scroll-to-top */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Background Glow using transform instead of background-position */
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

/* Mobile Safe Area */
html,
body,
#app {
  margin: 0;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0) 
           env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
</style>
