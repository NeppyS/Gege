<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 overflow-hidden"
    :class="{ 'backdrop-blur-xl bg-black/30 shadow-lg shadow-indigo-500/20': scrolled }"
  >
    <!-- Scroll Progress Bar -->
    <div
      class="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-200"
      :style="{ width: scrollProgress + '%' }"
    ></div>

    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-3 select-none group"
        aria-label="Homepage"
      >
        <!-- Pulsing Gradient Logo -->
        <div
          class="relative w-10 h-10 flex items-center justify-center"
        >
          <div
            class="absolute w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   animate-spin-slow shadow-lg shadow-indigo-500/50"
          ></div>
          <div
            class="absolute w-14 h-14 rounded-full bg-indigo-500/10 blur-xl animate-pulse"
          ></div>
        </div>
        <span
          class="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                 bg-clip-text text-transparent tracking-wide group-hover:opacity-80 transition"
        >
          Nephten
        </span>
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest">
        <li
          v-for="(link, idx) in links"
          :key="link.path"
          class="relative group opacity-0 animate-stagger"
          :style="{ animationDelay: (idx * 0.15) + 's' }"
        >
          <router-link
            :to="link.path"
            class="px-2 py-1 text-white no-underline transition duration-300
                   hover:text-indigo-400"
            active-class="text-indigo-400"
          >
            {{ link.name }}
            <span
              class="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500
                     transition-all duration-300 group-hover:w-full"
            ></span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isOpen.toString()"
        class="md:hidden text-white hover:text-indigo-400 transition duration-300"
      >
        <svg
          v-if="!isOpen"
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden px-6 pb-6 pt-2 bg-black/80 backdrop-blur-xl rounded-b-xl shadow-lg border-t border-white/10"
      >
        <ul class="space-y-4 text-base text-white font-semibold uppercase tracking-widest">
          <li v-for="link in links" :key="link.path">
            <router-link
              :to="link.path"
              @click="toggleMenu"
              class="block px-4 py-2 rounded-lg no-underline
                     hover:bg-indigo-600/30 transition duration-300 hover:shadow-[0_0_15px_#6366f1]"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)
const scrollProgress = ref(0)

const links = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => (isOpen.value = !isOpen.value)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = Math.min((scrollTop / docHeight) * 100, 100)
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

@keyframes stagger {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-stagger {
  animation: stagger 0.6s ease forwards;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
